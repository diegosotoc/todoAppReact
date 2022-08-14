// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { AppUi } from "./AppUI";
// import {TodoCounter} from '../TodoCounter/index.js'
// import {TodoSearch} from '../TodoSearch/index.js'
// import {TodoList} from '../TodoList/index.js'
// import {TodoButton} from '../TodoButton/index.js'
// import {TodoItem} from '../TodoItem/index.js'


const defaultTodos = [
  {text: 'Learn React', completed: true},
  {text: 'Drink water', completed: true},
  {text: 'Cry', completed: false}
];

function App() {
  // Estado inicial de nuestros TODOs
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
    
  // Cantidad de TODOs completados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  // Cantidad total de TODOs
  const totalTodos = todos.length;


  let searchedTodos = [];

  // Lógica para filtrar
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

// Cada vez que recibe un texto
// va a buscar en cada uno de la lista de todos cuales 
// todos cumoplen con esta condicion
  const completeTodo = (text)=> {

    const todoIndex = todos.findIndex(todo => todo.text === text);
    // nueva lista de todos...
    const newTodos = [...todos];
    // pero el que cumple con la completed como true
    newTodos[todoIndex].completed = true;
    // se renderiza de nuevo la app
    setTodos(newTodos);
  };

  const deleteTodo = (text)=> {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };


  return (
    <AppUi
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
    />
  );
}

export default App;
