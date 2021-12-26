import React, {useState, useEffect} from 'react'; 
import '../App.css';
import Swal from 'sweetalert2'; 
import axios from 'axios'; 
import Nav from './Nav';
import Button from './Button';
import PropTypes from 'prop-types';
import propTypes from 'prop-types';

const AddOwner = () => {

const [formData, setFormData] = useState({
  oname:"",
  osurname: "",
  oidnumber: "",
  ocellnum:"",
  omail:"",
  opostal: "",
});


const client = axios.create({baseURL: 'http://localhost:8000/'});

  const handleFormSubmit = e => {
  e.preventDefault();
  var data = new FormData();
  data.append('oname', formData.oname);
  data.append('osurname', formData.osurname);
  data.append('oidnumber', formData.oidnumber);
  data.append('ocellnum', formData.ocellnum);
  data.append('omail', formData.omail);
  data.append('opostal', formData.opostal);

  const postData = async() =>{
  const res = client.post('/api/add-owner', data);
  Swal.fire({
    text: "Form Submitted!",
    icon: "success"
    })
  setFormData({oname:"",osurname:"",oidnumber:"",ocellnum:"",omail:"",opostal:""});
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
            value={formData.oname}
            className="form-control"
            onChange ={e=>setFormData({...formData, oname:e.target.value})}
            placeholder="Enter Owner Name..."
            required
            />
            </div>

            <div className="form-group">
            <label htmlFor="usurname" className ="form-label">Surname</label>
            <input
            type ="text"
            id="usurname"
            value={formData.osurname}
            className="form-control"
            onChange={e=>setFormData({...formData, osurname:e.target.value})}
            placeholder="Enter owner Surname..."
            required
            />
            </div>
             
             
            <div className="form-group">
            <label htmlFor="idnum" className ="form-label">ID number</label>
            <input
            type ="text"
            id="idnum"
            value={formData.oidnumber}
            className="form-control"
            onChange={e=>setFormData({...formData, oidnumber:e.target.value})}
            placeholder="Enter owner ID number..."
            required
            />
            </div>

            <div className="form-group">
            <label htmlFor="umobilenum" className ="form-label">Cellphone Number</label>
            <input
            type ="text"
            id="umobilenum"
            value={formData.ocellnum}
            className="form-control"
            onChange={e=>setFormData({...formData, ocellnum:e.target.value})}
            placeholder="Enter User Cellphone Number..."
            required
            />
            </div>

            <div className="form-group">
            <label htmlFor="umail" className ="form-label">Email Address</label>
            <input
            type ="email"
            id="umail"
            value={formData.omail}
            className="form-control"
            onChange={e=>setFormData({...formData, omail:e.target.value})}
            placeholder="Enter owner Email..."
            required
            />
            </div>

            <div className="form-group">
            <label htmlFor="uaddress" className ="form-label">Postal Address</label>
            <input
            type ="text"
            id="uaddress"
            value={formData.opostal}
            className="form-control"
            onChange={e=>setFormData({...formData, opostal:e.target.value})}
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

AddOwner.propTypes = {
  oname: PropTypes.string,
  osurname: propTypes.string,
  oidnumber: propTypes.string, 
  ocellnum: propTypes.string,
  omail: propTypes.string,
  opostal: propTypes.string
};

export default AddOwner;