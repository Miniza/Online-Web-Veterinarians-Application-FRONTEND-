import React, {useState, useEffect} from 'react'; 
import '../App.css'; 
import axios from 'axios'; 
import Nav from './Nav';
import Header from './Header';

const SingleOwner = (props) => {

const [ownerlist, setOwnerList] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const client = axios.create({baseURL: 'http://localhost:8000/'})

const loadPets = async() => {
   // const owner_id = props.match.params.id;
  /*try{
    const res = await client.get('/api/owners');
    setOwnerList(res.data.pets);
    setError(null);
  } catch(err){
    setError(err.message);
  } finally{
    setLoading(false);
  }*/
}; 

useEffect(()=>{
    loadPets();
});

  return (
   <React.Fragment>
  <Nav />
  <div className="jumbotron">
  <Header style="text-center text-white" text="Single Owner Details Page" />
  
  <hr></hr>
  <div class="table-responsive">
  <table class="table table-bordered text-white">
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Phone Number</th>
          <th>Email Address</th>
          <th>Postal Address</th>
        </tr>
      </thead>

    </table>

  </div>
  </div>
</React.Fragment>
  );
}


export default SingleOwner;