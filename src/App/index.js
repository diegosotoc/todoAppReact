// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { AppUi } from "./AppUI";
// import {TodoCounter} from '../TodoCounter/index.js'
// import {TodoSearch} from '../TodoSearch/index.js'
// import {TodoList} from '../TodoList/index.js'
// import {TodoButton} from '../TodoButton/index.js'
// import {TodoItem} from '../TodoItem/index.js'

// const defaultTodos = [
//   { text: "Learn React", completed: true },
//   { text: "Drink water", completed: true },
//   { text: "Cry", completed: false },
// ];

function useLocalStorage(itemName, initualValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const [item, setItem] = React.useState(initualValue);

  try {
    React.useEffect(() => {
      setTimeout(() => {
        const localStorageItem = localStorage.getItem("itemName");
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem("itemName", JSON.stringify(initualValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      }, 1000);
    });
  } catch (error) {
    setError(error);
  }

  // Creamos la función en la que actualizaremos nuestro localStorage
  const saveItem = (newItem) => {
    try {
      // Convertimos a string nuestros Item
      const stringifiedItem = JSON.stringify(newItem);
      // Los guardamos en el localStorage
      localStorage.setItem("itemName", stringifiedItem);
      // Actualizamos nuestro estado
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return { item, saveItem, loading, error };
}

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []); //llamar al hook

  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    // Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    // Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
    saveTodos(newTodos);
  };

  return (
    <AppUi
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
