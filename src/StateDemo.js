import React from 'react'

//  function StateDemo() {

//     let message="hellooo";
//     const[Message,setMessage]=React.useState('helloooo')

//     const check=()=>{
//         setMessage="hiii"
//         console.log(Message);
//     }

class StateDemo extends React.Component{

    constructor(){
        super()
            this.state={
                Message:"Hellooo"
            }
        }
        check=()=>{
            this.setState({Message:"hiiiii"})
        }
    
 render(){
  return (
    <div>
     <h2>StateDemo!!!</h2>
     <p>Message:{this.state.Message}</p>
     <button type='button'onClick={this.check}>Check</button>
    </div>
  )
}
}
export default StateDemo;