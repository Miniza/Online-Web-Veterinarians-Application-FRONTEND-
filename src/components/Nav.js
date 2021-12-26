import { Link } from "react-router-dom"; //import link for routing through pages
/* Create a function component called Nav which will render the responsive nav bar of our app which we will
include into all our pages
 */
const Nav=()=>{
return(
    <>
     <nav className="navbar navbar-expand-md bg-danger navbar-dark fixed-top justify-content-center"> 
     <div className="container-fluid justify-content-center">
     <a className="navbar-brand" href="#">-</a>
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
     <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="collapsibleNavbar">
     <ul className="navbar-nav">   
     <li className="nav-item">
     <Link className="nav-link" to="/">Home</Link> 
     </li>
     <li className="nav-item">
     <Link className="nav-link" to="/Owner">Owner Page</Link>
     </li>
     <li className="nav-item">
     <Link className="nav-link" to="/Pet">Pet Page</Link>
     </li>
     </ul>
     </div>
     </div>  
     </nav>
    </>
)
}
export default Nav;