import React,{useState, useEffect} from 'react'
import { View } from './View';
import { useForm } from 'react-hook-form';
 import { yupResolver } from '@hookform/resolvers/yup';
 import * as Yup from 'yup';

const getDatafromLS=()=>{
  const data = localStorage.getItem('users');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const Form = () => {

  const [users, setusers]=useState(getDatafromLS());

  const [firstName, setFirstName]=useState('');
  const [lastName, setLastName]=useState('');
  const [Address, setAddress]=useState('');

  const handleAddUserSubmit=(e)=>{
    e.preventDefault();

    let user={
      firstName,
      lastName,
      Address
    }
    setusers([...users,user]);
    setFirstName('');
    setLastName('');
    setAddress('');
  }

  const deleteUser=(address)=>{
    const filteredUsers=users.filter((element,index)=>{
      return element.address !==address
    })
    setusers(filteredUsers);
  }

  useEffect(()=>{
    localStorage.setItem('users',JSON.stringify(users));
  },[users])



///validations
  const validationSchema = Yup.object().shape({
    title: Yup.string()
        .required('Title is required'),
    firstName: Yup.string()
        .required('First Name is required'),
    lastName: Yup.string()
        .required('Last name is required'),
        address: Yup.string()
        .required('Address is required'),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    
    function onSubmit(data) {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }

    const [popup,setPop]=useState(false)
        const handleClickOpen=()=>{
            setPop(!popup)
        }
        const closePopup=()=>{
            setPop(false)
        }

  return (
            <div>
              <br/>
            <button onClick={handleClickOpen}>Add</button>
             <div>
                {
                popup?
                    <div className="main">
                        <div className="popup">
                            <div className="popup-header">
                                <h1 onClick={closePopup}></h1>
                            </div>


    <div className = "container">
    <br/>
    <div className = "row">
        <div className = "card col-md-6 offset-md-3 offset-md-3">
           {
              <h2 className = "text-center">User Register</h2>
           }
            <div className = "card-body">


          <form autoComplete="off" className='form-group'
      onSubmit={handleAddUserSubmit} >                    


         <div className = "form-group mb-2">
     <label className = "form-label"> First Name :</label>
      <input name="firstName"placeholder="Enter your  first Name" type="text" 
 {...register('firstName')} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
 onChange={(e)=>setFirstName(e.target.value)} value={firstName}></input>
    <div className="invalid-feedback">{errors.firstName?.message}</div>
 </div>

 <div className = "form-group mb-2">
<label className = "form-label"> Last Name :</label>
<input name="lastName" placeholder="Enter your  last Name"type="text" 
{...register('lastName')} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} 
onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
<div className="invalid-feedback">{errors.lastName?.message}</div>
</div>


<div className = "form-group mb-2">
<label className = "form-label"> Address :</label>
<input name="Address" placeholder="Enter your  Address" type="text"
{...register('address')} className={`form-control ${errors.address ? 'is-invalid' : ''}`} 
onChange={(e)=>setAddress(e.target.value)} value={Address}/>
<div className="invalid-feedback">{errors.address?.message}</div>
</div>

<div className="form-group">
<button type="submit" className = "btn btn-success">Register</button>
<button type="button" onClick={() => reset()} className="btn btn-danger">Reset</button>
 </div>      
            
          </form>
        </div>
        </div>
        </div>
<br/><br/><br/>
        <div className='view-container'>
          {users.length>0&&<>
            <div className='table-responsive'>
            <table class="table">
            <thead class="table-light">

                  <tr>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>Adddres</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <View users={users} deleteUser={deleteUser}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setusers([])}>Remove All</button>
          </>}
          {users.length < 1 && <div>No Users are added yet</div>}
        </div>
</div>
    </div>
    </div>:""
 }

 </div>
 </div>
  )
}

export default Form