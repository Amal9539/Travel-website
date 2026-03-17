
// import axios from 'axios';
// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { Container, Card, Image } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const Tourist = () => {
//   const [place, setplace] = useState('');
//   const [district, setdistrict] = useState('');
//   const [category, setcategory] = useState('');
//   const [description, setdescription] = useState('');
//   const [images, setImages] = useState([]); // multiple images
//   const [previewImages, setPreviewImages] = useState([]);

//   const navigate = useNavigate();

//   // Handle file selection
//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files);
//     setImages(files);

//     // Preview images
//     const previews = files.map(file => URL.createObjectURL(file));
//     setPreviewImages(previews);
//   };

//   const submit = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("place", place);
//     formData.append("district", district);
//     formData.append("category", category);
//     formData.append("description", description);

//     images.forEach(img => formData.append("image", img));

//     axios.post("https://travel-website-5-62rm.onrender.com/tourist", formData)
//       .then((result) => {
//         console.log(result.data);
//         navigate('/view');
//       })
//       .catch((err) => console.log(err));
//   };

//   const styles = {
//     wrapper: { minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '40px 0', display: 'flex', alignItems: 'center' },
//     mainCard: { borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)', border: 'none', animation: 'fadeIn 0.6s ease-in', maxWidth: '700px', margin: '0 auto' },
//     headerSection: { marginBottom: '30px', paddingBottom: '20px', borderBottom: '3px solid #f0f0f0', textAlign: 'center' },
//     pageTitle: { fontSize: '2.5rem', fontWeight: '700', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
//     titleIcon: { color: '#667eea', marginRight: '15px' },
//     pageSubtitle: { color: '#6c757d', fontSize: '1.1rem', margin: 0 },
//     formLabel: { fontWeight: '600', color: '#2d3748', marginBottom: '8px', fontSize: '0.95rem', display: 'flex', alignItems: 'center' },
//     labelIcon: { marginRight: '8px', color: '#667eea' },
//     formControl: { borderRadius: '10px', border: '2px solid #e2e8f0', padding: '12px 15px', fontSize: '1rem', transition: 'all 0.3s ease' },
//     submitBtn: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', border: 'none', padding: '12px 40px', fontWeight: '600', borderRadius: '50px', boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)', transition: 'all 0.3s ease', fontSize: '1.1rem', width: '100%', marginTop: '10px' },
//     formGroup: { marginBottom: '25px' },
//     previewImage: { width: '80px', height: '80px', objectFit: 'cover', borderRadius: '10px', marginRight: '10px', marginBottom: '10px' },
//     previewWrapper: { display: 'flex', flexWrap: 'wrap', marginTop: '10px' },
//   };

//   return (
//     <div style={styles.wrapper}>
//       <style>
//         {`
//           @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css');
//           @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
//           .custom-form-control:focus { border-color: #667eea !important; box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25) !important; transform: translateY(-2px); }
//           .custom-form-control:hover { border-color: #a0aec0; }
//           .submit-btn:hover { transform: translateY(-2px) !important; box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6) !important; background: linear-gradient(135deg, #764ba2 0%, #667eea 100%) !important; }
//           .submit-btn:active { transform: translateY(0px) !important; }
//           @media (max-width: 768px) { .page-title { font-size: 2rem !important; } }
//         `}
//       </style>

//       <Container className="py-5">
//         <Card style={styles.mainCard}>
//           <Card.Body className="p-4 p-md-5">
//             <div style={styles.headerSection}>
//               <h1 style={styles.pageTitle}>
//                 <i className="bi bi-geo-alt-fill" style={styles.titleIcon}></i>
//                 Add Tourist Place
//               </h1>
//               <p style={styles.pageSubtitle}>Add a new destination to your collection</p>
//             </div>

//             <Form onSubmit={submit}>
//               {/* Place Name */}
//               <Form.Group style={styles.formGroup}>
//                 <Form.Label style={styles.formLabel}><i className="bi bi-pin-map-fill" style={styles.labelIcon}></i>Place Name</Form.Label>
//                 <Form.Control type="text" placeholder="Enter place name" onChange={(e) => setplace(e.target.value)} style={styles.formControl} className="custom-form-control" required />
//               </Form.Group>

//               {/* District */}
//               <Form.Group style={styles.formGroup}>
//                 <Form.Label style={styles.formLabel}><i className="bi bi-geo-fill" style={styles.labelIcon}></i>District</Form.Label>
//                 <Form.Control type="text" placeholder="Enter district" onChange={(e) => setdistrict(e.target.value)} style={styles.formControl} className="custom-form-control" required />
//               </Form.Group>

//               {/* Category */}
//               <Form.Group style={styles.formGroup}>
//                 <Form.Label style={styles.formLabel}><i className="bi bi-tag-fill" style={styles.labelIcon}></i>Category</Form.Label>
//                 <Form.Control type="text" placeholder="Enter category (e.g., Beach, Mountain, Historical)" onChange={(e) => setcategory(e.target.value)} style={styles.formControl} className="custom-form-control" required />
//               </Form.Group>

//               {/* Description */}
//               <Form.Group style={styles.formGroup}>
//                 <Form.Label style={styles.formLabel}><i className="bi bi-file-text-fill" style={styles.labelIcon}></i>Description</Form.Label>
//                 <Form.Control as="textarea" rows={4} placeholder="Enter description" onChange={(e) => setdescription(e.target.value)} style={{...styles.formControl, resize: 'vertical'}} className="custom-form-control" required />
//               </Form.Group>

//               {/* Images */}
//               <Form.Group style={styles.formGroup}>
//                 <Form.Label style={styles.formLabel}><i className="bi bi-image-fill" style={styles.labelIcon}></i>Upload Images</Form.Label>
//                 <Form.Control type="file" onChange={handleFileChange} style={styles.formControl} className="custom-form-control" multiple required />
//                 <div style={styles.previewWrapper}>
//                   {previewImages.map((img, idx) => (
//                     <Image key={idx} src={img} style={styles.previewImage} />
//                   ))}
//                 </div>
//               </Form.Group>

//               {/* Submit Button */}
//               <Button variant="primary" type="submit" style={styles.submitBtn} className="submit-btn">
//                 <i className="bi bi-check-circle me-2"></i>
//                 Add Tourist Place
//               </Button>
//             </Form>
//           </Card.Body>
//         </Card>
//       </Container>
//     </div>
//   );
// };

// export default Tourist;

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Tourist = () => {
  const [place, setplace] = useState('');
  const [district, setdistrict] = useState('');
  const [category, setcategory] = useState('');
  const [description, setdescription] = useState('');
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    const previews = files.map(file => URL.createObjectURL(file));
    setPreviewImages(previews);
  };

  const submit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("place", place);
    formData.append("district", district);
    formData.append("category", category);
    formData.append("description", description);
    images.forEach(img => formData.append("image", img));

    axios.post("https://travel-website-5-62rm.onrender.com/tourist", formData)
      .then((result) => {
        console.log(result.data);
        navigate('/view');
      })
      .catch((err) => console.log(err));
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
          }}>🗺️</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 22, color: "#1a1a2e" }}>Add Tourist Place</div>
            <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>Register a new destination</div>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div style={{
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
        border: "1px solid #e8e8e8",
        overflow: "hidden",
      }}>
        <div style={{ padding: "16px 24px", borderBottom: "1px solid #f0f0f0" }}>
          <span style={{ fontWeight: 600, fontSize: 15, color: "#1a1a2e" }}>Place Details</span>
        </div>

        <div style={{ padding: "28px 28px" }}>
          <form onSubmit={submit}>

            {/* Row 1: Place + District */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
              <div>
                <label style={labelStyle}>Place Name</label>
                <input
                  type="text"
                  placeholder="e.g. Munnar"
                  style={inputStyle}
                  onChange={(e) => setplace(e.target.value)}
                  onFocus={e => e.target.style.borderColor = "#667eea"}
                  onBlur={e => e.target.style.borderColor = "#e0e0e0"}
                  required
                />
              </div>
              <div>
                <label style={labelStyle}>District</label>
                <input
                  type="text"
                  placeholder="e.g. Idukki"
                  style={inputStyle}
                  onChange={(e) => setdistrict(e.target.value)}
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
                placeholder="e.g. Beach, Mountain, Historical, Wildlife…"
                style={inputStyle}
                onChange={(e) => setcategory(e.target.value)}
                onFocus={e => e.target.style.borderColor = "#667eea"}
                onBlur={e => e.target.style.borderColor = "#e0e0e0"}
                required
              />
            </div>

            {/* Description */}
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Description</label>
              <textarea
                placeholder="Describe what makes this place special — its history, atmosphere, and what visitors can experience…"
                style={{ ...inputStyle, minHeight: 110, resize: "vertical", lineHeight: 1.6 }}
                onChange={(e) => setdescription(e.target.value)}
                onFocus={e => e.target.style.borderColor = "#667eea"}
                onBlur={e => e.target.style.borderColor = "#e0e0e0"}
                required
              />
            </div>

            {/* Image Upload */}
            <div style={{ marginBottom: 28 }}>
              <label style={labelStyle}>Upload Images</label>
              <div style={{
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
                  onChange={handleFileChange}
                  multiple
                  required
                  style={{
                    position: "absolute", inset: 0,
                    opacity: 0, cursor: "pointer",
                    width: "100%", height: "100%",
                  }}
                />
                <div style={{ fontSize: 32, marginBottom: 8 }}>☁️</div>
                <div style={{ fontWeight: 600, fontSize: 14, color: "#1a1a2e", marginBottom: 4 }}>
                  Click or drag images here
                </div>
                <div style={{ fontSize: 12, color: "#aaa" }}>
                  Supports JPG, PNG, WEBP — multiple allowed
                </div>
              </div>

              {/* Image Previews */}
              {previewImages.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 14 }}>
                  {previewImages.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`preview-${idx}`}
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

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
              <button
                type="button"
                onClick={() => navigate('/view')}
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
                ✚ Publish Destination
              </button>
            </div>

          </form>
        </div>
      </div>

    </div>
  );
};

export default Tourist;