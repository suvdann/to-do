import {Input} from "./components/Input"
import {Button} from"./components/Button"
const Todo=()=>{
    return(
        <div style={{display:"flex", justifyContent:"center", backgroundColor:"whitegrey",width: "100vw", height: "100vh"}}>
            <div style={{ width:"377px", height:"290px", marginTop:"140px", backgroundColor:"white",boxShadow: "  10px 10px 10px 10px grey"}}>
          <h1 style={{textAlign:"center"}}>To-Do list</h1> 
          <Input/> 
          <Button/>
         </div>
        </div>
        
    )
}
export default Todo