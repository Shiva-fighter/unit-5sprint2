import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'
import Showdata from './Showdata';
//import { Axios } from "axios";
function Form() {
  const [adding,setAdding]= useState(0);
  const [list,setList]= useState();
  useEffect(()=>{
    axios.get('https://yash-react-json-server.herokuapp.com/api/users')
    .then(function (response) {
      // handle success
      console.log("response",response);
      setList(response.data)
    })
  },[adding])
 
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    setAdding("jk")
    console.log(data)
    axios.post("https://yash-react-json-server.herokuapp.com/api/users",data).then( console.log("created"))
  };

  console.log(watch("Name")); 
  return (
    <div className='container w-50 text-start'>
        <h2 className='text-center mb-5'>Application Form </h2>

<form className="row gx-3 gy-2 align-items-center" onSubmit={handleSubmit(onSubmit)}>
  <div className="col-sm-3">
    <label className="" >Name</label>
    <input type="text" className="form-control"  placeholder="Name" {...register("Name")}/>
  </div>
  <div className="col-sm-3">
    <label className="" >Age</label>
    <div className="input-group">
    
      <input type="text" className="form-control"  placeholder="Age" {...register("Age")}/>
    </div>
  </div>
  <div className="col-sm-3">
    <label className="" >Department</label>
    <select className="form-select" {...register("Department")}  >
      <option selected>Choose...</option>
      <option value="Science">Science</option>
      <option value="Math">Math</option>
      <option value="English">English</option>
    </select>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" {...register("Address")}/>
  </div>
  <div className="col-sm-3">
    <label className="" >Salary</label>
    <div className="input-group">
    
      <input type="text" className="form-control"  placeholder="Salary" {...register("Salary")} />
    </div>
  </div>
  <div className="col-8">
  <label className="form-check-label" >
        Martial Status
      </label>
    <div className="form-check">
        
      <input className="form-check-input" type="checkbox" id='Single' value='single' {...register("Martial-single")} />
      <label className="form-check-label" >
        Single
      </label>
      
    </div>
    <div className="form-check">
        
        <input className="form-check-input" type="checkbox" id='Married' value="married" {...register("Martial-married")}  />
        <label className="form-check-label" >
          Married
        </label>
        
      </div>
      <div className="form-check">
        
        <input className="form-check-input" type="checkbox" value="divorced" {...register("Martial-divorced")}  />
        <label className="form-check-label" >
          Divorced
        </label>
        
      </div>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>

<div>
  {/* {list} */}
  <Showdata value={list}/>
</div>
    </div>
  )
}

export default Form