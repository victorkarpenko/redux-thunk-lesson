import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../types";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, {...payload, id: state.length + 1}];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== payload);
    case UPDATE_TODO:
      const updatedItem = state.find(i => i.id === payload);
      const otherItems = state.filter(i => i.id !== payload);
      
      return [...otherItems, {
        ...updatedItem,
        status: true,
      }]
    default:
      return state;
  }
};