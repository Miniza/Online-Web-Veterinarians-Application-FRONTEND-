import { NavLink } from "react-router-dom";
import { client } from '../Api/Api';

const Nav=({loggedIn, setLoggedIn}) =>{

const Logout = async() =>{
    const res = await client.post('/api/Auth/logout');
    setLoggedIn(false);
}

let nav;
if(!loggedIn)
{
nav = (
    <ul className="navbar-nav">  
    <li className="nav-item">
    <NavLink className="nav-link" to="/" activeClassName="activeItem">LOGIN</NavLink> 
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" to="/Register" activeClassName="activeItem">REGISTER</NavLink> 
    </li> 
    </ul>
)
}else
{
  nav= (
     <ul className="navbar-nav">  
    <li className="nav-item">
    <button className="btn btn-outline-danger bt-sm">
    <NavLink className="nav-link" to="/Home" activeClassName="activeItem">HOME</NavLink>
    </button>
    </li>
    <li className="nav-item">
    <button className="btn btn-outline-danger bt-sm"> 
    <NavLink className="nav-link" to="/Owner" activeClassName="activeItem">OWNER PAGE</NavLink>
    </button>
    </li>
    <li className="nav-item">
    <button className="btn btn-outline-danger bt-sm">
    <NavLink className="nav-link" to="/Pet" activeClassName="activeItem">PET PAGE</NavLink>
    </button>
    </li>
    <li className="nav-item">
    <button className="btn btn-secondary btn-sm">
    <NavLink className="nav-link" to="/" activeClassName="activeItem" onClick={Logout}>LOGOUT</NavLink>
    </button>
    </li>
    </ul>
  )
}
return(
    <>
     <nav className="navbar navbar-expand-md bg-danger navbar-dark fixed-top justify-content-center"> 
     <div className="container-fluid justify-content-center">
     <a className="navbar-brand" href="#">Online Vets Application</a>
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
     <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="collapsibleNavbar">
      {nav}
     </div>
     </div>  
     </nav>
    </>
)
}
export default Nav;