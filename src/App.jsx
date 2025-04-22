 import { useState } from 'react'
 import './App.css'
import { useEffect } from 'react';

function App() {
   const [time, setTime] = useState(0);
   const [running, setRunning] = useState(false);

useEffect(()=>{
  let interval = null;
  if (running) {
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  } else if (!running && time !== 0) {
    clearInterval(interval);
  }
  return () => clearInterval(interval);
},[running,time])

  return (
    <>
      <div>
        <h1>Stop Watch:
          <span> {("0" + Math.floor((time / 60000) % 60)).slice(-2)}: </span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}: </span>
          <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
        </h1>
        
        <button onClick={() => setRunning(true)}>Start </button>
        <button onClick={() => setRunning(false)}>Stop </button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>

    </>
  )
}

export default App
