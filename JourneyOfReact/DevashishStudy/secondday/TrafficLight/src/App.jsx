import { useState } from 'react'
import './App.css'

const App = () => {
  const [speed, setSpeed] = useState(0)

  const colorChanger = () => {
    if(speed>0 && speed<=5){return{
      background: "green"
    }}else if(speed>5 && speed<=8){
      return {background: "Yellow"}
    }else if(speed>8){
      return {background: "red"}
    }
    return { backgroundColor: 'white' };
  }

  return (
    <>
      <h1>Speed Limit Tracker</h1>
      <p id="displaymeter" style={colorChanger()}>Your Speed : {speed}</p>
      <div className="btns">
        <button onClick={() => setSpeed((speed) => (speed<10) ? (speed + 1): speed) && colorChanger}> Speed + </button>
        <button onClick={() => setSpeed((speed) => (speed>0) ? (speed - 1): speed)}> Speed -</button>
      </div>
    </>
  )
}

export default App
