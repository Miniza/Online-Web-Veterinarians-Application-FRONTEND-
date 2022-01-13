import React, {useState, useEffect} from 'react'; 
import '../App.css'; 
import Swal from 'sweetalert2'; 
import axios from 'axios'; 
import Nav from './Nav';
import Button from './Button';

const AddPet = () => {

const [formInfo,setFormInfo] = useState({
  petName:"",
  petType:"",
  petBreed:"",
  dateOfBirth:"",
  ownerId:""
});

const client = axios.create({baseURL: 'https://localhost:7060/'});

const handleFormSubmit = e => {
  e.preventDefault();
  var data = new FormData();
  data.append('petName', formInfo.petName);
  data.append('petType', formInfo.petType);
  data.append('petBreed', formInfo.petBreed);
  data.append('dateOfBirth', formInfo.dateOfBirth);
  data.append('ownerId', formInfo.ownerId);
  //console.log(formInfo)
  const postData = async() =>{
    const res = client.post('/api/Pets',data);
    Swal.fire({
      title: "Form Submitted successfully!",
      icon: "success"
      })
  setFormInfo({petName:"",petType:"",petBreed:"",dateOfBirth:"",ownerId:""}) 
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
            value={formInfo.petName}
            className="form-control"
            onChange ={e=>setFormInfo({...formInfo,petName:e.target.value})}
            placeholder="Enter Pet Name..."
            required
            />
            </div>
            

            <div className="form-group">
            <label for="ptype" className ="form-label">Enter Pet Type</label>
            <input
            type ="text"
            id="ptype"
            value={formInfo.petType}
            className="form-control"
            onChange ={e=>setFormInfo({...formInfo, petType:e.target.value})}
            placeholder="Enter Animal type..."
            required
            />
            </div>

            <div className="form-group">
            <label for="breed" className ="form-label">Breed</label>
            <input
            type ="text"
            id="breed"
            value={formInfo.petBreed}
            className="form-control"
            onChange ={e=>setFormInfo({...formInfo, petBreed:e.target.value})}
            placeholder="Enter Breed Type..."
            required
            />
            </div>
       

            <div className="form-group">
            <label for="pbirth" className ="form-label">Birth Date</label>
            <input
            type ="date"
            id="pbirth"
            value={formInfo.dateOfBirth}
            className="form-control"
            onChange ={e=>setFormInfo({...formInfo,dateOfBirth:e.target.value})}
            placeholder="Enter Pet Birth Date..."
            required
            />
            </div>
            

            <div className="form-group">
            <label for="ownerid" className ="form-label">Owner Id (1 Digit)</label>
            <input
            type ="text"
            id="ownerid"
            value={formInfo.ownerId}
            className="form-control"
            onChange ={e=>setFormInfo({...formInfo,ownerId:e.target.value})}
            placeholder="Enter Owner Id..."
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