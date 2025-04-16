import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Tasklist } from "./components/Tasklist";
const Todo = () => {
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
        }}
      >
        <div style={{ marginLeft: "10px", padding: "4px 12px 4px 12px" }}>
          <h1 style={{ textAlign: "center", fontSize: "20px" }}>To-Do list</h1>
          <Input />
          <div style={{ display: "flex", gap: "6px" }}>
            <Button />
          </div>
        </div>
        <Tasklist />
        <div style={{ color: "#6B7280", textAlign: "center" }}>
          <p>No tasks yet. Add one above!</p>

          <p>Powered by </p>
          <p style={{ color: "#3B73ED" }}>Pinecone academy</p>
        </div>
      </div>
    </div>
  );
};
export default Todo;
