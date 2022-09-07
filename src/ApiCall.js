import React,{ useEffect } from "react";
import axios from 'axios'

// install axios =npm install axios
// import axios
// []-empty array[infinite loop]
// button click a display the data

function ApiCall(){

    const[data,setData]=React.useState([])

    useEffect(()=>{
        console.log('hiiiiiii');
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response)=>response.data)
            .then(res=>{
                setData(res)
            })
    },[])

    const getData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.data)
        .then(res=>{
            setData(res)
        })
    }

    return(
        <>
            <h1>Api Call</h1>
            <button type="button" onClick={getData}>Get Data</button>
            <ul>
                {data.map((user,index)=>(
                    <div key={index}>
                        <li>{user.username}</li>
                    </div>
                   
                ))}
            </ul>
        </>
    )
}

export default ApiCall