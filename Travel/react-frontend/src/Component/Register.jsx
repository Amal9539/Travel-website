// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom';
// const Register = () => {
//   const navigate=useNavigate()
//   const [data, setdata] = useState({
//     name:"",
//     email:"",
//     password:""
//   })
//   const submit= async (e)=>{
//     e.preventDefault()
//      await axios.post("https://travel-website-5-62rm.onrender.com/api/auth/register", data);
//     alert("Registered successfully");
//     navigate("/login")
//   };
  
//   return (
//     <div>
//       <Form onSubmit={submit}>
//         <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>UserName</Form.Label>
//         <Form.Control type="text" placeholder="Enter UserName" onChange={(e)=>setdata({...data,name:e.target.value})}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email </Form.Label>
//         <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setdata({...data,email:e.target.value})}/>
        
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Enter Password" onChange={(e)=>setdata({...data,password:e.target.value})}/>
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Register
//       </Button>
//     </Form>
//     </div>
//   )
// }

// export default Register

import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';

const Register = () => {
  const navigate = useNavigate()
   useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // Safari fallback
  }, []);

  const [data, setdata] = useState({
    name: "",
    email: "",
    phone:"",
    password: ""
  })

 const submit = async (e) => {
  e.preventDefault();

  try {
    await axios.post("https://travel-website-5-62rm.onrender.com/api/auth/register", data);
    alert("Registered successfully");
    navigate("/login");
  } catch (error) {
    alert(error.response?.data?.message || "Register failed");
  }
};

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Container style={{ maxWidth: "450px" }}>
        <Card className="shadow-lg p-4 border-0 rounded-4">
          <Card.Body>
            <h3 className="text-center mb-4 fw-bold">Create Account</h3>

            <Form onSubmit={submit}>

              <Form.Group className="mb-3">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter UserName"
                  onChange={(e) => setdata({ ...data, name: e.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setdata({ ...data, email: e.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter PhoneNumber"
                  onChange={(e) => setdata({ ...data, phone: e.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => setdata({ ...data, password: e.target.value })}
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100 py-2 rounded-3"
              >
                Register
              </Button>

            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default Register