import React, { useReducer } from 'react'

//const[count,setCount]=useState(0)

const initialState={count:0}

//function which consists of a switch case/condition
const reducer=(state,action)=>{
    switch (action.type) {
        case 'increment':
            return {count:state.count+1}
            
        case 'decrement':
            return {count:state.count-1}
    }
}

function UseReducerDemo(){

    const [state, dispatch]=useReducer(reducer,initialState)

    return(
        <>
            <p>Count : {state.count}</p>
            <button type='button' onClick={()=>dispatch({type:'increment'})}>+</button>
            <button type='button' onClick={()=>dispatch({type:'decrement'})}>-</button>
        </>
    )
}

export default UseReducerDemo