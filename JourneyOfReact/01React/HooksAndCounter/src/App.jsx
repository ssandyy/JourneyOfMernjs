import { useState } from 'react';
import './App.css';

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
{/* OR */}
      <button type="button" onClick={() => setCounter((counter) => counter+2)}>Add Value</button>
      <button onClick={() => setCounter((counter) => counter -1)}>remove</button>
    </>
  )
}

export default App
