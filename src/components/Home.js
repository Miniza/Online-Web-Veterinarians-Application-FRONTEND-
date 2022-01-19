import { Link } from "react-router-dom";
import React from 'react';
import Button from "./Button";
import Header from "./Header";

const Home = ({user}) => {

return(
 <React.Fragment>
 <div className="jumbotron">
 <div className="text-center text-white">

 <Header text="Online Veterinarian Application" />

 <hr/>

 <marquee style={{ color: 'red', fontSize: '3em' }}><h4>We &#10084;-Pets-&#10084; Us</h4></marquee>
 </div>
 </div>

 <div className="myglass">
 <h4 className="text-center text-white">To Navigate through pages please click on the buttons provided below or alternatively use the navigation bar at the top. Thank You</h4>
 </div>
  <hr/>
  <div className="jumbotron">
  <div className="text-center">

  <hr/>

  <Link to="/Owner">
  <Button style = "btn btn-outline-primary btn-block btn-lg" text="Owner Details Page"/>
  </Link>

  <hr/>

  <Link to="/Pet">
  <Button style = "btn btn-outline-primary btn-block btn-lg" text="Pet Details Page"/>
  </Link>
  
  <hr/>
 </div>
 </div>
 <div className="jumbotron">
<div className="text-white text-center">
<>You are logged in as: {user}</>
</div>
 </div>
</React.Fragment>
 )
}

export default Home;