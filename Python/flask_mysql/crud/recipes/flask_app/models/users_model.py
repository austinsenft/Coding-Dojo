from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE 
from flask_app.models import recipes_model
from flask import flash 
import re	
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
# one for pw validation making sure has upper and number: (?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)


class User: 
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        

    @classmethod 
    def create(cls,data): 
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES "\
            "(%(first_name)s, %(last_name)s, %(email)s, %(password)s)"
        return connectToMySQL(DATABASE).query_db(query,data)

    @classmethod 
    def get_by_email(cls,data): 
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL(DATABASE).query_db(query,data)
        if len(results) > 0: 
            return cls(results[0])
        return False
    
    @classmethod 
    def get_by_id(cls,data): 
        query = "SELECT * FROM users WHERE id = %(id)s;"
        results = connectToMySQL(DATABASE).query_db(query,data)
        if len(results) > 0: 
            return cls(results[0])
        return False

    # MANY TO MANY 
    @classmethod 
    def get_favorites(cls,data): 
        query = "SELECT * FROM users LEFT JOIN favorites ON users.id = favorites.user_id LEFT JOIN "\
            "recipes ON recipes.id = favorites.recipe_id WHERE users.id = %(id)s"
        results = connectToMySQL(DATABASE).query_db(query,data)

        user_instance = cls(results[0])
        many_to_many_data = [] 
        for row in results:
            recipe_data = {
                **row,
                'id': row['recipes.id'],
                'created_at': row['recipes.created_at'],
                'updated_at': row['recipes.updated_at']
            }
            this_recipe = recipes_model.Recipe(recipe_data)
            many_to_many_data.append(this_recipe)
        user_instance.list_of_faves = many_to_many_data
        print(user_instance.list_of_faves)
        return user_instance

    @classmethod 
    def create_favorite(cls,data): 
        query = "INSERT INTO favorites (user_id , recipe_id) VALUES (%(user_id)s, %(recipe_id)s)"
        return connectToMySQL(DATABASE).query_db(query, data)

    @staticmethod 
    def validator(potential_user): 
        is_valid = True 
        # logic to check length and prevent empty submissions
        # first name and last name also require 2 characters
        if len(potential_user['first_name']) < 2: 
            flash("First name is required","reg")
            is_valid = False
        if len(potential_user['last_name']) < 2: 
            flash("Last name is required","reg")
            is_valid = False

        # logic to check if only using letters and at least 1 character
        # docs.python.org/3.6/library/stdtypes.html#str.isalpha 
        if potential_user['first_name'].isalpha() == False:
            flash("First name must contain letters only", "reg")
        if potential_user['last_name'].isalpha() == False:
            flash("Last name must contain letters only", "reg")

        # checking to see if email is already in database and is valid format
        if len(potential_user['email']) < 1: 
            flash("Email is required","reg")
            is_valid = False
        elif not EMAIL_REGEX.match(potential_user['email']): 
            flash("Email must be valid","reg")
            is_valid = False
        else: 
            data = {
                'email': potential_user['email']
            }
            user_in_db = User.get_by_email(data)
            if user_in_db: 
                flash("Email already registered", "reg")
                is_valid = False 

        # logic for password length 
        if len(potential_user['password']) < 8: 
            flash("Password must be at least 8 characters","reg")
            is_valid = False

        # logic to make sure pw has at least 1 uppercase letter and 1 number
        # if potential_user['password'].islower() == True:
        #     flash("Passowrd must contain at least 1 uppercase letter and 1 number", "reg")
        #     is_valid = False
        # if potential_user['password'].isdigit() == False:
        #     flash("Passowrd must contain at least 1 uppercase letter and 1 number", "reg")
        #     is_valid = False

        # logic to see if pw matches confirm pass 
        elif not potential_user['password'] == potential_user['confirm_pass']:
            flash("Double check your password confirmation", "reg")
            is_valid = False
        return is_valid