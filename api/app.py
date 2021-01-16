from db import db, Business, TransactionEntry, User
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)
with app.app_context():
    db.create_all()

# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.String, nullable=True, unique=False)
#     email = db.Column(db.String, nullable=False, unique=True)
#     password_digest = db.Column(db.String, nullable=False)
#     session_token = db.Column(db.String, nullable=False, unique=True)
#     session_expiration = db.Column(db.DateTime, nullable=False)
#     update_token = db.Column(db.String, nullable=False, unique=True)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)