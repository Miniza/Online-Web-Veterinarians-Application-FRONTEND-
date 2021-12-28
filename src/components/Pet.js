import React, {useState, useEffect} from 'react'; 
import '../App.css'; 
import { Link } from 'react-router-dom'; 
import Swal from 'sweetalert2'; 
import axios from 'axios'; 
import Nav from './Nav';
import Button from './Button';
import Header from './Header';
import Search from './Search';
import PropTypes from 'prop-types';
import propTypes from 'prop-types';

const Pet = () => {

const [petlist, setPetList] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [searchvalue, setSearchvalue] = useState("");

const client = axios.create({baseURL: 'http://localhost:5054/'})

const loadPets = async() => {
  try{
    const res = await client.get('/api/Pets');
    setPetList(res.data);
    setError(null);
  } catch(err){
    setError(err.message);
  } finally{
    setLoading(false);
  }
}; 

useEffect(()=>{
    loadPets();
},[petlist]);

const deletePet = (e,id) => {
  e.preventDefault(); 
  if(window.confirm("Are You Sure You Want To Delete This Data")){
    const res = client.delete(`/api/Pets/${id}`);
  }
  }

  return (
   <React.Fragment>
  <Nav />
  <div className="jumbotron">
  <Header style="text-center text-white" text="Pet Details Page" />
  <div className="text-center">
  <Link to="/AddPet"><Button style="btn btn-primary" text="Add New Pet" /></Link> 
  </div>
  <hr />

  <Search type="text"
   style="form-control"
   placeholder="Start filtering by Pet name"
   onChange = {e=>setSearchvalue(e.target.value)} />

  <hr></hr>
  <h4 className="text-center text-white">Existing Pets</h4>
  <div class="table-responsive">
    <table class="table table-bordered text-white">
      <thead>
        <tr>
          <th>Owner</th>
          <th>Pet Name</th>
          <th>Pet Type</th>
          <th>Pet Breed</th>
          <th>Pet DOB</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        {petlist.filter(value=>{if(searchvalue==""){
          return value
        }else if(value.pname.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())){
          return value
        }}).map(item=>{return(
            <tr key={item.id}>
            <td><Link to={`SingleOwner/${item.Id}`}>{item.powner}</Link></td>
            <td>{item.pname}</td>
            <td>{item.ptype}</td>
            <td>{item.pbreed}</td>
            <td>{item.pdob}</td>
            <td><span><button onClick={e=>deletePet(e,item.id)} className="btn btn-danger"><i className="fa fa-trash"></i></button> </span></td>
          </tr>)
})}
      </tbody>
    </table>
  </div>
  </div>

 
</React.Fragment>
  );
}
Pet.propTypes = {
  powner: PropTypes.string,
  pname: propTypes.string,
  oidnumber: propTypes.string, //Please note i accept id number as string 
  ptype: propTypes.string,
  pbreed: propTypes.string,
  pdob: propTypes.string
};

export default Pet;