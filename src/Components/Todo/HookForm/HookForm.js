import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem } from "../../../redux/actions/todo";
import "./HookForm.css";

const formInitialState = {
  title: "",
  author: "",
  priority: "Low",
};

const HookForm = () => {
  const [form, setForm] = useState(formInitialState);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodoItem(form));
    setForm(formInitialState);
  };
  const { title, author, priority } = form;
  return (
    <form className="NewTodoForm" autoComplete="off" onSubmit={submitHandler}>
      <input
        className="NewTodoForm__name"
        type="text"
        name="title"
        placeholder="New Todo"
        autoFocus
        value={title}
        onChange={inputHandler}
      />
      <input
        className="NewTodoForm__name"
        type="text"
        name="author"
        placeholder="Author"
        autoFocus
        value={author}
        onChange={inputHandler}
      />
      <select
        name="priority"
        className="NewTodoForm__select"
        value={priority}
        onChange={inputHandler}
      >
        <option value="Priority" disabled hidden>
          Priority
        </option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button className="NewTodoForm__submit" type="button" onClick={submitHandler}>
        Add Todo
      </button>
    </form>
  );
};

export default HookForm;
