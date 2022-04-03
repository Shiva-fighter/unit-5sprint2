import React from 'react'

function Showdata({value}) {
    console.log("showData",value)
    if(true){
       // value.map(e=> console.log(e.Name))
    }
    
  return (
    <div>
        {/* {value.map(e=><p>e.Name</p>)} */}
        {(value) ? <div> <h3>Users list:</h3> {value.map(e=> <p key={e.id}>{e.id+" "+e.Name+e.Age+e.Department+e.Salary} </p>)}</div> : <h3>Getting details</h3>}
    </div>
  )
}

export default Showdata