from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.users_model import User

@app.route('/')
@app.route('/users')
def table(): 
    users = User.get_all()
    print(users)
    return render_template("read_all.html", list_of_users = users)

# route to render form to add new users 
@app.route('/user_form')
def user_form():
    return render_template("create.html")

#route to create new users
@app.route('/create_user', methods=["POST"])
def create_user(): 
    id = User.create(request.form)
    return redirect(f"/users/{id}") 
# Don't forget to redirect after saving to the database.

#route to see one user
@app.route('/users/<int:id>')
def get_one(id): 
    data = {'id': id}
    user = User.get_one(data)
    return render_template("read_one.html", user=user)
#make sure 'user=user' section of return is done correctly, causes tons of issues here

#route to see edit user template
@app.route('/users/<int:id>/edit')
def edit_one(id): 
    data = {'id': id}
    user = User.get_one(data)
    return render_template("edit.html", user=user)

#route to actually update/edit a user
@app.route('/users/<int:id>/edited', methods=["POST"])
def edit_user(id):
    data = { 
        'id' : id,
        'fname': request.form["fname"], 
        'lname': request.form["lname"], 
        'email': request.form["email"]
    }
    User.edit(data)
    return redirect(f"/users/{id}")


#route to delete a user
@app.route('/users/<int:id>/delete')
def delete_user(id): 
#make sure to add id into this method when deleting
    data = {'id': id}
    User.delete(data)
    return redirect('/')
