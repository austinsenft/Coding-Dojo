from flask import Flask  # Import Flask to allow us to create our app

app = Flask(__name__)    # Create a new instance of the Flask class called "app"

@app.route('/')
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response 

@app.route('/dojo')
def dojo(): 
    return 'Dojo!'

@app.route('/say/<string:name>')
def say(name): 
    return f"Hi {name}!"

@app.route('/success')          # The "@" decorator associates this route with the function immediately following
def sucess():
    return 'success'

@app.route('/repeat/<int:num>/<string:name>')
def repeat(num, name):
    return f"{num * name}"
    # return f"Hello {num * name}"

@app.route('/users/<username>/<id>') # for a route '/users/____/____', two parameters in the url get passed as username and id
def show_user_profile(username, id):
    print(username)
    print(id)
    return "username: " + username + ", id: " + id



if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

