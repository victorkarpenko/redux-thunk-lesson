import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../types";

export const addTodoItem = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodoItem = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const updateTodoItem = (index) => ({
  type: UPDATE_TODO,
  payload: index,
});
