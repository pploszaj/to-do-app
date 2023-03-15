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

      <div class="work">
        <input type="radio" name="select" id="option-1"></input>
        <label for="option-1" class="option-1">
          <span>Work</span>
        </label>
      </div>
      <div className="home">
        <input type="radio" name="select" id="option-2"></input>
        <label for="option-2" class="option-2">
          <span>Home</span>
        </label>
      </div>
      <div className="personal">
        <input type="radio" name="select" id="option-3"></input>
        <label for="option-3" class="option-3">
          <span>Personal</span>
        </label>
      </div>
    </form>
  );
}

export default TodoForm;
