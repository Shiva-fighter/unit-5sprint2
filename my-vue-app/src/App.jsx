
import { useState } from 'react'
import './App.css'
import { Timer } from './components/timer'

function App() {
  const [show,setShow]= useState(true)

  return (
    <div className="App container">
    
     <div className='text-start'>
       <h2 className='m-5'>Count Down   <button className='btn btn-danger' onClick={()=>{
                setShow(!show)
            }}>
                {show ? " Close" :" Showtimer"}
            </button>
            </h2>
            {show ?  <Timer/> : "" }
       
          
        </div>
     
    </div>
  )
}

export default App
