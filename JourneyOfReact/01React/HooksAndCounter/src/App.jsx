import './App.css'
import {useState} from 'react';

function App() {
  // let counter = 15;
  let [counter, setCounter] = useState(0)
  
  
  const addValue = () => {
    // counter = counter+1;
    setCounter(counter + 1)
    //console.log("counter add"+counter);

  }

  const removeValue = () => {
    setCounter(counter - 1)
  }


  return (
    <>

      <h2>Counter </h2>
      <h4>Counter value: {counter}</h4>
      
      <button onClick={addValue}>Add Value</button><br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
