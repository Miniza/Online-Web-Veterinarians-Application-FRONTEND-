import React, {useState, useEffect} from 'react'; 
import '../App.css'; 
import Swal from 'sweetalert2'; 
import axios from 'axios'; 
import Nav from './Nav';
import Button from './Button';
import PropTypes from 'prop-types';
import propTypes from 'prop-types';

const AddPet = () => {

const [formInfo,setFormInfo] = useState({
  pname:"",
  pid:"",
  ptype:"",
  pbreed:"",
  powner:"",
  oidnumber: "",
  pdob:""
});

const client = axios.create({baseURL: 'http://localhost:8000/'})


const handleFormSubmit = e => {
  var data = new FormData();
  data.append('pname', formInfo.pname);
  data.append('pid', formInfo.pid);
  data.append('ptype', formInfo.ptype);
  data.append('pbreed', formInfo.pbreed);
  data.append('powner', formInfo.powner);
  data.append('oidnumber', formInfo.oidnumber);
  data.append('pdob', formInfo.pdob);

  const postData = async() =>{
  const res = await client.post("/api/add-pets", data);
  if(res.data.status===200){
    Swal.fire({
      title: "Form Submitted successfully!",
      icon: "success",
      })
  }
  setFormInfo({pname:"",pid:"",ptype:"",pbreed:"",powner:"",oidnumber:"",pdob:""}) 
  }
  postData();
}

  return (
   <React.Fragment>
  <Nav />
          
          <div className='jumbotron text-white'>
          <form onSubmit={handleFormSubmit} className="was-validated">
            <input
            name = "id"
            type="hidden"
            value = {formInfo.id}
            />
            <div className="form-group">
            <label for="pname" className ="form-label">Pet Name</label>
            <input
            type ="text"
            id="pname"
            value={formInfo.pname}
            className="form-control"
            onChange ={e=>setFormInfo({...formInfo,pname:e.target.value})}
            placeholder="Enter Pet Name..."
            required
            />
            </div>
             
            <div className="form-group">
            <label for="pidd" className ="form-label">Pet unique ID (5 digits)</label>
            <input
            type ="text"
            id="pidd"
            value={formInfo.pid}
            className="form-control"
            onChange ={e=>setFormInfo({...formInfo,pid:e.target.value})}
            placeholder="Enter Pet Unique Identifier or ID..."
            required
            />
            </div>
            

            <div className="form-group">
            <label for="ptype" className ="form-label">Enter Pet Type</label>
            <input
            type ="text"
            id="ptype"
            value={formInfo.ptype}
            className="form-control"
            onChange ={e=>setFormInfo({...formInfo, ptype:e.target.value})}
            placeholder="Enter Animal type..."
            required
            />
            </div>

            <div className="form-group">
            <label for="breed" className ="form-label">Breed</label>
            <input
            type ="text"
            id="breed"
            value={formInfo.pbreed}
            className="form-control"
            onChange ={e=>setFormInfo({...formInfo, pbreed:e.target.value})}
            placeholder="Enter Breed Type..."
            required
            />
            </div>

            <div className="form-group">
            <label for="owner" className ="form-label">Pet Owner</label>
            <input
            type ="text"
            id="owner"
            value={formInfo.powner}
            className="form-control"
            onChange ={e=>setFormInfo({...formInfo,powner:e.target.value})}
            placeholder="Enter Pet Owner..."
            required
            />
            </div>
       
            <div className="form-group">
            <label for="owner" className ="form-label">Owner ID Number</label>
            <input
            type ="text"
            id="owner"
            value={formInfo.oidnumber}
            className="form-control"
            onChange ={e=>setFormInfo({...formInfo,oidnumber:e.target.value})}
            placeholder="Enter Owner ID Number..."
            required
            />
            </div>

            <div className="form-group">
            <label for="pbirth" className ="form-label">Birth Date</label>
            <input
            type ="date"
            id="pbirth"
            value={formInfo.pdob}
            className="form-control"
            onChange ={e=>setFormInfo({...formInfo,pdob:e.target.value})}
            placeholder="Enter Pet Birth Date..."
            required
            />
            </div>

            <Button style="btn btn-primary" text="Submit" />
          </form>
          </div>
</React.Fragment>
  );
}
AddPet.propTypes = {
  powner: PropTypes.string,
  pname: propTypes.string,
  oidnumber: propTypes.string, //Please note i accept id number as string 
  ptype: propTypes.string,
  pbreed: propTypes.string,
  pdob: propTypes.string
};

export default AddPet;