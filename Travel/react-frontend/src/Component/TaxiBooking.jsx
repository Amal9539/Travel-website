// import React, { useState } from "react";
// import axios from "axios";
// import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";

// const TaxiBooking = () => {


// const [data,setData] = useState({
// pickup:"",
// destination:"",
// date:"",
// vehicle:"",
// phone:""
// })
// const userId = localStorage.getItem("userId");

// const handleChange = (e)=>{
// setData({...data,[e.target.name]:e.target.value})
// }

// const bookTaxi = async(e)=>{
// e.preventDefault()

// try{

// await axios.post("https://travel-website-5-62rm.onrender.com/api/booktaxi", {
//   ...data,
//   userId
// });

// alert("Taxi Booked Successfully")

// setData({
// pickup:"",
// destination:"",
// date:"",
// vehicle:"",
// phone:""
// })

// }catch(err){
// console.log(err)
// alert("Booking Failed")
// }

// }

// return (

// <Container fluid className="mt-4">

// <Card className="shadow p-4">

// <h3 className="text-center mb-4">Taxi Booking</h3>

// <Form onSubmit={bookTaxi}>

// <Row>

// <Col md={6} className="mb-3">
// <Form.Label>Pickup Location</Form.Label>
// <Form.Control
// type="text"
// name="pickup"
// value={data.pickup}
// onChange={handleChange}
// placeholder="Enter pickup location"
// />
// </Col>

// <Col md={6} className="mb-3">
// <Form.Label>Destination</Form.Label>
// <Form.Control
// type="text"
// name="destination"
// value={data.destination}
// onChange={handleChange}
// placeholder="Enter destination"
// />
// </Col>

// <Col md={4} className="mb-3">
// <Form.Label>Date</Form.Label>
// <Form.Control
// type="date"
// name="date"
// value={data.date}
// onChange={handleChange}
// />
// </Col>

// <Col md={4} className="mb-3">
// <Form.Label>Vehicle</Form.Label>
// <Form.Select
// name="vehicle"
// value={data.vehicle}
// onChange={handleChange}
// >
// <option value="">Select Vehicle</option>
// <option value="Mini">Mini</option>
// <option value="Sedan">Sedan</option>
// <option value="SUV">SUV</option>
// </Form.Select>
// </Col>

// <Col md={4} className="mb-3">
// <Form.Label>Phone Number</Form.Label>
// <Form.Control
// type="text"
// name="phone"
// value={data.phone}
// onChange={handleChange}
// placeholder="Enter phone"
// />
// </Col>

// </Row>

// <Button variant="primary" type="submit" className="w-100 mt-3">
// Book Taxi
// </Button>

// </Form>

// </Card>

// </Container>

// )

// }

// export default TaxiBooking


import React, { useState } from "react";
import axios from "axios";

const TaxiBooking = () => {
  const [data, setData] = useState({
    pickup: "",
    destination: "",
    date: "",
    vehicle: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [theme, setTheme] = useState("light");

  const userId = localStorage.getItem("userId");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    if (!data.pickup.trim()) newErrors.pickup = "Pickup required";
    if (!data.destination.trim()) newErrors.destination = "Destination required";
    if (!data.date) newErrors.date = "Date required";
    if (!data.vehicle) newErrors.vehicle = "Select vehicle";
    if (!data.phone) {
      newErrors.phone = "Phone required";
    } else if (!/^[0-9]{10}$/.test(data.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const bookTaxi = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await axios.post("https://travel-website-5-62rm.onrender.com/api/booktaxi", { ...data, userId });
      alert("Taxi Booked Successfully");
      setData({ pickup: "", destination: "", date: "", vehicle: "", phone: "" });
      setErrors({});
    } catch (err) {
      console.log(err);
      alert("Booking Failed");
    }
  };

  const isDark = theme === "dark";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .tb-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          transition: background 0.35s, color 0.35s;
        }

        /* ── LIGHT ── */
        .tb-page.light { background: #f0f4f8; }
        .tb-page.light .tb-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 6px rgba(0,0,0,0.04), 0 20px 48px rgba(0,0,0,0.07);
        }
        .tb-page.light .tb-title   { color: #1a202c; }
        .tb-page.light .tb-sub     { color: #718096; }
        .tb-page.light .field-label{ color: #4a5568; }
        .tb-page.light .field-input,
        .tb-page.light .field-select {
          background: #f7fafc;
          border-color: #cbd5e0;
          color: #2d3748;
        }
        .tb-page.light .field-input::placeholder { color: #a0aec0; }
        .tb-page.light .field-input:focus,
        .tb-page.light .field-select:focus {
          border-color: #3182ce;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(49,130,206,0.12);
        }
        .tb-page.light .divider     { background: #e2e8f0; }
        .tb-page.light .submit-btn  {
          background: linear-gradient(135deg, #2b6cb0, #3182ce);
          color: #fff;
          box-shadow: 0 4px 14px rgba(49,130,206,0.35);
        }
        .tb-page.light .submit-btn:hover { box-shadow: 0 6px 20px rgba(49,130,206,0.45); }
        .tb-page.light .icon-box {
          background: linear-gradient(135deg, #2b6cb0, #3182ce);
          box-shadow: 0 6px 18px rgba(49,130,206,0.3);
        }
        .tb-page.light .toggle-btn {
          background: #edf2f7;
          color: #4a5568;
          border: 1px solid #e2e8f0;
        }
        .tb-page.light .toggle-btn:hover { background: #e2e8f0; }
        .tb-page.light .select-wrap::after { color: #3182ce; }
        .tb-page.light .field-input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(0.4); }

        /* ── DARK ── */
        .tb-page.dark { background: #111827; }
        .tb-page.dark .tb-card {
          background: #1f2937;
          border: 1px solid #374151;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3), 0 24px 56px rgba(0,0,0,0.5);
        }
        .tb-page.dark .tb-title   { color: #f9fafb; }
        .tb-page.dark .tb-sub     { color: #9ca3af; }
        .tb-page.dark .field-label{ color: #9ca3af; }
        .tb-page.dark .field-input,
        .tb-page.dark .field-select {
          background: #111827;
          border-color: #374151;
          color: #f9fafb;
        }
        .tb-page.dark .field-input::placeholder { color: #6b7280; }
        .tb-page.dark .field-input:focus,
        .tb-page.dark .field-select:focus {
          border-color: #60a5fa;
          background: #0f172a;
          box-shadow: 0 0 0 3px rgba(96,165,250,0.15);
        }
        .tb-page.dark .divider     { background: #374151; }
        .tb-page.dark .submit-btn  {
          background: linear-gradient(135deg, #1d4ed8, #3b82f6);
          color: #fff;
          box-shadow: 0 4px 14px rgba(59,130,246,0.35);
        }
        .tb-page.dark .submit-btn:hover { box-shadow: 0 6px 20px rgba(59,130,246,0.5); }
        .tb-page.dark .icon-box {
          background: linear-gradient(135deg, #1d4ed8, #3b82f6);
          box-shadow: 0 6px 18px rgba(59,130,246,0.3);
        }
        .tb-page.dark .toggle-btn {
          background: #374151;
          color: #d1d5db;
          border: 1px solid #4b5563;
        }
        .tb-page.dark .toggle-btn:hover { background: #4b5563; }
        .tb-page.dark .select-wrap::after { color: #60a5fa; }
        .tb-page.dark .field-input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(0.7) sepia(0.2) saturate(2) hue-rotate(190deg);
        }
        .tb-page.dark .field-select option { background: #1f2937; }

        /* ── SHARED ── */
        .tb-card {
          width: 100%;
          max-width: 780px;
          border-radius: 20px;
          padding: 2.5rem 2.75rem;
          transition: background 0.35s, border-color 0.35s, box-shadow 0.35s;
          animation: fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .tb-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .tb-header { display: flex; align-items: center; gap: 0.9rem; }

        .icon-box {
          width: 48px; height: 48px;
          border-radius: 13px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.35rem;
          flex-shrink: 0;
          transition: background 0.35s, box-shadow 0.35s;
        }

        .tb-title {
          font-size: 1.6rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 1.1;
          transition: color 0.35s;
        }

        .tb-sub {
          font-size: 0.78rem;
          font-weight: 500;
          margin-top: 0.2rem;
          letter-spacing: 0.03em;
          transition: color 0.35s;
        }

        .toggle-btn {
          display: flex; align-items: center; gap: 0.4rem;
          padding: 0.45rem 0.9rem;
          border-radius: 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: background 0.2s, color 0.2s;
          white-space: nowrap;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.1rem;
        }
        .span-2 { grid-column: span 2; }

        @media (max-width: 560px) {
          .tb-card { padding: 1.75rem 1.25rem; }
          .form-grid { grid-template-columns: 1fr; }
          .span-2 { grid-column: span 1; }
          .tb-title { font-size: 1.3rem; }
        }

        .field-group { display: flex; flex-direction: column; gap: 0.4rem; }

        .field-label {
          font-size: 0.73rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: color 0.35s;
        }

        .field-input,
        .field-select {
          border-radius: 9px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 400;
          padding: 0.7rem 0.95rem;
          width: 100%;
          border-width: 1.5px;
          border-style: solid;
          outline: none;
          appearance: none;
          -webkit-appearance: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s, color 0.2s;
        }

        .field-input.error,
        .field-select.error {
          border-color: #e53e3e !important;
          box-shadow: 0 0 0 3px rgba(229,62,62,0.1) !important;
        }

        .error-msg {
          font-size: 0.72rem;
          font-weight: 500;
          color: #e53e3e;
          margin-top: 0.1rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .select-wrap { position: relative; }
        .select-wrap::after {
          content: '▾';
          position: absolute;
          right: 0.9rem;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          font-size: 0.75rem;
          transition: color 0.35s;
        }

        .divider {
          height: 1px;
          margin: 1.6rem 0 1.4rem;
          transition: background 0.35s;
        }

        .submit-btn {
          width: 100%;
          padding: 0.9rem;
          border: none;
          border-radius: 11px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.97rem;
          font-weight: 700;
          letter-spacing: 0.01em;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.2s;
        }
        .submit-btn:hover  { transform: translateY(-1px); }
        .submit-btn:active { transform: translateY(0); }

        .btn-inner {
          display: flex; align-items: center;
          justify-content: center; gap: 0.5rem;
        }
      `}</style>

      <div className={`tb-page ${theme}`}>
        <div className="tb-card">

          <div className="tb-topbar">
            <div className="tb-header">
              <div className="icon-box">🚖</div>
              <div>
                <div className="tb-title">Taxi Booking</div>
                <div className="tb-sub">Schedule your ride instantly</div>
              </div>
            </div>
            <button
              className="toggle-btn"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              type="button"
            >
              {isDark ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>

          <form onSubmit={bookTaxi}>
            <div className="form-grid">

              <div className="field-group">
                <label className="field-label">Pickup Location</label>
                <input
                  className={`field-input ${errors.pickup ? "error" : ""}`}
                  type="text"
                  name="pickup"
                  value={data.pickup}
                  onChange={handleChange}
                  placeholder="Enter pickup location"
                />
                {errors.pickup && <span className="error-msg">⚠ {errors.pickup}</span>}
              </div>

              <div className="field-group">
                <label className="field-label">Destination</label>
                <input
                  className={`field-input ${errors.destination ? "error" : ""}`}
                  type="text"
                  name="destination"
                  value={data.destination}
                  onChange={handleChange}
                  placeholder="Enter destination"
                />
                {errors.destination && <span className="error-msg">⚠ {errors.destination}</span>}
              </div>

              <div className="field-group">
                <label className="field-label">Date</label>
                <input
                  className={`field-input ${errors.date ? "error" : ""}`}
                  type="date"
                  name="date"
                  value={data.date}
                  onChange={handleChange}
                />
                {errors.date && <span className="error-msg">⚠ {errors.date}</span>}
              </div>

              <div className="field-group">
                <label className="field-label">Vehicle</label>
                <div className="select-wrap">
                  <select
                    className={`field-select ${errors.vehicle ? "error" : ""}`}
                    name="vehicle"
                    value={data.vehicle}
                    onChange={handleChange}
                  >
                    <option value="">Select Vehicle</option>
                    <option value="Mini">Mini</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                  </select>
                </div>
                {errors.vehicle && <span className="error-msg">⚠ {errors.vehicle}</span>}
              </div>

              <div className="field-group span-2">
                <label className="field-label">Phone Number</label>
                <input
                  className={`field-input ${errors.phone ? "error" : ""}`}
                  type="text"
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />
                {errors.phone && <span className="error-msg">⚠ {errors.phone}</span>}
              </div>

            </div>

            <div className="divider" />

            <button className="submit-btn" type="submit">
              <span className="btn-inner">
                <span>🚕</span>
                <span>Book Taxi</span>
              </span>
            </button>
          </form>

        </div>
      </div>
    </>
  );
};

export default TaxiBooking;