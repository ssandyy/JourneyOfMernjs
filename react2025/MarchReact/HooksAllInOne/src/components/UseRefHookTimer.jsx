import React, { useRef, useState } from 'react';

const UseRefHookTimer = () => {


  const [timer, setTimer] = useState(0);
  const intervalRef = useRef()

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer+1)
    },1000)
  }

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  }




  return (
    <>
        <div>UseRefHookTimmer </div>
        <p>{timer}</p>
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={stopTimer}>Stop Timer</button>
        
    </>

  )
}

export default UseRefHookTimer 