import { TaskAdd } from "./components/TaskAdd";

import { Tasklist } from "./components/Tasklist";
import { useState } from "react";
import { TaskSelector } from "./components/TaskSelector";

const Todo = () => {
  const [task, setTask] = useState("");
  const [bugd, setBugd] = useState([]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "377px",
          height: "290px",
          marginTop: "140px",
          boxShadow: "5px 5px 5px 5px #00000029",
          padding: "16px",
          borderRadius: "6px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>To-Do list</h1>
        <div style={{ padding: "10px", gap: "6px" }}>
          <TaskAdd task={task} setTask={setTask} setBugd={setBugd} />
        </div>
        <TaskSelector />

        <div>
          {bugd.map((el, index) => {
            return <Tasklist key={index} taskName={el.taskName} />;
          })}
          <p>No tasks yet. Add one above!</p>
        </div>
      </div>
    </div>
  );
};
export default Todo;
