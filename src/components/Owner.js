
import React, {useState, useEffect} from 'react'; 
import '../App.css';
import Swal from 'sweetalert2'; 
import axios from 'axios'; 
import Nav from './Nav';
import Button from './Button';
import Header from './Header';
import Search from './Search';
import { Link } from 'react-router-dom';

const Owner = () => {

const [ownerlist, setOwnerlist] = useState([]);
const [petlist, setPetList] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [searchvalue, setSearchvalue] = useState("");

const client = axios.create({baseURL: 'http://localhost:8000/'});

const loadOwner = async() => {
  try{
    const res = await client.get('/api/owners');
      setOwnerlist(res.data.owners);
      const resp = await client.get('/api/pets');
      setPetList(resp.data.pets);
      setLoading(false);
      setError(null);
  } catch(err){
    setError(err.message);
  } finally{
    setLoading(false);
  }
}; 

useEffect(()=>{
  loadOwner();
 },[ownerlist])

  const deleteOwner = (e,id) => {
  e.preventDefault(); 
 
  if(window.confirm("Are you sure you want to delete this record?")){
  const res = client.delete(`/api/delete-owner/${id}`);
  }
  }
  if(loading)
  {
    Swal.fire({
      text: "Fetching Data From the Server, Please Wait!",
      })
  }

  return (
 <React.Fragment>
   <Nav/>

  <div className="jumbotron">
  <Header style="text-center text-white" text="Owner Details Page" />
  <div className="text-center">
  <Link to="/AddOwner">
    <Button style="btn btn-primary" text="Add New Owner"/>
  </Link>
 
  </div>
  <hr /> 
 
  <Search type="text"
   style="form-control"
   placeholder="Start filtering by owner name"
   onChange = {e=>setSearchvalue(e.target.value)} />

  <hr/>
  <div className="text-center text-white">
  <h4 className="row-form">Existing Pet Owners:</h4>
 
  <div class="table-responsive">
    <table class="table table-bordered text-white">
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Phone Number</th>
          <th>Email Address</th>
          <th>Postal Address</th>
          <th>PetList</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        {ownerlist.filter(value=>{
          if(searchvalue==""){
            return value;
          }else if(value.oname.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())){
            return value;
          }
        }).map(item=>{return(
            <tr key={item.id}>
            <td>{item.oname}</td>
            <td>{item.osurname}</td>
            <td>{item.ocellnum}</td>
            <td>{item.omail}</td>
            <td>{item.opostal}</td>
            <td>{petlist.map(value=>{if(item.oidnumber==value.oidnumber){return(<pre class="text-white">{value.pname}</pre>)}else{return <>No Pets</>}})}</td>
            <td><span><Link to={`EditOwner/${item.id}`}><button className="btn btn-success"><i className="fa fa-edit"></i></button></Link>
              <button onClick={e=>{deleteOwner(e, item.id)}} className="btn btn-danger"><i className="fa fa-trash " ></i></button></span></td>
          </tr>)
})}
      </tbody>
    </table>
    
  </div>
  </div>
  </div>
</React.Fragment>

   
  );
}


export default Owner;