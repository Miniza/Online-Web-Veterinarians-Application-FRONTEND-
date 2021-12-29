import React from 'react'; 
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Owner from './components/Owner';
import Pet from './components/Pet';
import AddOwner from './components/AddOwner';
import AddPet from './components/AddPet';
import SingleOwner from './components/SingleOwner';
import EditOwner from './components/EditOwner';
import reportWebVitals from './reportWebVitals';

const Routing = () =>{
  return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/Owner" element={<Owner />} />
    <Route path="/Pet" element={<Pet />} />
    <Route path="/AddOwner" element={< AddOwner />} />
    <Route path="/AddPet" element={< AddPet />} />
    <Route path="Owner/EditOwner/:id" element={<EditOwner />} />
    <Route path="/Pet/SingleOwner/:id" element={<SingleOwner />} />

  </Routes>
  </BrowserRouter>
  )
}

ReactDOM.render(
 <React.StrictMode>
   <Routing />
 </React.StrictMode>
  ,
  document.getElementById('root')
);

reportWebVitals();
