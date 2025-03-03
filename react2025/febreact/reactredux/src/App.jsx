import { configureStore } from '@reduxjs/toolkit'
import { useState } from 'react'
import { Provider } from 'react-redux'
import './App.css'


const store = configureStore(rootReducer)


function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
    <Provider>
    <div>
        <Link></Link>
      </div>
    </Provider>
      
    </>
  )
}

export default App
