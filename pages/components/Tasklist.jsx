import { Button } from "./Button";
export const Tasklist = (props) => {
  const checkboxClick=()=>{
 props.setBugd((prev)=>{
return prev.map(el=>{
        if(el.id===props.id){
          return{...el, taskChecked: !el.taskChecked}
     }else{
      return el
     }
     });
    });
  };

  const deleteHandler=()=>{
    props.setBugd((prev)=>{
      return prev.filter((el)=>{
              if(el.id!=props.id){
                return true
              }
            });
          });
        }
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
        checked={props.taskChecked}
          onChange={checkboxClick}
        />
        <p style={{ fontSize: "12px" }}>{props.taskName}</p>
      </div>
      <Button
       text="Delete"
       
       onClick={deleteHandler}

      />
    </div>
  );
};
//Task.jsx
