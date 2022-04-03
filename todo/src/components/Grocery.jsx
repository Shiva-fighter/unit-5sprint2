
import { TodoInput } from "./GroceryInput";
import { Todoitem } from './GrocerList'
import { useState } from "react";

export const  Todo= ()=> {
    const [todos,setTodos]=useState([]);

    const addTodo=(data)=>{
        let t={
            data,
            status:"Pending",
            id: Date.now(),
        }
        setTodos([...todos,t]);
    };
    function toggle(ele){
      
        setTodos(todos.map((e,i)=> {if(e.id===ele.id){
            if(e.status==="Pending"){
           e.status="Completed"
           return e
        }else{
               e.status="Pending"
               return e
        }
        }else{
            return e
        }
    }))
        
    }

    function deleteTodo(ele){
        setTodos(todos.filter((e,i)=>{
            return (e.id!==ele.id)
        }))
    }
   
  return (
    <div className="container w-50 mt-5">
        <TodoInput addTo={addTodo} />
        {/* {todos.map(e=> <Todoitem todo={e} />)} */}
        {todos.map((e,index)=><div className=" d-flex justify-content-around bg-primary p-2 text-dark bg-opacity-25 my-2 rounded-pill" key= {e.id}>
            <p>{e.data}</p>
            <p>{e.status}</p>
            <button className="btn btn-primary" onClick={()=>{
                toggle(e);
            }}>toggle</button>
            <button className="btn btn-danger" onClick={()=>{
                deleteTodo(e)
            }}>Delete</button>
        </div> )}
    </div>
  )
}

