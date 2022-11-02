import logo from './logo.svg';
import React, {useState} from "react";
import './App.css'; 

function App() { 

  const [newTodo , setNewToDo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();
    if(newTodo.length === 0){
      return;
    }

    const todoItem = {
      text: newTodo, 
      complete: false
    };
    console.log(todoItem);
    setTodos([...todos, todoItem]);

    setNewToDo("");
  };

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i != delIdx;
    }); 
    
    setTodos(filteredTodos); 
  };

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete; 
      }
      return todo;
    });
    console.log(updatedTodos);
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event);
      }} >
        <input onChange={(event) => {
          setNewToDo(event.target.value)
        }} type="text"
        value={newTodo}
        />
        <div>
          <button>Add</button>
        </div>
      </form>

      <hr></hr>

        {todos.map((todo, i) =>  {
          const todoClasses = []; 
          if (todo.complete) {
            todoClasses.push("line-through");
          } 
          else {
            todoClasses.push("");
          }

            return (
            <div key={i}> 
            <input onChange={(event) => {
              handleToggleComplete(i);
            }} checked={todo.complete} type="checkbox"/>
              <span className={todoClasses[i] }>{todo.text} </span>
              <button onClick={(event) => {
                handleTodoDelete(i);
              }}>Delete</button>
            </div>
            ) 
          })
        }


    </div>
  );
}

export default App;
