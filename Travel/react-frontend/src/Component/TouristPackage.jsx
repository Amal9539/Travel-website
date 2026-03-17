// import React, { useEffect, useState } from 'react'
// import Card from 'react-bootstrap/Card';
// import axios from 'axios'

// const TouristPackage = () => {

//   const [packages, setpackages] = useState([])

//   useEffect(() => {
//     axios
//       .get("https://travel-website-5-62rm.onrender.com/api/package")
//       .then((res) => {
//         console.log(res.data)
//         setpackages(res.data)
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div>
//         <h3 style={{textAlign:"center"}}>Tourist Package</h3>
//     <div style={{display:"flex", gap:"20px", flexWrap:"wrap"}}>
//       {packages.map((i) => (
//         <Card style={{ width: '18rem' }} key={i._id}>
//         <Card.Img variant="top" src={`https://travel-website-5-62rm.onrender.com${i.image[0]}`} />

//           <Card.Body>
//             <Card.Title>{i.packagename}</Card.Title>
//             <Card.Text>
//                 Destination:{i.destination}<br/>
//                 Discription:{i.description}<br/>
//                 Price:{i.price}<br/>
//                 Duration:{i.duration}<br/>
//                 Start Date:{new Date(i.startdate).toLocaleDateString()}<br/>
//                 End Date:{new Date(i.enddate).toLocaleDateString()}<br/>
//                 Maximum People:{i.maxpeople}<br/>
//                 Hotel:{i.hotel}<br/>
//                 Transpor:t{i.transport}<br/>
//                 Food:{i.foodinclude}
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//     </div>
//   )
// }

// export default TouristPackage


import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const TouristPackage = () => {
    const navigate=useNavigate()

  const [packages, setpackages] = useState([])

  useEffect(() => {
    axios
      .get("https://travel-website-5-62rm.onrender.com/api/package")
      .then((res) => {
        console.log(res.data)
        setpackages(res.data)
      })
      .catch((err) => console.log(err));
  }, []);
  const click = (item) => {
    navigate(`/package/${item._id}`);
  };
  return (
    <div style={{padding:"40px", background:"#f5f5f5", minHeight:"100vh"}}>

      <h2 style={{
        textAlign:"center",
        marginBottom:"40px",
        fontWeight:"bold"
      }}>
        Tourist Packages
      </h2>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
        gap:"30px"
      }}>

        {packages.map((i) => (

          <Card
            key={i._id}
            style={{
              borderRadius:"12px",
              overflow:"hidden",
              boxShadow:"0 6px 18px rgba(0,0,0,0.15)"
            }} onClick={()=>click(i)}
          >

            <Card.Img
              variant="top"
              src={`https://travel-website-5-62rm.onrender.com${i.image[0]}`}
              style={{
                height:"180px",
                objectFit:"cover"
              }}
            />

            <Card.Body>

              <Card.Title style={{fontWeight:"bold"}}>
                {i.packagename}
              </Card.Title>

              <Card.Text style={{fontSize:"14px", lineHeight:"1.6"}}>

                <b>Destination:</b> {i.destination}<br/>


              </Card.Text>

            </Card.Body>

          </Card>

        ))}

      </div>

    </div>
  )
}

export default TouristPackage