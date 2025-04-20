export const Button = (props ) => {
  const {text, onClick, aliButtonDaragdsanbe} = props;
  return (
  
      <button
        style={{
          height:"100%",
          border: "none",
          borderRadius: "6px",
        padding:"8px",
          backgroundColor:
           text === aliButtonDaragdsanbe || text==="Add"
           ? "#3C82F6" 
           : "#f3f4f6",
        }}
        onClick={onClick}
      >
        {text}
      </button>
 
  );
};
