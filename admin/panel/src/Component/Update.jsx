
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Button, Form, Container, Card, Spinner, Alert } from "react-bootstrap";
// import { useNavigate, useParams } from "react-router-dom";

// const Update = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [place, setPlace] = useState("");
//   const [district, setdistrict] = useState("");
//   const [category, setCategory] = useState("");
//   const [description, setDescription] = useState("");

//   const [images, setImages] = useState([]); // existing images (array)
//   const [selectedImages, setSelectedImages] = useState([]); // new selected images

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Fetch current place data
//   useEffect(() => {
//     axios
//       .get(`https://travel-website-5-62rm.onrender.com/getplace/${id}`)
//       .then((res) => {
//         setPlace(res.data.place);
//         setdistrict(res.data.district);
//         setCategory(res.data.category);
//         setDescription(res.data.description);
//         setImages(res.data.image || []); // array
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setError("Failed to load place data.");
//         setLoading(false);
//       });
//   }, [id]);

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("place", place);
//     formData.append("district", district);
//     formData.append("category", category);
//     formData.append("description", description);

//     // append multiple images
//     for (let i = 0; i < selectedImages.length; i++) {
//       formData.append("image", selectedImages[i]);
//     }

//     axios
//       .put(`https://travel-website-5-62rm.onrender.com/update/${id}`, formData)
//       .then(() => {
//         navigate("/view");
//       })
//       .catch((err) => {
//         console.error(err);
//         setError("Update failed. Please try again.");
//       });
//   };

//   const styles = {
//     wrapper: {
//       minHeight: "100vh",
//       background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//       display: "flex",
//       alignItems: "center",
//       padding: "40px 0",
//     },
//     mainCard: {
//       maxWidth: "700px",
//       margin: "0 auto",
//       borderRadius: "20px",
//       boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
//       border: "none",
//     },
//     imagePreview: {
//       width: "120px",
//       height: "120px",
//       objectFit: "cover",
//       borderRadius: "10px",
//       marginRight: "10px",
//       marginBottom: "10px",
//     },
//   };

//   return (
//     <div style={styles.wrapper}>
//       <Container>
//         <Card style={styles.mainCard}>
//           <Card.Body className="p-4">

//             <h2 className="mb-4 text-center">Update Tourist Place</h2>

//             {error && <Alert variant="danger">{error}</Alert>}

//             {loading ? (
//               <div className="text-center">
//                 <Spinner animation="border" />
//               </div>
//             ) : (
//               <Form onSubmit={handleSubmit} encType="multipart/form-data">

//                 <Form.Group className="mb-3">
//                   <Form.Label>Place</Form.Label>
//                   <Form.Control
//                     type="text"
//                     value={place}
//                     onChange={(e) => setPlace(e.target.value)}
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>District</Form.Label>
//                   <Form.Control
//                     type="text"
//                     value={district}
//                     onChange={(e) => setdistrict(e.target.value)}
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Category</Form.Label>
//                   <Form.Control
//                     type="text"
//                     value={category}
//                     onChange={(e) => setCategory(e.target.value)}
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Description</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     rows={4}
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     required
//                   />
//                 </Form.Group>

//                 {/* ✅ Show Current Images */}
//                 {images.length > 0 && (
//                   <div className="mb-3">
//                     <p><strong>Current Images</strong></p>
//                     <div style={{ display: "flex", flexWrap: "wrap" }}>
//                       {images.map((img, index) => (
//                         <img
//                           key={index}
//                           src={`https://travel-website-5-62rm.onrender.com${img}`}
//                           alt="place"
//                           style={styles.imagePreview}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* ✅ Upload Multiple New Images */}
//                 <Form.Group className="mb-3">
//                   <Form.Label>Change Images (Optional)</Form.Label>
//                   <Form.Control
//                     type="file"
//                     multiple
//                     onChange={(e) =>
//                       setSelectedImages(Array.from(e.target.files))
//                     }
//                   />
//                 </Form.Group>

//                 <Button type="submit" className="w-100">
//                   Update Tourist Place
//                 </Button>

//               </Form>
//             )}
//           </Card.Body>
//         </Card>
//       </Container>
//     </div>
//   );
// };

// export default Update;


import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [place, setPlace] = useState("");
  const [district, setdistrict] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [newPreviews, setNewPreviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`https://travel-website-5-62rm.onrender.com/getplace/${id}`)
      .then((res) => {
        setPlace(res.data.place);
        setdistrict(res.data.district);
        setCategory(res.data.category);
        setDescription(res.data.description);
        setImages(res.data.image || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load place data.");
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("place", place);
    formData.append("district", district);
    formData.append("category", category);
    formData.append("description", description);
    for (let i = 0; i < selectedImages.length; i++) {
      formData.append("image", selectedImages[i]);
    }
    axios
      .put(`https://travel-website-5-62rm.onrender.com/update/${id}`, formData)
      .then(() => { navigate("/view"); })
      .catch((err) => {
        console.error(err);
        setError("Update failed. Please try again.");
      });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages(files);
    setNewPreviews(files.map(f => URL.createObjectURL(f)));
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

  const sectionHeaderStyle = {
    fontWeight: 600,
    fontSize: 15,
    color: "#1a1a2e",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f4f6f9", fontFamily: "Segoe UI, sans-serif", padding: "32px" }}>

      {/* Page Header */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: 28 }}>
        <div style={{
          width: 52, height: 52, borderRadius: 12,
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 26, marginRight: 16,
        }}>✏️</div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 22, color: "#1a1a2e" }}>Update Destination</div>
          <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>Edit the details of this tourist place</div>
        </div>
      </div>

      {/* Error Banner */}
      {error && (
        <div style={{
          background: "#fff5f5", border: "1px solid #f5c6cb",
          borderRadius: 8, padding: "12px 16px",
          color: "#dc3545", fontSize: 14, marginBottom: 20,
          display: "flex", alignItems: "center", gap: 8,
        }}>
          ⚠️ {error}
        </div>
      )}

      {loading ? (
        <div style={{
          background: "#fff", borderRadius: 12, padding: "60px",
          textAlign: "center", border: "1px solid #e8e8e8",
          boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
        }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>
          <div style={{ color: "#aaa", fontSize: 14 }}>Loading place data…</div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} encType="multipart/form-data">

          {/* Section 1 — Place Details */}
          <div style={{
            background: "#fff", borderRadius: 12,
            boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
            border: "1px solid #e8e8e8",
            marginBottom: 20, overflow: "hidden",
          }}>
            <div style={{ padding: "16px 24px", borderBottom: "1px solid #f0f0f0" }}>
              <span style={sectionHeaderStyle}>📋 Place Details</span>
            </div>
            <div style={{ padding: "24px" }}>

              {/* Place + District */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                <div>
                  <label style={labelStyle}>Place Name</label>
                  <input
                    type="text"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "#667eea"}
                    onBlur={e => e.target.style.borderColor = "#e0e0e0"}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>District</label>
                  <input
                    type="text"
                    value={district}
                    onChange={(e) => setdistrict(e.target.value)}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "#667eea"}
                    onBlur={e => e.target.style.borderColor = "#e0e0e0"}
                    required
                  />
                </div>
              </div>

              {/* Category */}
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Category</label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "#667eea"}
                  onBlur={e => e.target.style.borderColor = "#e0e0e0"}
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label style={labelStyle}>Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{ ...inputStyle, minHeight: 110, resize: "vertical", lineHeight: 1.6 }}
                  onFocus={e => e.target.style.borderColor = "#667eea"}
                  onBlur={e => e.target.style.borderColor = "#e0e0e0"}
                  required
                />
              </div>
            </div>
          </div>

          {/* Section 2 — Current Images */}
          {images.length > 0 && (
            <div style={{
              background: "#fff", borderRadius: 12,
              boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
              border: "1px solid #e8e8e8",
              marginBottom: 20, overflow: "hidden",
            }}>
              <div style={{ padding: "16px 24px", borderBottom: "1px solid #f0f0f0" }}>
                <span style={sectionHeaderStyle}>🖼️ Current Images</span>
              </div>
              <div style={{ padding: "24px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                  {images.map((img, index) => (
                    <div key={index} style={{ position: "relative" }}>
                      <img
                        src={`https://travel-website-5-62rm.onrender.com${img}`}
                        alt="place"
                        style={{
                          width: 80, height: 80,
                          objectFit: "cover",
                          borderRadius: 8,
                          border: "1px solid #dee2e6",
                          display: "block",
                        }}
                      />
                      <span style={{
                        position: "absolute", bottom: -8, left: "50%",
                        transform: "translateX(-50%)",
                        background: "#667eea", color: "#fff",
                        fontSize: 10, fontWeight: 600,
                        padding: "2px 8px", borderRadius: 20,
                        whiteSpace: "nowrap",
                      }}>saved</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Section 3 — Replace Images */}
          <div style={{
            background: "#fff", borderRadius: 12,
            boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
            border: "1px solid #e8e8e8",
            marginBottom: 24, overflow: "hidden",
          }}>
            <div style={{ padding: "16px 24px", borderBottom: "1px solid #f0f0f0", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={sectionHeaderStyle}>🔄 Replace Images</span>
              <span style={{ fontSize: 12, color: "#aaa", fontWeight: 400 }}>(optional)</span>
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
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  style={{
                    position: "absolute", inset: 0,
                    opacity: 0, cursor: "pointer",
                    width: "100%", height: "100%",
                  }}
                />
                <div style={{ fontSize: 32, marginBottom: 8 }}>☁️</div>
                <div style={{ fontWeight: 600, fontSize: 14, color: "#1a1a2e", marginBottom: 4 }}>
                  Click or drag new images here
                </div>
                <div style={{ fontSize: 12, color: "#aaa" }}>
                  Uploading will replace current images · JPG, PNG, WEBP
                </div>
              </div>

              {newPreviews.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 14 }}>
                  {newPreviews.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`new-${idx}`}
                      style={{
                        width: 70, height: 70,
                        objectFit: "cover",
                        borderRadius: 8,
                        border: "1px solid #dee2e6",
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
            <button
              type="button"
              onClick={() => navigate("/view")}
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
              ✔ Save Changes
            </button>
          </div>

        </form>
      )}
    </div>
  );
};

export default Update;