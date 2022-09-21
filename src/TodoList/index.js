import React from 'react';
import './TodoList.css'

function TodoList(props) {
  return (
      <div className="container">
        {props.children}
      </div>
  );
}

export { TodoList };
