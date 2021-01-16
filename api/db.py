import datetime
import hashlib
import os

import bcrypt
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Integer, ForeignKey, String, Column, Table, UniqueConstraint
from sqlalchemy.orm import relationship

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.String, nullable=True, unique=False)
    email = db.Column(db.String, nullable=False, unique=True)
    password_digest = db.Column(db.String, nullable=False)
    name = db.Column(db.String, nullable=False)
    rewards = db.Column(db.Integer)
    session_token = db.Column(db.String, nullable=False, unique=True)
    session_expiration = db.Column(db.DateTime, nullable=False)
    update_token = db.Column(db.String, nullable=False, unique=True)

    def __init__(self, **kwargs):
        self.user_id = kwargs.get("user_id")
        self.email = kwargs.get("email")
        self.password_digest = bcrypt.hashpw(kwargs.get("password").encode("utf8"), bcrypt.gensalt(rounds=13))
        self.name = kwargs.get("name")
        self.rewards = kwargs.get("rewards")
        self.renew_session()
   
    # Used to randomly generate session/update tokens
    def _urlsafe_base_64(self):
        return hashlib.sha1(os.urandom(64)).hexdigest()

    # Generates new tokens, and resets expiration time
    def renew_session(self):
        self.session_token = self._urlsafe_base_64()
        self.session_expiration = datetime.datetime.now() + datetime.timedelta(days=1)
        self.session_expiration = self.session_expiration.replace(microsecond=0)
        self.update_token = self._urlsafe_base_64()
    
    # Updates rewards for user
    def update_rewards(self, rewards):
        self.rewards += rewards

    def verify_password(self, password):
        return bcrypt.checkpw(password.encode("utf8"), self.password_digest)

    # Checks if session token is valid and hasn't expired
    def verify_session_token(self, session_token):
        return session_token == self.session_token

    def verify_update_token(self, update_token):
        return update_token == self.update_token

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "name": self.name,
            "email": self.email,
            "rewards": self.rewards,
        }

class TransactionEntry(db.Model):
    __tablename__ = "transaction_entry"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    author = relationship("User", backref="transaction_entries")
    item_type = db.Column(db.String, nullable=False)
    amount = db.Column(db.Float, nullable=False)
    business_name = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    latitude = db.Column(db.Integer, nullable=False)
    longitude = db.Column(db.Integer, nullable=False)
    address = db.Column(db.String, nullable=True)
    rating = db.Column(db.Integer, nullable=False)

    def __init__(self, **kwargs):
        self.user_id = kwargs.get("user_id")
        self.item_type = kwargs.get("item_type")
        self.amount = kwargs.get("amount")
        self.business_name = kwargs.get("business_name")
        self.created_at = kwargs.get("created_at")
        self.latitude = kwargs.get("latitude")
        self.longitude = kwargs.get("longitude")
        self.address = kwargs.get("address")
        self.rating = kwargs.get("rating")
    
    def serialize(self):
        return {
            "id": self.id,
            "author": self.author.email,
            "item_type": self.item_type,
            "amount": self.amount,
            "business_name": self.business_name,
            "created_at": str(self.created_at),
            "latitude": self.latitude,
            "longitude": self.longitude,
            "address": self.address,
            "rating": self.rating,
        }

class Business(db.Model):
    __tablename__ = "business"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    owner = relationship("User", backref="businesses")
    business_type = db.Column(db.String, nullable=False)
    business_name = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    latitude = db.Column(db.Integer, nullable=False)
    longitude = db.Column(db.Integer, nullable=False)
    address = db.Column(db.String, nullable=True)
    rating = db.Column(db.Float, nullable=False)

    def __init__(self, **kwargs):
        self.user_id = kwargs.get("user_id")
        self.business_type = kwargs.get("business_type")
        self.business_name = kwargs.get("business_name")
        self.description = kwargs.get("description", "")
        self.created_at = kwargs.get("created_at")
        self.latitude = kwargs.get("latitude")
        self.longitude = kwargs.get("longitude")
        self.address = kwargs.get("address")
        self.rating = kwargs.get("rating")
    
     # Updates rewards for user
    def update_rating(self, rating):
        self.rating = (self.rating + rating) / 2

    def serialize(self):
        return {
            "id": self.id,
            "owner": self.owner.email,
            "business_type": self.business_type,
            "business_name": self.business_name,
            "description": self.description,
            "created_at": str(self.created_at),
            "latitude": self.latitude,
            "longitude": self.longitude,
            "address": self.address,
            "rating": self.rating,
        }