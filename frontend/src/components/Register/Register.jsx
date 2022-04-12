import {useState} from 'react'
import axios from 'axios';
import { useNavigate ,Link} from "react-router-dom";
import {Form , Button,Col,Row,Container} from 'react-bootstrap'

export default function Register() {
    const [add,setAdd]=useState({
        name:"",
        email:"",
        mobile:"",
        age:"",
        place:"",
        username:"",
        password:""
    })
    const navigate=useNavigate()
    const handleChange=(e)=>{
        console.log(e.target.value);
        const {name,value}=e.target;
         setAdd({...add,[name]:value})
        }
        const Add=(e)=>{
            e.preventDefault() ;
            axios.post("http://localhost:1235/add",{
                name:add.name,
                email:add.email,
                mobile:add.mobile,
                age:add.age,
                place:add.place,
                username:add.username,
                password:add.password
            })
         .then((backendata)=>{
             console.log("bcakend data"+JSON.stringify(backendata));
             navigate('/')
         })
         
        }
    
  return (
    <div>
    <Container>
    <Row>
    <Col lg={4}></Col>
    <Col lg={4}>
    <div style={{border:"1px solid black",padding:20}}>
    <Form  method="post" onSubmit={Add}>
    <Form.Group className="mb-3" >
      {/* <Form.Label>Email address</Form.Label> */}
      <Form.Control type="text" placeholder="Name"  name="name" onChange={handleChange} value={add.name} required/>
    </Form.Group>
    <Form.Group className="mb-3" >
      {/* <Form.Label>Email address</Form.Label> */}
      <Form.Control type="email" placeholder="email" name="email"  onChange={handleChange} value={add.email} required />
    </Form.Group>
    <Form.Group className="mb-3" >
      {/* <Form.Label>Email address</Form.Label> */}
      <Form.Control type="tel" placeholder="Mobile" name="mobile"  onChange={handleChange} value={add.mobile} required />
    </Form.Group>
    <Form.Group className="mb-3" >
      {/* <Form.Label>Email address</Form.Label> */}
      <Form.Control type="number" placeholder="Age" name="age"  onChange={handleChange}  value={add.age} required />
    </Form.Group>
    <Form.Group className="mb-3" >
      {/* <Form.Label>Email address</Form.Label> */}
      <Form.Control type="text"  placeholder="Place" name="place" onChange={handleChange} value={add.place}  required/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      {/* <Form.Label>Password</Form.Label> */}
      <Form.Control type="text" placeholder="Username" name="username" onChange={handleChange} value={add.username} required/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      {/* <Form.Label>Password</Form.Label> */}
      <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} value={add.password} required/>
    </Form.Group>
   
    <Button variant="primary" type="submit" id="submit" >
      Submit
    </Button>
    <p> <Link to="/">Already Have an account</Link></p>
  </Form>
    </div>
    </Col>
    <Col lg={4}></Col>
    </Row>
    </Container>
    
    </div>
  )
}
