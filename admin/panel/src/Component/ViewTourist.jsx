


// import React, { useEffect, useState } from "react";
// import Table from "react-bootstrap/Table";
// import { Button } from "react-bootstrap";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const ViewTourist = () => {
//   const [data, setData] = useState([]);

//   // Fetch all places
//   useEffect(() => {
//     axios
//       .get("https://travel-website-5-62rm.onrender.com/")
//       .then((res) => setData(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   // Delete function
//   const handledelete = (id) => {
//     axios
//       .delete(`https://travel-website-5-62rm.onrender.com/delete/${id}`)
//       .then(() => {
//         setData(data.filter((item) => item._id !== id));
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Tourist Places</h2>

//       <Link to="/touristplace">
//         <Button
//           size="sm"
//           style={{ backgroundColor: "#343a40", border: "none" }}
//           className="mb-3"
//         >
//           + Add Place
//         </Button>
//       </Link>

//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Place</th>
//             <th>District</th>
//             <th>Category</th>
//             <th>Description</th>
//             <th>Image</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {data.map((i) => (
//             <tr key={i._id}>
//               <td>{i.place}</td>
//               <td>{i.district}</td>
//               <td>{i.category}</td>
//               <td>{i.description}</td>

//               {/* ✅ Show first image only */}
//               <td>
//                 {i.image && i.image.length > 0 ? (
//                   <img
//                     src={`https://travel-website-5-62rm.onrender.com${i.image[0]}`}
//                     alt="place"
//                     style={{
//                       width: "70px",
//                       height: "70px",
//                       objectFit: "cover",
//                       borderRadius: "6px",
//                     }}
//                   />
//                 ) : (
//                   "No Image"
//                 )}
//               </td>

//               <td>
//                 <Link
//                   to={`/update/${i._id}`}
//                   className="btn btn-sm btn-outline-dark me-2"
//                 >
//                   Update
//                 </Link>

//                 <button
//                   className="btn btn-sm btn-outline-danger"
//                   onClick={() => handledelete(i._id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default ViewTourist;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewTourist = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://travel-website-5-62rm.onrender.com/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handledelete = (id) => {
    axios
      .delete(`https://travel-website-5-62rm.onrender.com/delete/${id}`)
      .then(() => {
        setData(data.filter((item) => item._id !== id));
      })
      .catch((err) => console.log(err));
  };

  const districts = [...new Set(data.map((i) => i.district))].length;
  const categories = [...new Set(data.map((i) => i.category))].length;
  const withImages = data.filter((i) => i.image && i.image.length > 0).length;

  return (
    <div style={{ minHeight: "100vh", background: "#f4f6f9", fontFamily: "Segoe UI, sans-serif" }}>

      {/* ── Page Content ── */}
      <div style={{ padding: "32px" }}>

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
              <div style={{ fontWeight: 700, fontSize: 22, color: "#1a1a2e" }}>Tourist Destinations</div>
              <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>Manage all listed places</div>
            </div>
          </div>
          <Link
            to="/touristplace"
            style={{
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "10px 20px",
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              boxShadow: "0 2px 8px rgba(102,126,234,0.4)",
            }}
          >
            + Add New Place
          </Link>
        </div>

        {/* Stat Cards */}
        <div style={{ display: "flex", gap: 20, marginBottom: 28, flexWrap: "wrap" }}>
          {[
            { label: "Total Places", value: data.length,  icon: "📋", iconBg: "#e9ecef" },
            { label: "With Images",  value: withImages,   icon: "🖼️", iconBg: "#d4edda" },
            { label: "Districts",    value: districts,    icon: "📍", iconBg: "#fff3cd" },
            { label: "Categories",   value: categories,   icon: "🏷️", iconBg: "#f8d7da" },
          ].map((s) => (
            <div key={s.label} style={{
              flex: "1 1 180px",
              background: "#fff",
              borderRadius: 12,
              padding: "18px 20px",
              display: "flex",
              alignItems: "center",
              gap: 16,
              boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
              border: "1px solid #e8e8e8",
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: 10,
                background: s.iconBg,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, flexShrink: 0,
              }}>{s.icon}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 22, color: "#1a1a2e", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "#888", marginTop: 3 }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Table Card */}
        <div style={{
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
          border: "1px solid #e8e8e8",
          overflow: "hidden",
        }}>
          <div style={{ padding: "16px 24px", borderBottom: "1px solid #f0f0f0" }}>
            <span style={{ fontWeight: 600, fontSize: 15, color: "#1a1a2e" }}>All Places</span>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 800 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #f0f0f0" }}>
                  {["ID", "Place", "District", "Category", "Description", "Image", "Actions"].map((h) => (
                    <th key={h} style={{
                      padding: "12px 16px",
                      textAlign: h === "Actions" ? "center" : "left",
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#aaa",
                      letterSpacing: 0.8,
                      whiteSpace: "nowrap",
                    }}>{h.toUpperCase()}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td colSpan={7} style={{ textAlign: "center", padding: "60px", color: "#aaa", fontSize: 14 }}>
                      <div style={{ fontSize: 36, marginBottom: 10 }}>🗺️</div>
                      No places found. Add your first destination.
                    </td>
                  </tr>
                ) : (
                  data.map((i, index) => (
                    <tr key={i._id} style={{ borderBottom: "1px solid #f5f5f5" }}
                      onMouseEnter={e => e.currentTarget.style.background = "#fafafa"}
                      onMouseLeave={e => e.currentTarget.style.background = "#fff"}
                    >
                      {/* # */}
                      <td style={{ padding: "16px", fontSize: 14, color: "#555" }}>{index + 1}</td>

                      {/* Place */}
                      <td style={{ padding: "16px", fontWeight: 600, fontSize: 14, color: "#1a1a2e" }}>{i.place}</td>

                      {/* District */}
                      <td style={{ padding: "16px" }}>
                        <span style={{
                          background: "#d4edda", color: "#155724",
                          borderRadius: 20, padding: "3px 12px",
                          fontSize: 12, fontWeight: 600,
                        }}>📍 {i.district}</span>
                      </td>

                      {/* Category */}
                      <td style={{ padding: "16px" }}>
                        <span style={{
                          background: "#fff3cd", color: "#856404",
                          borderRadius: 20, padding: "3px 12px",
                          fontSize: 12, fontWeight: 600,
                        }}>🏷️ {i.category}</span>
                      </td>

                      {/* Description */}
                      <td style={{ padding: "16px", maxWidth: 200 }}>
                        <div style={{
                          fontSize: 13, color: "#6c757d",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          lineHeight: 1.5,
                        }}>{i.description}</div>
                      </td>

                      {/* Image */}
                      <td style={{ padding: "16px" }}>
                        {i.image && i.image.length > 0 ? (
                          <img
                            src={`https://travel-website-5-62rm.onrender.com${i.image[0]}`}
                            alt="place"
                            style={{
                              width: 56, height: 56,
                              objectFit: "cover",
                              borderRadius: 8,
                              border: "1px solid #dee2e6",
                              display: "block",
                            }}
                          />
                        ) : (
                          <div style={{
                            width: 56, height: 56, borderRadius: 8,
                            background: "#e9ecef",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 20, color: "#adb5bd",
                          }}>🖼️</div>
                        )}
                      </td>

                      {/* Actions */}
                      <td style={{ padding: "16px", textAlign: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                          <Link
                            to={`/update/${i._id}`}
                            style={{
                              background: "#f0f4ff", color: "#667eea",
                              border: "1px solid #d0d8ff",
                              borderRadius: 6, padding: "6px 14px",
                              fontSize: 13, fontWeight: 600,
                              textDecoration: "none",
                              display: "inline-flex", alignItems: "center", gap: 4,
                            }}
                          >
                            ✏️ Edit
                          </Link>
                          <button
                            onClick={() => handledelete(i._id)}
                            style={{
                              background: "#fff0f0", color: "#dc3545",
                              border: "1px solid #f5c6cb",
                              borderRadius: 6, padding: "6px 14px",
                              fontSize: 13, fontWeight: 600,
                              cursor: "pointer",
                              display: "inline-flex", alignItems: "center", gap: 4,
                            }}
                          >
                            🗑️ Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ViewTourist;