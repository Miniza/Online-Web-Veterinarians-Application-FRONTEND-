import {useState} from 'react';
import axios from 'axios'; 
import {useNavigate} from 'react-router-dom';

const Register = () => {

    const [formData, setFormData] = useState({
        Name:"",
        Email: "", 
        Password: "", 
      });
    
    const Navigate = useNavigate();

    const client = axios.create({baseURL: 'http://localhost:5000/'});

    const HandleSubmit = e => {
        e.preventDefault();
        
        var Data = new FormData();
        Data.append('Name', formData.Name);
        Data.append('Email', formData.Email);
        Data.append('Password', formData.Password);

        const postData = async() =>{
        const res = await client.post('/api/Auth/register',Data);
        setFormData({Name:"",Email:"",Password:""});
        }
        postData();
        Navigate("/");
    }


    return(
        <main className="form-signin">
        <form onSubmit={HandleSubmit}>
        <h1 className="h3 mb-3 fw-normal text-white text-center">Please Register</h1>
        <input className="form-control" placeholder="Name" 
        value = {formData.Name}
        onChange={e=>setFormData({...formData, Name:e.target.value})}
        required
        />
        <input type="email" className="form-control" placeholder="Email Address"
        value={formData.Email}
        onChange={e=>setFormData({...formData, Email:e.target.value})}
        required />
        <input type="password" className="form-control" placeholder="Password"
        value={formData.Password}
        onChange={e=>setFormData({...formData, Password:e.target.value})}
        required />
        <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
        </form>
        </main>
    );
}
export default Register;