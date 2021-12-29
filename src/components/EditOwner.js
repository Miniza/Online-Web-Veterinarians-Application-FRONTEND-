import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'; 
import Nav from './Nav';
import Button from './Button';


const EditOwner = () => {

const [ownerInput, setOwner] = useState([]);
const params = useParams();
const navigate = useNavigate();

const loadOwner = async() => {
    console.log(`hey ${params.id}`)
  
     const res = await axios.get(`http://localhost:5054/api/Owners/${params.id}`);
     setOwner(res.data);
     console.log(ownerInput);
 
 }; 
 useEffect(()=>{
     loadOwner();
 },[navigate]);

const handleInput = (e) => {
    e.persist();
    setOwner({...ownerInput, [e.target.name]: e.target.value });
}



  const handleUpdate = e => {
  e.preventDefault();
  const data = {
      Oname: ownerInput.Oname,
      Osurname: ownerInput.Osurname,
      Oidnumber: ownerInput.Oidnumber,
      Ocellnum: ownerInput.Oidnumber,
      Omail: ownerInput.Omail,
      Opostal: ownerInput.Omail
  }

  //console.log(formData); 
  const postData = async() =>{
  const res = axios.put(`http://localhost:5054/api/Owners/${params.id}`,data);
  Swal.fire({
    text: "Owner Updated!",
    icon: "success"
    })
  }
  postData();
 }
  return (
 <React.Fragment>
   <Nav/>
   <div className='jumbotron text-white'>
  <form onSubmit={handleUpdate}>
    
            <div className="form-group">
            <label htmlFor="uname" className ="form-label">Name</label>
            <input
            type ="text"
            id="uname"
            value={ownerInput.oname}
            className="form-control"
            onChange ={e=>setOwner(e.target.value)}
            required
            />
            </div>

            <div className="form-group">
            <label htmlFor="usurname" className ="form-label">Surname</label>
            <input
            type ="text"
            id="usurname"
            value={ownerInput.osurname}
            className="form-control"
            onChange={handleInput}
            placeholder="Enter owner Surname..."
            required
            />
            </div>
             
             
            <div className="form-group">
            <label htmlFor="idnum" className ="form-label">ID number</label>
            <input
            type ="text"
            id="idnum"
            value={ownerInput.oidnumber}
            className="form-control"
            onChange={handleInput}
            placeholder="Enter owner ID number..."
            required
            />
            </div>

            <div className="form-group">
            <label htmlFor="umobilenum" className ="form-label">Cellphone Number</label>
            <input
            type ="text"
            id="umobilenum"
            value={ownerInput.ocellnum}
            className="form-control"
            onChange={handleInput}
            placeholder="Enter User Cellphone Number..."
            required
            />
            </div>

            <div className="form-group">
            <label htmlFor="umail" className ="form-label">Email Address</label>
            <input
            type ="email"
            id="umail"
            value={ownerInput.omail}
            className="form-control"
            onChange={handleInput}
            placeholder="Enter owner Email end email with @xyz.com e.g. mini@xyz.com"
            required
            />
            </div>

            <div className="form-group">
            <label htmlFor="uaddress" className ="form-label">Postal Address</label>
            <input
            type ="text"
            id="uaddress"
            value={ownerInput.opostal}
            className="form-control"
            onChange={handleInput}
            placeholder="Enter owner Postal Address..."
            required
            />
            </div>
            <Button style="btn btn-primary" text="Update" />
      </form>
      </div>
</React.Fragment>

  
  );
}


export default EditOwner;