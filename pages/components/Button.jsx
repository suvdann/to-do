export const Button = ({ text, backgroundColor, click, color,padding }) => {
  return (
    <div style={{}}>
      <button
        style={{ border:"none", borderRadius: "6px", backgroundColor, color: color,padding:padding }}
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
