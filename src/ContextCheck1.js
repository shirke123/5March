import { useContext } from "react"
import { MyContext } from "./UseContextDemo"

function ContextCheck1(){

    const {value,setValue}=useContext(MyContext)

    const changeValue=()=>{
        setValue(value+1)
    }

    return(
        <>
             <h2>Context Check1</h2>
             <p>Value is: {value}</p>
             <button type="button" onClick={changeValue}>Change</button>
        </>
       
    )
}

export default ContextCheck1