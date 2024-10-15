import { useState } from 'react'
import './App.css'
import LightIndicator from './LightIndicator'
import SpeedButtons from './SpeedButtons'

const App = () => {
  const [speed, setSpeed] = useState(0)

  const colorChanger = () => {
    if(speed>0 && speed<=5){
      return{
        message: "you are safe..!",
        lightColor: "green"
    }}else if(speed>5 && speed<=8){
      return {
        message: "you are in Economy Speed..!",
        lightColor: "yellow"}
    }else if(speed>8){
      return {
        message: "slow down your speed..!",
        lightColor: "red"}
    }
    return {lightColor:"", message:"Lets go on drive..!"}
  }


  const result = colorChanger();
  const lightColor = result.lightColor;
  const message = result.message;

  return (
    <>
    <div>
    
      <h1>Speed Limit Tracker</h1>
      <h3>{message}</h3>
      <LightIndicator lightColor={lightColor} />
      
      {/* <p id="displaymeter" style={{backgroundColor}}> Your Speed : {speed}</p>*/}
      <p id="displaymeter"> Your Speed : {speed}</p> 
      <SpeedButtons setSpeed={setSpeed} />
    </div>
    </>
  )
}

export default App
