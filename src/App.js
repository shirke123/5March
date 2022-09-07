// import Home from './reactrouter/Home'
// import Services from './reactrouter/Services';
// import Contact from './reactrouter/Contact';

import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import { View } from './components/View';
import AddUser from './htasktwo/AddUser';
import Navbar from './htasktwo/NavBar';
import Serach from './htasktwo/Serach';

import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';





function App() {
  return (
   <div>
    {/* <ul>
       <li><a href="/home">Home</a></li>
       <li><a href="/service">Service</a></li>
       <li><a href="/contact">Contact</a></li>
    </ul>  */}
    
   {/* <BrowserRouter>
   <NavBar/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
     </BrowserRouter> */}

 
 
 <BrowserRouter>
 <Navbar/>
        <Routes>
        <Route exact path="/from" element={<AddUser/>} />
         <Route exact path="/" element={<View/>} /> 

           {/* {/* <Route exact path="/" element={<HomePage/>} />
           <Route exact path="/adduser" element={<AddPatient/>} />
          <Route exact path="/edituser/:id" element={<EditPatient/>} />
          <Route exact path="/viewuser/:id" element={<ViewPatient/>} />  */}
         </Routes> 
      </BrowserRouter>  



    </div>
  );
}

export default App;




















