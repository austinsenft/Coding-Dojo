from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE 
from flask import flash 
from flask_app.models import users_model
from flask_app.models import reviews_model

class Park: 
    def __init__(self,data):
        self.id = data['id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
