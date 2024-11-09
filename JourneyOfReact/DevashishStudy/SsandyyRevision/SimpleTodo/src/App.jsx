import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo, setTodo] = useState([]);  // todo are array 
  const [newTask, setnewTask] = useState("");


  const addTask = (e) => {
    e.preventDefault();
      if(newTask.trim()){
        setTodo([...todo, {id:Date.now(), task:newTask, isEditable:false}])
        setnewTask("")
      }
  }

  const updateTask = (id, todo) => {
    setTodo((prev) => prev.map((prevTask)=> (prevTask.id === id ? todo : prevTask)))
  }
  const toggleEdit = (id) => {
    setTodo();
  }

  const deleteTask = (id) => {
    setTodo(todo.filter((item) => item.id !== id))
  }


  return (
    <>
      <form onSubmit={addTask}>
        <input type='text' 
        placeholder='Enter Task..!' 
        className=''
        value={newTask}
        onChange={(e) => setnewTask(e.target.value)}
        />
        <button type='submit'>Add Task</button>
      </form>
  <div>
        {todo.map((item) => (
          <div key={item.id} style={{ marginTop: '10px' }}>
            {item.isEditing ? (
              <>
                <input
                  type="text"
                  value={item.task}
                  onChange={(e) => updateTask(e, item.id)}
                />
                <button onClick={() => toggleEdit(item.id)}>Save</button>
              </>
            ) : (
              <>
                <span>{item.task}</span>
                <button onClick={() => toggleEdit(item.id)}>Edit</button>
                <button onClick={() => deleteTask(item.id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>


    </>
  )
}

export default App
