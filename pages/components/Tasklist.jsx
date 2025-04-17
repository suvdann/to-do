import { Button } from "./Button";
export const Tasklist = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "lightGray",
        padding: "8px",
        borderRadius: "4px",
        gap: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <input type="checkbox" name="" id="" />
        <p style={{ fontSize: "12px" }}>{props.taskName}</p>
      </div>
      <Button
        backgroundColor={"#FEF2F2"}
        padding="6px"
        text="Delete"
        color={"#EF4444"}
      />
    </div>
  );
};
//Task.jsx
