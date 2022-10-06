from flask_app.config.mysqlconnection import connectToMySQL 
from flask_app import DATABASE

class User:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        
    # Now we use class methods to query our database
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL(DATABASE).query_db(query)
        # Create an empty list to append our instances of table
        users = []
        # Iterate over the db results and create instances of table with cls.
        for row_from_db in results:
            users_instance = cls(row_from_db)
            users.append(users_instance)
        return users
    
    # class method to save our user to the database
    @classmethod
    def create(cls, data):
        query = "INSERT INTO users ( first_name , last_name , email) VALUES ( %(fname)s , %(lname)s , %(email)s );"
        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL(DATABASE).query_db( query, data )


    @classmethod 
    def get_one(cls, data): 
        query = "SELECT * FROM users WHERE id = %(id)s" 
        results =connectToMySQL(DATABASE).query_db(query,data)
        if len(results) > 0:
            return cls(results[0])
        return False

    @classmethod 
    def edit(cls,data): 
        query = "UPDATE users SET first_name = %(fname)s, last_name = %(lname)s, email = %(email)s WHERE id = %(id)s"
        return connectToMySQL(DATABASE).query_db(query,data)

    @classmethod 
    def delete(cls, data): 
        query = "DELETE FROM users WHERE id = %(id)s"
        results =connectToMySQL(DATABASE).query_db(query,data)