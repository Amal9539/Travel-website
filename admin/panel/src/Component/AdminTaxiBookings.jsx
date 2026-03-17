
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Container, Card, Table, Form } from "react-bootstrap";

// const AdminTaxiBookings = () => {

// const [bookings,setBookings] = useState([])

// useEffect(()=>{
// fetchBookings()
// },[])

// const fetchBookings = async ()=>{
// try{
// const res = await axios.get("https://travel-website-5-62rm.onrender.com/api/taxibookings")
// setBookings(res.data)
// }catch(err){
// console.log(err)
// }
// }

// // status change
// const handleStatusChange = async (id,status)=>{
// try{

// await axios.put(`https://travel-website-5-62rm.onrender.com/api/status/${id}`,{
// status:status
// })

// alert("Status Updated")

// fetchBookings()

// }catch(err){
// console.log(err)
// }
// }

// return (

// <Container className="mt-4">

// <Card className="shadow">

// <Card.Body>

// <h3 className="mb-4 text-center">Taxi Bookings</h3>

// <Table striped bordered hover responsive>

// <thead>

// <tr>
// <th>#</th>
// <th>User</th>
// <th>Pickup</th>
// <th>Destination</th>
// <th>Date</th>
// <th>Vehicle</th>
// <th>Phone</th>
// <th>Status</th>
// </tr>

// </thead>

// <tbody>

// {bookings.map((b,index)=>(

// <tr key={b._id}>

// <td>{index+1}</td>
// <td>{b.user?.name}</td>
// <td>{b.pickup}</td>
// <td>{b.destination}</td>
// <td>{b.date}</td>
// <td>{b.vehicle}</td>
// <td>{b.phone}</td>

// <td>

// <Form.Select
// value={b.status}
// onChange={(e)=>handleStatusChange(b._id,e.target.value)}
// >

// <option value="">Select</option>
// <option value="Confirmed">Confirmed</option>
// <option value="Rejected">Rejected</option>

// </Form.Select>

// </td>

// </tr>

// ))}

// </tbody>

// </Table>

// </Card.Body>

// </Card>

// </Container>

// )
// }

// export default AdminTaxiBookings

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Table, Form, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminTaxiBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get("https://travel-website-5-62rm.onrender.com/api/taxibookings");
      setBookings(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`https://travel-website-5-62rm.onrender.com/api/status/${id}`, {
        status: status,
      });
      alert("Status Updated");
      fetchBookings();
    } catch (err) {
      console.log(err);
    }
  };

  const getStatusBadge = (status) => {
    if (status === "Confirmed") return <Badge bg="success">Confirmed</Badge>;
    if (status === "Rejected") return <Badge bg="danger">Rejected</Badge>;
    return <Badge bg="warning" text="dark">Pending</Badge>;
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "32px 16px" }}>
      <Container>
        {/* Header */}
        <div className="d-flex align-items-center mb-4">
          <div
            style={{
              width: 44,
              height: 44,
              background: "#0d6efd",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              marginRight: 14,
              flexShrink: 0,
            }}
          >
            🚕
          </div>
          <div>
            <h4 className="mb-0 fw-bold text-dark">Taxi Bookings</h4>
            <small className="text-muted">Admin Control Panel</small>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="row g-3 mb-4">
          {[
            { label: "Total", value: bookings.length, bg: "#e9ecef", color: "#495057", icon: "📋" },
            { label: "Confirmed", value: bookings.filter(b => b.status === "Confirmed").length, bg: "#d1e7dd", color: "#0a5c36", icon: "✅" },
            { label: "Rejected", value: bookings.filter(b => b.status === "Rejected").length, bg: "#f8d7da", color: "#842029", icon: "❌" },
            { label: "Pending", value: bookings.filter(b => !b.status || b.status === "").length, bg: "#fff3cd", color: "#664d03", icon: "⏳" },
          ].map((stat) => (
            <div className="col-6 col-md-3" key={stat.label}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="d-flex align-items-center gap-3 py-3">
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      background: stat.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      flexShrink: 0,
                    }}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <div className="fw-bold fs-5 lh-1" style={{ color: stat.color }}>{stat.value}</div>
                    <small className="text-muted">{stat.label}</small>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        {/* Table Card */}
        <Card className="border-0 shadow-sm">
          <Card.Header className="bg-white border-bottom py-3 px-4">
            <h6 className="mb-0 fw-semibold text-dark">All Bookings</h6>
          </Card.Header>
          <Card.Body className="p-0">
            <Table hover responsive className="mb-0 align-middle">
              <thead className="table-light">
                <tr>
                  <th className="ps-4 text-muted fw-semibold" style={{ fontSize: 12 }}>ID</th>
                  <th className="text-muted fw-semibold" style={{ fontSize: 12 }}>USER</th>
                  <th className="text-muted fw-semibold" style={{ fontSize: 12 }}>PICKUP</th>
                  <th className="text-muted fw-semibold" style={{ fontSize: 12 }}>DESTINATION</th>
                  <th className="text-muted fw-semibold" style={{ fontSize: 12 }}>DATE</th>
                  <th className="text-muted fw-semibold" style={{ fontSize: 12 }}>VEHICLE</th>
                  <th className="text-muted fw-semibold" style={{ fontSize: 12 }}>PHONE</th>
                  <th className="text-muted fw-semibold" style={{ fontSize: 12 }}>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {bookings.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="text-center text-muted py-5">
                      <div style={{ fontSize: 36 }}>🚖</div>
                      <div className="mt-2">No bookings found</div>
                    </td>
                  </tr>
                ) : (
                  bookings.map((b, index) => (
                    <tr key={b._id}>
                      <td className="ps-4 text-muted" style={{ fontSize: 13 }}>{index + 1}</td>

                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div
                            style={{
                              width: 32,
                              height: 32,
                              borderRadius: "50%",
                              background: "#e7f1ff",
                              color: "#0d6efd",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontWeight: 700,
                              fontSize: 13,
                              flexShrink: 0,
                            }}
                          >
                            {b.user?.name?.charAt(0).toUpperCase() || "?"}
                          </div>
                          <span className="fw-medium text-dark" style={{ fontSize: 14 }}>{b.user?.name}</span>
                        </div>
                      </td>

                      <td style={{ fontSize: 13, color: "#495057" }}>📍 {b.pickup}</td>
                      <td style={{ fontSize: 13, color: "#495057" }}>🏁 {b.destination}</td>
                      <td style={{ fontSize: 13, color: "#6c757d" }}>{b.date}</td>

                      <td>
                        <span
                          style={{
                            background: "#e7f1ff",
                            color: "#0d6efd",
                            borderRadius: 6,
                            padding: "3px 10px",
                            fontSize: 12,
                            fontWeight: 600,
                          }}
                        >
                          {b.vehicle}
                        </span>
                      </td>

                      <td style={{ fontSize: 13, color: "#6c757d" }}>{b.phone}</td>

                      <td>
                        <div className="d-flex flex-column gap-1">
                          {b.status && getStatusBadge(b.status)}
                          <Form.Select
                            size="sm"
                            value={b.status}
                            onChange={(e) => handleStatusChange(b._id, e.target.value)}
                            style={{ fontSize: 12, minWidth: 120 }}
                          >
                            <option value="">Select</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Rejected">Rejected</option>
                          </Form.Select>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default AdminTaxiBookings;