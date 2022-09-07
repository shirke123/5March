import React from 'react'
import { useLocation } from 'react-router-dom'


//react router install
// And then import
function Contact(){

    const personObj=useLocation()

    return(
        <>
            <h1>Contact Component!!!</h1>
            <p>This is Contact Component!!!</p>
            <p>Id : {personObj.state.id}</p>
            <p>Name : {personObj.state.name}</p>
            <p>City : {personObj.state.city}</p>
        </>
    )
}

export default Contact