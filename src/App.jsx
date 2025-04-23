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
      <div className='text-center'>
      <div className='flex flex-row justify-center mt-50 mb-5  text-6xl'>
        <h1  className=''>StopWatch: <span> {("0" + Math.floor((time / 60000) % 60)).slice(-2)}: </span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}: </span>
          <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span> </h1>
          </div>
        <div  className=''>
        <button className='text-white bg-green-500 hover:bg-green-700 rounded ordinal  py-2 px-4 mr-2 cursor-pointer focus:ring-4 focus:ring-green-300' onClick={() => setRunning(true)}>Start </button>
        <button className='text-white bg-orange-500 hover:bg-orange-700 rounded py-2 px-4 mr-2 cursor-pointer focus:ring-4 focus:ring-orange-300' onClick={() => setRunning(false)}>Stop </button>
        <button  className='text-white bg-red-500 hover:bg-red-700 rounded py-2 px-4 mr-2 cursor-pointer focus:ring-4 focus:ring-red-300'onClick={() => setTime(0)}>Reset</button>
        </div>
      </div>

    </>
  )
}

export default App
