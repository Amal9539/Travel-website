

// import React, { useState } from "react";

// const Packages = () => {
//   const [first] = useState([
//     {
//       title: "Kerala Super Saver Winter Package",
//       image:
//         "https://www.tripodeal.com/img/package_images/kerala/Kerala_super_saver_winter_packge.jpg?tt",
//       location: "IDUKKI",
//       duration: "10 Days",
//       price: "2300",
//     },
//     {
//       title: "Beauty Of Nature Kerala",
//       image:
//         "https://www.tripodeal.com/img/package_images/kerala/Beauty_of_nature_kerala.jpg?tt",
//       location: "Alappuzha",
//       duration: "4 Days",
//       price: "1600",
//     },
//     {
//       title: "Blissfull Munnar",
//       image:
//         "https://www.tripodeal.com/img/package_images/kerala/Blissfull_Munnar_with_Cherai_beach.jpg?tt",
//       location: "Munnar",
//       duration: "12 Days",
//       price: "3100",
//     },
//   ]);

//   return (
//     <>
//       <style>{`
//         body {
//           margin: 0;
//           font-family: 'Segoe UI', sans-serif;
//           background-color: #f4f7fb;
//         }

//         .packages {
//           text-align: center;
//           padding: 60px 20px 30px;
//           background: linear-gradient(to right, #eaf2ff, #f8fbff);
//         }

//         .packages h2 {
//           font-size: 32px;
//           font-weight: 700;
//           color: #1e3a5f;
//           margin-bottom: 10px;
//         }

//         .packages p {
//           max-width: 700px;
//           margin: 0 auto;
//           color: #555;
//           font-size: 15px;
//           line-height: 1.6;
//         }

//         .underline {
//           width: 80px;
//           height: 4px;
//           background: #0d6efd;
//           margin: 10px auto 20px;
//           border-radius: 10px;
//         }

//         .package-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//           gap: 30px;
//           padding: 40px 8%;
//         }

//         .tour-card {
//           background: #fff;
//           border-radius: 15px;
//           overflow: hidden;
//           box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
//           transition: 0.4s ease;
//           cursor: pointer;
//         }

//         .tour-card:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
//         }

//         .tour-img {
//           width: 100%;
//           height: 220px;
//           object-fit: cover;
//         }

//         .card-body {
//           padding: 20px;
//         }

//         .card-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .card-header h4 {
//           font-size: 16px;
//           font-weight: 600;
//           color: #222;
//         }

//         .rating {
//           color: #ffc107;
//           font-size: 14px;
//         }

//         .card-desc {
//           font-size: 13px;
//           color: #666;
//           margin: 15px 0;
//           line-height: 1.5;
//         }

//         .card-footer {
//           display: flex;
//           justify-content: space-between;
//           border-top: 1px solid #eee;
//           padding-top: 12px;
//         }

//         .footer-item {
//           font-size: 13px;
//           color: #444;
//           display: flex;
//           align-items: center;
//           gap: 5px;
//         }

//         .footer-icon {
//           font-size: 14px;
//           color: #0d6efd;
//         }

//         .footer-item:last-child {
//           font-weight: 600;
//           color: #198754;
//         }

//         @media (max-width: 768px) {
//           .packages h2 {
//             font-size: 24px;
//           }
//         }
//       `}</style>

//       <div>
//         <section className="packages">
//           <h2>Most Popular Packages</h2>
//           <div className="underline"></div>
//           <p>
//             Discover the best Kerala travel experiences with our carefully
//             designed tour packages. Enjoy nature, beaches, hills, and backwaters
//             at affordable prices.
//           </p>
//         </section>

//         <section className="package-grid">
//           {first.map((tour, index) => (
//             <div className="tour-card" key={index}>
//               <img src={tour.image} alt={tour.title} className="tour-img" />
//               <div className="card-body">
//                 <div className="card-header">
//                   <h4>{tour.title}</h4>
//                   <div className="rating">★★★★★</div>
//                 </div>

//                 <p className="card-desc">
//                   Explore the beauty of {tour.location} with our exclusive{" "}
//                   {tour.duration} travel experience.
//                 </p>

//                 <div className="card-footer">
//                   <div className="footer-item">
//                     <span className="footer-icon">📍</span>
//                     {tour.location}
//                   </div>

//                   <div className="footer-item">
//                     <span className="footer-icon">🕒</span>
//                     {tour.duration}
//                   </div>

//                   <div className="footer-item">
//                     <span className="footer-icon">₹</span>
//                     {tour.price}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </section>
//       </div>
//     </>
//   );
// };

// export default Packages;


import React, { useState } from "react";

const Packages = () => {
  const [first] = useState([
    {
      title: "Kerala Super Saver Winter Package",
      image:
        "https://www.tripodeal.com/img/package_images/kerala/Kerala_super_saver_winter_packge.jpg?tt",
      location: "IDUKKI",
      duration: "10 Days",
      price: "2300",
    },
    {
      title: "Beauty Of Nature Kerala",
      image:
        "https://www.tripodeal.com/img/package_images/kerala/Beauty_of_nature_kerala.jpg?tt",
      location: "Alappuzha",
      duration: "4 Days",
      price: "1600",
    },
    {
      title: "Blissfull Munnar",
      image:
        "https://www.tripodeal.com/img/package_images/kerala/Blissfull_Munnar_with_Cherai_beach.jpg?tt",
      location: "Munnar",
      duration: "12 Days",
      price: "3100",
    },
  ]);

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background-color: #f4f6f9;
        }

        .packages {
          text-align: center;
          padding: 60px 20px 30px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .packages h2 {
          font-size: 32px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
        }

        .packages p {
          max-width: 700px;
          margin: 0 auto;
          color: rgba(255,255,255,0.8);
          font-size: 15px;
          line-height: 1.6;
        }

        .underline {
          width: 80px;
          height: 4px;
          background: rgba(255,255,255,0.6);
          margin: 10px auto 20px;
          border-radius: 10px;
        }

        .package-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          padding: 40px 8%;
          background-color: #f4f6f9;
        }

        .tour-card {
          background: #fff;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          transition: 0.4s ease;
          cursor: pointer;
        }

        .tour-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .tour-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        .card-body {
          padding: 20px;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .card-header h4 {
          font-size: 16px;
          font-weight: 600;
          color: #222;
        }

        .rating {
          color: #ffc107;
          font-size: 14px;
        }

        .card-desc {
          font-size: 13px;
          color: #666;
          margin: 15px 0;
          line-height: 1.5;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid #eee;
          padding-top: 12px;
        }

        .footer-item {
          font-size: 13px;
          color: #444;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .footer-icon {
          font-size: 14px;
          color: #0d6efd;
        }

        .footer-item:last-child {
          font-weight: 600;
          color: #198754;
        }

        @media (max-width: 768px) {
          .packages h2 {
            font-size: 24px;
          }
        }
      `}</style>

      <div>
        <section className="packages">
          <h2>Most Popular Packages</h2>
          <div className="underline"></div>
          <p>
            Discover the best Kerala travel experiences with our carefully
            designed tour packages. Enjoy nature, beaches, hills, and backwaters
            at affordable prices.
          </p>
        </section>

        <section className="package-grid">
          {first.map((tour, index) => (
            <div className="tour-card" key={index}>
              <img src={tour.image} alt={tour.title} className="tour-img" />
              <div className="card-body">
                <div className="card-header">
                  <h4>{tour.title}</h4>
                  <div className="rating">★★★★★</div>
                </div>

                <p className="card-desc">
                  Explore the beauty of {tour.location} with our exclusive{" "}
                  {tour.duration} travel experience.
                </p>

                <div className="card-footer">
                  <div className="footer-item">
                    <span className="footer-icon">📍</span>
                    {tour.location}
                  </div>

                  <div className="footer-item">
                    <span className="footer-icon">🕒</span>
                    {tour.duration}
                  </div>

                  <div className="footer-item">
                    <span className="footer-icon">₹</span>
                    {tour.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Packages;