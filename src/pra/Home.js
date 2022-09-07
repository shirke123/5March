// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
// import React,{useState, useEffect} from 'react'
// import { View } from 'View';



// const getDatafromLS=()=>{
//     const data = localStorage.getItem('users');
//     if(data){
//       return JSON.parse(data);
//     }
//     else{
//       return []
//     }
//   }
// export default Home;

// function Home() {
    
// // main array of objects state || books state || books array of objects
// const [users, setusers]=useState(getDatafromLS());

// // input field states
// const [firstName, setFirstName]=useState('');
// const [lastName, setLastName]=useState('');
// const [address, setAddress]=useState('');
// // const [dateofbirth, setDateOfBirth]=useState('');
// // const [email, setEmail]=useState('');
// // const [password, setPassword]=useState('');
// // const [confirmpassword, setConfirmPassword]=useState('');



// // form submit event
// const handleAddUsersSubmit=(e)=>{
//   e.preventDefault();
//   // creating an object
//   let user={
//     firstName,
//     lastName,
//     address,
//     // dateofbirth,
//     // email,
//     // password,
//     // confirmpassword

//   }
//   setusers([...users,user]);
//   setFirstName('');
//   setLastName('');
//   setAddress('');
// //   setDateOfBirth('');
// //   setEmail('');
// //   setPassword('');
// //   setConfirmPassword('');

// }

// //delete book from LS
// const deleteUser=(isbn)=>{
//   const filteredUsers=users.filter((element,index)=>{
//     return element.firstName !== firstName
//   })
//   setusers(filteredUsers);
// }

// // saving data to local storage
// useEffect(()=>{
//   localStorage.setItem('user',JSON.stringify(users));
// },[users])


//     //validations
//     const validationSchema = Yup.object().shape({
//         title: Yup.string()
//             .required('Title is required'),
//         firstName: Yup.string()
//             .required('First Name is required'),
//         lastName: Yup.string()
//             .required('Last name is required'),
//             address: Yup.string()
//             .required('Address is required'),
//         dob: Yup.string()
//         // .required('Date of Birth is required')
//         //     .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
//         // email: Yup.string()
//         //     .required('Email is required')
//         //     .email('Email is invalid'),
//         // password: Yup.string()
//         //     .min(6, 'Password must be at least 6 characters')
//         //     .required('Password is required'),
//         // confirmPassword: Yup.string()
//         //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
//         //     .required('Confirm Password is required'),
//         // acceptTerms: Yup.bool()
//         //     .oneOf([true], 'Accept Ts & Cs is required')
//     });

//     const formOptions = { resolver: yupResolver(validationSchema) };

//     const { register, handleSubmit, reset, formState } = useForm(formOptions);
//     const { errors } = formState;

//     function onSubmit(data) {
//         alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
//         return false;
//     }

//     const [popup,setPop]=useState(false)
//     const handleClickOpen=()=>{
//         setPop(!popup)
//     }
//     const closePopup=()=>{
//         setPop(false)
//     }

//     return (
//         <div>
//             <button onClick={handleClickOpen}>Add</button>
//             <div>
//                 {
//                     popup?
//                     <div className="main">
//                         <div className="popup">
//                             <div className="popup-header">
//                                 <h1 onClick={closePopup}></h1>
//                             </div>

//         <div className = "container">
//                 <div className = "row">
//                     <div className = "card col-md-6 offset-md-3 offset-md-3">
//                        {
//                           <h2 className = "text-center">User Register</h2>
//                        }
//                         <div className = "card-body">
//                 <form   onSubmit={handleSubmit(onSubmit)}>

//                     <div className="form-row"> 

                   
//             <div className = "form-group mb-2">
//             <label className = "form-label"> First Name :</label>
//      <input name="firstName"placeholder="Enter your  first Name" type="text" 
//  {...register('firstName')} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
//  onChange={(e)=>setFirstName(e.target.value)} value={firstName}></input>
//     <div className="invalid-feedback">{errors.firstName?.message}</div>
//  </div>
                   
//  <div className = "form-group mb-2">
// <label className = "form-label"> Last Name :</label>
//     <input name="lastName" placeholder="Enter your  last Name"type="text" 
//     {...register('lastName')} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} 
//     onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
//     <div className="invalid-feedback">{errors.lastName?.message}</div>
//     </div>
//     </div>


//     <div className = "form-group mb-2">
//  <label className = "form-label"> Address :</label>
//  <input name="Address" placeholder="Enter your  Address" type="text"
//   {...register('address')} className={`form-control ${errors.address ? 'is-invalid' : ''}`}
//   onChange={(e)=>setAddress(e.target.value)} value={address} />
// <div className="invalid-feedback">{errors.address?.message}</div>
//     </div>

//     {/* <div className = "form-group mb-2">
//  <label className = "form-label"> Date Of Birth:</label>
//      <input name="dob" placeholder="Enter your Dob"type="date" 
//   {...register('dob')} className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
//   onChange={(e)=>setDateOfBirth(e.target.value)} value={dateofbirth} />
//     <div className="invalid-feedback">{errors.dob?.message}</div>
//       </div>

//  <div className = "form-group mb-2">
//     <label className = "form-label"> Email:</label>
//     <input name="email" placeholder="Enter your  Email id"
//      type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
//      onChange={(e)=>setEmail(e.target.value)} value={email}/>
//     <div className="invalid-feedback">{errors.email?.message}</div>
//     </div>

//     <div className = "form-group mb-2">
//      <label className = "form-label"> Password:</label>
//      <input name="password" placeholder="Enter your  password"
//     type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//     onChange={(e)=>setPassword(e.target.value)} value={password} />
//      <div className="invalid-feedback">{errors.password?.message}</div>
//       </div>

//          <div className = "form-group mb-2">
//      <label className = "form-label"> Confirm Password:</label>
//         <input name="confirmPassword"placeholder="Enter your  confirm password" type="password" 
//         {...register('confirmPassword')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} 
//         onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword}/>
//          <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
//          </div> */}

//          <div className="form-group form-check">
//         <input name="acceptTerms" type="checkbox" {...register('acceptTerms')} id="acceptTerms" className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`} />
//         <label htmlFor="acceptTerms" className="form-check-label">Accept Terms & Conditions</label>
//          <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
//        </div>

//        <div className="form-group">
//        <button className = "btn btn-success">Register</button>
//          <button type="button" onClick={() => reset()} className="btn btn-danger">Reset</button>
//         </div>
//                 </form>  

//                 <div className='view-container'>
//           {users.length>0&&<>
//             <div className='table-responsive'>
//               <table className='table'>
//                 <thead>
//                   <tr>
//                     <th>firstName</th> 
//                    <th>lastName</th>
//                     <th> address</th>
//                     <th></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <View users={users} deleteUser={deleteUser}/>
//                 </tbody>
//               </table>
//             </div>
//             <button className='btn btn-danger btn-md'
//             onClick={()=>setusers([])}>Remove All</button>
//           </>}
//           {users.length < 1 && <div>No User are added yet</div>}
//         </div>
    
//         </div>
//         </div>
//          </div>
//          </div>
//          </div>
//     </div>:""
// }

// </div>
// </div>


//     );
// }
