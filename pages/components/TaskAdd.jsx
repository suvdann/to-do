import { Button } from "./Button";
export const TaskAdd = ({ task, setTask, setBugd }) => {
  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const clickHandler = () => {
    setBugd((prev) => [...prev, { taskName: task, taskChecked: false }]);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "8px 16px 8px 16px ",
        gap: "6px",
        borderRadius: "6px",
        width: "280px",
      }}
    >
      <input
        style={{ width: "280px" }}
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={handleChange}
      />
      <div style={{}}>
        <Button
          backgroundColor={"#3C82F6"}
          padding={"8px"}
          // color={""}
          text="Add"
          click={clickHandler}
        />
      </div>
    </div>
  );
};
