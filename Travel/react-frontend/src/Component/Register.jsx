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
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const Register = () => {
  const navigate = useNavigate()

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const newErrors = {}

    // Name
    if (!data.name.trim()) {
      newErrors.name = "Username is required"
    } else if (data.name.trim().length < 3) {
      newErrors.name = "Username must be at least 3 characters"
    } else if (!/^[a-zA-Z0-9_ ]+$/.test(data.name)) {
      newErrors.name = "Username can only contain letters, numbers, underscores"
    }

    // Email
    if (!data.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Enter a valid email address"
    }

    // Phone
    if (!data.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^[0-9]{10}$/.test(data.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits"
    }

    // Password
    if (!data.password) {
      newErrors.password = "Password is required"
    } else if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    } else if (!/[A-Z]/.test(data.password)) {
      newErrors.password = "Password must contain at least one uppercase letter"
    } else if (!/[0-9]/.test(data.password)) {
      newErrors.password = "Password must contain at least one number"
    } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(data.password)) {
      newErrors.password = "Password must contain at least one special character (@, #, $, etc.)"
    }

    return newErrors
  }

  const handleChange = (field, value) => {
    setdata({ ...data, [field]: value })
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" })
    }
  }

  const submit = async (e) => {
    e.preventDefault()

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)
    try {
      await axios.post("https://travel-website-5-62rm.onrender.com/api/auth/register", data)
      alert("Registered successfully")
      navigate("/login")
    } catch (error) {
      alert(error.response?.data?.message || "Register failed")
    } finally {
      setLoading(false)
    }
  }

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

            <Form onSubmit={submit} noValidate>

              {/* Name */}
              <Form.Group className="mb-3">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter UserName"
                  value={data.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  isInvalid={!!errors.name}
                  isValid={data.name && !errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={data.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  isInvalid={!!errors.email}
                  isValid={data.email && !errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Phone */}
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter PhoneNumber"
                  value={data.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  isInvalid={!!errors.phone}
                  isValid={data.phone && !errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={data.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  isInvalid={!!errors.password}
                  isValid={data.password && !errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Password hint */}
              <p style={{ fontSize: "11px", color: "#888", marginBottom: "20px" }}>
                Min 6 chars, one uppercase, one number & one special character (@, #, $, etc.)
              </p>

              <Button
                variant="primary"
                type="submit"
                className="w-100 py-2 rounded-3"
                disabled={loading}
              >
                {loading ? "Registering..." : "Register"}
              </Button>

              <p className="text-center mt-3 mb-0" style={{ fontSize: "13px" }}>
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/login")}
                  style={{ color: "#667eea", cursor: "pointer", fontWeight: 500 }}
                >
                  Login
                </span>
              </p>

            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default Register