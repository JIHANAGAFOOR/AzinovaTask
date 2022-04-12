import React ,{useState} from 'react'
import { useNavigate ,Link} from "react-router-dom";
import {Form , Button} from 'react-bootstrap'
import axios from 'axios';
function Login() {
    const [login,setLogin]=useState({
        email:"",
        username:"",
        password:""
    })
    let navigate = useNavigate();
    const handleChange=(e)=>{
        console.log(e.target.value);
        const {name,value}=e.target;
         setLogin({...login,[name]:value})
        }
        const Login=(e)=>{
            e.preventDefault() ;
            axios.post("http://localhost:1235/login",{
                email:login.email,
                username:login.username,
                password:login.password
            })
         .then((response)=>{
             console.log("bcakend data"+JSON.stringify(response));
             if(response.data=="error")
             {
                 alert("no user found")
             }
             else{
                 
                navigate(`/otp/${response.data._id}`)
             }
         })
        
        }
  return (
    <div style={{width:500,alignItems:"center",display:"flex",justifyContent:"center",border:"1px solid black",padding:20}}>
    <Form method="post" onSubmit={Login}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} value={login.email}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="text" placeholder="Enter username"  name="username" onChange={handleChange} value={login.username} />
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} value={login.password} />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
   <p> <Link to="/register">Add an Account</Link></p>
  </Form>
    </div>
  )
}

export default Login
