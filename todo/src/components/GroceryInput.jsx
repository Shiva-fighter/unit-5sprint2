import React from 'react'
import { useState } from "react";
import { addTodo } from './Grocery';
export const TodoInput= ({addTo}) => {
    const [text,setText]=useState("");
  return (
    <div>
       
        <input type="text" onChange={(e)=>{
            // setText(e.target.value)
            setText(e.target.value)
        }}/>
        <button className='btn btn-success' onClick={()=>{
            // handleAdd(text);
            addTo(text)
        }}>ADD</button>
    </div>
  )
}

//export default TodoInput