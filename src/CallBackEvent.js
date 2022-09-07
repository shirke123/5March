import React,{useState} from "react"

//text feild and  display data

function CallBackEvent(){

    const[text,setText]=useState('')

    const handleChange=(value)=>{
        setText(value)
    }

    return(
        <>
            <h1>CallBack Event</h1>
            <p>Text : {text}</p>
            <CheckCallBack onInputChange={handleChange}/>
        </>
    )
}

function CheckCallBack({onInputChange}){
    const[val,setVal]=React.useState()
    const handleInput=(event)=>{
        setVal(event.target.value)
    }

    const passValue=()=>{
        onInputChange(val)
    }

    return(
        <>
            <input type='text' onChange={handleInput}/>
            <button type="button" onClick={passValue}>Send</button>
        </>
    )
}

export default CallBackEvent