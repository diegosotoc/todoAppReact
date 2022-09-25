import React from "react";
import { TodoContext } from "../TodoContext";
import "./todoForm.css";

function TodoForm() {
  // Creamos un estado para nuestro nuevo TODO
  const [newTodoValue, setNewTodoValue] = React.useState("");
  // Desestructuramos las funciones que necesitamos para añadir un TODO y cerrar nuestro modal
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  // Creamos una función para actualizar el estado de nuestro nuevo TODO
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  // Función para cerrar el modal
  const onCancel = () => {
    setOpenModal(false);
  };

  // Función para agregar nuestro nuevo TODO
  const onSubmit = (event) => {
    // prevent default para evitar recargar la página
    event.preventDefault();
    // Utilizamos nuestra función para añadir nuestro TODO
    addTodo(newTodoValue);
    // Cerramos nustro modal
    setOpenModal(false);
    // También estaría bien resetear nuestro formulario
    setNewTodoValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Add To-Do</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Your new To-Do!"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
