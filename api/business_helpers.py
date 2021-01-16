from db import db
from db import Business

def get_business_by_name(business_name):
    return Business.query.filter(Business.business_name == business_name).first()

def update_rating(business_name, rating):
    business = get_business_by_name(business_name)

    if business is None:
        raise Exception("Invalid business.")

    business.update_rating(rating)
    db.session.commit()
    return business