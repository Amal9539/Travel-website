// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { useNavigate } from 'react-router-dom';
// const District = () => {
//     const navigate=useNavigate()
//     const [district, setdistrict] = useState([
//         {
//             name:"Thiruvananthapuram",
//             image:"https://images.unsplash.com/photo-1644773182204-f0bf03cae0cb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            
//         },
//         {
//             name:"Kollam",
//             image:"https://static.wixstatic.com/media/c8e24e_389399b79d7d4ff2a10f52d619e12840~mv2.jpeg/v1/fill/w_616,h_346,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Jatayu-Nature-Park-In-Kerala.jpeg"
//         },
//         {
//             name:"Pathanamthitta",
//             image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/77/4e/32/caption.jpg?w=1000&h=500&s=1"
//         },
//         {
//             name:"Alappuzha",
//             image:"https://wallpapercave.com/wp/wp7877187.jpg"
//         },
//         {
//             name:"Kottayam",
//             image:"https://tse4.mm.bing.net/th/id/OIP.zMHT4MkSdq6NA0lhJE8CKAHaEc?rs=1&pid=ImgDetMain&o=7&rm=3"
//         },
//         {
//             name:"Idukki",
//             image:"https://indiatravel.app/wp-content/uploads/2024/04/idukki-arch-dam-1024x585.jpg"
//         },
//         {
//             name:"Ernakulam",
//             image:"https://www.keralatourism.org/images/ebooks/images/ernakulam2.jpg"
//         },
//         {
//             name:"Thirssur",
//             image:"https://th.bing.com/th/id/R.1f5631d8d9c11732d0e794eec022541a?rik=UtOQ95a8Q4QlBA&riu=http%3a%2f%2fnorthkeralatourpackages.com%2fwp-content%2fuploads%2f2018%2f04%2f8.jpg&ehk=BpiqK27qmHhMXqm%2b2r7tKcPS8v5FSnaM4yXD%2bBBwa9Y%3d&risl=&pid=ImgRaw&r=0"
//         },
//         {
//             name:"Palakkad",
//             image:"https://img.onmanorama.com/content/dam/mm/en/travel/kerala/images/2023/11/13/kollengode-pic.jpg"
//         },
//         {
//             name:"Malappuram",
//             image:"https://www.keralatourism.org/_next/image/?url=http:%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Flarge-desktop%2Fmalappuram-1713787896_d3fc5b288e34a59ebaba.webp&w=3840&q=75"
//         },
//         {
//             name:"Kozhikode",
//             image:"https://img.onmanorama.com/content/dam/mm/en/archive/travel/kerala/images/2025/7/11/kozhikode-best-spots.jpg?w=1120&h=583"
//         },
//         {
//             name:"Wayanad",
//             image:"https://peopleplaces.in/wp-content/uploads/2022/11/Wayanad-best-places-to-visit-1000x600.jpg"
//         },
//         {
//             name:"Kannur",
//             image:"https://kannurairport.aero/kial/public/uploads/destination_img/theyyam.jpg"
//         },
//         {
//             name:"Kasaragod",
//             image:"https://th.bing.com/th/id/R.3aebb8c3b127f666e4fb03d58120ed91?rik=sVWyB0RMjbCzsg&riu=http%3a%2f%2fwww.keralaindiatourism.net%2fimages%2fkasargod.jpg&ehk=VASH7L68w5ukMlp2CHpYNxCe%2fbAWra5XAUkZoDPEVnQ%3d&risl=&pid=ImgRaw&r=0"
//         },
//     ])
//     const click = (item) => {
//   navigate(`/viewdistrict/${item.name}`)
// }

//   return (
//     <div className='row'>
//       {district.map((i, index) => {
//   return (
//     <Card
//       key={index}
//       style={{ width: '18rem', cursor: "pointer" }}
//       onClick={()=>click(i)}
//     >
//          <Card.Img
//                     variant="top"
//                     src={i.image}
//                     style={{height:"150px"}}
//                   />
//       <Card.Body>
//         <Card.Title style={{textAlign:"center"}}>{i.name} </Card.Title>
//       </Card.Body>
//     </Card>
//   );
// })}
//     </div>
//   )
// }

// export default District



import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const District = () => {
  const navigate = useNavigate()
  const [district] = useState([
    { name: "Thiruvananthapuram", image: "https://images.unsplash.com/photo-1644773182204-f0bf03cae0cb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Kollam", image: "https://static.wixstatic.com/media/c8e24e_389399b79d7d4ff2a10f52d619e12840~mv2.jpeg/v1/fill/w_616,h_346,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Jatayu-Nature-Park-In-Kerala.jpeg" },
    { name: "Pathanamthitta", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/77/4e/32/caption.jpg?w=1000&h=500&s=1" },
    { name: "Alappuzha", image: "https://wallpapercave.com/wp/wp7877187.jpg" },
    { name: "Kottayam", image: "https://tse4.mm.bing.net/th/id/OIP.zMHT4MkSdq6NA0lhJE8CKAHaEc?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Idukki", image: "https://indiatravel.app/wp-content/uploads/2024/04/idukki-arch-dam-1024x585.jpg" },
    { name: "Ernakulam", image: "https://www.keralatourism.org/images/ebooks/images/ernakulam2.jpg" },
    { name: "Thirssur", image: "https://th.bing.com/th/id/R.1f5631d8d9c11732d0e794eec022541a?rik=UtOQ95a8Q4QlBA&riu=http%3a%2f%2fnorthkeralatourpackages.com%2fwp-content%2fuploads%2f2018%2f04%2f8.jpg&ehk=BpiqK27qmHhMXqm%2b2r7tKcPS8v5FSnaM4yXD%2bBBwa9Y%3d&risl=&pid=ImgRaw&r=0" },
    { name: "Palakkad", image: "https://img.onmanorama.com/content/dam/mm/en/travel/kerala/images/2023/11/13/kollengode-pic.jpg" },
    { name: "Malappuram", image: "https://www.keralatourism.org/_next/image/?url=http:%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Flarge-desktop%2Fmalappuram-1713787896_d3fc5b288e34a59ebaba.webp&w=3840&q=75" },
    { name: "Kozhikode", image: "https://img.onmanorama.com/content/dam/mm/en/archive/travel/kerala/images/2025/7/11/kozhikode-best-spots.jpg?w=1120&h=583" },
    { name: "Wayanad", image: "https://peopleplaces.in/wp-content/uploads/2022/11/Wayanad-best-places-to-visit-1000x600.jpg" },
    { name: "Kannur", image: "https://kannurairport.aero/kial/public/uploads/destination_img/theyyam.jpg" },
    { name: "Kasaragod", image: "https://th.bing.com/th/id/R.3aebb8c3b127f666e4fb03d58120ed91?rik=sVWyB0RMjbCzsg&riu=http%3a%2f%2fwww.keralaindiatourism.net%2fimages%2fkasargod.jpg&ehk=VASH7L68w5ukMlp2CHpYNxCe%2fbAWra5XAUkZoDPEVnQ%3d&risl=&pid=ImgRaw&r=0" },
  ])

  const click = (item) => {
    navigate(`/viewdistrict/${item.name}`)
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f0faf4", fontFamily: "Segoe UI, sans-serif" }}>

      {/* Header Banner */}
      <div style={{
        background: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
        padding: "48px 20px 36px",
        textAlign: "center",
        marginBottom: 40,
      }}>
        <div style={{ fontSize: 36, marginBottom: 10 }}>🗺️</div>
        <h2 style={{ color: "#fff", fontWeight: 700, fontSize: 28, marginBottom: 8 }}>
          Explore Kerala Districts
        </h2>
        <div style={{
          width: 60, height: 4,
          background: "rgba(255,255,255,0.5)",
          borderRadius: 10, margin: "0 auto 12px",
        }} />
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, maxWidth: 500, margin: "0 auto" }}>
          Choose a district to explore its tourist destinations
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: 24,
        padding: "0 40px 60px",
        maxWidth: 1300,
        margin: "0 auto",
      }}>
        {district.map((i, index) => (
          <div
            key={index}
            onClick={() => click(i)}
            style={{
              borderRadius: 12,
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: "0 4px 16px rgba(17,153,142,0.2)",
              border: "none",
              transition: "transform 0.25s, box-shadow 0.25s",
              background: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
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
              <img
                src={i.image}
                alt={i.name}
                style={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                height: 50,
                background: "linear-gradient(to top, rgba(17,153,142,0.55), transparent)",
              }} />
            </div>

            {/* Name */}
            <div style={{ padding: "14px 16px", textAlign: "center" }}>
              <div style={{
                fontWeight: 700,
                fontSize: 15,
                color: "#fff",
                letterSpacing: 0.3,
              }}>
                📍 {i.name}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default District