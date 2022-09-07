
import React from 'react'
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

class LifeCycleMethod extends React.Component{

    constructor(){
        super()
        this.state={
            number:0
        }
    }
    componentDidMount(){
        console.log('In component did mount!!!');
    }
    componentDidUpdate(){
        console.log('In component did update!!!');
    }

    add=()=>{
        this.setState({number:this.state.number+1})
    }

    render(){
        const component=this.state.number ? 
                       <ComponentOne/>:<ComponentTwo/>
        return(
            <div>
                <h1>Life Cycle Methods!!!</h1>
                <p>Number is: {this.state.number}</p>
                <button type='button' 
                     onClick={this.add}>Add</button>
                {component}  
            </div>
        )
    }
}

export default LifeCycleMethod
