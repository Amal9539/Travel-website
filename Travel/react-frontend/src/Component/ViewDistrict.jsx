
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Col, Container, Row, Card } from "react-bootstrap";
// import { useNavigate, useParams } from "react-router-dom";

// const ViewDistrict = () => {
//   const { name } = useParams();
//   const navigate = useNavigate();
//   const [place, setPlace] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000")
//       .then((res) => setPlace(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   // Filter places by district name
//   const filter = place.filter(
//     (i) =>
//       i.district &&
//       i.district.toLowerCase() === name.toLowerCase()
//   );

//   const click = (item) => {
//     navigate(`/details/${item._id}`);
//   };

//   const styles = {
//     wrapper: {
//       minHeight: "100vh",
//       padding: "40px 0",
//       background: "#f8f9fa",
//     },
//     title: {
//       textAlign: "center",
//       color: "#333",
//       fontSize: "2rem",
//       fontWeight: "700",
//       marginBottom: "30px",
//     },
//     card: {
//       borderRadius: "10px",
//       boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//       height: "100%",
//     },
//     cardImg: {
//       height: "200px",
//       objectFit: "cover",
//       width: "100%",
//     },
//     cardBody: {
//       padding: "15px",
//       cursor: "pointer",
//     },
//     cardTitle: {
//       fontSize: "1.2rem",
//       fontWeight: "600",
//     },
//   };

//   return (
//     <div style={styles.wrapper}>
//       <Container>
//         <h2 style={styles.title}>{name} Tourist Places</h2>

//         <Row className="g-4">
//           {filter.length > 0 ? (
//             filter.map((i) => (
//               <Col key={i._id} xs={12} sm={6} md={4} lg={3}>
//                 <Card style={styles.card}>

//                   {/* Single Image */}
//                   {i.image && i.image.length > 0 ? (
//                     <img
//                       src={`http://localhost:5000${i.image[0]}`}
//                       style={styles.cardImg}
//                       alt="place"
//                     />
//                   ) : (
//                     <div
//                       style={{
//                         ...styles.cardImg,
//                         background: "#e9ecef",
//                       }}
//                     />
//                   )}

//                   <Card.Body
//                     style={styles.cardBody}
//                     onClick={() => click(i)}
//                   >
//                     <Card.Title style={styles.cardTitle}>
//                       {i.place}
//                     </Card.Title>
//                     <Card.Text>
//                       <strong>Category:</strong> {i.category} <br />
//                       <strong>Description:</strong> {i.description}
//                     </Card.Text>
//                   </Card.Body>

//                 </Card>
//               </Col>
//             ))
//           ) : (
//             <h5 className="text-center">No places found</h5>
//           )}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default ViewDistrict;



import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const ViewDistrict = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [place, setPlace] = useState([]);

  useEffect(() => {
    axios
      .get("https://travel-website-5-62rm.onrender.com")
      .then((res) => setPlace(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filter = place.filter(
    (i) => i.district && i.district.toLowerCase() === name.toLowerCase()
  );

  const click = (item) => {
    navigate(`/details/${item._id}`);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f0faf4", fontFamily: "Segoe UI, sans-serif" }}>

      {/* Header Banner */}
      <div style={{
        background: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
        padding: "48px 20px 36px",
        textAlign: "center",
        marginBottom: 40,
      }}>
        <div style={{ fontSize: 36, marginBottom: 10 }}>📍</div>
        <h2 style={{ color: "#fff", fontWeight: 700, fontSize: 28, marginBottom: 8 }}>
          {name} Tourist Places
        </h2>
        <div style={{
          width: 60, height: 4,
          background: "rgba(255,255,255,0.5)",
          borderRadius: 10, margin: "0 auto 12px",
        }} />
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, margin: 0 }}>
          {filter.length} place{filter.length !== 1 ? "s" : ""} found in {name}
        </p>
      </div>

      <Container>
        <Row className="g-4">
          {filter.length > 0 ? (
            filter.map((i) => (
              <Col key={i._id} xs={12} sm={6} md={4} lg={3}>
                <div
                  onClick={() => click(i)}
                  style={{
                    borderRadius: 12,
                    overflow: "hidden",
                    cursor: "pointer",
                    boxShadow: "0 4px 16px rgba(17,153,142,0.2)",
                    background: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
                    transition: "transform 0.25s, box-shadow 0.25s",
                    height: "100%",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = "0 12px 28px rgba(17,153,142,0.45)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(17,153,142,0.2)";
                  }}
                >
                  {/* Image */}
                  <div style={{ position: "relative" }}>
                    {i.image && i.image.length > 0 ? (
                      <img
                        src={`http://localhost:5000${i.image[0]}`}
                        alt="place"
                        style={{
                          width: "100%", height: 200,
                          objectFit: "cover", display: "block",
                        }}
                      />
                    ) : (
                      <div style={{
                        width: "100%", height: 200,
                        background: "rgba(255,255,255,0.15)",
                        display: "flex", alignItems: "center",
                        justifyContent: "center", fontSize: 40,
                      }}>🏞️</div>
                    )}
                    {/* Overlay */}
                    <div style={{
                      position: "absolute", bottom: 0, left: 0, right: 0,
                      height: 60,
                      background: "linear-gradient(to top, rgba(17,153,142,0.6), transparent)",
                    }} />
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: "16px" }}>
                    <div style={{
                      fontWeight: 700, fontSize: 16,
                      color: "#fff", marginBottom: 8,
                    }}>
                      {i.place}
                    </div>

                    <span style={{
                      display: "inline-block",
                      background: "rgba(255,255,255,0.2)",
                      color: "#fff",
                      borderRadius: 20, padding: "3px 12px",
                      fontSize: 12, fontWeight: 600,
                      marginBottom: 10,
                    }}>
                      🏷️ {i.category}
                    </span>

                    <p style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.85)",
                      lineHeight: 1.5,
                      margin: 0,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}>
                      {i.description}
                    </p>
                  </div>
                </div>
              </Col>
            ))
          ) : (
            <Col xs={12}>
              <div style={{
                textAlign: "center", padding: "60px 20px",
                color: "#aaa",
              }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>🏞️</div>
                <div style={{ fontSize: 16, fontWeight: 600, color: "#555" }}>
                  No places found in {name}
                </div>
              </div>
            </Col>
          )}
        </Row>
      </Container>

    </div>
  );
};

export default ViewDistrict;