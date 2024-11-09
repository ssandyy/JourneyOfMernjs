
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import UserContextProvider from '../../MiniContextApi/src/context/UserContextProvider'

function App() {

  return (
    <>
    <h2>Hello redux-Toolkit Todo</h2>
    <AddTodo />
    <Todos />
    </>
   
  )
}

export default App
