import { useState } from "react";
export const Input=()=>{
 const [task, setTask] = useState("");
  const handleChange = (e) => {
    setTask(e.target.value);
  };
    return(
       <div>
      <input
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={handleChange}
      />
      <p>New task:{task}</p>
      </div> 
    )
}