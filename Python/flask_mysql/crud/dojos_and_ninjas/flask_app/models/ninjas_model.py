from flask_app.config.mysqlconnection import connectToMySQL 
from flask_app import DATABASE

class Ninja:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at'] 
        self.dojo_id = data['dojo_id']

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM ninjas;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL(DATABASE).query_db(query)
        # Create an empty list to append our instances of table
        ninjas = []
        # Iterate over the db results and create instances of table with cls.
        for row_from_db in results:
            ninjas_instance = cls(row_from_db)
            ninjas.append(ninjas_instance)
        return ninjas

    @classmethod
    def create(cls, data):
        query = "INSERT INTO ninjas ( first_name, last_name, age, dojo_id ) VALUES ( %(first_name)s, %(last_name)s, %(age)s, %(dojo_id)s );"
        return connectToMySQL(DATABASE).query_db( query, data ) 

