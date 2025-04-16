import { useState } from "react";
export const Input = () => {
  const [task, setTask] = useState("");
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "8px 16px 8px 16px ",
        gap: "6px",
      }}
    >
      <input
        style={{ width: "280px" }}
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={handleChange}
      />

      {/* <p>New task:{task}</p> */}
      <button
        style={{
          backgroundColor: "#3C82F6",
          color: "white",
          padding: " 8px 16px",
          borderRadius: "6px",
          border: "none",
        }}
      >
        Add
      </button>
    </div>
  );
};
