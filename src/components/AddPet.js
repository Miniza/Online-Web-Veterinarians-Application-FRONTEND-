import React, {useState, useEffect} from 'react'; 
import '../App.css'; 
import Swal from 'sweetalert2'; 
import axios from 'axios'; 
import Nav from './Nav';
import Button from './Button';

const AddPet = () => {

const [formInfo,setFormInfo] = useState({
  Pname:"",
  Pid:"",
  Ptype:"",
  Pbreed:"",
  Powner:"",
  Oidnumber: "",
  Pdob:""
});

const client = axios.create({baseURL: 'http://localhost:5054/'})


const handleFormSubmit = e => {
  e.preventDefault();
  var data = new FormData();
  data.append('Pname', formInfo.Pname);
  data.append('Pid', formInfo.Pid);
  data.append('Ptype', formInfo.Ptype);
  data.append('Pbreed', formInfo.Pbreed);
  data.append('Powner', formInfo.Powner);
  data.append('Oidnumber', formInfo.Oidnumber);
  data.append('Pdob', formInfo.Pdob);
  //console.log(formInfo)
  const postData = async() =>{
    const res = client.post('/api/Pets',data);
    Swal.fire({
      title: "Form Submitted successfully!",
      icon: "success",
      })
  setFormInfo({Pname:"",Pid:"",Ptype:"",Pbreed:"",Powner:"",Oidnumber:"",Pdob:""}) 
  }
  postData();
}

  return (
   <React.Fragment>
  <Nav />
          
          <div className='jumbotron text-white'>
          <form onSubmit={handleFormSubmit} className="was-validated">
            <div className="form-group">
            <label for="pname" className ="form-label">Pet Name</label>
            <input
            type ="text"
            id="pname"
            value={formInfo.Pname}
            className="form-control"
            onChange ={e=>setFormInfo({...formInfo,Pname:e.target.value})}
            placeholder="Enter Pet Name..."
            required
            />
            </div>
             
            <div className="form-group">
            <label for="pidd" className ="form-label">Pet unique ID (5 digits)</label>
            <input
            type ="text"
            id="pidd"
            value={formInfo.Pid}
            className="form-control"
            onChange ={e=>setFormInfo({...formInfo,Pid:e.target.value})}
            placeholder="Enter Pet Unique Identifier or ID..."
            required
            />
            </div>
            

            <div className="form-group">
            <label for="ptype" className ="form-label">Enter Pet Type</label>
            <input
            type ="text"
            id="ptype"
            value={formInfo.Ptype}
            className="form-control"
            onChange ={e=>setFormInfo({...formInfo, Ptype:e.target.value})}
            placeholder="Enter Animal type..."
            required
            />
            </div>

            <div className="form-group">
            <label for="breed" className ="form-label">Breed</label>
            <input
            type ="text"
            id="breed"
            value={formInfo.Pbreed}
            className="form-control"
            onChange ={e=>setFormInfo({...formInfo, Pbreed:e.target.value})}
            placeholder="Enter Breed Type..."
            required
            />
            </div>

            <div className="form-group">
            <label for="owner" className ="form-label">Pet Owner</label>
            <input
            type ="text"
            id="owner"
            value={formInfo.Powner}
            className="form-control"
            onChange ={e=>setFormInfo({...formInfo,Powner:e.target.value})}
            placeholder="Enter Pet Owner..."
            required
            />
            </div>
       
            <div className="form-group">
            <label for="owner" className ="form-label">Owner ID Number</label>
            <input
            type ="text"
            id="owner"
            value={formInfo.Oidnumber}
            className="form-control"
            onChange ={e=>setFormInfo({...formInfo,Oidnumber:e.target.value})}
            placeholder="Enter Owner ID Number..."
            required
            />
            </div>

            <div className="form-group">
            <label for="pbirth" className ="form-label">Birth Date</label>
            <input
            type ="date"
            id="pbirth"
            value={formInfo.Pdob}
            className="form-control"
            onChange ={e=>setFormInfo({...formInfo,Pdob:e.target.value})}
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


export default AddPet;