import React,{useState} from "react";


function Main(props) {
    const [taskName, setTaskName] = useState("");
    const [apiResponse, setApiResponse]=useState("");
    let id="0";
    const callAPI=()=> {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => setApiResponse(res ));
          console.log(apiResponse+"anj");
  }
    const handleSubmit=(e)=>{
      callAPI();
      e.preventDefault();
      if(taskName!=="" )
      {
          
          if(props.posts)
            id=props.posts.length;
          const list={
              id:id,
              task:taskName
          }
          props.addList(list)
          console.log(props.posts);
      setTaskName("");
    }
    }
    // const removeItem=(index)=> {
    //   const task = tasks;
    
    //   task.splice(index, 1);
    //   setTasks([...tasks]);
    // }
    const mapped=()=>{
        if(props.posts)
        { return props.posts.map((list,index)=> 
                   <li key={index}>
                   {list.task}
                   <button onClick={() => props.removeList(index) }>Delete</button>
                 </li>
                  )}
    }
    return (
      <div>
      <div className="App">
       <h1>Todo App</h1>
       <form onSubmit={handleSubmit}> 
          <label>
             Your Task:
              <textarea type="text" value={taskName} name="task_desc" onChange={(e)=>setTaskName(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
      </form>
     
      </div>
       <ul>
         <p>{apiResponse}</p>
         {mapped()}
     </ul>
     </div>
    );
  }
 
  export default Main
  