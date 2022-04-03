

export const Todoitem= ({data,status})=> {
    console.log(status)
  return (
      <div className="w-25 ">
          <h3 className="text-center ms-5  bg-secondary  ">{data}</h3>
          <p>{status}</p>
          <button className="btn btn-danger">toggle</button>
      </div>
    
  )
}

