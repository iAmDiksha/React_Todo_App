import React from 'react'
import './TodoInput.css'

const TodoInput = ({todo,addItem,setTodo}) => {
  return (
    <div className="input-wrapper">
        <input type="text" name="todo" value={todo} onChange={(e) => {
          setTodo(e.target.value);
        }} placeholder="Create a new todo" />
        <button className="add-btn" onClick={addItem}>Add</button>
      </div>
  )
}

export default TodoInput
