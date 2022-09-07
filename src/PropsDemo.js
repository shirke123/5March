import React from 'react'

//Props:- (properties) information that is passed 
        //from one component to another component.
        //props are immutable

 function PropsDemo() {

    const message="helloooo"

    const person={
     name:"Abc",
     city:"Pune"
    }
    const userList=[
     {
         id:1,
         name:"A"
     },{
         id:2,
         name:"B"
     },{
         id:3,
         name:"C"
     }
 ]

  return (
    <div>
       <h1>Props Demo!!!</h1>
       <ChildComponent message={message}person={person}/>
       <DisplayList userList={userList}/>     

    </div>
  )
}

function ChildComponent({message,person}){

  return(
      <div>
       <h2>Test Props!!!</h2>
       <p>Message:{message}</p>
       <p>name:{person.name}</p>
       <p>city:{person.city}</p>
    </div>
  )
}
function DisplayList(props){
 return(
     <div>
         <ul>
             {
                 props.userList.map((user)=>(
                     <li>{user.id+" | "+user.name}</li>
                 ))
             }
         </ul>
     </div>
 )
}
export default PropsDemo;