import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import React, {useState} from "react";


function App() {
  const [todos, setTodos] = useState([])
  
  const addTodoHandler = newTodoData => {
    console.log(newTodoData)
    setTodos([newTodoData, ...todos])
  }

  return (
    <div>
      <TodoForm onAddTodo = {addTodoHandler}></TodoForm>
      <TodoList items ={todos}></TodoList>

    </div>
  )
}

export default App;
