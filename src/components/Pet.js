import React, {useState, useEffect} from 'react'; 
import '../App.css'; 
import { Link } from 'react-router-dom'; 
import axios from 'axios'; 
import Button from './Button';
import Header from './Header';
import Search from './Search';
import PetList from './PetList';
import { client } from '../Api/Api';
import Pagination from './Pagination';

const Pet = () => {

const [petlist, setPetList] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [searchvalue, setSearchvalue] = useState("");
const [currentPage, setCurrentPage] = useState(1);
const [petsPerPage] = useState(2);

const loadPets = async() => {
  try{
    setLoading(true);
    const res = await client.get('/api/Pets');
    setPetList(res.data);
    setLoading(false);
    setError(null);
  } catch(err){
    setError(err.message);
  } 
}; 
 
useEffect(()=>{
    loadPets();
},[]);
//pagination stuff
const indexOfLastPet = currentPage*petsPerPage;
const indexOfFirstPet = indexOfLastPet - petsPerPage;
const currentPets = petlist.slice(indexOfFirstPet, indexOfLastPet);

//change page
const paginate = pageNumbers => setCurrentPage(pageNumbers)

const deletePet = (e,id) => {
  e.preventDefault(); 
  if(window.confirm("Are You Sure You Want To Delete This Data")){
    const res = client.delete(`/api/Pets/${id}`);
  }
  }

  return (
   <React.Fragment>
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
  <div className="text-center text-white">
  <h4 className="text-center text-white">Existing Pets</h4>
  {
    loading ? <h2>Fetching Data From Server. Please Wait..</h2> : <>
    <PetList petlist={currentPets} searchvalue={searchvalue} deletePet={deletePet} />
    </>
  }
  <Pagination itemsPerPage={petsPerPage} totalItems={petlist.length} paginate={paginate} GoTo={"/Pet"}/>
  </div>
  </div>

 
</React.Fragment>
  );
}


export default Pet;