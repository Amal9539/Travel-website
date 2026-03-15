import React, { useEffect, useState } from "react";
import axios from "axios";

const MyBookings = () => {

  const [bookings, setBookings] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {

    axios
      .get(`http://localhost:5000/api/mybookings/${userId}`)
      .then(res => setBookings(res.data))
      .catch(err => console.log(err));

  }, [userId]);

  return (
    <div>
      <h2>My Taxi Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings found</p>
      ) : (
        bookings.map((b) => (
          <div key={b._id}>
            <p><b>Pickup:</b> {b.pickup}</p>
            <p><b>Destination:</b> {b.destination}</p>
            <p><b>Date:</b> {new Date(b.date).toLocaleDateString()}</p>
            <p><b>Vehicle:</b> {b.vehicle}</p>
            <p><b>Status:</b> {b.status}</p>
            <hr />
          </div>
        ))
      )}

    </div>
  );
};

export default MyBookings;