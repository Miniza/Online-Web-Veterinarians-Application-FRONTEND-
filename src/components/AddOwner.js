import React, {useState, useEffect} from 'react'; 
import '../App.css';
import Swal from 'sweetalert2'; 
import axios from 'axios'; 
import Nav from './Nav';
import Button from './Button';

const AddOwner = () => {

const [formData, setFormData] = useState({
  firstName:"",
  lastName: "",
  mobileNumber: "",
  ownerEmail:"",
  address:"",
});


const client = axios.create({baseURL: 'http://localhost:5000/'});

  const handleFormSubmit = e => {
  e.preventDefault();
  var data = new FormData();
  data.append('firstName', formData.firstName);
  data.append('lastName',formData.lastName);
  data.append('mobileNumber', formData.mobileNumber);
  data.append('ownerEmail', formData.ownerEmail);
  data.append('address', formData.address);
  //console.log(formData); 
  const postData = async() =>{
  const res = client.post('/api/Owners',data);
  Swal.fire({
    text: "Form Submitted!",
    icon: "success"
    })
  setFormData({firstName:"",lastName:"",mobileNumber:"",ownerEmail:"",address:""});
  }
  postData();
 }
  return (
 <React.Fragment>
   <Nav/>
   <div className='jumbotron text-white'>
  <form onSubmit={handleFormSubmit} className='was-validated'>
    
            <div className="form-group">
            <label htmlFor="uname" className ="form-label">Name</label>
            <input
            type ="text"
            id="uname"
            value={formData.firstName}
            className="form-control"
            onChange ={e=>setFormData({...formData, firstName:e.target.value})}
            placeholder="Enter Owner Name..."
            required
            />
            </div>

            <div className="form-group">
            <label htmlFor="usurname" className ="form-label">Surname</label>
            <input
            type ="text"
            id="usurname"
            value={formData.lastName}
            className="form-control"
            onChange={e=>setFormData({...formData, lastName:e.target.value})}
            placeholder="Enter owner Surname..."
            required
            />
            </div>

            <div className="form-group">
            <label htmlFor="umobilenum" className ="form-label">Cellphone Number</label>
            <input
            type ="text"
            id="umobilenum"
            value={formData.mobileNumber}
            className="form-control"
            onChange={e=>setFormData({...formData, mobileNumber:e.target.value})}
            placeholder="Enter User Cellphone Number..."
            required
            />
            </div>

            <div className="form-group">
            <label htmlFor="umail" className ="form-label">Email Address</label>
            <input
            type ="email"
            id="umail"
            value={formData.ownerEmail}
            className="form-control"
            onChange={e=>setFormData({...formData, ownerEmail:e.target.value})}
            placeholder="Enter owner Email Address"
            required
            />
            </div>

            <div className="form-group">
            <label htmlFor="uaddress" className ="form-label">Postal Address</label>
            <input
            type ="text"
            id="uaddress"
            value={formData.address}
            className="form-control"
            onChange={e=>setFormData({...formData, address:e.target.value})}
            placeholder="Enter owner Postal Address..."
            required
            />
            </div>
            <Button style="btn btn-primary" text="Submit" />
      </form>
      </div>
</React.Fragment>

  
  );
}


export default AddOwner;