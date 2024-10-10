import { useState } from 'react'
import './App.css'
import AddButton from './AddButton';
import SubButton from './SubButton';

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter+1);
  }

  const subValue = () => {
    setCounter(counter-1);
  }


  return (
    <>
      <div>
        <h3>Counter Task</h3>
        <h4>{counter}</h4>
      </div>
      <div>
        <AddButton add={addValue} count={counter} />
        <SubButton sub={subValue} count={counter}/>
      </div>
      
    </>
  )
}

export default App
