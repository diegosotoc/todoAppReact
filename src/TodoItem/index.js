import React from 'react';
import './TodoItem.css';
import {FiCheck} from "react-icons/fi"
import {ImCancelCircle} from "react-icons/im"


function TodoItem(props) {
  return (
    <div className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <FiCheck/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <ImCancelCircle/>
      </span>
   </div>
  );
}

export { TodoItem };
