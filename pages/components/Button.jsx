export const Button = ({ text, backgroundColor, click, color }) => {
  return (
    <div style={{}}>
      <button
        style={{ borderRadius: "6px", backgroundColor, color: color }}
        onClick={click}
      >
        {text}
      </button>
    </div>
  );
};

// const addNewTask=()=>{
//   if(value===""){
//     alert:"please enter task name"
//   }
// }
