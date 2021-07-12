import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodoItem, updateTodoItem } from "../../../redux/actions/todo";
import "./TodoItem.css";
const TodoItem = ({ status, title, author, priority, id }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(deleteTodoItem(id));
  };

  const updateItem = () => {
    dispatch(updateTodoItem(id));
  };
  
  return (
    <div className="TodoItem">
      <div onClick={updateItem}>
        <p className={`TodoItem__name ${status && "done"}`}>{title}</p>
        <p className={`TodoItem__priority ${status && "done"}`}>
          {priority} priority
        </p>
        <p className={`TodoItem__author ${status && "done"}`}>{author}</p>
      </div>
      <span className="TodoItem__remove" onClick={deleteItem}>
        <i className="fas fa-trash" />
      </span>
    </div>
  );
};

export default TodoItem;
