import React, { useState } from 'react'

export  function TimerInput({send}) {
    const [start,setStart]= useState()
    const [end,setEnd]= useState()
  return (
    <div className='container text-start'>
        <div className='input-group m-2'>
        <span className="input-group-text" >Start time</span>
        <input type="number"  placeholder='0 seconds' onChange={(e)=>{
            setStart(e.target.value)
        }} />
        </div>
      
        <div className='input-group m-2'>
        <span className="input-group-text" id="basic-addon3">End time</span>
        <input type="number"  placeholder='60 seconds' onChange={(e)=>{
            setEnd(e.target.value)
        }} />
        </div>
      
        
        <button className='btn btn-primary m-2 col-12' onClick={()=>{
            send(start,end)
        }}>Start timer</button>

  

    </div>
  )
}

