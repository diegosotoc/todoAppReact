// import logo from './logo.svg';
// import './App.css';
import React from "react";
import {TodoCounter} from './TodoCounter.js'
import {TodoSearch} from './TodoSearch.js'
import {TodoList} from './TodoList.js'
import {TodoButton} from './TodoButton.js'
import {TodoItem} from './TodoItem.js'


const todos = [
  {text: 'Learn React', completed: true},
  {text: 'Drink water', completed: false},
  {text: 'Cry', completed: false}
]

function App() {
  return (

    <React.Fragment>

      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
        {todos.map(todo =>(
          // key = identificador de text, opción de react...
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>

      <TodoButton/>

    </React.Fragment>

  );
}

export default App;
