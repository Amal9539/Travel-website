// import React from 'react'

// const Contact = () => {
//   return (
//     <div>
//       <div className="contact-wrapper">
//       {/* LEFT SIDE */}
//       <div className="contact-left">
//         <div className="card">
//           <h3>GET IN TOUCH</h3>
//           <p>
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been standard.
//           </p>

//           <div className="social-icons">
//             <span className="icon facebook">f</span>
//             <span className="icon twitter">t</span>
//             <span className="icon behance">Be</span>
//             <span className="icon dribbble">◉</span>
//           </div>
//         </div>

//         <div className="card info-grid">
//           <div>
//             <h4>OUR ADDRESS</h4>
//             <p>📍 1234 Address name. City Name</p>
//             <p>📞 (123) 456-7890</p>
//             <p>✉️ mail@example.com</p>
//           </div>

//           <div>
//             <h4>BUSINESS HOURS</h4>
//             <p>🕒 Mon - Fri: 8am to 5pm</p>
//             <p>🕒 Sat: 8am to 11am</p>
//             <p>🕒 Sun: Closed</p>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="contact-right card">
//         <h3>DROP YOUR MESSAGE</h3>

//         <form>
//           <input type="text" placeholder="Your Name" />
//           <input type="email" placeholder="Your Email" />
//           <textarea placeholder="Your Message" rows="6"></textarea>
//           <button type="submit">Send</button>
//         </form>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Contact


import React from "react";

const Contact = () => {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: #f4f7fb;
        }

        .contact-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          padding: 60px 8%;
          justify-content: center;
        }

        .card {
          background: #ffffff;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        /* LEFT SIDE */
        .contact-left {
          flex: 1 1 400px;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .contact-left h3 {
          margin-bottom: 15px;
          color: #1e3a5f;
          font-size: 22px;
        }

        .contact-left p {
          font-size: 14px;
          color: #555;
          line-height: 1.6;
        }

        /* Social Icons */
        .social-icons {
          margin-top: 20px;
          display: flex;
          gap: 12px;
        }

        .icon {
          width: 40px;
          height: 40px;
          background: #0d6efd;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          cursor: pointer;
          font-weight: bold;
          transition: 0.3s;
        }

        .icon:hover {
          background: #1e3a5f;
          transform: scale(1.1);
        }

        /* Info Grid */
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .info-grid h4 {
          margin-bottom: 10px;
          color: #0d6efd;
          font-size: 15px;
        }

        .info-grid p {
          font-size: 13px;
          margin: 5px 0;
          color: #444;
        }

        /* RIGHT SIDE */
        .contact-right {
          flex: 1 1 400px;
        }

        .contact-right h3 {
          margin-bottom: 20px;
          color: #1e3a5f;
          font-size: 22px;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        input, textarea {
          padding: 12px 15px;
          border-radius: 8px;
          border: 1px solid #ddd;
          font-size: 14px;
          outline: none;
          transition: 0.3s;
        }

        input:focus, textarea:focus {
          border-color: #0d6efd;
          box-shadow: 0 0 0 2px rgba(13, 110, 253, 0.2);
        }

        button {
          padding: 12px;
          border-radius: 8px;
          border: none;
          background: #0d6efd;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          background: #1e3a5f;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .contact-wrapper {
            flex-direction: column;
            padding: 40px 5%;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="contact-wrapper">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <div className="card">
            <h3>GET IN TOUCH</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been standard.
            </p>

            <div className="social-icons">
              <span className="icon">f</span>
              <span className="icon">t</span>
              <span className="icon">Be</span>
              <span className="icon">◉</span>
            </div>
          </div>

          <div className="card info-grid">
            <div>
              <h4>OUR ADDRESS</h4>
              <p>📍 1234 Address name. City Name</p>
              <p>📞 (123) 456-7890</p>
              <p>✉️ mail@example.com</p>
            </div>

            <div>
              <h4>BUSINESS HOURS</h4>
              <p>🕒 Mon - Fri: 8am to 5pm</p>
              <p>🕒 Sat: 8am to 11am</p>
              <p>🕒 Sun: Closed</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right card">
          <h3>DROP YOUR MESSAGE</h3>

          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" rows="6"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
