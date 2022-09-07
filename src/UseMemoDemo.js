import React,{useMemo} from 'react'

function UseMemoDemo(){

    const[text,setText]=React.useState('')
    const[search,setSearch]=React.useState('')

    const users=[{
        id:1,
        name:'John',
    },{
        id:2,
        name:'Peter'
    },{
        id:3,
        name:'Richard'
    }]

    const onChange=(event)=>{
        setText(event.target.value)
    }

    const searchData=()=>{
        setSearch(text)
    }

    const filteredData=useMemo(()=>
        users.filter((user)=>{
            console.log('hiiiiiiii');
            return user.name.includes(search)
        })
    ,[search])

    return(
        <div>
            <h1>User List</h1>
            <input type='text' onChange={onChange}/>
            <button type="button" onClick={searchData}>Search</button>
            <DisplayData userList={filteredData}/>
        </div>
    )
}

function DisplayData({userList}){

    return(
        <div>
            <ul>
                {
                   userList && userList.map((user)=>(
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UseMemoDemo