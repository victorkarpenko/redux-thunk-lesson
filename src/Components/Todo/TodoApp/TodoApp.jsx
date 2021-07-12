import React, { useEffect } from "react";
import TodoList from "../TodoList/TodoList";
import "./TodoApp.css";
import HookForm from "../HookForm/HookForm";
import { useSelector, useDispatch } from "react-redux";
import { requestUpdateTodoItem, requestDeleteTodoItem, getTodoItems } from "../../../redux/actions/todo";

const TodoApp = () => {
  const todoList = useSelector(state => state.todo.list);
  const itemIsFetching = useSelector(state => state.todo.isFetching)
  const dispatch = useDispatch();

  console.log(itemIsFetching);

  const deleteItem = (id) => {
    dispatch(requestDeleteTodoItem(id));
  };

  const updateItem = (id) => {
    dispatch(requestUpdateTodoItem(id));
  };

  useEffect(() => {
    dispatch(getTodoItems())
  }, [])

  return (
    <div className="TodoApp">
      <h1 className="TodoApp__title">Todo App</h1>

      <h2 className="TodoApp__title TodoApp__title_h2">Add item</h2>
      <HookForm itemIsFetching={itemIsFetching} />

      <h2 className="TodoApp__title TodoApp__title_h2">All items</h2>
      <TodoList items={todoList} onDeleteItem={deleteItem} onUpdateItem={updateItem} />
    </div>
  );
};

export default TodoApp;
