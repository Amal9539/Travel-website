// import React, { useEffect, useState } from 'react'
// import {useParams} from "react-router-dom"
// import axios from "axios"
// import Card from 'react-bootstrap/Card';

// const Packagedetail = () => {
//     const { id } = useParams()
//     console.log(id);
    
//     const [details, setdetails] = useState([])
//     useEffect(() => {
//   axios.get("http://localhost:5000/api/package")
//   .then((res)=> setdetails(res.data))
//   .catch((err)=> console.log(err))
// }, [])
//     const filter=details.filter((e)=>e._id===id)
    
//   return (
//     <div>
//         {filter.map((i)=>{
//             return(
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={`http://localhost:5000${i.image[0]}`} />
//       <Card.Body>
//         <Card.Title>{i.packagename}</Card.Title>
//         <Card.Text>
//           Destination: {i.destination}<br/>
//           Description: {i.description}<br/>

//                 Price: ₹{i.price}<br/>

//                 Duration: {i.duration} Days<br/>

//                 Start Date: {new Date(i.startdate).toLocaleDateString()}<br/>

//                 End Date: {new Date(i.enddate).toLocaleDateString()}<br/>

//                 Maximum People: {i.maxpeople}<br/>

//                 Hotel: {i.hotel}<br/>

//                 Transport: {i.transport}<br/>

//                 Food: {i.foodinclude}
//         </Card.Text>
//       </Card.Body>
//     </Card>
//             )
       
//       })}
//     </div>
//   )
// }

// export default Packagedetail
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"

const Packagedetail = () => {
  const { id } = useParams()
  const [details, setdetails] = useState([])

  useEffect(() => {
    axios.get("https://travel-website-5-62rm.onrender.com/api/package")
      .then((res) => setdetails(res.data))
      .catch((err) => console.log(err))
  }, [])

  const filter = details.filter((e) => e._id === id)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Outfit:wght@300;400;500;600&display=swap');

        .pkg-page {
          min-height: 100vh;
          background: #f0f4ff;
          font-family: 'Outfit', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
          box-sizing: border-box;
        }

        .pkg-card {
          display: flex;
          width: 100%;
          max-width: 1280px;
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid #dde3f5;
          box-shadow: 0 16px 48px rgba(99,102,241,0.10);
          overflow: hidden;
          animation: fadeUp 0.4s ease both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .pkg-image-side {
          width: 52%;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
        }

        .pkg-image-side img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .pkg-image-side:hover img {
          transform: scale(1.04);
        }

        .pkg-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, transparent 60%, rgba(255,255,255,0.08));
          pointer-events: none;
        }

        .pkg-content-side {
          flex: 1;
          padding: 40px 40px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        .pkg-tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #6366f1;
          background: rgba(99,102,241,0.08);
          border: 1px solid rgba(99,102,241,0.18);
          border-radius: 20px;
          padding: 4px 12px;
          margin-bottom: 14px;
          width: fit-content;
        }

        .pkg-title {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0 0 6px;
          letter-spacing: -0.3px;
          line-height: 1.3;
        }

        .pkg-destination {
          font-size: 13px;
          color: #a0a0b8;
          margin: 0 0 16px;
          font-weight: 300;
        }

        .pkg-price {
          font-size: 30px;
          font-weight: 600;
          color: #16a34a;
          margin: 0 0 24px;
          letter-spacing: -0.5px;
        }

        .pkg-price span {
          font-size: 14px;
          color: #a0a0b8;
          font-weight: 300;
          margin-left: 4px;
        }

        .pkg-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, #e8ecfa, transparent);
          margin-bottom: 24px;
        }

        .pkg-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px 24px;
          margin-bottom: 24px;
        }

        .pkg-field {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .pkg-field-label {
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.09em;
          color: #b0b8d8;
        }

        .pkg-field-value {
          font-size: 14px;
          color: #2d2d44;
          font-weight: 400;
        }

        .pkg-description {
          background: #f5f7ff;
          border-left: 3px solid #6366f1;
          border-radius: 0 8px 8px 0;
          padding: 12px 16px;
          font-size: 13px;
          color: #4a4a6a;
          line-height: 1.7;
          font-weight: 300;
          margin-top: auto;
        }
      `}</style>

      <div className="pkg-page">
        {filter.map((i) => (
          <div className="pkg-card" key={i._id}>

            {/* Left — Image */}
            <div className="pkg-image-side">
              <img src={`http://localhost:5000${i.image[0]}`} alt={i.packagename} />
              <div className="pkg-image-overlay" />
            </div>

            {/* Right — Content */}
            <div className="pkg-content-side">
              <div className="pkg-tag">Travel Package</div>

              <h1 className="pkg-title">{i.packagename}</h1>
              <p className="pkg-destination">📍 {i.destination}</p>

              <div className="pkg-price">
                ₹{i.price}<span>per person</span>
              </div>

              <div className="pkg-divider" />

              <div className="pkg-grid">
                <div className="pkg-field">
                  <span className="pkg-field-label">Duration</span>
                  <span className="pkg-field-value">{i.duration} Days</span>
                </div>
                <div className="pkg-field">
                  <span className="pkg-field-label">Max People</span>
                  <span className="pkg-field-value">{i.maxpeople}</span>
                </div>
                <div className="pkg-field">
                  <span className="pkg-field-label">Start Date</span>
                  <span className="pkg-field-value">{new Date(i.startdate).toLocaleDateString()}</span>
                </div>
                <div className="pkg-field">
                  <span className="pkg-field-label">End Date</span>
                  <span className="pkg-field-value">{new Date(i.enddate).toLocaleDateString()}</span>
                </div>
                <div className="pkg-field">
                  <span className="pkg-field-label">Hotel</span>
                  <span className="pkg-field-value">{i.hotel}</span>
                </div>
                <div className="pkg-field">
                  <span className="pkg-field-label">Transport</span>
                  <span className="pkg-field-value">{i.transport}</span>
                </div>
                <div className="pkg-field">
                  <span className="pkg-field-label">Food</span>
                  <span className="pkg-field-value">{i.foodinclude}</span>
                </div>
              </div>

              <div className="pkg-description">
                {i.description}
              </div>
            </div>

          </div>
        ))}
      </div>
    </>
  )
}

export default Packagedetail