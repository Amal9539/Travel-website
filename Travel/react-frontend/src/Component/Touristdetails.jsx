
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { Carousel, Container, Row, Col } from 'react-bootstrap'

// const Touristdetails = () => {
//   const { id } = useParams()
//   const [places, setplace] = useState([])

//   useEffect(() => {
//     axios.get(`https://travel-website-5-62rm.onrender.com`)
//       .then(res => setplace(res.data))
//       .catch(err => console.log(err))
//   }, [])

//   const filter = places.filter((i) => i._id === id)

//   const styles = {
//     wrapper: {
//       minHeight: "100vh",
//       background: "linear-gradient(135deg, #e3f2fd, #ffffff)",
//       padding: "60px 0",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center"
//     },
//     card: {
//       width: "100%",
//       maxWidth: "800px",
//       background: "#ffffff",
//       borderRadius: "20px",
//       boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
//       padding: "40px",
//       transition: "0.3s"
//     },
//     title: {
//       fontSize: "34px",
//       fontWeight: "700",
//       textAlign: "center",
//       marginBottom: "30px",
//       color: "#1e3a8a",
//       letterSpacing: "1px"
//     },
//     carouselWrapper: {
//       borderRadius: "15px",
//       overflow: "hidden",
//       marginBottom: "30px",
//       boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
//     },
//     image: {
//       height: "400px",
//       width: "100%",
//       objectFit: "cover"
//     },
//     detailsBox: {
//       background: "#f8fafc",
//       padding: "25px",
//       borderRadius: "15px",
//       fontSize: "18px",
//       lineHeight: "30px"
//     },
//     label: {
//       fontWeight: "600",
//       color: "#0f172a"
//     },
//     description: {
//       marginTop: "10px",
//       color: "#475569"
//     }
//   }

//   return (
//     <div style={styles.wrapper}>
//       {filter.map((i) => (
//         <div key={i._id} style={styles.card}>

//           {/* Title */}
//           <div style={styles.title}>{i.place}</div>

//           {/* Carousel */}
//           <div style={styles.carouselWrapper}>
//             {i.image && (
//               <Carousel interval={2500}>
//                 {i.image.map((img, index) => (
//                   <Carousel.Item key={index}>
//                     <img
//                       src={"https://travel-website-5-62rm.onrender.com" + img}
//                       alt={`slide-${index}`}
//                       style={styles.image}
//                     />
//                   </Carousel.Item>
//                 ))}
//               </Carousel>
//             )}
//           </div>

//           {/* Details */}
//           <div style={styles.detailsBox}>
//             <p>
//               <span style={styles.label}>Category: </span>
//               {i.category}
//             </p>

//             <p style={styles.description}>
//               <span style={styles.label}>Description:</span>
//               <br />
//               {i.description}
//             </p>
//           </div>

//         </div>
//       ))}
//     </div>
//   )
// }

// export default Touristdetails
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'

const Touristdetails = () => {
  useEffect(() => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0; // Safari fallback
}, []);
  const { id } = useParams()
  const [places, setplace] = useState([])

  useEffect(() => {
    axios.get(`https://travel-website-5-62rm.onrender.com`)
      .then(res => setplace(res.data))
      .catch(err => console.log(err))
  }, [])

  const filter = places.filter((i) => i._id === id)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Outfit:wght@300;400;500;600&display=swap');

        .td-page {
          min-height: 100vh;
          background: #f0f4ff;
          font-family: 'Outfit', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
          box-sizing: border-box;
        }

        .td-card {
          display: flex;
          width: 100%;
          max-width: 1200px;
          min-height: 520px;
          background: #ffffff;
          border-radius: 22px;
          border: 1px solid #dde3f5;
          box-shadow: 0 16px 48px rgba(99,102,241,0.10);
          overflow: hidden;
          animation: fadeUp 0.4s ease both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Left: carousel ── */
        .td-carousel-side {
          width: 52%;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
        }

        .td-carousel-side .carousel,
        .td-carousel-side .carousel-inner,
        .td-carousel-side .carousel-item {
          height: 100%;
        }

        .td-carousel-side img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* darken carousel controls for visibility */
        .td-carousel-side .carousel-control-prev-icon,
        .td-carousel-side .carousel-control-next-icon {
          filter: invert(0) drop-shadow(0 2px 4px rgba(0,0,0,0.5));
        }

        .td-carousel-side .carousel-indicators [data-bs-target] {
          background-color: rgba(255,255,255,0.75);
        }

        /* ── Right: content ── */
        .td-content {
          flex: 1;
          padding: 44px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
        }

        .td-pill {
          display: inline-block;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #6366f1;
          background: rgba(99,102,241,0.08);
          border: 1px solid rgba(99,102,241,0.18);
          border-radius: 20px;
          padding: 4px 14px;
          margin-bottom: 14px;
          width: fit-content;
        }

        .td-title {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0 0 10px;
          letter-spacing: -0.4px;
          line-height: 1.25;
        }

        .td-category-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 24px;
        }

        .td-category-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #a78bfa);
          flex-shrink: 0;
        }

        .td-category-text {
          font-size: 13px;
          color: #6366f1;
          font-weight: 500;
        }

        .td-divider {
          width: 48px;
          height: 3px;
          background: linear-gradient(90deg, #6366f1, #a78bfa);
          border-radius: 4px;
          margin-bottom: 20px;
        }

        .td-desc-label {
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #b0b8d8;
          margin: 0 0 10px;
        }

        .td-desc {
          font-size: 14px;
          color: #5a5a7a;
          line-height: 1.8;
          font-weight: 300;
          margin: 0;
          background: #f5f7ff;
          border-left: 3px solid #6366f1;
          border-radius: 0 10px 10px 0;
          padding: 16px 18px;
        }

        @media (max-width: 768px) {
          .td-card { flex-direction: column; }
          .td-carousel-side { width: 100%; height: 260px; }
          .td-content { padding: 28px 24px; }
          .td-title { font-size: 24px; }
        }
      `}</style>

      <div className="td-page">
        {filter.map((i) => (
          <div key={i._id} className="td-card">

            {/* Left — Carousel */}
            <div className="td-carousel-side">
              {i.image && (
                <Carousel interval={2500}>
                  {i.image.map((img, index) => (
                    <Carousel.Item key={index}>
                      <img
                        src={"https://travel-website-5-62rm.onrender.com" + img}
                        alt={`slide-${index}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              )}
            </div>

            {/* Right — Content */}
            <div className="td-content">
              <div className="td-pill">Tourist Spot</div>

              <h1 className="td-title">{i.place}</h1>

              <div className="td-category-row">
                <div className="td-category-dot" />
                <span className="td-category-text">{i.category}</span>
              </div>

              <div className="td-divider" />

              <p className="td-desc-label">About this place</p>
              <p className="td-desc">{i.description}</p>
            </div>

          </div>
        ))}
      </div>
    </>
  )
}

export default Touristdetails