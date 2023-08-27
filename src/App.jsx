import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function addItem() {
    if (todo != "") {
      setTodos([...todos, todo])
      setTodo('');
    }
  }

  function deleteItem(index)
  {
     const newTodos = todos.filter((_,i)=>{
       return i != index;
     })
     setTodos(newTodos);
  }
  return (
    <div className="App">
      <h1>React Todo App</h1>
      <TodoInput todo={todo} setTodo={setTodo} addItem={addItem}/>
      <TodoList todos={todos} deleteItem={deleteItem}/>
    </div>
  )
}

export default App
