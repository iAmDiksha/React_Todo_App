import React, { useState } from 'react'
import './TodoList.css'

const TodoList = ({todos,deleteItem}) => {
  const [checked, setChecked] = useState(Array(todos.length).fill(false));

  function handleChange(index)
  {
    const updateItems = [...checked];
    updateItems[index] = !updateItems[index];
    setChecked(updateItems);
  }

  return (
      <>
        {todos.length > 0 ? (
        <ul className="todo-list">
          {
            todos.map((task, index) => {
              return (
                <div key={index} className="todo-item">
                  <li style={{textDecoration: checked[index] ? 'line-through' : 'none'}}>{task}</li>
                  <div className="right">
                  <input type="checkbox" onChange={()=>handleChange(index)} className="checkbox"/>
                  <button className="delete-btn" onClick={()=>{
                    deleteItem(index);
                  }}>Delete</button>
                  </div>
                </div>
              )
            })
          }
        </ul>
      ) : (
        <div className="empty">
          <p>No Task Found.</p>
        </div>
      )}
      </>
  )
}

export default TodoList
