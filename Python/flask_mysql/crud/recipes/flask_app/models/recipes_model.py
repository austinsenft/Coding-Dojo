from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
from flask_app.models import users_model


class Recipe:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.date_cooked = data['date_cooked']
        self.under_30 = data['under_30']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']

    @classmethod
    def create(cls, data):
        query = "INSERT INTO recipes (name, description, instructions, date_cooked, under_30, user_id) VALUES "\
            "(%(name)s, %(description)s, %(instructions)s, %(date_cooked)s, %(under_30)s, %(user_id)s)"
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod 
    def update(cls,data): 
        query = "UPDATE recipes SET name = %(name)s, description = %(description)s, instructions = %(instructions)s, "\
            "date_cooked = %(date_cooked)s, under_30 = %(under_30)s WHERE id = %(id)s"
        return connectToMySQL(DATABASE).query_db(query,data)

    @classmethod 
    def delete(cls,data):
        query = "DELETE FROM recipes WHERE id = %(id)s"
        return connectToMySQL(DATABASE).query_db(query,data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM recipes JOIN users ON recipes.user_id = users.id"
        results = connectToMySQL(DATABASE).query_db(query)
        if len(results) > 0:
            all_recipes = []
            for row in results:
                this_recipe = cls(row)
                user_data = {
                    **row,
                    'id': row['users.id'],
                    'created_at': row['users.created_at'],
                    'updated_at': row['users.updated_at']
                }
                this_user = users_model.User(user_data)
                this_recipe.planner = this_user
                all_recipes.append(this_recipe)
            return all_recipes
        return []

    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM recipes JOIN users ON recipes.user_id = users.id WHERE recipes.id = %(id)s"
        results = connectToMySQL(DATABASE).query_db(query, data)
        if len(results) < 1:
            return False
        row = results[0]
        this_recipe = cls(row)
        user_data = {
            **row,
            'id': row['users.id'],
            'created_at': row['users.created_at'],
            'updated_at': row['users.updated_at']
        }
        this_user = users_model.User(user_data)
        this_recipe.planner = this_user
        return this_recipe

    @staticmethod
    def validator(form_data):
        is_valid = True
        # grouping requirements, must put something and it must be
        # 3 characters or longer for name, description, and instructions

        if len(form_data['name']) < 3:
            flash("name required and must be at least 3 characters")
            is_valid = False

        if len(form_data['description']) < 3:
            flash("description required and must be at least 3 characters")
            is_valid = False

        if len(form_data['instructions']) < 3:
            flash("instructions required and must be at least 3 characters")
            is_valid = False

        if len(form_data['date_cooked']) < 1:
            flash("date cooked/made required")
            is_valid = False

        if "under_30" not in form_data:
            flash("please specify if this recipe is done in under 30 minutes")
            is_valid = False

        return is_valid
