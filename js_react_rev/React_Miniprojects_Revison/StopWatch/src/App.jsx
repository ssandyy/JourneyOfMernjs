import { useEffect, useState } from 'react';
import './App.css'


function App() {
  // const [time, setTime] = useState(0);
  const [isRuning, setIsRuning] = useState(false);

  const [hr, setHr] = useState(23);
  const [min, setMin] = useState(58);
  const [sec, setSec] = useState(0);

  

  const formatTime = (sec) => {
    if(sec > 59){
      setMin(min+1);
      setSec(0);
      if(min >= 59 && sec > 59){
        setHr(hr+1);
        setMin(0)
        setSec(0);
        if(hr >= 23 && min >= 59 && sec > 59){
          setHr(0);
          setMin(0);
          setSec(0);
        }
      }
    }
    return `${hr.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
  }

  useEffect(()=>{
    let interval;
    if(isRuning){
      interval = setInterval(()=>{ setSec((prevTime) => prevTime+1)}, 1000);
    }
    return () => clearInterval(interval);
  },[isRuning]);


  const handleStart = () => {
    setIsRuning(true);
  }
  const handleStop = () => {
    setIsRuning(false);
  }
  const handleReset = () => {
    setSec(0);
    setMin(0);
    setHr(0);
    setIsRuning(false);

  }




    // Enhanced Format Time
  
    const [time, setTime] = useState(0);
    const [isRuning2, setIsRunning2] = useState(false)


    useEffect(()=> {
      let intervalCount;
      if(isRuning2){
        intervalCount = setInterval(() => {setTime(prevTime => prevTime + 1)},1000)
      }
      return () => clearInterval(intervalCount);
    },[isRuning2])


  const enhancedFormatTime = (time) => {
    const hours = Math.floor(time/3600);
    const minutes = Math.floor(time%3600/60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2,0)}:${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2, 0)}`
  }

  const handleStartTimer = () => {
    setIsRunning2(true)
    console.log("Timer Started");
  }
  const handleStopTimer = () => {
    setIsRunning2(false)
  }

  const handleResetTimer = () => {
    setIsRunning2(false)
    setTime(0)
  }




  return (
    <>
      <div>
        <input value={formatTime(sec)} readOnly />
        <br />
        <button onClick={() => handleStart()}>Start</button>
        <button onClick={() => handleStop()}>Stop</button>
        <button onClick={() => handleReset()}>Reset</button>
      </div>
    <hr />
      <div>
        <h2>Enhanced Logic StopWatch</h2>
      <input value={enhancedFormatTime(time)}  readOnly/> 
      <br />
        <button onClick={() => handleStartTimer()}>Start</button>
        <button onClick={() => handleStopTimer()}>Stop</button>
        <button onClick={() => handleResetTimer()}>Reset</button>
      </div>
    </>
  )
}

export default App
