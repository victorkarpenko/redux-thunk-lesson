import React from "react";
import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = ({items}) => {
    return (
        <ul className="TodoList">
            {items.length ? (
                items.map((todo) => (
                    <li key={todo.id}>
                        <TodoItem {...todo} />
                    </li>
                ))
            ) : (
                <li>No tasks</li>
            )}
        </ul>
    );
};

export default TodoList;
