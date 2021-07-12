import axios from 'axios';
import { requestPostAddItem } from '../../api'

import { ADD_TODO, DELETE_TODO, UPDATE_TODO, POST_ADD_START, POST_ADD_SUCCESS, POST_ADD_ERROR, GET_ADD_START, GET_ADD_SUCCESS, GET_ADD_ERROR } from "../types";

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

export const postTodoItemStart = () => ({
  type: POST_ADD_START,
})

export const postTodoItemSuccess = (todoItem) => ({
  type: POST_ADD_SUCCESS,
  payload: todoItem,
})

export const postTodoItemError = () => ({
  type: POST_ADD_ERROR,
})


export const getTodoItemsStart = () => ({
  type: GET_ADD_START,
})

export const getTodoItemsSuccess = (todoItem) => ({
  type: GET_ADD_SUCCESS,
  payload: todoItem,
})

export const getTodoItemsError = () => ({
  type: GET_ADD_ERROR,
})

export const postTodoItem = (todoItem) => (dispatch) => {
  dispatch(postTodoItemStart())
  axios.post('http://localhost:5001/todos', todoItem)
  .then(({data}) => {
    dispatch(postTodoItemSuccess(todoItem));
  })
  .catch(() => {
    dispatch(postTodoItemError());
  })
}

export const getTodoItems = () => (dispatch) => {
  dispatch(getTodoItemsStart())
  axios.get('http://localhost:5001/todos')
  .then(({data}) => {
    dispatch(getTodoItemsSuccess(data));
  })
  .catch(() => {
    dispatch(getTodoItemsError());
  })
}

export const requestDeleteTodoItem = (id) => (dispatch) => {
  axios.delete(`http://localhost:5001/todos/${id}`)
  .then(({data}) => {
    dispatch(deleteTodoItem(id));
  })
}

export const requestUpdateTodoItem = (id) => (dispatch, getState) => {
  const {todo} = getState();
  const item = todo.list.find(i => i.id !== id);
  axios.put(`http://localhost:5001/todos/${id}`, item)
  .then(({data}) => {
    dispatch(updateTodoItem(id));
  })
}