import { Button } from "./Button";
import {v4 as uuidv4} from "uuid";
export const TaskAdd = ({ task, setTask, setBugd }) => {
  const uniqid =uuidv4();
  const handleChange = (event) => {
    setTask(event.target.value);
  };

const  clickHandler=()=>{
  setBugd((prev)=>[...prev,{taskName:task, taskChecked:false, id: uniqid}]);
  setTask("");
}
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
       
        gap: "6px",
        borderRadius: "6px",
      }}
    >
      <input
        style={{ padding: "8px ", width: "280px",borderRadius:"6px" }}
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={handleChange}
      />
      <div style={{}}>
        <Button
          backgroundColor={"#3C82F6"}
          padding={" 16px"}
          text="Add"
          onClick={clickHandler}
        />
      </div>
    </div>
  );
};
