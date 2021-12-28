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
  Oname:"",
  Id: 1,
  Osurname: "",
  Oidnumber: "",
  Ocellnum:"",
  Omail:"",
  Opostal: "",
});


const client = axios.create({baseURL: 'http://localhost:5054/'});

  const handleFormSubmit = e => {
  e.preventDefault();
  var data = new FormData();
  data.append('Oidnumber', formData.Oidnumber);
  data.append('Id',formData.Id);
  data.append('Oname', formData.Oname);
  data.append('Osurname', formData.Osurname);
  data.append('Ocellnum', formData.Ocellnum);
  data.append('Omail', formData.Omail);
  data.append('Opostal', formData.Opostal);
  //console.log(formData); 
  const postData = async() =>{
  const res = client.post('/api/Owners',data);
  Swal.fire({
    text: "Form Submitted!",
    icon: "success"
    })
  setFormData({Oname:"",Osurname:"",Oidnumber:"",Ocellnum:"",Omail:"",Opostal:""});
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
            value={formData.Oname}
            className="form-control"
            onChange ={e=>setFormData({...formData, Oname:e.target.value})}
            placeholder="Enter Owner Name..."
            required
            />
            </div>

            <div className="form-group">
            <label htmlFor="usurname" className ="form-label">Surname</label>
            <input
            type ="text"
            id="usurname"
            value={formData.Osurname}
            className="form-control"
            onChange={e=>setFormData({...formData, Osurname:e.target.value})}
            placeholder="Enter owner Surname..."
            required
            />
            </div>
             
             
            <div className="form-group">
            <label htmlFor="idnum" className ="form-label">ID number</label>
            <input
            type ="text"
            id="idnum"
            value={formData.Oidnumber}
            className="form-control"
            onChange={e=>setFormData({...formData, Oidnumber:e.target.value})}
            placeholder="Enter owner ID number..."
            required
            />
            </div>

            <div className="form-group">
            <label htmlFor="umobilenum" className ="form-label">Cellphone Number</label>
            <input
            type ="text"
            id="umobilenum"
            value={formData.Ocellnum}
            className="form-control"
            onChange={e=>setFormData({...formData, Ocellnum:e.target.value})}
            placeholder="Enter User Cellphone Number..."
            required
            />
            </div>

            <div className="form-group">
            <label htmlFor="umail" className ="form-label">Email Address</label>
            <input
            type ="email"
            id="umail"
            value={formData.Omail}
            className="form-control"
            onChange={e=>setFormData({...formData, Omail:e.target.value})}
            placeholder="Enter owner Email end email with @xyz.com e.g. mini@xyz.com"
            required
            />
            </div>

            <div className="form-group">
            <label htmlFor="uaddress" className ="form-label">Postal Address</label>
            <input
            type ="text"
            id="uaddress"
            value={formData.Opostal}
            className="form-control"
            onChange={e=>setFormData({...formData, Opostal:e.target.value})}
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
  Oname: PropTypes.string,
  Osurname: propTypes.string,
  Oidnumber: propTypes.string, 
  Ocellnum: propTypes.string,
  Omail: propTypes.string,
  Opostal: propTypes.string
};

export default AddOwner;