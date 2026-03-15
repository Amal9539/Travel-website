// import React, { useState } from 'react';

// const Home = () => {
//   const [filter, setFilter] = useState('ALL');
//  const [activeIndex, setActiveIndex] = useState(0);
//   // Tour Data Array
  
   
  
//   return (
//     <>
//       {/* Hero */}
//       <section className="hero">
//         <div className="overlay"></div>
//         <div className="hero-content">
//           <h1>
//             God’s Own Country
//           </h1>
//           <button className="hero-btn">EXPLORE MORE</button>
//         </div>
//       </section>

   
//       <section
//       className="hero-section"
//       style={{ backgroundImage: "url('https://www.tyndistravel.com/uploads/blog/image/top-15-most-visited-kerala-tourist-places-kerala-tourism.jpg')"}}
//     >
//       <div className="hero-overlay">
//         <h1>GREAT EXPERIENCES</h1>
//         <h2>FOR TRAVELING AND TOURISM</h2>
//         <button className="hero-button">TAKE YOUR TOUR</button>
//       </div>
//     </section>
//     </>
//   );
// };

// export default Home;
import React from "react";

const Home = () => {
  // Scroll to Experience Section
  const handleExplore = () => {
    document.getElementById("experience").scrollIntoView({
      behavior: "smooth",
    });
  };

  // Tour Button
  const handleTour = () => {
    alert("Tour booking coming soon!");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* ================= HERO SECTION ================= */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          minHeight: "500px",
          overflow: "hidden",
        }}
      >
        {/* Hero Image */}
        <img
          src="https://wallpaperaccess.com/full/2755092.jpg"
          alt="Kerala Tourism"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",      // ✅ FULL SCREEN FIT
            objectPosition: "center",
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
            padding: "20px",
          }}
        >
          <div
            style={{
              background: "rgba(0,0,0,0.55)",
              padding: "35px 45px",
              borderRadius: "10px",
              maxWidth: "520px",
            }}
          >
            <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
              God’s Own Country
            </h1>
            <p style={{ fontSize: "17px", marginBottom: "22px" }}>
              Explore the beauty of Kerala tourism
            </p>
            
          </div>
        </div>
      </section>

      {/* ================= INFO SECTION ================= */}
      <section
        style={{
          padding: "70px 20px",
          textAlign: "center",
          background: "#f7f7f7",
        }}
      >
        <h2 style={{ fontSize: "30px", marginBottom: "15px" }}>
          Why Choose Kerala?
        </h2>
        <p
          style={{
            maxWidth: "720px",
            margin: "auto",
            fontSize: "16px",
            lineHeight: "1.7",
            color: "#444",
          }}
        >
          Kerala offers serene backwaters, lush green hills, peaceful beaches,
          rich wildlife, and a vibrant cultural heritage. A perfect destination
          for families, couples, and adventure lovers.
        </p>
      </section>

      {/* ================= EXPERIENCE SECTION ================= */}
      <section
        id="experience"
        style={{
          position: "relative",
          height: "70vh",
          minHeight: "450px",
          overflow: "hidden",
        }}
      >
        {/* Experience Image */}
        <img
          src="https://www.tyndistravel.com/uploads/blog/image/top-15-most-visited-kerala-tourist-places-kerala-tourism.jpg"
          alt="Kerala Experience"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <h1 style={{ fontSize: "34px" }}>Great Experiences</h1>
          <p style={{ fontSize: "18px", margin: "12px 0 22px" }}>
            For Traveling and Tourism
          </p>
          
        </div>
      </section>

     
      
    </div>
  );
};

export default Home;
