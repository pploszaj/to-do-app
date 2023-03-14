import React from 'react'
import Todo from './Todo'
import './TodoList.css'

function TodoList(props) {
  return (
    <div className='list'>
      {props.items.map(todo => <Todo title = {todo.title} />)}  
    </div>
  )
}

export default TodoList