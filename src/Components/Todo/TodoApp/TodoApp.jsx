import React from "react";
import TodoList from "../TodoList/TodoList";
import "./TodoApp.css";
import HookForm from "../HookForm/HookForm";
import { useSelector } from "react-redux";

const TodoApp = () => {
  const todoList = useSelector(state => state.todo);

  return (
    <div className="TodoApp">
      <h1 className="TodoApp__title">Todo App</h1>

      <h2 className="TodoApp__title TodoApp__title_h2">Add item</h2>
      <HookForm />

      <h2 className="TodoApp__title TodoApp__title_h2">All items</h2>
      <TodoList items={todoList} />
    </div>
  );
};

export default TodoApp;
