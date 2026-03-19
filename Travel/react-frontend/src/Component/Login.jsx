// import axios from 'axios';
// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { Link, useNavigate } from 'react-router-dom';
// const Login = () => {
//   const navigate=useNavigate()
//   const [data, setdata] = useState({
//     email:"",
//     password:""
//   })
//   const submit= async(e)=>{
//     e.preventDefault()
//     const res = await axios.post("https://travel-website-5-62rm.onrender.com/api/auth/login", data);
//     localStorage.setItem("token", res.data.token);
//     localStorage.setItem("name", res.data.user.name);

//     alert("Login successful");
//     navigate("/")
//   }
//   return (
//     <div>
//       <Form onSubmit={submit}>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setdata({...data,email:e.target.value})} />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" onChange={(e)=>setdata({...data,password:e.target.value})}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="" label="Dont have an account?" /><Link to={"/register"}>Register</Link>
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//     </div>
//   )
// }

// export default Login



// import axios from 'axios';
// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { Link, useNavigate } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Card from 'react-bootstrap/Card';

// const Login = () => {
//   const navigate = useNavigate()

//   const [data, setdata] = useState({
//     email: "",
//     password: ""
//   })

//   const submit = async (e) => {
//     e.preventDefault()
//     const res = await axios.post("https://travel-website-5-62rm.onrender.com/api/auth/login", data);
//     localStorage.setItem("token", res.data.token);
//     localStorage.setItem("name", res.data.user.name);

//     alert("Login successful");
//     navigate("/")
//   }

//   return (
//     <div style={{ 
//       minHeight: "100vh",
//       background: "linear-gradient(135deg, #667eea, #764ba2)",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center"
//     }}>
//       <Container style={{ maxWidth: "450px" }}>
//         <Card className="shadow-lg p-4 border-0 rounded-4">
//           <Card.Body>
//             <h3 className="text-center mb-4 fw-bold">Login</h3>

//             <Form onSubmit={submit}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control 
//                   type="email" 
//                   placeholder="Enter email"
//                   onChange={(e) => setdata({ ...data, email: e.target.value })}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control 
//                   type="password" 
//                   placeholder="Password"
//                   onChange={(e) => setdata({ ...data, password: e.target.value })}
//                   required
//                 />
//               </Form.Group>

//               <div className="d-flex justify-content-between align-items-center mb-3">
//                 <Form.Check type="checkbox" label="Remember me" />
//                 <Link to="/register" style={{ textDecoration: "none" }}>
//                   Register
//                 </Link>
//               </div>

//               <Button 
//                 variant="primary" 
//                 type="submit" 
//                 className="w-100 py-2 rounded-3"
//               >
//                 Login
//               </Button>
//             </Form>
//           </Card.Body>
//         </Card>
//       </Container>
//     </div>
//   )
// }

// export default Login

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const Login = () => {
  

  const navigate = useNavigate()
  const location = useLocation()
   useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // Safari fallback
  }, []);

  const [data, setdata] = useState({
    email: "",
    password: ""
  })

  // Google Login
 const googleLogin = () => {
  window.open(
    "https://travel-website-5-62rm.onrender.com/api/auth/google/",
    "_self"
  );
};

  // Handle Google Redirect
  useEffect(() => {

    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    const name = params.get("name");
    const email = params.get("email");
      const userId = params.get("userId"); // now received from backend


    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email); 
    localStorage.setItem("userId", userId); // ✅ fix


      navigate("/")
    }

  }, [location, navigate])


  // Normal Login
  const submit = async (e) => {
  e.preventDefault();

  try {

    const res = await axios.post(
      "https://travel-website-5-62rm.onrender.com/api/auth/login",
      data
    );

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("name", res.data.user.name);
    localStorage.setItem("email", res.data.user.email);  
    localStorage.setItem("userId", res.data.user.id);
    

    alert("Login successful");
    navigate("/");

  } catch (error) {

    alert(error.response?.data?.message || "Login failed");

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

            <h3 className="text-center mb-4 fw-bold">Login</h3>

            <Form onSubmit={submit}>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setdata({ ...data, email: e.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setdata({ ...data, password: e.target.value })}
                  required
                />
              </Form.Group>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <Form.Check type="checkbox" label="Remember me" />
                <Link to="/register" style={{ textDecoration: "none" }}>
                  Register
                </Link>
              </div>

              <Button
                variant="primary"
                type="submit"
                className="w-100 py-2 rounded-3"
              >
                Login
              </Button>
            </Form>

            <div className="text-center my-3">
              <span>OR</span>
            </div>

            <Button
              variant="danger"
              className="w-100 py-2 rounded-3"
              onClick={googleLogin}
            >
              Sign in with Google
            </Button>

          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default Login