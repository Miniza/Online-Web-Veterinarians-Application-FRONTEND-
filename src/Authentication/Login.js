import {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { client } from '../Api/Api';
import { IsLoggedContext } from "../Contexts/IsLoggedContext";

const Login = () => {
    const [loggedIn, setLoggedIn] = useContext(IsLoggedContext)

    const [formData, setFormData] = useState({
        Email: "", 
        Password: "", 
      });

    const Navigate = useNavigate();

    const HandleSubmit = e => {
        e.preventDefault();
        
        var Data = new FormData();
        Data.append('Email', formData.Email);
        Data.append('Password', formData.Password);

        const postData = async() =>{
            const res = await client.post('/api/Auth/login',Data);
            if(res.status == 200)
            {
            setFormData({Email:"",Password:""});
            setLoggedIn(true);
            Navigate("/Home");
            }
            }
            postData();
            
    }

    return(
        <main className="form-signin">
        <form onSubmit={HandleSubmit}>
        <h1 className="h3 mb-3 fw-normal text-white text-center">Please sign in</h1>
        <input type="email" className="form-control" placeholder="Email Address"
        value = {formData.Email}
        onChange={e=>setFormData({...formData, Email: e.target.value})}
        required />
        <input type="password" className="form-control" placeholder="Password"
        value = {formData.Password}
        onChange={e=>setFormData({...formData, Password: e.target.value})}
        required />
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign In</button>
        </form>
        </main>
    );
}
export default Login;