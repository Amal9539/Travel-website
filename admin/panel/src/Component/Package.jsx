// import axios from 'axios';
// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useNavigate } from 'react-router-dom';
// const Package = () => {
//     const navigate=useNavigate()
//     const [packages, setpackages] = useState({
//         packagename:"",
//         destination:"",
//         description:"",
//         price:"",
//         duration:"",
//         startdate:"",
//         enddate:"",
//         maxpeople:"",
//         hotel:"",
//         transport:"",
//         foodinclude:"",
//         image:""
//     })
//    const handlechange = (e) => {

//   if (e.target.type === "file") {
//     setpackages({...packages, image: e.target.files[0]})
//   } else {
//     setpackages({...packages, [e.target.name]: e.target.value})
//   }

// }
//    const submit = async (e) => {
//   e.preventDefault()

//   const formData = new FormData()

//   Object.keys(packages).forEach((key)=>{
//     formData.append(key, packages[key])
//   })

//   await axios.post(
//     "https://travel-website-5-62rm.onrender.com/api/addpackages",
//     formData
//   )
//   navigate("/viewpackage")
// }
//   return (
//     <div>
//        <Form onSubmit={submit}>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Package Name</Form.Label>
//         <Form.Control type="text" name="packagename" placeholder="Enter Package Name" onChange={handlechange}/>
//         <Form.Text className="text-muted">
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Destination</Form.Label>
//         <Form.Control type="text" name="destination" placeholder="Enter Destination" onChange={handlechange}/>
//         <Form.Text className="text-muted">
//         </Form.Text>
//       </Form.Group>
      
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Description</Form.Label>
//         <Form.Control type="text" name="description" placeholder="Enter Description" onChange={handlechange}/>
//         <Form.Text className="text-muted">
//         </Form.Text>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Price</Form.Label>
//         <Form.Control type="number" name="price" placeholder="Enter Price" onChange={handlechange}/>
//         <Form.Text className="text-muted">
//         </Form.Text>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Duration</Form.Label>
//         <Form.Control type="text" name="duration" placeholder="Enter Duration" onChange={handlechange}/>
//         <Form.Text className="text-muted">
//         </Form.Text>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Start Date</Form.Label>
//         <Form.Control type="date" name="startdate" placeholder="Enter Start Date" onChange={handlechange}/>
//         <Form.Text className="text-muted">
//         </Form.Text>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>End Date</Form.Label>
//         <Form.Control type="date" name="enddate" placeholder="Enter End Date" onChange={handlechange} />
//         <Form.Text className="text-muted">
//         </Form.Text>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Max People</Form.Label>
//         <Form.Control type="number" name="maxpeople" placeholder="Enter Maximum People" onChange={handlechange}/>
//         <Form.Text className="text-muted">
//         </Form.Text>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Hotel</Form.Label>
//         <Form.Control type="text" name="hotel" placeholder="Enter Hotel Name" onChange={handlechange}/>
//         <Form.Text className="text-muted">
//         </Form.Text>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Transport</Form.Label>
//         <Form.Control type="text" name="transport" placeholder="Enter Transport" onChange={handlechange}/>
//         <Form.Text className="text-muted">
//         </Form.Text>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Food Include</Form.Label>
//         <Form.Control type="text" name="foodinclude" placeholder="Enter Food Item" onChange={handlechange}/>
//         <Form.Text className="text-muted">
//         </Form.Text>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Image</Form.Label>
//         <Form.Control type="file" name="foodinclude" placeholder="" onChange={handlechange}/>
//         <Form.Text className="text-muted">
//         </Form.Text>
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//     </div>
//   )
// }

// export default Package

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Package = () => {
  const navigate = useNavigate();
  const [packages, setpackages] = useState({
    packagename: "",
    destination: "",
    description: "",
    price: "",
    duration: "",
    startdate: "",
    enddate: "",
    maxpeople: "",
    hotel: "",
    transport: "",
    foodinclude: "",
    image: ""
  });

  const [previewImage, setPreviewImage] = useState(null);

  const handlechange = (e) => {
    if (e.target.type === "file") {
      setpackages({ ...packages, image: e.target.files[0] });
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
    } else {
      setpackages({ ...packages, [e.target.name]: e.target.value });
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(packages).forEach((key) => {
      formData.append(key, packages[key]);
    });
    await axios.post("https://travel-website-5-62rm.onrender.com/api/addpackages", formData);
    navigate("/viewpackage");
  };

  const inputStyle = {
    width: "100%",
    border: "1px solid #e0e0e0",
    borderRadius: 8,
    padding: "10px 14px",
    fontSize: 14,
    color: "#1a1a2e",
    background: "#fafafa",
    outline: "none",
    fontFamily: "Segoe UI, sans-serif",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  const labelStyle = {
    fontSize: 11,
    fontWeight: 600,
    color: "#aaa",
    letterSpacing: 0.8,
    textTransform: "uppercase",
    display: "block",
    marginBottom: 6,
  };

  const sectionTitleStyle = {
    fontSize: 11,
    fontWeight: 600,
    color: "#667eea",
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 16,
    paddingBottom: 10,
    borderBottom: "1px solid #f0f0f0",
    display: "flex",
    alignItems: "center",
    gap: 8,
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f4f6f9", fontFamily: "Segoe UI, sans-serif", padding: "32px" }}>

      {/* Page Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{
            width: 52, height: 52, borderRadius: 12,
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 26,
          }}>🧳</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 22, color: "#1a1a2e" }}>Add Travel Package</div>
            <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>Create a new tour package</div>
          </div>
        </div>
      </div>

      <form onSubmit={submit}>

        {/* Section 1 — Basic Info */}
        <div style={{
          background: "#fff", borderRadius: 12,
          boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
          border: "1px solid #e8e8e8",
          marginBottom: 20, overflow: "hidden",
        }}>
          <div style={{ padding: "16px 24px", borderBottom: "1px solid #f0f0f0" }}>
            <span style={{ fontWeight: 600, fontSize: 15, color: "#1a1a2e" }}>📋 Basic Information</span>
          </div>
          <div style={{ padding: "24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
              <div>
                <label style={labelStyle}>Package Name</label>
                <input
                  type="text" name="packagename"
                  placeholder="e.g. Kerala Backwaters Tour"
                  style={inputStyle}
                  onChange={handlechange}
                  onFocus={e => e.target.style.borderColor = "#667eea"}
                  onBlur={e => e.target.style.borderColor = "#e0e0e0"}
                  required
                />
              </div>
              <div>
                <label style={labelStyle}>Destination</label>
                <input
                  type="text" name="destination"
                  placeholder="e.g. Alleppey, Kerala"
                  style={inputStyle}
                  onChange={handlechange}
                  onFocus={e => e.target.style.borderColor = "#667eea"}
                  onBlur={e => e.target.style.borderColor = "#e0e0e0"}
                  required
                />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Description</label>
              <textarea
                name="description"
                placeholder="Describe what makes this package special…"
                style={{ ...inputStyle, minHeight: 100, resize: "vertical", lineHeight: 1.6 }}
                onChange={handlechange}
                onFocus={e => e.target.style.borderColor = "#667eea"}
                onBlur={e => e.target.style.borderColor = "#e0e0e0"}
                required
              />
            </div>
          </div>
        </div>

        {/* Section 2 — Pricing & Duration */}
        <div style={{
          background: "#fff", borderRadius: 12,
          boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
          border: "1px solid #e8e8e8",
          marginBottom: 20, overflow: "hidden",
        }}>
          <div style={{ padding: "16px 24px", borderBottom: "1px solid #f0f0f0" }}>
            <span style={{ fontWeight: 600, fontSize: 15, color: "#1a1a2e" }}>💰 Pricing & Duration</span>
          </div>
          <div style={{ padding: "24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
              <div>
                <label style={labelStyle}>Price (₹)</label>
                <input
                  type="number" name="price"
                  placeholder="e.g. 15000"
                  style={inputStyle}
                  onChange={handlechange}
                  onFocus={e => e.target.style.borderColor = "#667eea"}
                  onBlur={e => e.target.style.borderColor = "#e0e0e0"}
                  required
                />
              </div>
              <div>
                <label style={labelStyle}>Duration</label>
                <input
                  type="text" name="duration"
                  placeholder="e.g. 5 Days / 4 Nights"
                  style={inputStyle}
                  onChange={handlechange}
                  onFocus={e => e.target.style.borderColor = "#667eea"}
                  onBlur={e => e.target.style.borderColor = "#e0e0e0"}
                  required
                />
              </div>
              <div>
                <label style={labelStyle}>Max People</label>
                <input
                  type="number" name="maxpeople"
                  placeholder="e.g. 20"
                  style={inputStyle}
                  onChange={handlechange}
                  onFocus={e => e.target.style.borderColor = "#667eea"}
                  onBlur={e => e.target.style.borderColor = "#e0e0e0"}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 — Travel Dates */}
        <div style={{
          background: "#fff", borderRadius: 12,
          boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
          border: "1px solid #e8e8e8",
          marginBottom: 20, overflow: "hidden",
        }}>
          <div style={{ padding: "16px 24px", borderBottom: "1px solid #f0f0f0" }}>
            <span style={{ fontWeight: 600, fontSize: 15, color: "#1a1a2e" }}>📅 Travel Dates</span>
          </div>
          <div style={{ padding: "24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div>
                <label style={labelStyle}>Start Date</label>
                <input
                  type="date" name="startdate"
                  style={inputStyle}
                  onChange={handlechange}
                  onFocus={e => e.target.style.borderColor = "#667eea"}
                  onBlur={e => e.target.style.borderColor = "#e0e0e0"}
                  required
                />
              </div>
              <div>
                <label style={labelStyle}>End Date</label>
                <input
                  type="date" name="enddate"
                  style={inputStyle}
                  onChange={handlechange}
                  onFocus={e => e.target.style.borderColor = "#667eea"}
                  onBlur={e => e.target.style.borderColor = "#e0e0e0"}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 — Inclusions */}
        <div style={{
          background: "#fff", borderRadius: 12,
          boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
          border: "1px solid #e8e8e8",
          marginBottom: 20, overflow: "hidden",
        }}>
          <div style={{ padding: "16px 24px", borderBottom: "1px solid #f0f0f0" }}>
            <span style={{ fontWeight: 600, fontSize: 15, color: "#1a1a2e" }}>⭐ Package Inclusions</span>
          </div>
          <div style={{ padding: "24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
              <div>
                <label style={labelStyle}>Hotel</label>
                <input
                  type="text" name="hotel"
                  placeholder="e.g. Taj Backwaters"
                  style={inputStyle}
                  onChange={handlechange}
                  onFocus={e => e.target.style.borderColor = "#667eea"}
                  onBlur={e => e.target.style.borderColor = "#e0e0e0"}
                  required
                />
              </div>
              <div>
                <label style={labelStyle}>Transport</label>
                <input
                  type="text" name="transport"
                  placeholder="e.g. AC Bus + Houseboat"
                  style={inputStyle}
                  onChange={handlechange}
                  onFocus={e => e.target.style.borderColor = "#667eea"}
                  onBlur={e => e.target.style.borderColor = "#e0e0e0"}
                  required
                />
              </div>
              <div>
                <label style={labelStyle}>Food Include</label>
                <input
                  type="text" name="foodinclude"
                  placeholder="e.g. Breakfast & Dinner"
                  style={inputStyle}
                  onChange={handlechange}
                  onFocus={e => e.target.style.borderColor = "#667eea"}
                  onBlur={e => e.target.style.borderColor = "#e0e0e0"}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 5 — Image Upload */}
        <div style={{
          background: "#fff", borderRadius: 12,
          boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
          border: "1px solid #e8e8e8",
          marginBottom: 24, overflow: "hidden",
        }}>
          <div style={{ padding: "16px 24px", borderBottom: "1px solid #f0f0f0" }}>
            <span style={{ fontWeight: 600, fontSize: 15, color: "#1a1a2e" }}>🖼️ Package Image</span>
          </div>
          <div style={{ padding: "24px" }}>
            <div
              style={{
                border: "2px dashed #e0e0e0",
                borderRadius: 10,
                padding: "28px 20px",
                textAlign: "center",
                background: "#fafafa",
                cursor: "pointer",
                position: "relative",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#667eea"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#e0e0e0"}
            >
              <input
                type="file" name="image"
                onChange={handlechange}
                style={{
                  position: "absolute", inset: 0,
                  opacity: 0, cursor: "pointer",
                  width: "100%", height: "100%",
                }}
              />
              <div style={{ fontSize: 32, marginBottom: 8 }}>☁️</div>
              <div style={{ fontWeight: 600, fontSize: 14, color: "#1a1a2e", marginBottom: 4 }}>
                Click or drag image here
              </div>
              <div style={{ fontSize: 12, color: "#aaa" }}>Supports JPG, PNG, WEBP</div>
            </div>

            {previewImage && (
              <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
                <img
                  src={previewImage}
                  alt="preview"
                  style={{
                    width: 90, height: 90,
                    objectFit: "cover",
                    borderRadius: 10,
                    border: "1px solid #dee2e6",
                  }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
          <button
            type="button"
            onClick={() => navigate("/viewpackage")}
            style={{
              padding: "10px 24px",
              borderRadius: 8,
              border: "1px solid #e0e0e0",
              background: "#fff",
              color: "#555",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "Segoe UI, sans-serif",
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            style={{
              padding: "10px 28px",
              borderRadius: 8,
              border: "none",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "Segoe UI, sans-serif",
              boxShadow: "0 2px 8px rgba(102,126,234,0.4)",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            ✚ Publish Package
          </button>
        </div>

      </form>
    </div>
  );
};

export default Package;