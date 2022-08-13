import React from 'react'
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {
  // Esto es un buscador, se envia un array vacio.
  // const [searchValue, setSearchValue] = React.useState('');

  // Funcion para que cada vez que se haga un cambio
  // en el input de busqueda, llama al searchValue y lo cambia
  const onSearchValueChange = (event) =>{
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return (
    <input 
      className='TodoSearch' 
      placeholder='Add a new task!' 
      type="text"
      value = {searchValue}
      onChange={onSearchValueChange}
    />
  );
  
}

export {TodoSearch};