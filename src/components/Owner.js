import React, {useState, useEffect} from 'react'; 
import '../App.css';
import Button from './Button';
import Header from './Header';
import Search from './Search';
import { Link } from 'react-router-dom';
import OwnerList from './OwnerList';
import { client } from '../Api/Api';
import Pagination from './Pagination';

const Owner = () => {

const [ownerlist, setOwnerlist] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [searchvalue, setSearchvalue] = useState("");
const [currentPage, setCurrentPage] = useState(1);
const [ownersPerPage] = useState(2);

const loadOwner = async() => {
  try{
    setLoading(true);
    const res = await client.get('/api/Owners');
      setOwnerlist(res.data);
      setLoading(false);
      setError(null);
  } catch(err){
    setError(err.message);
  }
}; 

useEffect(()=>{
  loadOwner();
},[]);

//Get Current Owners
const indexOfLastOwner = currentPage*ownersPerPage;
const indexOfFirstOwner = indexOfLastOwner-ownersPerPage;
const currentOwners = ownerlist.slice(indexOfFirstOwner, indexOfLastOwner);

//change page
const paginate = pageNumbers => setCurrentPage(pageNumbers)

  const deleteOwner = (e,id) => {
  e.preventDefault(); 
 
  if(window.confirm("Are you sure you want to delete this record?")){
  const res = client.delete(`/api/Owners/${id}`);
  }
  }
 
  return (
 <React.Fragment>

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
   onChange = {e=>setSearchvalue(e.target.value)} 
   />

  <hr />
  <div className="text-center text-white">
  <h4 className="row-form">Existing Pet Owners:</h4>
  {
  
    loading ? <h1>Fetching Data From Server Please Wait...</h1> : <>
     <OwnerList ownerlist={currentOwners} searchvalue={searchvalue} deleteOwner={deleteOwner} />
    </>
  }
  <Pagination ownersPerPage={ownersPerPage} totalOwners={ownerlist.length} paginate={paginate}/>
 
  </div>
  </div>
</React.Fragment>

   
  );
}
export default Owner;