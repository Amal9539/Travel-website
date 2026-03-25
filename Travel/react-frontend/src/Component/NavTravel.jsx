// import React from "react";
// import { Dropdown } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { Link, useNavigate } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa";

// const NavTravel = () => {
//   const navigate = useNavigate();

//   const token = localStorage.getItem("token");
//   const name = localStorage.getItem("name");

//   const handleLogout = () => {
//     alert("Logged out successfully!");
//     localStorage.removeItem("token");
//     localStorage.removeItem("name");
//     navigate("/login");
//   };

//   const handleprofile = () => {
//     navigate("/profile");
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');

//         .nt-root {
//           background: #ffffff !important;
//           border-bottom: 1px solid #e0ecff;
//           padding: 0 !important;
//           font-family: 'Outfit', sans-serif;
//         }
//         .nt-root .container {
//           height: 66px;
//           display: flex;
//           align-items: center;
//         }

//         /* Brand */
//         .nt-brand {
//           display: flex !important;
//           align-items: center;
//           gap: 10px;
//           text-decoration: none !important;
//         }
//         .nt-brand-logo {
//           width: 38px; height: 38px;
//           border-radius: 12px;
//           background: #e8f4ff;
//           border: 1.5px solid #bae0ff;
//           display: flex; align-items: center; justify-content: center;
//           flex-shrink: 0;
//         }
//         .nt-brand-text { display: flex; flex-direction: column; line-height: 1; }
//         .nt-brand-main {
//           font-size: 18px; font-weight: 800;
//           color: #0d47a1; letter-spacing: -0.3px;
//           font-family: 'Outfit', sans-serif;
//         }
//         .nt-brand-sub {
//           font-size: 8px; font-weight: 500;
//           color: #64b5f6; letter-spacing: 2px;
//           text-transform: uppercase; margin-top: 2px;
//           font-family: 'Outfit', sans-serif;
//         }

//         /* Nav pills container */
//         .nt-pills {
//           display: flex;
//           align-items: center;
//           gap: 20px;
//           background: #f0f8ff;
//           border-radius: 12px;
//           padding: 4px;
//           border: 1px solid #dbeeff;
//           margin: 0 auto;
//         }
//         .nt-pills .nav-link {
//           font-family: 'Outfit', sans-serif !important;
//           font-size: 14px !important;
//           font-weight: 500 !important;
//           color: #546e7a !important;
//           padding: 7px 6px !important;
//           border-radius: 9px !important;
//           transition: all 0.15s !important;
//         }
//         .nt-pills .nav-link:hover {
//           background: #fff !important;
//           color: #0d47a1 !important;
//           box-shadow: 0 2px 8px rgba(33,150,243,0.10);
//         }

//         /* Auth buttons */
//         .nt-btn-login {
//           font-family: 'Outfit', sans-serif;
//           font-size: 14px; font-weight: 500;
//           color: #1565c0 !important;
//           padding: 7px 18px !important;
//           border-radius: 10px !important;
//           border: 1.5px solid #90caf9 !important;
//           background: transparent !important;
//           transition: all 0.15s;
//         }
//         .nt-btn-login:hover {
//           background: #e3f2fd !important;
//           color: #0d47a1 !important;
//         }
//         .nt-btn-register {
//           font-family: 'Outfit', sans-serif;
//           font-size: 14px; font-weight: 600;
//           color: #fff !important;
//           background: #2196F3 !important;
//           border: none !important;
//           padding: 7px 18px !important;
//           border-radius: 10px !important;
//           transition: background 0.15s;
//         }
//         .nt-btn-register:hover {
//           background: #1976d2 !important;
//           color: #fff !important;
//         }

//         /* User pill toggle */
//         .nt-user-toggle {
//           display: flex !important;
//           align-items: center !important;
//           gap: 9px !important;
//           padding: 5px 8px 5px 16px !important;
//           border-radius: 50px !important;
//           border: 1.5px solid #90caf9 !important;
//           background: #f0f8ff !important;
//           box-shadow: none !important;
//           font-family: 'Outfit', sans-serif !important;
//           font-size: 14px !important;
//           font-weight: 600 !important;
//           color: #1565c0 !important;
//           transition: all 0.15s !important;
//         }
//         .nt-user-toggle:hover,
//         .nt-user-toggle:focus,
//         .nt-user-toggle:active,
//         .show > .nt-user-toggle {
//           background: #e3f2fd !important;
//           border-color: #42a5f5 !important;
//           color: #1565c0 !important;
//           box-shadow: none !important;
//         }
//         .nt-user-toggle::after { display: none !important; }

//         .nt-avatar-circle {
//           width: 30px; height: 30px;
//           border-radius: 50%;
//           background: #2196F3;
//           display: flex; align-items: center; justify-content: center;
//           font-family: 'Outfit', sans-serif;
//           font-size: 11px; font-weight: 700; color: #fff;
//           flex-shrink: 0;
//           border: 2px solid #90caf9;
//         }

//         /* Dropdown menu */
//         .nt-dropdown-menu {
//           border: 1px solid #e0ecff !important;
//           border-radius: 16px !important;
//           padding: 8px !important;
//           box-shadow: 0 8px 32px rgba(33,150,243,0.12) !important;
//           min-width: 190px !important;
//           font-family: 'Outfit', sans-serif;
//         }

//         .nt-dd-header {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           padding: 8px 10px 12px;
//           border-bottom: 1px solid #f0f8ff;
//           margin-bottom: 6px;
//         }
//         .nt-dd-av {
//           width: 36px; height: 36px;
//           border-radius: 50%;
//           background: #e3f2fd;
//           display: flex; align-items: center; justify-content: center;
//           font-size: 13px; font-weight: 700; color: #1565c0;
//           flex-shrink: 0;
//         }
//         .nt-dd-uname {
//           font-size: 13px; font-weight: 600; color: #0d47a1;
//           font-family: 'Outfit', sans-serif;
//         }
//         .nt-dd-role {
//           font-size: 11px; color: #90a4ae;
//           font-family: 'Outfit', sans-serif;
//         }

//         .nt-dropdown-item {
//           display: flex !important;
//           align-items: center !important;
//           gap: 10px !important;
//           font-family: 'Outfit', sans-serif !important;
//           font-size: 14px !important;
//           font-weight: 500 !important;
//           color: #546e7a !important;
//           padding: 9px 12px !important;
//           border-radius: 10px !important;
//           transition: all 0.12s !important;
//         }
//         .nt-dropdown-item:hover {
//           background: #f0f8ff !important;
//           color: #1565c0 !important;
//         }
//         .nt-dd-icon {
//           width: 28px; height: 28px;
//           border-radius: 8px; background: #e3f2fd;
//           display: flex; align-items: center; justify-content: center;
//           flex-shrink: 0;
//         }
//         .nt-dropdown-item:hover .nt-dd-icon { background: #bbdefb; }

//         .nt-dropdown-item.logout { color: #ef5350 !important; }
//         .nt-dropdown-item.logout .nt-dd-icon { background: #fde8e8; }
//         .nt-dropdown-item.logout:hover {
//           background: #fef2f2 !important;
//           color: #e53935 !important;
//         }
//         .nt-dropdown-item.logout:hover .nt-dd-icon { background: #fecaca; }

//         .nt-divider {
//           border-top: 1px solid #f0f8ff !important;
//           margin: 4px 0 !important;
//           opacity: 1 !important;
//         }

//         /* Hamburger toggle */
//         .nt-root .navbar-toggler {
//           border: 1.5px solid #90caf9 !important;
//           border-radius: 10px !important;
//           padding: 6px 10px !important;
//         }
//         .nt-root .navbar-toggler:focus { box-shadow: none !important; }
//         .nt-root .navbar-toggler-icon {
//           background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%231565c0' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
//         }
//       `}</style>

//       <Navbar
//         expand="lg"
//         sticky="top"
//         className="nt-root shadow-sm"
//         variant="light"
//       >
//         <Container>

//           {/* Brand */}
//           <Navbar.Brand as={Link} to="/" className="nt-brand me-4">
//             <div className="nt-brand-logo">
//               <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
//                 <circle cx="14" cy="16" r="10" stroke="#2196F3" strokeWidth="1.8" fill="#e8f4ff"/>
//                 <ellipse cx="14" cy="16" rx="4.5" ry="10" stroke="#90caf9" strokeWidth="1.2" fill="none"/>
//                 <line x1="4" y1="16" x2="24" y2="16" stroke="#90caf9" strokeWidth="1.2"/>
//                 <path d="M5.5 11.5 Q14 13 22.5 11.5" stroke="#90caf9" strokeWidth="1.2" fill="none"/>
//                 <path d="M7 10 Q14 2 21 10" stroke="#2196F3" strokeWidth="2" fill="none" strokeLinecap="round"/>
//                 <circle cx="7" cy="10" r="1.5" fill="#42a5f5"/>
//               </svg>
//             </div>
//             <div className="nt-brand-text">
//               <span className="nt-brand-main">Travel</span>
//               <span className="nt-brand-sub">Explore freely</span>
//             </div>
//           </Navbar.Brand>

//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">

//             {!token ? (
//               <Nav className="ms-auto d-flex align-items-center gap-2">
//                 <Nav.Link
//                   as={Link}
//                   to="/login"
//                   className="nt-btn-login"
//                 >
//                   Login
//                 </Nav.Link>
//                 <Nav.Link
//                   as={Link}
//                   to="/register"
//                   className="nt-btn-register"
//                 >
//                   Register
//                 </Nav.Link>
//               </Nav>
//             ) : (
//               <Nav className="w-100 align-items-center">

//                 {/* Centered pill links */}
//                 <div className="nt-pills mx-auto">
//                   <Nav.Link as={Link} to="/destination">
//                     Destination
//                   </Nav.Link>
//                   <Nav.Link as={Link} to="/trips">
//                     Trips
//                   </Nav.Link>
//                 </div>

//                 {/* User dropdown */}
//                 <Dropdown align="end" className="ms-auto">
//                   <Dropdown.Toggle className="nt-user-toggle">
//                     <span>{name}</span>
//                     <div className="nt-avatar-circle">
//                       {name
//                         ? name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
//                         : <FaUserCircle size={16} />
//                       }
//                     </div>
//                   </Dropdown.Toggle>

//                   <Dropdown.Menu className="nt-dropdown-menu">

//                     {/* Header */}
//                     <div className="nt-dd-header">
//                       <div className="nt-dd-av">
//                         {name
//                           ? name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
//                           : "?"
//                         }
//                       </div>
//                       <div>
//                         <div className="nt-dd-uname">{name}</div>
//                         <div className="nt-dd-role">Traveler</div>
//                       </div>
//                     </div>

//                     <Dropdown.Item
//                       className="nt-dropdown-item"
//                       onClick={handleprofile}
//                     >
//                       <div className="nt-dd-icon">
//                         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1565c0" strokeWidth="2">
//                           <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
//                         </svg>
//                       </div>
//                       Profile
//                     </Dropdown.Item>

//                     <Dropdown.Divider className="nt-divider" />

//                     <Dropdown.Item
//                       className="nt-dropdown-item logout"
//                       onClick={handleLogout}
//                     >
//                       <div className="nt-dd-icon">
//                         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef5350" strokeWidth="2">
//                           <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/>
//                         </svg>
//                       </div>
//                       Logout
//                     </Dropdown.Item>

//                   </Dropdown.Menu>
//                 </Dropdown>

//               </Nav>
//             )}

//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default NavTravel;

// import React from "react";
// import { Dropdown } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { Link, useNavigate } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa";

// const NavTravel = () => {
//   const navigate = useNavigate();

//   const token = localStorage.getItem("token");
//   const name = localStorage.getItem("name");

//   const handleLogout = () => {
//     alert("Logged out successfully!");
//     localStorage.removeItem("token");
//     localStorage.removeItem("name");
//     navigate("/login");
//   };

//   const handleprofile = () => {
//     navigate("/profile");
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');

//         .nt-root {
//           background: #ffffff !important;
//           border-bottom: 1px solid #e0ecff;
//           padding: 0 !important;
//           font-family: 'Outfit', sans-serif;
//         }

//         /* Container (VERY IMPORTANT) */
// .nt-brand {
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   width: 100%;
// }

// /* Logo */
// .nt-logo {
//   width: 32px;
//   height: 32px;
//   flex-shrink: 0;
// }

// /* Text container */
// .nt-brand-text {
//   display: flex;
//   flex-direction: column;
//   line-height: 1;

//   min-width: 0;   /* 🔥 CRITICAL FIX */
//   flex: 1;
// }

// /* Main title */
// .nt-brand-main {
//   font-size: 18px;
//   font-weight: 800;
//   color: #0d47a1;
//   letter-spacing: -0.3px;
//   font-family: 'Outfit', sans-serif;

//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// }

// /* Subtitle */
// .nt-brand-sub {
//   font-size: 8px;
//   font-weight: 500;
//   color: #64b5f6;
//   letter-spacing: 1px; /* reduced */
//   text-transform: uppercase;
//   margin-top: 2px;
//   font-family: 'Outfit', sans-serif;

//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// }

// /* 📱 Mobile Fix */
// @media (max-width: 600px) {
//   .nt-brand-main {
//     font-size: 14px;
//   }

//   .nt-brand-sub {
//     font-size: 7px;
//     letter-spacing: 0.5px;
//   }
// }
         

//         /* Nav pills */
//         .nt-pills {
//           display: flex;
//           align-items: center;
//           gap: 4px;
//           background: #f0f8ff;
//           border-radius: 12px;
//           padding: 4px;
//           border: 1px solid #dbeeff;
//         }
//         .nt-pills .nav-link {
//           font-family: 'Outfit', sans-serif !important;
//           font-size: 14px !important;
//           font-weight: 500 !important;
//           color: #546e7a !important;
//           padding: 7px 14px !important;
//           border-radius: 9px !important;
//           transition: all 0.15s !important;
//         }
//         .nt-pills .nav-link:hover {
//           background: #fff !important;
//           color: #0d47a1 !important;
//           box-shadow: 0 2px 8px rgba(33,150,243,0.10);
//         }

//         /* Auth buttons */
//         .nt-btn-login {
//           font-family: 'Outfit', sans-serif;
//           font-size: 14px; font-weight: 500;
//           color: #1565c0 !important;
//           padding: 7px 18px !important;
//           border-radius: 10px !important;
//           border: 1.5px solid #90caf9 !important;
//           background: transparent !important;
//           transition: all 0.15s;
//         }
//         .nt-btn-login:hover { background: #e3f2fd !important; color: #0d47a1 !important; }
//         .nt-btn-register {
//           font-family: 'Outfit', sans-serif;
//           font-size: 14px; font-weight: 600;
//           color: #fff !important;
//           background: #2196F3 !important;
//           border: none !important;
//           padding: 7px 18px !important;
//           border-radius: 10px !important;
//           transition: background 0.15s;
//         }
//         .nt-btn-register:hover { background: #1976d2 !important; color: #fff !important; }

//         /* User pill toggle */
//         .nt-user-toggle {
//           display: flex !important;
//           align-items: center !important;
//           gap: 9px !important;
//           padding: 5px 8px 5px 16px !important;
//           border-radius: 50px !important;
//           border: 1.5px solid #90caf9 !important;
//           background: #f0f8ff !important;
//           box-shadow: none !important;
//           font-family: 'Outfit', sans-serif !important;
//           font-size: 14px !important;
//           font-weight: 600 !important;
//           color: #1565c0 !important;
//           transition: all 0.15s !important;
//         }
//         .nt-user-toggle:hover,
//         .nt-user-toggle:focus,
//         .nt-user-toggle:active,
//         .show > .nt-user-toggle {
//           background: #e3f2fd !important;
//           border-color: #42a5f5 !important;
//           color: #1565c0 !important;
//           box-shadow: none !important;
//         }
//         .nt-user-toggle::after { display: none !important; }

//         .nt-avatar-circle {
//           width: 30px; height: 30px;
//           border-radius: 50%;
//           background: #2196F3;
//           display: flex; align-items: center; justify-content: center;
//           font-family: 'Outfit', sans-serif;
//           font-size: 11px; font-weight: 700; color: #fff;
//           flex-shrink: 0;
//           border: 2px solid #90caf9;
//         }

//         /* Dropdown */
//         .nt-dropdown-menu {
//           border: 1px solid #e0ecff !important;
//           border-radius: 16px !important;
//           padding: 8px !important;
//           box-shadow: 0 8px 32px rgba(33,150,243,0.12) !important;
//           min-width: 190px !important;
//           font-family: 'Outfit', sans-serif;
//         }
//         .nt-dd-header {
//           display: flex; align-items: center; gap: 10px;
//           padding: 8px 10px 12px;
//           border-bottom: 1px solid #f0f8ff;
//           margin-bottom: 6px;
//         }
//         .nt-dd-av {
//           width: 36px; height: 36px; border-radius: 50%;
//           background: #e3f2fd;
//           display: flex; align-items: center; justify-content: center;
//           font-size: 13px; font-weight: 700; color: #1565c0; flex-shrink: 0;
//         }
//         .nt-dd-uname { font-size: 13px; font-weight: 600; color: #0d47a1; font-family: 'Outfit', sans-serif; }
//         .nt-dd-role  { font-size: 11px; color: #90a4ae; font-family: 'Outfit', sans-serif; }
//         .nt-dropdown-item {
//           display: flex !important; align-items: center !important; gap: 10px !important;
//           font-family: 'Outfit', sans-serif !important; font-size: 14px !important;
//           font-weight: 500 !important; color: #546e7a !important;
//           padding: 9px 12px !important; border-radius: 10px !important;
//           transition: all 0.12s !important;
//         }
//         .nt-dropdown-item:hover { background: #f0f8ff !important; color: #1565c0 !important; }
//         .nt-dd-icon {
//           width: 28px; height: 28px; border-radius: 8px; background: #e3f2fd;
//           display: flex; align-items: center; justify-content: center; flex-shrink: 0;
//         }
//         .nt-dropdown-item:hover .nt-dd-icon { background: #bbdefb; }
//         .nt-dropdown-item.logout { color: #ef5350 !important; }
//         .nt-dropdown-item.logout .nt-dd-icon { background: #fde8e8; }
//         .nt-dropdown-item.logout:hover { background: #fef2f2 !important; color: #e53935 !important; }
//         .nt-dropdown-item.logout:hover .nt-dd-icon { background: #fecaca; }
//         .nt-divider { border-top: 1px solid #f0f8ff !important; margin: 4px 0 !important; opacity: 1 !important; }

//         /* Hamburger */
//         .nt-root .navbar-toggler {
//           border: 1.5px solid #90caf9 !important; border-radius: 10px !important; padding: 6px 10px !important;
//         }
//         .nt-root .navbar-toggler:focus { box-shadow: none !important; }
//         .nt-root .navbar-toggler-icon {
//           background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%231565c0' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
//         }

//         /* ═══════════════════════════════════════
//            DESKTOP (≥992px): CSS Grid 3-column
//            Brand LEFT | Pills CENTER | User RIGHT
//         ═══════════════════════════════════════ */
//         .nt-desktop-bar { display: none; }

//         @media (min-width: 992px) {
//           /* Show desktop bar, hide mobile bar */
//           .nt-desktop-bar {
//             display: grid;
//             grid-template-columns: 1fr auto 1fr;
//             align-items: center;
//             width: 100%;
//             height: 66px;
//           }
//           .nt-mobile-bar { display: none !important; }

//           .nt-desktop-left  { display: flex; align-items: center; justify-content: flex-start; }
//           .nt-desktop-center { display: flex; align-items: center; justify-content: center; }
//           .nt-desktop-right { display: flex; align-items: center; justify-content: flex-end; }
//         }

//         /* ═══════════════════════════════════════
//            MOBILE / TABLET (<992px): unchanged
//         ═══════════════════════════════════════ */
//         .nt-mobile-bar { width: 100%; }

//         @media (max-width: 991.98px) {
//           .nt-root .container {
//             height: auto; min-height: 66px; flex-wrap: wrap;
//           }
//           .nt-mobile-toprow {
//             display: flex; align-items: center;
//             width: 100%; min-height: 66px;
//           }
//           .nt-auth-nav {
//             flex-direction: row !important; align-items: center !important;
//             justify-content: center !important; gap: 10px !important;
//             padding: 12px 0 !important; width: 100%;
//           }
//           .nt-auth-nav .nt-btn-login,
//           .nt-auth-nav .nt-btn-register { flex: 1; text-align: center; max-width: 160px; }
//           .nt-nav-logged-in {
//             display: flex !important; flex-direction: row !important;
//             align-items: center !important; width: 100%;
//             padding: 10px 0; gap: 8px;
//           }
//           .nt-pills-wrap { flex: 1; display: flex; justify-content: center; }
//           .nt-user-wrap  { flex-shrink: 0; }
//           .nt-pills { justify-content: center; }
//           .nt-pills .nav-link { padding: 6px 10px !important; font-size: 13px !important; }
//           .nt-user-toggle { padding: 5px 8px 5px 10px !important; font-size: 13px !important; }
//         }

//         @media (max-width: 480px) {
//           .nt-pills .nav-link { padding: 6px 8px !important; font-size: 12px !important; }
//           .nt-user-toggle span { display: none; }
//           .nt-user-toggle { padding: 5px 6px !important; }
//         }
//       `}</style>

//       <Navbar expand="lg" sticky="top" className="nt-root shadow-sm" variant="light">
//         <Container>

//           {/* ══════════════════════════════════════
//               DESKTOP BAR — CSS Grid, always visible on lg+
//           ══════════════════════════════════════ */}
//           <div className="nt-desktop-bar">

//             {/* LEFT: Brand */}
//             <div className="nt-desktop-left">
//               <Link to="/" className="nt-brand">
//                 <div className="nt-brand-logo">
//                   <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
//                     <circle cx="14" cy="16" r="10" stroke="#2196F3" strokeWidth="1.8" fill="#e8f4ff"/>
//                     <ellipse cx="14" cy="16" rx="4.5" ry="10" stroke="#90caf9" strokeWidth="1.2" fill="none"/>
//                     <line x1="4" y1="16" x2="24" y2="16" stroke="#90caf9" strokeWidth="1.2"/>
//                     <path d="M5.5 11.5 Q14 13 22.5 11.5" stroke="#90caf9" strokeWidth="1.2" fill="none"/>
//                     <path d="M7 10 Q14 2 21 10" stroke="#2196F3" strokeWidth="2" fill="none" strokeLinecap="round"/>
//                     <circle cx="7" cy="10" r="1.5" fill="#42a5f5"/>
//                   </svg>
//                 </div>
//                 <div className="nt-brand-text">
//                   <span className="nt-brand-main">TravelNest</span>
//                   <span className="nt-brand-sub">Explore freely</span>
//                 </div>
//               </Link>
//             </div>

//             {/* CENTER: Nav pills (logged in only) */}
//             <div className="nt-desktop-center">
//               {token && (
//                 <div className="nt-pills">
//                   <Nav.Link as={Link} to="/destination">Destination</Nav.Link>
//                   <Nav.Link as={Link} to="/trips">Trips</Nav.Link>
//                 </div>
//               )}
//             </div>

//             {/* RIGHT: User dropdown or Login/Register */}
//             <div className="nt-desktop-right">
//               {!token ? (
//                 <div style={{ display: "flex", gap: "8px" }}>
//                   <Nav.Link as={Link} to="/login" className="nt-btn-login">Login</Nav.Link>
//                   <Nav.Link as={Link} to="/register" className="nt-btn-register">Register</Nav.Link>
//                 </div>
//               ) : (
//                 <Dropdown align="end">
//                   <Dropdown.Toggle className="nt-user-toggle">
//                     <span>{name}</span>
//                     <div className="nt-avatar-circle">
//                       {name
//                         ? name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
//                         : <FaUserCircle size={16} />}
//                     </div>
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu className="nt-dropdown-menu">
//                     <div className="nt-dd-header">
//                       <div className="nt-dd-av">
//                         {name ? name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) : "?"}
//                       </div>
//                       <div>
//                         <div className="nt-dd-uname">{name}</div>
//                         <div className="nt-dd-role">Traveler</div>
//                       </div>
//                     </div>
//                     <Dropdown.Item className="nt-dropdown-item" onClick={handleprofile}>
//                       <div className="nt-dd-icon">
//                         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1565c0" strokeWidth="2">
//                           <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
//                         </svg>
//                       </div>
//                       Profile
//                     </Dropdown.Item>
//                     <Dropdown.Divider className="nt-divider" />
//                     <Dropdown.Item className="nt-dropdown-item logout" onClick={handleLogout}>
//                       <div className="nt-dd-icon">
//                         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef5350" strokeWidth="2">
//                           <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/>
//                         </svg>
//                       </div>
//                       Logout
//                     </Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               )}
//             </div>

//           </div>

//           {/* ══════════════════════════════════════
//               MOBILE BAR — Bootstrap collapse, only on <lg
//           ══════════════════════════════════════ */}
//           <div className="nt-mobile-bar">
//             <div className="nt-mobile-toprow">
//               <Link to="/" className="nt-brand me-auto">
//                 <div className="nt-brand-logo">
//                   <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
//                     <circle cx="14" cy="16" r="10" stroke="#2196F3" strokeWidth="1.8" fill="#e8f4ff"/>
//                     <ellipse cx="14" cy="16" rx="4.5" ry="10" stroke="#90caf9" strokeWidth="1.2" fill="none"/>
//                     <line x1="4" y1="16" x2="24" y2="16" stroke="#90caf9" strokeWidth="1.2"/>
//                     <path d="M5.5 11.5 Q14 13 22.5 11.5" stroke="#90caf9" strokeWidth="1.2" fill="none"/>
//                     <path d="M7 10 Q14 2 21 10" stroke="#2196F3" strokeWidth="2" fill="none" strokeLinecap="round"/>
//                     <circle cx="7" cy="10" r="1.5" fill="#42a5f5"/>
//                   </svg>
//                 </div>
//                 <div className="nt-brand-text">
//                   <span className="nt-brand-main">Travel</span>
//                   <span className="nt-brand-sub">Explore freely</span>
//                 </div>
//               </Link>
//               <Navbar.Toggle aria-controls="mobile-navbar-nav" />
//             </div>

//             <Navbar.Collapse id="mobile-navbar-nav">
//               {!token ? (
//                 <Nav className="nt-auth-nav d-flex align-items-center gap-2">
//                   <Nav.Link as={Link} to="/login" className="nt-btn-login">Login</Nav.Link>
//                   <Nav.Link as={Link} to="/register" className="nt-btn-register">Register</Nav.Link>
//                 </Nav>
//               ) : (
//                 <div className="nt-nav-logged-in">
//                   <div className="nt-pills-wrap">
//                     <div className="nt-pills">
//                       <Nav.Link as={Link} to="/destination">Destination</Nav.Link>
//                       <Nav.Link as={Link} to="/trips">Trips</Nav.Link>
//                     </div>
//                   </div>
//                   <div className="nt-user-wrap">
//                     <Dropdown align="end">
//                       <Dropdown.Toggle className="nt-user-toggle">
//                         <span>{name}</span>
//                         <div className="nt-avatar-circle">
//                           {name
//                             ? name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
//                             : <FaUserCircle size={16} />}
//                         </div>
//                       </Dropdown.Toggle>
//                       <Dropdown.Menu className="nt-dropdown-menu">
//                         <div className="nt-dd-header">
//                           <div className="nt-dd-av">
//                             {name ? name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) : "?"}
//                           </div>
//                           <div>
//                             <div className="nt-dd-uname">{name}</div>
//                             <div className="nt-dd-role">Traveler</div>
//                           </div>
//                         </div>
//                         <Dropdown.Item className="nt-dropdown-item" onClick={handleprofile}>
//                           <div className="nt-dd-icon">
//                             <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1565c0" strokeWidth="2">
//                               <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
//                             </svg>
//                           </div>
//                           Profile
//                         </Dropdown.Item>
//                         <Dropdown.Divider className="nt-divider" />
//                         <Dropdown.Item className="nt-dropdown-item logout" onClick={handleLogout}>
//                           <div className="nt-dd-icon">
//                             <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef5350" strokeWidth="2">
//                               <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/>
//                             </svg>
//                           </div>
//                           Logout
//                         </Dropdown.Item>
//                       </Dropdown.Menu>
//                     </Dropdown>
//                   </div>
//                 </div>
//               )}
//             </Navbar.Collapse>
//           </div>

//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default NavTravel;

// import React from "react";
// import { Dropdown } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { Link, useNavigate } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa";

// const NavTravel = () => {
//   const navigate = useNavigate();

//   const token = localStorage.getItem("token");
//   const name = localStorage.getItem("name");

//   const handleLogout = () => {
//     alert("Logged out successfully!");
//     localStorage.removeItem("token");
//     localStorage.removeItem("name");
//     navigate("/login");
//   };

//   const handleprofile = () => {
//     navigate("/profile");
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');

//         .nt-root {
//           background: #ffffff !important;
//           border-bottom: 1px solid #e0ecff;
//           padding: 0 !important;
//           font-family: 'Outfit', sans-serif;
//         }

//         .nt-brand {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           width: 100%;
//         }

//         .nt-brand-text {
//           display: flex;
//           flex-direction: column;
//           line-height: 1;
//           min-width: 0;
//           flex: 1;
//         }

//         .nt-brand-main {
//           font-size: 18px;
//           font-weight: 800;
//           color: #0d47a1;
//           white-space: nowrap;
//           overflow: hidden;
//           text-overflow: ellipsis;
//         }

//         .nt-brand-sub {
//           font-size: 8px;
//           color: #64b5f6;
//           letter-spacing: 1px;
//         }

//         /* MOBILE TEXT FIX */
//         @media (max-width: 600px) {
//           .nt-brand-main { font-size: 14px; }
//           .nt-brand-sub { font-size: 7px; letter-spacing: 0.5px; }
//         }

//         @media (max-width: 480px) {
//           .nt-brand-main { font-size: 13px; }
//           .nt-brand-sub { font-size: 6px; letter-spacing: 0.3px; }
//         }

//         /* Desktop Grid */
//         .nt-desktop-bar { display: none; }

//         @media (min-width: 992px) {
//           .nt-desktop-bar {
//             display: grid;
//             grid-template-columns: 1fr auto 1fr;
//             align-items: center;
//             width: 100%;
//             height: 66px;
//           }
//           .nt-mobile-bar { display: none !important; }
//         }

//         .nt-mobile-bar { width: 100%; }

//         .nt-root .navbar-toggler {
//           border: 1.5px solid #90caf9 !important;
//           border-radius: 10px !important;
//         }
//       `}</style>

//       <Navbar expand="lg" sticky="top" className="nt-root shadow-sm" variant="light">
//         <Container>

//           {/* DESKTOP */}
//           <div className="nt-desktop-bar">
//             <div>
//               <Link to="/" className="nt-brand">
//                 <div className="nt-brand-text">
//                   <span className="nt-brand-main">TravelNest</span>
//                   <span className="nt-brand-sub">Explore freely</span>
//                 </div>
//               </Link>
//             </div>

//             <div>
//               {token && (
//                 <Nav>
//                   <Nav.Link as={Link} to="/destination">Destination</Nav.Link>
//                   <Nav.Link as={Link} to="/trips">Trips</Nav.Link>
//                 </Nav>
//               )}
//             </div>

//             <div style={{ textAlign: "right" }}>
//               {!token ? (
//                 <>
//                   <Nav.Link as={Link} to="/login">Login</Nav.Link>
//                   <Nav.Link as={Link} to="/register">Register</Nav.Link>
//                 </>
//               ) : (
//                 <Dropdown align="end">
//                   <Dropdown.Toggle>
//                     {name}
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu>
//                     <Dropdown.Item onClick={handleprofile}>Profile</Dropdown.Item>
//                     <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               )}
//             </div>
//           </div>

//           {/* MOBILE */}
//           <div className="nt-mobile-bar">
//             <div className="d-flex align-items-center w-100">
              
//               <Link to="/" className="nt-brand me-auto">
//                 <div className="nt-brand-text">
//                   {/* ✅ FIX APPLIED HERE */}
//                   <span className="nt-brand-main">TravelNest</span>
//                   <span className="nt-brand-sub">Explore freely</span>
//                 </div>
//               </Link>

//               <Navbar.Toggle />
//             </div>

//             <Navbar.Collapse>
//               {!token ? (
//                 <Nav>
//                   <Nav.Link as={Link} to="/login">Login</Nav.Link>
//                   <Nav.Link as={Link} to="/register">Register</Nav.Link>
//                 </Nav>
//               ) : (
//                 <Nav>
//                   <Nav.Link as={Link} to="/destination">Destination</Nav.Link>
//                   <Nav.Link as={Link} to="/trips">Trips</Nav.Link>
//                   <Nav.Link onClick={handleprofile}>Profile</Nav.Link>
//                   <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
//                 </Nav>
//               )}
//             </Navbar.Collapse>
//           </div>

//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default NavTravel;

import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

const NavTravel = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    alert("Logged out successfully!");
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/login");
  };

  const handleprofile = () => navigate("/profile");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Playfair+Display:wght@700&display=swap');

        /* ── Root ── */
        .nt-root {
          background: #ffffff !important;
          border-bottom: 1px solid #e8edf5;
          padding: 0 !important;
          font-family: 'DM Sans', sans-serif;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .nt-root.nt-scrolled {
          box-shadow: 0 2px 20px rgba(0, 60, 160, 0.07);
          border-color: #d0ddf5;
        }

        /* ── Brand ── */
        .nt-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none !important;
        }
        .nt-logo-mark {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #1a56db 0%, #3b82f6 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(26, 86, 219, 0.25);
        }
        .nt-logo-mark svg {
          width: 18px;
          height: 18px;
          fill: white;
        }
        .nt-brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }
        .nt-brand-main {
          font-family: 'Playfair Display', serif;
          font-size: 19px;
          font-weight: 700;
          color: #111827;
          letter-spacing: -0.3px;
          white-space: nowrap;
        }
        .nt-brand-sub {
          font-size: 10px;
          font-weight: 500;
          color: #6b7280;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-top: 1px;
        }

        /* ── Nav links ── */
        .nt-nav-link {
          font-size: 14.5px;
          font-weight: 500;
          color: #374151 !important;
          padding: 6px 14px !important;
          border-radius: 8px;
          transition: color 0.2s, background 0.2s;
          text-decoration: none !important;
          position: relative;
        }
        .nt-nav-link:hover {
          color: #1a56db !important;
          background: #eff6ff;
        }
        .nt-nav-link.active {
          color: #1a56db !important;
        }

        /* ── Auth buttons ── */
        .nt-btn-ghost {
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          background: transparent;
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: color 0.2s, background 0.2s;
        }
        .nt-btn-ghost:hover {
          color: #1a56db;
          background: #eff6ff;
        }
        .nt-btn-primary {
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          background: linear-gradient(135deg, #1a56db, #3b82f6);
          border: none;
          padding: 8px 20px;
          border-radius: 9px;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          box-shadow: 0 2px 8px rgba(26, 86, 219, 0.25);
          transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
        }
        .nt-btn-primary:hover {
          opacity: 0.9;
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(26, 86, 219, 0.32);
          color: #fff;
        }

        /* ── User Dropdown ── */
        .nt-user-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #f1f5fd !important;
          border: 1px solid #d1dff7 !important;
          color: #1a56db !important;
          font-size: 14px;
          font-weight: 600;
          padding: 6px 14px !important;
          border-radius: 9px !important;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.2s, border-color 0.2s;
          box-shadow: none !important;
        }
        .nt-user-btn:hover, .nt-user-btn:focus {
          background: #e0eafd !important;
          border-color: #a8c0f5 !important;
        }
        .nt-user-btn::after {
          color: #6b9df7;
        }
        .nt-avatar {
          width: 26px;
          height: 26px;
          background: linear-gradient(135deg, #1a56db, #60a5fa);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 11px;
          font-weight: 700;
          flex-shrink: 0;
        }

        /* Dropdown menu */
        .dropdown-menu {
          border: 1px solid #e0eaf8 !important;
          box-shadow: 0 8px 30px rgba(0, 40, 130, 0.10) !important;
          border-radius: 12px !important;
          padding: 6px !important;
          min-width: 160px;
          margin-top: 6px !important;
          font-family: 'DM Sans', sans-serif;
        }
        .dropdown-item {
          border-radius: 8px !important;
          font-size: 14px !important;
          font-weight: 500 !important;
          color: #374151 !important;
          padding: 8px 12px !important;
          transition: background 0.15s, color 0.15s;
        }
        .dropdown-item:hover {
          background: #eff6ff !important;
          color: #1a56db !important;
        }
        .nt-dropdown-divider {
          height: 1px;
          background: #f0f4fb;
          margin: 4px 0;
        }

        /* ── Desktop Grid ── */
        .nt-desktop-bar { display: none; }

        @media (min-width: 992px) {
          .nt-desktop-bar {
            display: grid;
            grid-template-columns: auto 1fr auto;
            align-items: center;
            width: 100%;
            height: 64px;
            gap: 24px;
          }
          .nt-mobile-bar { display: none !important; }
        }

        /* ── Mobile ── */
        .nt-mobile-bar { width: 100%; }
        .nt-toggler {
          border: 1.5px solid #d1dff7 !important;
          border-radius: 9px !important;
          padding: 5px 9px !important;
          background: #f5f8fe !important;
          transition: background 0.2s;
        }
        .nt-toggler:focus { box-shadow: 0 0 0 3px rgba(26,86,219,0.12) !important; }
        .nt-toggler:hover { background: #e8f0fe !important; }
        .nt-toggler-icon {
          width: 18px;
          height: 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2px 0;
        }
        .nt-toggler-icon span {
          display: block;
          height: 2px;
          width: 100%;
          background: #1a56db;
          border-radius: 2px;
        }

        .nt-mobile-nav {
          padding: 12px 0 16px;
          border-top: 1px solid #f0f4fc;
          margin-top: 8px;
        }
        .nt-mobile-nav .nt-nav-link {
          display: block;
          padding: 10px 12px !important;
          border-radius: 9px;
          margin-bottom: 2px;
        }
        .nt-mobile-divider {
          height: 1px;
          background: #f0f4fc;
          margin: 10px 0;
        }
        .nt-mobile-auth {
          display: flex;
          gap: 8px;
          padding: 4px 0;
        }
        .nt-mobile-auth .nt-btn-ghost,
        .nt-mobile-auth .nt-btn-primary {
          flex: 1;
          justify-content: center;
        }
      `}</style>

      <Navbar
        expand="lg"
        sticky="top"
        className={`nt-root${scrolled ? " nt-scrolled" : ""}`}
        variant="light"
      >
        <Container>

          {/* ── DESKTOP ── */}
          <div className="nt-desktop-bar">

            {/* Logo */}
            <Link to="/" className="nt-brand">
              <div className="nt-logo-mark">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 4.17 4.42 9.92 6.24 12.11.4.48 1.13.48 1.53 0C14.58 18.92 19 13.17 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="nt-brand-text">
                <span className="nt-brand-main">TravelNest</span>
                <span className="nt-brand-sub">Explore freely</span>
              </div>
            </Link>

            {/* Center nav */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              {token && (
                <Nav style={{ gap: "4px" }}>
                  {/* <Nav.Link as={Link} to="/destination" className="nt-nav-link">Destination</Nav.Link>
                  <Nav.Link as={Link} to="/trips" className="nt-nav-link">Trips</Nav.Link> */}
                </Nav>
              )}
            </div>

            {/* Right auth */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {!token ? (
                <>
                  <Link to="/login" className="nt-btn-ghost">Log in</Link>
                  <Link to="/register" className="nt-btn-primary">Sign up</Link>
                </>
              ) : (
                <Dropdown align="end">
                  <Dropdown.Toggle as="button" className="nt-user-btn">
                    <div className="nt-avatar">
                      {name ? name.charAt(0).toUpperCase() : "U"}
                    </div>
                    {name}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleprofile}>
                      👤 &nbsp;Profile
                    </Dropdown.Item>
                    <div className="nt-dropdown-divider" />
                    <Dropdown.Item onClick={handleLogout} style={{ color: "#ef4444 !important" }}>
                      🚪 &nbsp;Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </div>
          </div>

          {/* ── MOBILE ── */}
          <div className="nt-mobile-bar">
            <div className="d-flex align-items-center w-100" style={{ height: "58px" }}>
              <Link to="/" className="nt-brand me-auto">
                <div className="nt-logo-mark">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 4.17 4.42 9.92 6.24 12.11.4.48 1.13.48 1.53 0C14.58 18.92 19 13.17 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="nt-brand-text">
                  <span className="nt-brand-main">TravelNest</span>
                  <span className="nt-brand-sub">Explore freely</span>
                </div>
              </Link>

              <Navbar.Toggle className="nt-toggler" aria-controls="mobile-nav">
                <div className="nt-toggler-icon">
                  <span /><span /><span />
                </div>
              </Navbar.Toggle>
            </div>

            <Navbar.Collapse id="mobile-nav">
              <div className="nt-mobile-nav">
                {token && (
                  <>
                    {/* <Nav.Link as={Link} to="/destination" className="nt-nav-link">Destination</Nav.Link>
                    <Nav.Link as={Link} to="/trips" className="nt-nav-link">Trips</Nav.Link> */}
                    <Nav.Link className="nt-nav-link" onClick={handleprofile}>Profile</Nav.Link>
                    <div className="nt-mobile-divider" />
                  </>
                )}

                <div className="nt-mobile-auth">
                  {!token ? (
                    <>
                      <Link to="/login" className="nt-btn-ghost">Log in</Link>
                      <Link to="/register" className="nt-btn-primary">Sign up</Link>
                    </>
                  ) : (
                    <button className="nt-btn-ghost w-100" onClick={handleLogout}
                      style={{ color: "#ef4444", justifyContent: "center" }}>
                      Logout
                    </button>
                  )}
                </div>
              </div>
            </Navbar.Collapse>
          </div>

        </Container>
      </Navbar>
    </>
  );
};

export default NavTravel;