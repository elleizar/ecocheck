import json
import requests
from db import db, Business, TransactionEntry, User
from flask import Flask
from flask import request
import user_helpers

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)
with app.app_context():
    db.create_all()

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

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)