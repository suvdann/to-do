import { Button } from "./Button";
export const TaskSelector = () => {
  return (
    <div style={{ display: "flex" }}>
      <Button
        backgroundColor={"#3C82F6"}
        padding={"8px"}
        color={"#F9F9F9"}
        text="All"
      />
      <Button
        backgroundColor={"#3C82F6"}
        padding={"8px"}
        color={"#F9F9F9"}
        text="Active"
      />
      <Button
        backgroundColor={"#3C82F6"}
        padding={"8px"}
        color={"#F9F9F9"}
        text="Completed"
      />
    </div>
  );
};
