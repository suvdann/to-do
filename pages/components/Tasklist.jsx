import {Button}from "./Button"
export const Tasklist = (props) => {
  return (
    <div style={{display:"flex",
      justifyContent:"space-between",
      backgroundColor:"lightGray",
      padding:"8px",
      borderRadius:"4px"
    }}>
      <div style={{display:"flex", gap:"4px", alignItems:"center"}}>
      <input type="checkbox" name="" id=""/>
      <p style={{fontSize:"12px"}}>{props.taskName}</p>
      </div>
     <Button text="Delete"/>
    </div>
  );
};
//Task.jsx