import { useContext } from "react"
import { MyContext } from "./UseContextDemo"

function ContextCheck(){

    const {value,setValue}=useContext(MyContext)

    const changeValue=()=>{
        setValue(value+1)
    }

    return(
        <>
             <h2>Context Check</h2>
             <p>Value is: {value}</p>
             <button type="button" onClick={changeValue}>Change</button>
        </>
       
    )
}

export default ContextCheck