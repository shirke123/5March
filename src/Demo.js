import Test from "./Test"

const message="React Hello World!!!"

const person={
   name:"John",
   city:"Pune"
}

const userList=[{
    id:1,
    name:'John'
},{
    id:2,
    name:'Peter'
}]

function Demo(){
   return(
    <div>
        <Test/>
      <h1>React Demo!!!</h1>
      <p>New Content!!!</p>
      <p>Message : {message}</p>
      <p>Name : {person.name}</p>
      <p>City : {person.city}</p>
      <ul>
          {/* <li>{userList[0].name}</li>
          <li>{userList[1].name}</li> */}
          {
              userList.map((user)=>(
                  <li>{user.name}</li>
              ))
          }
      </ul>
    </div>
   )
}

export default Demo