import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import Header from './Header'; 
import Nav from './Nav';


const SingleOwner = () => {

const [ownerInput, setOwner] = useState([]);
const params = useParams();
const navigate = useNavigate();

const loadOwner = async() => {
    console.log(`hey ${params.id}`)
  
     const res = await axios.get(`https://localhost:7060/api/Owners/${params.id}`);
     setOwner(res.data);
     console.log(ownerInput);
 
 }; 
 useEffect(()=>{
     loadOwner();
 },[navigate]);

  return (
 <React.Fragment>
   <div className='jumbotron text-white'>
   <Header style="text-center text-white" text="Owner Details" />
  <form>
    
            <div className="form-group">
            <label htmlFor="uname" className ="form-label">Name</label>
            <input
            type ="text"
            id="uname"
            value={ownerInput.firstName}
            className="form-control"
           
            />
            </div>

            <div className="form-group">
            <label htmlFor="usurname" className ="form-label">Surname</label>
            <input
            type ="text"
            id="usurname"
            value={ownerInput.lastName}
            className="form-control"
            
            />
            </div>
             

            <div className="form-group">
            <label htmlFor="umobilenum" className ="form-label">Cellphone Number</label>
            <input
            type ="text"
            id="umobilenum"
            value={ownerInput.mobileNumber}
            className="form-control"
           
            />
            </div>

            <div className="form-group">
            <label htmlFor="umail" className ="form-label">Email Address</label>
            <input
            type ="email"
            id="umail"
            value={ownerInput.ownerEmail}
            className="form-control"
      
            />
            </div>

            <div className="form-group">
            <label htmlFor="uaddress" className ="form-label">Postal Address</label>
            <input
            type ="text"
            id="uaddress"
            value={ownerInput.address}
            className="form-control"
            />
            </div>
      </form>
      </div>
</React.Fragment>

  
  );
}


export default SingleOwner;