import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'; 
import Nav from './Nav';
import Button from './Button';


const EditPet = () => {

const [petInput, setPet] = useState([]);
const params = useParams();
const navigate = useNavigate();

const loadPet = async() => {
    console.log(`hey ${params.id}`)
  
     const res = await axios.get(`https://localhost:7060/api/Pets/${params.id}`);
     setPet(res.data);
 
 }; 
 useEffect(()=>{
     loadPet();
 },[navigate]);




  const handleUpdate = e => {
  e.preventDefault();
  const data = {
      Pname: petInput.pname,
      Pid: petInput.pid,
      Ptype: petInput.ptype,
      Pbreed: petInput.pbreed,
      Powner: petInput.powner,
      Oidnumber: petInput.oidnumber,
      Pdob: petInput.pdob
  }

  //console.log(formData); 
  const postData = async() =>{
  const res = axios.put(`http://localhost:5054/api/Pets/${params.id}`,data);
  Swal.fire({
    text: "Owner Updated!",
    icon: "success"
    })
    navigate("/Pet");
  }
  postData();
 }
  return (
 <React.Fragment>
   <Nav/>
   <div className='jumbotron text-white'>
  <form onSubmit={handleUpdate}>
    
  <div className="form-group">
            <label for="pname" className ="form-label">Pet Name</label>
            <input
            type ="text"
            id="pname"
            value={petInput.pname}
            className="form-control"
            onChange ={e=>setPet(e.target.value)}
            placeholder="Enter Pet Name..."
            required
            />
            </div>
             
            <div className="form-group">
            <label for="pidd" className ="form-label">Pet unique ID (5 digits)</label>
            <input
            type ="text"
            id="pidd"
            value={petInput.pid}
            className="form-control"
            onChange ={e=>setPet(e.target.value)}
            placeholder="Enter Pet Unique Identifier or ID..."
            required
            />
            </div>
            

            <div className="form-group">
            <label for="ptype" className ="form-label">Enter Pet Type</label>
            <input
            type ="text"
            id="ptype"
            value={petInput.ptype}
            className="form-control"
            onChange ={e=>setPet(e.target.value)}
            placeholder="Enter Animal type..."
            required
            />
            </div>

            <div className="form-group">
            <label for="breed" className ="form-label">Breed</label>
            <input
            type ="text"
            id="breed"
            value={petInput.pbreed}
            className="form-control"
            onChange ={e=>setPet(e.target.value)}
            placeholder="Enter Breed Type..."
            required
            />
            </div>

            <div className="form-group">
            <label for="owner" className ="form-label">Pet Owner</label>
            <input
            type ="text"
            id="owner"
            value={petInput.powner}
            className="form-control"
            onChange ={e=>setPet(e.target.value)}
            placeholder="Enter Pet Owner..."
            required
            />
            </div>
       
            <div className="form-group">
            <label for="owner" className ="form-label">Owner ID Number</label>
            <input
            type ="text"
            id="owner"
            value={petInput.oidnumber}
            className="form-control"
            onChange ={e=>setPet(e.target.value)}
            placeholder="Enter Owner ID Number..."
            required
            />
            </div>

            <div className="form-group">
            <label for="pbirth" className ="form-label">Birth Date</label>
            <input
            type ="date"
            id="pbirth"
            value={petInput.Pdob}
            className="form-control"
            onChange ={e=>setPet(e.target.value)}
            placeholder="Enter Pet Birth Date..."
            required
            />
            </div>

            <Button style="btn btn-primary" text="Update" />
      </form>
      </div>
</React.Fragment>

  
  );
}


export default EditPet;