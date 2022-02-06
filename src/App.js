import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {useState,useEffect} from 'react';
import Home from './components/Home';
import Owner from './components/Owner';
import Pet from './components/Pet';
import AddOwner from './components/AddOwner';
import AddPet from './components/AddPet';
import SingleOwner from './components/SingleOwner';
import EditOwner from './components/EditOwner';
import EditPet from './components/EditPet';
import Nav from './components/Nav';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import { IsLoggedProvider} from './Contexts/IsLoggedContext';

const App = () => {

  return (  
    <IsLoggedProvider>
    <Nav  />
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/Owner" element={<Owner />} />
    <Route path="/Pet" element={<Pet />} />
    <Route path="/AddOwner" element={< AddOwner />} />
    <Route path="/AddPet" element={< AddPet />} />
    <Route path="Owner/EditOwner/:id" element={<EditOwner />} />
    <Route path="Pet/EditPet/:id" element={<EditPet />} />
    <Route path="/Pet/SingleOwner/:id" element={<SingleOwner />} />
    </Routes>
    </IsLoggedProvider>

  );
}
export default App;

