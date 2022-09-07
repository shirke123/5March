import React from 'react'

class ComponentTwo extends React.Component{

    componentWillUnmount(){
        console.log('Comp Two unmounted!!!');
    }

    render(){
        return(
            <div>
                <h1>ComponentTwo</h1>
                <p>This is Comp Two!!!</p>
            </div>
        )
    }
}

export default ComponentTwo
