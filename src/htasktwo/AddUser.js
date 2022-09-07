import { Link, useNavigate } from "react-router-dom";
import React,{useState, useEffect} from 'react'
import View from "../htasktwo/View";



const getDatafromLS=()=>{
    const data = localStorage.getItem('books');
    if(data){
      return JSON.parse(data);
    }
    else{
      return []
    }
  }
export default function AddUser() {


    const [user, setUsers] = useState(getDatafromLS({
        firstname: "",
        lastname: "",
        address: "",
        email: "",
        mobileno: "",
      }));
    
      const { firstname, lasname, address, email,mobileno } =user;
    
      const onInputChange = (e) => {
        setUsers({ ...user, [e.target.name]: e.target.value });
      };


      const onSubmit = async (e) => {
        e.preventDefault();
      };



       // delete user from LS
  const deleteUsers=(isbn)=>{
    const filteredBooks=user.filter((element,index)=>{
      return element.isbn !== isbn
    })
    setUsers(filteredBooks);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('users',JSON.stringify(user));
  },[user])

  return (
    <div>
       <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h3 className="text-center m-4">User Register</h3>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                FirstName
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your FirstName"
                name="FirstName"
                value={firstname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Lastname" className="form-label">
                LastName
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your LastName"
                name="LastName"
                value={lasname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
                Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Address"
                name="Address"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor=" MobileNo." className="form-label">
                MobileNo.
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Mobile No."
                name="MobileNo"
                value={mobileno}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className = "btn btn-success">
              Submit
            </button>
            <Link className="btn btn-danger" to="/">
              Cancel
            </Link>
          </form>
        </div>
        </div>
    </div>


        <div className='view-container'>
          {user.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>ISBN#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View user={user} deleteUsers={deleteUsers}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setUsers([])}>Remove All</button>
          </>}
          {user.length < 1 && <div>No User are added yet</div>}
        </div>

      </div>
    
  )
}
