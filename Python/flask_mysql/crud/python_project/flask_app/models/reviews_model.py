from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE 
from flask import flash 
from flask_app.models import users_model


class Review: 
    def __init__(self,data):
        self.id = data['id']
        self.description = data['description']
        self.rating = data['rating']
        self.user_id = data['user_id']
        self.park_id = data['park_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create(cls, data): 
        query = "INSERT INTO reviews (description, rating, user_id, park_id) "\
            " VALUES (%(description)s, %(rating)s, %(user_id)s, %(park_id)s)"
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod 
    def update(cls,data): 
        query = "UPDATE reviews SET description = %(description)s, user_id = %(user_id)s, park_id = %(park_id)s "\
            "WHERE id = %(id)s"
        return connectToMySQL(DATABASE).query_db(query,data)


    @classmethod 
    def delete(cls,data):
        query = "DELETE FROM reviews WHERE id = %(id)s"
        return connectToMySQL(DATABASE).query_db(query,data)


    @classmethod
    def get_all(cls,data):
        query = "SELECT * FROM reviews JOIN users ON reviews.user_id = users.id WHERE reviews.park_id = %(park_id)s;"
        results = connectToMySQL(DATABASE).query_db(query,data)
        if len(results) > 0:
            all_reviews = []
            for row in results:
                this_review = cls(row)
                user_data = {
                    **row,
                    'id': row['users.id'],
                    'created_at': row['users.created_at'],
                    'updated_at': row['users.updated_at'] 
                    
                }
                this_user = users_model.User(user_data)
                this_review.planner = this_user
                all_reviews.append(this_review)
            return all_reviews
        return []

    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM reviews JOIN users ON reviews.user_id = users.id WHERE reviews.id = %(id)s AND reviews.park_id = %(park_id)s"
        results = connectToMySQL(DATABASE).query_db(query, data)
        if len(results) < 1:
            return False
        row = results[0]
        this_review = cls(row)
        user_data = {
            **row,
            'id': row['users.id'],
            'created_at': row['users.created_at'],
            'updated_at': row['users.updated_at']
        }
        this_user = users_model.User(user_data)
        this_review.planner = this_review
        return this_review


    @staticmethod
    def validator(form_data):
        is_valid = True

        if len(form_data['rating']) < 1:
            flash("rating required")
            is_valid = False

        if len(form_data['description']) < 1:
            flash("please, tell us about your visit before submitting a review")
            is_valid = False

        return is_valid