from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
from flask_app.models import users_model

class Sighting: 
    def __init__(self,data):
        self.id = data['id']
        self.user_id = data['user_id']
        self.location = data['location']
        self.description= data['description']
        self.seen_date = data['seen_date']
        self.sasquatch_number = data['sasquatch_number']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create(cls, data):
        query = "INSERT INTO sightings (user_id, location, description, seen_date, sasquatch_number) VALUES "\
            "(%(user_id)s, %(location)s, %(description)s, %(seen_date)s, %(sasquatch_number)s )"
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod 
    def update(cls,data): 
        query = "UPDATE sightings SET location = %(location)s, description = %(description)s, seen_date = %(seen_date)s, "\
            "sasquatch_number = %(sasquatch_number)s WHERE id = %(id)s"
        return connectToMySQL(DATABASE).query_db(query,data)

    @classmethod 
    def delete(cls,data):
        query = "DELETE FROM sightings WHERE id = %(id)s"
        return connectToMySQL(DATABASE).query_db(query,data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM sightings JOIN users ON sightings.user_id = users.id"
        results = connectToMySQL(DATABASE).query_db(query)
        if len(results) > 0:
            all_sightings = []
            for row in results:
                this_sighting = cls(row)
                user_data = {
                    **row,
                    'id': row['users.id'],
                    'created_at': row['users.created_at'],
                    'updated_at': row['users.updated_at']
                }
                this_user = users_model.User(user_data)
                this_sighting.planner = this_user
                all_sightings.append(this_sighting)
            return all_sightings
        return []

    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM sightings JOIN users ON sightings.user_id = users.id WHERE sightings.id = %(id)s"
        results = connectToMySQL(DATABASE).query_db(query, data)
        if len(results) < 1:
            return False
        row = results[0]
        this_sighting = cls(row)
        user_data = {
            **row,
            'id': row['users.id'],
            'created_at': row['users.created_at'],
            'updated_at': row['users.updated_at']
        }
        this_user = users_model.User(user_data)
        this_sighting.planner = this_user
        return this_sighting

    @staticmethod
    def validator(form_data):
        is_valid = True

        if len(form_data['location']) < 1:
            flash("location required")
            is_valid = False

        if len(form_data['description']) < 1:
            flash("what happened required")
            is_valid = False

        if len(form_data['seen_date']) < 1:
            flash("date of sighting required")
            is_valid = False

        if len(form_data['sasquatch_number']) < 1:
            flash("# of sasquatches required")
            is_valid = False

        return is_valid
        