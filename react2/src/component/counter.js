import React from 'react'
import { useEffect, useState } from 'react';

export default function Counter() {
  const [counter,setCounter] = useState(0)
const inc = ()=> {
  setCounter(counter + 1)
}
const dec = ()=> {
  setCounter(counter - 1)
}
  // case 2 run on click
  const [time , setTime] = useState(0)
  useEffect( ()=>{
    alert("Counte was change")
      setTime(time + 1 )
  } , [counter])
  

  return (
    <>
     <div className='counter'>
      <h1 className='heading'>Counter App</h1>
      <h1 className='heading'>Counter was click on {time} time</h1>
      <h1 className='heading'>{counter}</h1>
      <button className='btn' onClick={inc}>increament</button>
      <button className='btn' onClick={dec}>decreament</button>
    </div>
    </>
  )
}
