import React, { useState } from "react";
import "./TodoForm.css";
import {PlusIcon} from '@heroicons/react/24/solid'

function TodoForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('')

  const inputHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const todoData = {
      title : enteredTitle,
      completed : false
    }
    // console.log(todoData)
    props.onAddTodo(todoData)
    setEnteredTitle('')
  }

  return (
    <form className="todo-form" onSubmit={submitHandler}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add a todo"
        name="text"
        onChange={inputHandler}
        value = {enteredTitle}
      ></input>
      <button type='submit'className="button">
        <PlusIcon className="icon"></PlusIcon>
      </button>
    </form>
  );
}

export default TodoForm;
