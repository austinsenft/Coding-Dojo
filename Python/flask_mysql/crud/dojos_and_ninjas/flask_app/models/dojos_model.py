from flask_app.config.mysqlconnection import connectToMySQL 
from flask_app import DATABASE
from flask_app.models import ninjas_model

class Dojo:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

# Now we use class methods to query our database
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL(DATABASE).query_db(query)
        # Create an empty list to append our instances of table
        dojos = []
        # Iterate over the db results and create instances of table with cls.
        for row_from_db in results:
            dojos_instance = cls(row_from_db)
            dojos.append(dojos_instance)
        return dojos

    #show one dojo and ninjas that belong to that dojo
    #left join
    @classmethod 
    def get_one(cls, data): 
        query = "SELECT * FROM dojos LEFT JOIN ninjas ON dojos.id = ninjas.dojo_id WHERE dojos.id = %(id)s;"
        results = connectToMySQL(DATABASE).query_db(query,data)
        print(results)
        if results: 
            print('test')
            dojos_instance = cls(results[0])
            ninjas_list = []
            for row_from_db in results: 
                ninja_data = {
                    'id': row_from_db['ninjas.id'], 
                    'first_name': row_from_db['first_name'], 
                    'last_name': row_from_db['last_name'],
                    'age': row_from_db['age'],
                    'created_at': row_from_db['created_at'], 
                    'updated_at': row_from_db['updated_at'], 
                    'dojo_id': row_from_db['dojo_id']
                }
                ninjas_instance = ninjas_model.Ninja(ninja_data)
                ninjas_list.append(ninjas_instance)
            dojos_instance.ninjas = ninjas_list
            return dojos_instance 
        return results



    #create and save new dojo to the database
    @classmethod
    def create(cls, data):
        query = "INSERT INTO dojos ( name ) VALUES ( %(name)s );"
        return connectToMySQL(DATABASE).query_db( query, data ) 


