import React from 'react'
import { useState } from 'react';
export default function TodoApp() {
    const [inputData,setInputData] = useState('');
const [items,setItems] = useState([])
    
    // addItems function
const addItems=()=>{
  setItems([...items,inputData])
}
    //  Delet All items function
const deltAll = ()=>{
  setItems([])
}
const edit=()=>{
    setItems(prompt("Enter your value" , items))
}
const delt=()=>{
  setItems([])
}   

  return (
    <>
      {/* ToDo App */}
      <div className='todo'>
      <h1 className='heading'>ToDo App</h1>
      {/* <Input /> */}
      <input className='input' onChange={(e)=>setInputData(e.target.value)} value={inputData} 
      type='text' placeholder='Enter your todo' />
      <br />
      <button className='btn' onClick={addItems}>Add Item</button>
      <button className='btn' onClick={deltAll}>Delete All Item</button>
      <div>
      {
        items.map((element,index)=>{
          return(<>
            <h1 className='heading'>{element}</h1>
            <button className='btn' onClick={edit}>Edit Item</button>
            <button className='btn' onClick={delt}>Delete Item</button>
            </>
          )
        })
        }
    
     </div>
    </div>
    </>
  )
}
