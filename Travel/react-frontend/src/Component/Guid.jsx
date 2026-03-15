// import React, { useState } from 'react'

// const Guid = () => {
//     const [guide, setguid] = useState(
//         [
//     {
//       id: 1,
//       name: "Santhosh George ",
      
//       image: "https://img-mm.manoramaonline.com/content/dam/mm/mo/style/love-n-life/images/2022/12/31/santhosh-george-kulangara-main.jpg", // Elias
//       description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indust."
//     },
//     {
//       id: 2,
//       name: "SUjith Bhakthan",
//       image: "https://tse1.mm.bing.net/th/id/OIP.VJZ0PAEbHzWgL6DRCzeNTAHaEc?rs=1&pid=ImgDetMain&o=7&rm=3", // Ahmed
//       description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indust."
//     },
//     {
//       id: 3,
//       name: "Chithran",
     
//       image: "https://tse2.mm.bing.net/th/id/OIP.Zx8e0dRNQzSGO7OQkl6rSAHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3", // Eslam
//       description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indust."
//     }
//   ]
//     );
//   return (
//     <div>
//       <section className="guides-section">
//         {/* Header Text */}
//         <div className="services" style={{ padding: '0', marginBottom: '40px' }}>
//           <h2>Tour Guides</h2>
//           <div className="underline"></div>
//           <p>
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
//             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
//           </p>
//         </div>
//       </section>
//       {guide.map((guide) => (
//         <div key={guide.id} className="guide-card">
//           <div className="guide-img-box">
//             <img src={guide.image} alt={guide.name} />
//             <div className="social-overlay" >
//               <a href="#" className="social-btn fb">f</a>
//               <a href="#" className="social-btn tw">t</a>
//               <a href="#" className="social-btn be">Be</a>
//               <a href="#" className="social-btn dr">●</a>
//             </div>
//           </div>
          
//           <div className="guide-content">
//             <div className="guide-header">
//               <h4 className="guide-name">{guide.name}</h4>
//               <span className="guide-role">{guide.role}</span>
//             </div>
//             <p className="guide-desc">{guide.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Guid
import React, { useState } from "react";

const Guid = () => {
  const [guide] = useState([
    {
      id: 1,
      name: "Santhosh George",
      image: "https://img-mm.manoramaonline.com/content/dam/mm/mo/style/love-n-life/images/2022/12/31/santhosh-george-kulangara-main.jpg",
      description: "Santhosh George Kulangara (born; 25 December 1971) is an Indian traveller, television producer, director, broadcaster, editor, and publisher. He is the founder and managing director of Safari TV, a channel dedicated to travel and history-based programmes. Kulangara also serves as the head of Labour India Publications, an educational publisher for school children. As of 2025, Kulangara had reportedly travelled to 151 countries and his journeys have been telecast through Sancharam, the first travel documentary in Malayalam.",
    },
    {
      id: 2,
      name: "Sujith Bhakthan",
      image: "https://tse1.mm.bing.net/th/id/OIP.VJZ0PAEbHzWgL6DRCzeNTAHaEc?rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Sujith Bhakthan is a prominent YouTube content creator and travel vlogger from Kerala, India. He is known for his channel Tech Travel Eat, where he shares travel-related content, including vlogs, travel tips, and food exploration. Sujith has visited over 30 countries and has collaborated with brands like Intel, Vivo, and Tata Motors.",
    },
    {
      id: 3,
      name: "Chithran",
      image: "https://tse2.mm.bing.net/th/id/OIP.Zx8e0dRNQzSGO7OQkl6rSAHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Chithran Ramachandran is a Malayalam travel vlogger known for documenting extensive solo journeys across Indian states and Nepal, often trekking through villages and remote natural landscapes, sharing authentic experiences under his YouTube channel Travelogue by Chithran.",
    },
  ]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Outfit:wght@300;400;500;600&display=swap');

        .guid-page {
          min-height: 100vh;
          background: #f0f4ff;
          font-family: 'Outfit', sans-serif;
          padding: 0 0 60px;
        }

        /* ── Hero header ── */
        .guid-hero {
          text-align: center;
          padding: 64px 24px 48px;
          position: relative;
          overflow: hidden;
        }

        .guid-hero::before {
          content: '';
          position: absolute;
          top: -80px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(99,102,241,0.10) 0%, transparent 70%);
          pointer-events: none;
        }

        .guid-pill {
          display: inline-block;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #6366f1;
          background: rgba(99,102,241,0.08);
          border: 1px solid rgba(99,102,241,0.18);
          border-radius: 20px;
          padding: 5px 14px;
          margin-bottom: 16px;
        }

        .guid-hero h2 {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0 0 14px;
          letter-spacing: -0.5px;
        }

        .guid-hero p {
          max-width: 560px;
          margin: 0 auto;
          font-size: 14px;
          color: #a0a0b8;
          line-height: 1.7;
          font-weight: 300;
        }

        .guid-underline {
          width: 48px;
          height: 3px;
          background: linear-gradient(90deg, #6366f1, #a78bfa);
          border-radius: 10px;
          margin: 16px auto 0;
        }

        /* ── Cards list ── */
        .guid-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── Single card ── */
        .guid-card {
          display: flex;
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid #dde3f5;
          box-shadow: 0 8px 32px rgba(99,102,241,0.08);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: fadeUp 0.4s ease both;
        }

        .guid-card:nth-child(2) { animation-delay: 0.1s; }
        .guid-card:nth-child(3) { animation-delay: 0.2s; }

        .guid-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(99,102,241,0.14);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Image side ── */
        .guid-img-wrap {
          width: 280px;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
        }

        .guid-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .guid-card:hover .guid-img-wrap img {
          transform: scale(1.05);
        }

        .guid-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(26,26,46,0.55) 0%, transparent 50%);
          pointer-events: none;
        }

        .guid-social {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .guid-img-wrap:hover .guid-social {
          opacity: 1;
        }

        .guid-social a {
          width: 34px;
          height: 34px;
          background: rgba(255,255,255,0.95);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 12px;
          font-weight: 600;
          color: #6366f1;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          transition: background 0.2s, color 0.2s;
        }

        .guid-social a:hover {
          background: #6366f1;
          color: #fff;
        }

        /* ── Content side ── */
        .guid-content {
          flex: 1;
          padding: 32px 36px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .guid-number {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #c4c8e8;
          margin: 0 0 8px;
        }

        .guid-name {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0 0 6px;
        }

        .guid-role-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 500;
          color: #6366f1;
          background: rgba(99,102,241,0.07);
          border: 1px solid rgba(99,102,241,0.16);
          border-radius: 20px;
          padding: 3px 12px;
          margin-bottom: 16px;
        }

        .guid-divider {
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #6366f1, #a78bfa);
          border-radius: 4px;
          margin-bottom: 14px;
        }

        .guid-desc {
          font-size: 13.5px;
          color: #6a6a88;
          line-height: 1.75;
          font-weight: 300;
          margin: 0;
        }

        @media (max-width: 700px) {
          .guid-card { flex-direction: column; }
          .guid-img-wrap { width: 100%; height: 220px; }
          .guid-content { padding: 24px 20px; }
          .guid-hero h2 { font-size: 26px; }
        }
      `}</style>

      <div className="guid-page">
        {/* Hero */}
        <div className="guid-hero">
          <div className="guid-pill">Meet the team</div>
          <h2>Tour Guides</h2>
          <div className="guid-underline" />
          <p>Meet our experienced and professional tour guides who will make your travel experience unforgettable.</p>
        </div>

        {/* Cards */}
        <div className="guid-list">
          {guide.map((g, index) => (
            <div key={g.id} className="guid-card">

              {/* Image */}
              <div className="guid-img-wrap">
                <img src={g.image} alt={g.name} />
                <div className="guid-img-overlay" />
                <div className="guid-social">
                  <a href="#">f</a>
                  <a href="#">t</a>
                  <a href="#">in</a>
                  <a href="#">yt</a>
                </div>
              </div>

              {/* Content */}
              <div className="guid-content">
                <p className="guid-number">Guide #{String(index + 1).padStart(2, "0")}</p>
                <h4 className="guid-name">{g.name}</h4>
                <span className="guid-role-tag">Travel Expert</span>
                <div className="guid-divider" />
                <p className="guid-desc">{g.description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Guid;