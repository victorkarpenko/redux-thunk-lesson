import { ADD_TODO, DELETE_TODO, POST_ADD_ERROR, POST_ADD_START, POST_ADD_SUCCESS, UPDATE_TODO, GET_ADD_ERROR, GET_ADD_SUCCESS, GET_ADD_START } from "../types";

const initialState = {
  list: [],
  isFetching: null,
}


export default (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((todo) => todo.id !== payload),
      }

    case UPDATE_TODO:
      const updatedItem = state.list.find(i => i.id === payload);
      const otherItems = state.list.filter(i => i.id !== payload);
      return {
        ...state,
        list: [...otherItems, {
          ...updatedItem,
          status: true,
        }]
      }

    case POST_ADD_START:
      return {
        ...state,
        isFetching: true,
      }

    case POST_ADD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: [...state.list, payload],
      }

    case POST_ADD_ERROR:
      return {
        ...state,
        isFetching: false,
      };

    case GET_ADD_START:
      return {
        ...state
      }

    case GET_ADD_SUCCESS:
      return {
        ...state,
        list: payload,
      }

    case GET_ADD_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};