from crypt import methods
from flask_app import app 
from flask import render_template, redirect, request, session, flash
from flask_app.models.recipes_model import Recipe
from flask_app.models.users_model import User
from flask_bcrypt import Bcrypt 
bcrypt = Bcrypt(app)

@app.route('/recipes/new')
def new_recipe(): 
    return render_template("new_recipe.html")

@app.route('/recipes/create', methods=['POST'])
def create_recipe(): 
    if 'user_id' not in session: 
        return redirect('/')
    if not Recipe.validator(request.form): 
        return redirect('/recipes/new')
    data = {
        **request.form, 
        'user_id' : session['user_id']
    }
    id = Recipe.create(data)
    return redirect('/recipes')

@app.route('/recipes/<int:id>')
def one_recipe(id): 
    if 'user_id' not in session: 
        return redirect('/')
    user_data = {
        'id' : session['user_id']
    }
    logged_user = User.get_by_id(user_data)
    this_recipe = Recipe.get_by_id({'id':id})
    all_recipes = Recipe.get_all()
    return render_template("view_recipe.html", logged_user = logged_user, this_recipe = this_recipe, all_recipes = all_recipes)


@app.route('/recipes/<int:id>/edit')
def edit_recipe(id): 
    if 'user_id' not in session: 
        return redirect('/')
    this_recipe = Recipe.get_by_id({'id':id})
    return render_template("edit_recipe.html", this_recipe = this_recipe)
    

@app.route('/recipes/<int:id>/update', methods=['POST'])
def update_recipe(id): 
    if not Recipe.validator(request.form): 
        return redirect(f'/recipes/{id}/edit')
    recipe_data = {
        **request.form, 
        'id':id
    }
    Recipe.update(recipe_data)
    return redirect('/recipes')


@app.route('/recipes/<int:id>/delete')
def delete_recipe(id): 
    Recipe.delete({'id':id})
    return redirect('/recipes')

