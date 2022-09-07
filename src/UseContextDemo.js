import React, { createContext } from 'react'
import ContextCheck from './ContextCheck'
import ContextCheck1 from './ContextCheck1'

export const MyContext=createContext()

function UseContextDemo(){

    const[value,setValue]=React.useState(0)

    const addValue=()=>{
        setValue(value+1)
    }

    return(
        <MyContext.Provider value={{value,setValue}}>
            <h1>Use Context Demo!!!</h1>
            <p>Value is : {value}</p>
            <button type='button' 
                    onClick={addValue}>Add</button>
            <ContextCheck/>
            <ContextCheck1/>
        </MyContext.Provider>
    )
}

export default UseContextDemo
