// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Table from 'react-bootstrap/Table';

// const Users = () => {

//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("https://travel-website-5-62rm.onrender.com/api/users")
//       .then(res => {
//         setUsers(res.data);
//       })
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div>
//       <h2>User List</h2>
//        <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th> Name</th>
//           <th> Email</th>
//           <th>Phone Number</th>
          
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user) => {
//             return(
//                  <tr>
//           <td>{user.name}</td>
//           <td>{user.email}</td>
//           <td>{user.phone}</td>
          
//         </tr>
//             )
//         }
//       )}
       
//       </tbody>
//     </Table>
      

//     </div>
//   );
// };

// export default Users;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://travel-website-5-62rm.onrender.com/api/users")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Outfit:wght@300;400;500;600&display=swap');

        .users-page {
          min-height: 100vh;
          background: #f0f4ff;
          font-family: 'Outfit', sans-serif;
          padding: 40px 32px;
          box-sizing: border-box;
        }

        .users-header {
          margin-bottom: 28px;
        }

        .users-header h2 {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 600;
          color: #1a1a2e;
          margin: 0 0 4px;
          letter-spacing: -0.3px;
        }

        .users-header p {
          font-size: 13px;
          color: #a0a0b8;
          margin: 0;
          font-weight: 300;
        }

        .table-card {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid #dde3f5;
          box-shadow: 0 8px 32px rgba(99,102,241,0.08);
          overflow: hidden;
          animation: fadeUp 0.4s ease both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .users-table {
          width: 100%;
          border-collapse: collapse;
        }

        .users-table thead tr {
          background: #f5f7ff;
          border-bottom: 1px solid #e8ecfa;
        }

        .users-table thead th {
          padding: 14px 20px;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #a0a0b8;
          text-align: left;
        }

        .users-table tbody tr {
          border-bottom: 1px solid #f0f3fc;
          transition: background 0.15s;
        }

        .users-table tbody tr:last-child {
          border-bottom: none;
        }

        .users-table tbody tr:hover {
          background: #f8f9ff;
        }

        .users-table tbody td {
          padding: 14px 20px;
          font-size: 14px;
          color: #2d2d44;
          font-weight: 400;
        }

        .user-avatar {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .avatar-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #a78bfa);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 600;
          color: #fff;
          flex-shrink: 0;
        }

        .empty-state {
          text-align: center;
          padding: 48px 20px;
          color: #b0b8d8;
          font-size: 14px;
          font-weight: 300;
        }
      `}</style>

      <div className="users-page">
        <div className="users-header">
          <h2>User List</h2>
          <p>All registered users</p>
        </div>

        <div className="table-card">
          <table className="users-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan="3" className="empty-state">No users found</td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user._id || user.email}>
                    <td>
                      <div className="user-avatar">
                        <div className="avatar-circle">
                          {user.name ? user.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2) : "?"}
                        </div>
                        {user.name}
                      </div>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Users;