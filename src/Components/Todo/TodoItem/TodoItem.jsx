import React from "react";
import "./TodoItem.css";

const TodoItem = ({ onDeleteItem, onUpdateItem, status, title, author, priority, id }) => {
  return (
    <div className="TodoItem">
      <div onClick={() => onUpdateItem(id)}>
        <p className={`TodoItem__name ${status && "done"}`}>{title}</p>
        <p className={`TodoItem__priority ${status && "done"}`}>
          {priority} priority
        </p>
        <p className={`TodoItem__author ${status && "done"}`}>{author}</p>
      </div>
      <span className="TodoItem__remove" onClick={() => onDeleteItem(id)}>
        <i className="fas fa-trash" />
      </span>
    </div>
  );
};

export default TodoItem;
