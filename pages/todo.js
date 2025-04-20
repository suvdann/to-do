import { TaskAdd } from "./components/TaskAdd";
import { Button } from "./components/Button";
import { Tasklist } from "./components/Tasklist";
import { useState } from "react";
import { ActionButtons } from "./components/ActionButtons";

const Todo = () => {
  const [task, setTask] = useState("");
  const [bugd, setBugd] = useState([]);
  const [ whichButtonClicked, setWhichButtonClicked]=useState("");
  
   //  clearCompletedHandler
   const clearCompletedHandler = () => {
    setBugd((prev) => prev.filter((el) => !el.taskChecked));
  };

  //  filter logic-ийг нэг function-д оруулсан
  const filteredTasks = () => {
    if (whichButtonClicked === "Completed") {
      return bugd.filter((el) => el.taskChecked);
    } else if (whichButtonClicked === "Active") {
      return bugd.filter((el) => !el.taskChecked);
    } else {
      return bugd;
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      <div
        style={{
         width:"377px",
         display:"flex",
         flexDirection:"column",
          boxShadow: "5px 5px 5px 5px #00000029",
          padding: "16px",
          borderRadius: "6px",
          gap: "20px",
        }}
      >
        {/* {JSON.stringify(bugd)} */}
        <h1 style={{ textAlign: "center" }}>To-Do list</h1>
        <div style={{ padding: "10px" }}>
          <TaskAdd task={task} setTask={setTask} setBugd={setBugd} />
        </div>
        <ActionButtons setWhichButtonClicked={setWhichButtonClicked} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            // width: "345px",
          }}
        >
          {bugd.map((el, index) => {
            return (
              <Tasklist
                key={index}
                taskName={el.taskName}
                taskChecked={el.task}
                setBugd={setBugd}
                id={el.id}
              />
            );
          })}
         
          <p style={{ margin: 0 }}>
            {bugd.filter((el) => el.taskChecked).length} of {bugd.length} tasks
            completed
          </p>

          <Button
            text="Clear Completed"
            onClick={clearCompletedHandler}
            aliButtonDaragdsanbe="Clear"
          />
        </div>
      </div>
    </div>
  );
};
export default Todo;
