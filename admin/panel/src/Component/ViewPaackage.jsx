// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import Table from 'react-bootstrap/Table';
// import { Link } from 'react-router-dom';

// const ViewPaackage = () => {
//     const [data, setdata] = useState([])
//     useEffect(() => {
//       axios.get("https://travel-website-5-62rm.onrender.com/api/package")
//       .then((e)=>{
//         setdata(e.data)
//       })
//       .catch((err)=>{
//       console.log(err)
//     })
//     }, [])
    
//   return (
//     <div>
//         <Link to={"/package"}>Add Package</Link>
//       <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>Package Name</th>
//           <th>Destination</th>
//           <th>Description</th>
//           <th>Price</th>
//           <th>Duration</th>
//           <th>Start Date</th>
//           <th>End Date</th>
//           <th>Maximum People</th>
//           <th>Hotel</th>
//           <th>Transport</th>
//           <th>image</th>
//         </tr>
//       </thead>
//       <tbody>
//       {data.map((i)=>{
//         return(
//         <tr key={i._id}>
//           <td>{i.packagename}</td>
//           <td>{i.destination}</td>
//           <td>{i.description}</td>
//           <td>{i.price}</td>
//           <td>{i.duration}</td>
//           <td>{i.startdate}</td>
//           <td>{i.enddate}</td>
//           <td>{i.maxpeople}</td>
//           <td>{i.hotel}</td>
//           <td>{i.transport}</td>
//           <td>
//             {i.image && i.image.length > 0 && (
//             <img
//             src={`https://travel-website-5-62rm.onrender.com${i.image[0]}`}
//             width="80"
//             alt="tour"
//             />
//             )}
//             </td>
            
//         </tr>
//         )
//       })}
//       </tbody>
//     </Table>
//     </div>
//   )
// }

// export default ViewPaackage
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ViewPaackage = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get("https://travel-website-5-62rm.onrender.com/api/package")
      .then((e) => { setdata(e.data); })
      .catch((err) => { console.log(err); });
  }, []);

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
            <div style={{ fontWeight: 700, fontSize: 22, color: "#1a1a2e" }}>Travel Packages</div>
            <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>Manage all tour packages</div>
          </div>
        </div>
        <Link
          to="/package"
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
          + Add Package
        </Link>
      </div>

      {/* Stat Cards */}
      <div style={{ display: "flex", gap: 20, marginBottom: 28, flexWrap: "wrap" }}>
        {[
          { label: "Total Packages", value: data.length, icon: "🧳", iconBg: "#e9ecef" },
          { label: "Destinations", value: [...new Set(data.map(i => i.destination))].length, icon: "📍", iconBg: "#fff3cd" },
          { label: "With Images", value: data.filter(i => i.image && i.image.length > 0).length, icon: "🖼️", iconBg: "#d4edda" },
          { label: "Max Capacity", value: data.reduce((sum, i) => sum + (parseInt(i.maxpeople) || 0), 0), icon: "👥", iconBg: "#f8d7da" },
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
          <span style={{ fontWeight: 600, fontSize: 15, color: "#1a1a2e" }}>All Packages</span>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 1100 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #f0f0f0" }}>
                {["ID", "Package Name", "Destination", "Description", "Price", "Duration", "Start Date", "End Date", "Max People", "Hotel", "Transport", "Image"].map((h) => (
                  <th key={h} style={{
                    padding: "12px 16px",
                    textAlign: "left",
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
                  <td colSpan={12} style={{ textAlign: "center", padding: "60px", color: "#aaa", fontSize: 14 }}>
                    <div style={{ fontSize: 36, marginBottom: 10 }}>🧳</div>
                    No packages found. Add your first travel package.
                  </td>
                </tr>
              ) : (
                data.map((i, index) => (
                  <tr
                    key={i._id}
                    style={{ borderBottom: "1px solid #f5f5f5" }}
                    onMouseEnter={e => e.currentTarget.style.background = "#fafafa"}
                    onMouseLeave={e => e.currentTarget.style.background = "#fff"}
                  >
                    {/* # */}
                    <td style={{ padding: "14px 16px", fontSize: 13, color: "#aaa" }}>{index + 1}</td>

                    {/* Package Name */}
                    <td style={{ padding: "14px 16px", fontWeight: 600, fontSize: 14, color: "#1a1a2e", whiteSpace: "nowrap" }}>
                      {i.packagename}
                    </td>

                    {/* Destination */}
                    <td style={{ padding: "14px 16px" }}>
                      <span style={{
                        background: "#d4edda", color: "#155724",
                        borderRadius: 20, padding: "3px 12px",
                        fontSize: 12, fontWeight: 600, whiteSpace: "nowrap",
                      }}>📍 {i.destination}</span>
                    </td>

                    {/* Description */}
                    <td style={{ padding: "14px 16px", maxWidth: 160 }}>
                      <div style={{
                        fontSize: 12, color: "#6c757d",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        lineHeight: 1.5,
                      }}>{i.description}</div>
                    </td>

                    {/* Price */}
                    <td style={{ padding: "14px 16px" }}>
                      <span style={{
                        background: "#e7f1ff", color: "#0d6efd",
                        borderRadius: 20, padding: "3px 12px",
                        fontSize: 12, fontWeight: 600, whiteSpace: "nowrap",
                      }}>₹{i.price}</span>
                    </td>

                    {/* Duration */}
                    <td style={{ padding: "14px 16px" }}>
                      <span style={{
                        background: "#fff3cd", color: "#856404",
                        borderRadius: 20, padding: "3px 12px",
                        fontSize: 12, fontWeight: 600, whiteSpace: "nowrap",
                      }}>⏱ {i.duration}</span>
                    </td>

                    {/* Start Date */}
                    <td style={{ padding: "14px 16px", fontSize: 13, color: "#6c757d", whiteSpace: "nowrap" }}>
                      {i.startdate}
                    </td>

                    {/* End Date */}
                    <td style={{ padding: "14px 16px", fontSize: 13, color: "#6c757d", whiteSpace: "nowrap" }}>
                      {i.enddate}
                    </td>

                    {/* Max People */}
                    <td style={{ padding: "14px 16px" }}>
                      <span style={{
                        background: "#f8d7da", color: "#842029",
                        borderRadius: 20, padding: "3px 12px",
                        fontSize: 12, fontWeight: 600,
                      }}>👥 {i.maxpeople}</span>
                    </td>

                    {/* Hotel */}
                    <td style={{ padding: "14px 16px", fontSize: 13, color: "#555", whiteSpace: "nowrap" }}>
                      🏨 {i.hotel}
                    </td>

                    {/* Transport */}
                    <td style={{ padding: "14px 16px", fontSize: 13, color: "#555", whiteSpace: "nowrap" }}>
                      🚌 {i.transport}
                    </td>

                    {/* Image */}
                    <td style={{ padding: "14px 16px" }}>
                      {i.image && i.image.length > 0 ? (
                        <img
                          src={`https://travel-website-5-62rm.onrender.com${i.image[0]}`}
                          alt="tour"
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
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default ViewPaackage;