import React from "react";
function LoadingTodos(){
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text">Loading your To-Dos</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  )
}
export{ LoadingTodos };