import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home(){

    const message="Hiiiiii"

    const person={
        id:1,
        name:'A',
        city:'Pune'
    }

    const navigate=useNavigate()

    const sendData=()=>{
        navigate(`/services/${message}`)  // appending to url
    }

    const sendObject=()=>{ 
        navigate(`/contact`,{  //passing data as state object
            state:person
        })
    }

    return(
        <>
            <h1>Home Component!!!</h1>
            <p>This is Home Component!!!</p>
            <button type='button' onClick={sendData}>Send</button>
            <button type='button' onClick={sendObject}>Send Object</button>
        </>
    )
}

export default Home