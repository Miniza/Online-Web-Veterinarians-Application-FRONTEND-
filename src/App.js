import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios'; 
import Home from './components/Home';
import Owner from './components/Owner';
import Pet from './components/Pet';
import AddOwner from './components/AddOwner';
import AddPet from './components/AddPet';
import SingleOwner from './components/SingleOwner';
import EditOwner from './components/EditOwner';
import EditPet from './components/EditPet';
import Login from './components/Login';
import Register from './components/Register';
import Nav from './components/Nav';



const App = () => {
  
const [user,setUser] = useState("");
const [loggedIn, setLoggedIn] = useState(false);

const client = axios.create({withCredentials:true, baseURL: 'http://localhost:5000/'});

const FetchUser = async() =>{
const res = await client.get("api/Auth/user");
setLoggedIn(true)
setUser(res.data.name);
}
useEffect(()=>
FetchUser()
);

  return (  
    <React.Fragment>
    <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

    <Routes>
    <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/Home" element={<Home user={user} />} />
    <Route path="/Owner" element={<Owner />} />
    <Route path="/Pet" element={<Pet />} />
    <Route path="/AddOwner" element={< AddOwner />} />
    <Route path="/AddPet" element={< AddPet />} />
    <Route path="Owner/EditOwner/:id" element={<EditOwner />} />
    <Route path="Pet/EditPet/:id" element={<EditPet />} />
    <Route path="/Pet/SingleOwner/:id" element={<SingleOwner />} />
    </Routes>
    </React.Fragment>

  );
}
export default App;

