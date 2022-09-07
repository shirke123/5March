import React from 'react'

class ComponentOne extends React.Component{

    componentWillUnmount(){
        console.log('Comp One unmounted!!!');
    }

    render(){
        return(
            <div>
                <h1>ComponentOne</h1>
                <p>This is Comp One!!!</p>
            </div>
        )
    }
}

export default ComponentOne