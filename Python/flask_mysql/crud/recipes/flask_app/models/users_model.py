from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE 
from flask import flash 
import re	
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
# one for pw validation making sure has upper and number: (?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)

# Make a regular expression for validating an Email
regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'




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

    # GET THIS EMAIL VALIDATION WORKING 
    # FIX REPEAT VALUES IN VIEW_RECIPE HTML JINJA
    # FIX LAYOUT OF NEW_RECIPE AND EDIT_RECIPE (LOWPRIO)
    @staticmethod 
    def isValid(email):
        is_valid = True
        if re.fullmatch(regex, email):
            print("Valid email")
        else:
            flash("Invalid email")
            is_valid = False

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
        if len(potential_user['email']) < 1: 
            flash("Email is required","reg")
            is_valid = False

        # logic to check if only using letters and at least 1 character
        # docs.python.org/3.6/library/stdtypes.html#str.isalpha 
        if potential_user['first_name'].isalpha() == False:
            flash("First name must contain letters only", "reg")
        if potential_user['last_name'].isalpha() == False:
            flash("Last name must contain letters only", "reg")

        # checking to see if email is already in database 
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
