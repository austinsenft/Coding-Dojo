from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/hello/<string:name>/<int:num>') 
def hello(name,num):
    return render_template("index.html", name = name, num = num)


@app.route('/play')
def play():
    return render_template("index.html" , n = 3)

@app.route('/play/<int:n>')
def play2(n):
    return render_template("index.html" , n = n) 

@app.route('/play/<int:n>/<color>')
def play3(n,color):
    return render_template("index2.html", n = n, color = color) 



if __name__=="__main__":     
    app.run(debug=True)    

