from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/table')
def table(): 
    users= [
    {'first_name' : 'Michael', 'last_name' : 'Choi'},
    {'first_name' : 'John', 'last_name' : 'Supsupin'},
    {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
    return render_template("index.html", list_of_users = users) #variable on LEFT goes to TEMPLATE/HTML. variable on RIGHT stores data.




if __name__=="__main__":     
    app.run(debug=True)    