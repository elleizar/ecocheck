import datetime
import json
import os
import requests
from db import db, Business, TransactionEntry, User
from flask import Flask
from flask import request
import user_helpers
from radar import RadarClient
from dotenv import load_dotenv
from geopy import distance
load_dotenv()

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# initialize radar client with your project's secret key
SECRET_KEY = os.getenv("RADAR_SECRET_KEY")
radar = RadarClient(SECRET_KEY)

db.init_app(app)
with app.app_context():
    db.create_all()

def extract_user_session_token(request):
    auth_header = request.headers.get("Authorization")
    if auth_header is None:
        return failure_response("Missing authorization header")
    bearer_token = auth_header.replace("Bearer ", "").strip()
    if bearer_token is None or not bearer_token:
        return failure_response("Invalid authorization header")
    return True, bearer_token

def create_business_address(latitude, longitude):
    addresses = radar.geocode.reverse(coordinates=(latitude,longitude))
    if addresses is not None:
        print(addresses[0].formattedAddress)
        return addresses[0].formattedAddress
    return None

def success_response(data, code=200):
    return json.dumps({"success": True, "data": data}), code

def failure_response(message, code=404):
    return json.dumps({"success": False, "error": message}), code

@app.route("/register/", methods = ["POST"])
def register_user():
    body = json.loads(request.data)
    email = body.get("email")
    password = body.get("password")
    user_id = body.get("user_id")
    name = body.get("name")
    if email is None or password is None or name is None:
        return failure_response("Invalid email or password")
    if user_id is None:
        return json.dumps({"error": "Need to supply user_id."})
    created, user = user_helpers.create_user(email, password, user_id, name)
    if not created:
        return failure_response("User already exists.")
    return json.dumps(
        {
            "session_token": user.session_token,
            "session_expiration": str(user.session_expiration),
            "update_token": user.update_token,
        }
    )

@app.route("/login/", methods=["POST"])
def login():
    body = json.loads(request.data)
    email = body.get("email")
    password = body.get("password")
    if email is None or password is None:
        return json.dumps({"error": "Invalid email or password"})
    success, user = user_helpers.verify_credentials(email, password)
    if not success:
        return json.dumps({"error": "Incorrect email or password."})
    return json.dumps(
        {
            "session_token": user.session_token,
            "session_expiration": str(user.session_expiration),
            "update_token": user.update_token,
        }
    )

@app.route("/profile/", methods=["GET"])
def me():
    success, session_token = extract_user_session_token(request)
    if not success:
        return session_token
    user = user_helpers.get_user_by_session_token(session_token)
    if not user or not user.verify_session_token(session_token):
        return json.dumps({"error": "Invalid session token."})
    return success_response(user.serialize())

@app.route("/transaction_entry/", methods=["POST"])
def create_entry():
    success, session_token = extract_user_session_token(request)
    if not success:
        return session_token
    user = user_helpers.get_user_by_session_token(session_token)
    if not user or not user.verify_session_token(session_token):
        return json.dumps({"error": "Invalid session token."})
    body = json.loads(request.data)
    latitude = body.get("latitude")
    longitude = body.get("longitude")
    item_type = body.get("item_type")
    amount = body.get("amount")
    business_name = body.get("business_name")
    rating = body.get("rating")
    address = create_business_address(latitude, longitude)
    date = datetime.datetime.now().replace(microsecond=0)
    transaction_entry = TransactionEntry(user_id=user.id, item_type=item_type, amount=amount, business_name=business_name, rating=rating, created_at=date, latitude=latitude, longitude=longitude, address=address)
    db.session.add(transaction_entry)
    db.session.commit()
    return success_response(transaction_entry.serialize())

@app.route("/transaction_entries/", methods=["GET"])
def view_all_entries():
    success, session_token = extract_user_session_token(request)
    if not success:
        return session_token
    user = user_helpers.get_user_by_session_token(session_token)
    if not user or not user.verify_session_token(session_token):
        return json.dumps({"error": "Invalid session token."})
    transaction_entries = TransactionEntry.query.filter_by(user_id=user.id)
    return success_response([t.serialize() for t in transaction_entries])

@app.route("/transaction_entries/<int:transaction_entry_id>/", methods=["GET"])
def view_specific_entry(transaction_entry_id):
    success, session_token = extract_user_session_token(request)
    if not success:
        return session_token
    user = user_helpers.get_user_by_session_token(session_token)
    if not user or not user.verify_session_token(session_token):
        return json.dumps({"error": "Invalid session token."})
    transaction_entry = TransactionEntry.query.filter_by(user_id=user.id, id=transaction_entry_id).first()
    if transaction_entry is None:
        return failure_response('Entry does not exist.')
    return success_response(transaction_entry.serialize())

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)