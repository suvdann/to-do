import { Button } from "./Button";
export const Tasklist = ({ taskName, handleDone }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#F9FAFB" /*#F9FAFB*/,
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
        <input
          type="checkbox"
          style={{ width: 20, height: 20 }}
          name=""
          id=""
          onChange={handleDone}
        />
        <p style={{ fontSize: "12px" }}>{taskName}</p>
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
