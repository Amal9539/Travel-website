

// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import ExploreIcon from "@mui/icons-material/Explore";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import PeopleIcon from "@mui/icons-material/People";
// import SettingsIcon from "@mui/icons-material/Settings";
// import { useNavigate } from "react-router-dom";

// const Sidebar = () => {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleDrawer = (status) => () => {
//     setOpen(status);
//   };

//   const menuItems = [
//     { text: "Tourist Places", icon: <ExploreIcon />, path: "/view" },
//     { text: "Taxibooking", icon: <ExploreIcon />, path: "/taxi" },
//     { text: "Tourist Package", icon: <ExploreIcon />, path: "/viewpackage" },
//     { text: "Users", icon: <ExploreIcon />, path: "/users" },
//     { text: "Orders", icon: <ShoppingCartIcon />, path: "/orders" },
//     { text: "Customers", icon: <PeopleIcon />, path: "/customers" },
//     { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
//   ];

//   const list = () => (
//     <Box
//       sx={{
//         width: 280,
//         height: "100%",
//         background: "linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%)",
//       }}
//     >
//       {/* Drawer Header */}
//       <Box
//         sx={{
//           padding: "30px 20px",
//           background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//           color: "white",
//           textAlign: "center",
//           borderBottom: "3px solid rgba(255,255,255,0.2)",
//         }}
//       >
//         <ExploreIcon sx={{ fontSize: 48, marginBottom: 1 }} />
//         <h2 style={{ margin: 0, fontWeight: 700, fontSize: "1.5rem" }}>
//           Travel Hub
//         </h2>
//         <p style={{ margin: "8px 0 0 0", fontSize: "0.9rem", opacity: 0.9 }}>
//           Explore & Manage
//         </p>
//       </Box>

//       {/* Menu List */}
//       <List sx={{ padding: "20px 10px" }}>
//         {menuItems.map((item, index) => (
//           <ListItem key={item.text} disablePadding sx={{ marginBottom: "8px" }}>
//             <ListItemButton
//               onClick={() => {
//                 if (item.path) navigate(item.path);
//                 setOpen(false);
//               }}
//               sx={{
//                 borderRadius: "12px",
//                 padding: "14px 16px",
//                 transition: "all 0.3s ease",
//                 "&:hover": {
//                   background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                   color: "white",
//                   transform: "translateX(8px)",
//                   boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
//                   "& .MuiListItemIcon-root": {
//                     color: "white",
//                   },
//                 },
//               }}
//             >
//               <ListItemIcon
//                 sx={{
//                   color: "#667eea",
//                   minWidth: 45,
//                   transition: "color 0.3s ease",
//                 }}
//               >
//                 {item.icon}
//               </ListItemIcon>
//               <ListItemText
//                 primary={item.text}
//                 primaryTypographyProps={{
//                   fontWeight: 600,
//                   fontSize: "1rem",
//                 }}
//               />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>

//       {/* Footer */}
//       <Box
//         sx={{
//           position: "absolute",
//           bottom: 0,
//           width: "100%",
//           padding: "20px",
//           textAlign: "center",
//           borderTop: "1px solid #e0e0e0",
//           background: "rgba(102, 126, 234, 0.05)",
//         }}
//       >
//         <p style={{ margin: 0, fontSize: "0.85rem", color: "#6c757d" }}>
//           © 2024 Travel Hub
//         </p>
//       </Box>
//     </Box>
//   );

//   return (
//     <>
//       <style>
//         {`
//           @keyframes slideIn {
//             from {
//               opacity: 0;
//               transform: translateX(-20px);
//             }
//             to {
//               opacity: 1;
//               transform: translateX(0);
//             }
//           }
//         `}
//       </style>

//       {/* Header */}
//       <Box
//         sx={{
//           height: 70,
//           background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//           display: "flex",
//           alignItems: "center",
//           paddingLeft: 2,
//           paddingRight: 2,
//           boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//           position: "relative",
//           zIndex: 1100,
//         }}
//       >
//         <IconButton
//           onClick={toggleDrawer(true)}
//           sx={{
//             color: "#fff",
//             background: "rgba(255, 255, 255, 0.15)",
//             backdropFilter: "blur(10px)",
//             padding: "12px",
//             transition: "all 0.3s ease",
//             "&:hover": {
//               background: "rgba(255, 255, 255, 0.25)",
//               transform: "rotate(90deg)",
//             },
//           }}
//         >
//           <MenuIcon sx={{ fontSize: 28 }} />
//         </IconButton>

//         <Box sx={{ marginLeft: 2, display: "flex", alignItems: "center", gap: 2 }}>
//           <ExploreIcon sx={{ color: "#fff", fontSize: 32 }} />
//           <h3
//             style={{
//               color: "#fff",
//               margin: 0,
//               fontSize: "1.5rem",
//               fontWeight: 700,
//               letterSpacing: "0.5px",
//             }}
//           >
//             My Dashboard
//           </h3>
//         </Box>

//         {/* Decorative element */}
//         <Box
//           sx={{
//             position: "absolute",
//             right: 20,
//             top: "50%",
//             transform: "translateY(-50%)",
//             display: "flex",
//             gap: 1,
//           }}
//         >
//           <Box
//             sx={{
//               width: 8,
//               height: 8,
//               borderRadius: "50%",
//               background: "rgba(255, 255, 255, 0.4)",
//             }}
//           />
//           <Box
//             sx={{
//               width: 8,
//               height: 8,
//               borderRadius: "50%",
//               background: "rgba(255, 255, 255, 0.6)",
//             }}
//           />
//           <Box
//             sx={{
//               width: 8,
//               height: 8,
//               borderRadius: "50%",
//               background: "rgba(255, 255, 255, 0.8)",
//             }}
//           />
//         </Box>
//       </Box>

//       {/* Drawer */}
//       <Drawer
//         anchor="left"
//         open={open}
//         onClose={toggleDrawer(false)}
//         sx={{
//           "& .MuiDrawer-paper": {
//             animation: "slideIn 0.3s ease-out",
//           },
//         }}
//       >
//         {list()}
//       </Drawer>
//     </>
//   );
// };

// export default Sidebar;



import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import ExploreIcon from "@mui/icons-material/Explore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

const GlobeLogo = () => (
  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="16" r="10" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" fill="rgba(255,255,255,0.15)"/>
    <ellipse cx="14" cy="16" rx="4.5" ry="10" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" fill="none"/>
    <line x1="4" y1="16" x2="24" y2="16" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"/>
    <path d="M5.5 11.5 Q14 13 22.5 11.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" fill="none"/>
    <path d="M5.5 20.5 Q14 19 22.5 20.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" fill="none"/>
    <path d="M7 10 Q14 2 21 10" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <g transform="translate(19.5,8) rotate(40)">
      <path d="M0 0 L3 -1.5 L3 1.5 Z" fill="#fff"/>
      <path d="M0.5 0 L-2 -2.5 L-1 0 L-2 2.5 Z" fill="rgba(255,255,255,0.7)"/>
    </g>
    <circle cx="7" cy="10" r="1.5" fill="#fff"/>
  </svg>
);

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (status) => () => {
    setOpen(status);
  };

  const menuItems = [
    { text: "Tourist Places", icon: <ExploreIcon />, path: "/view" },
    { text: "Taxibooking",    icon: <ExploreIcon />, path: "/taxi" },
    { text: "Tourist Package",icon: <ExploreIcon />, path: "/viewpackage" },
    { text: "Users",          icon: <ExploreIcon />, path: "/users" },
    // { text: "Orders",         icon: <ShoppingCartIcon />, path: "/orders" },
    // { text: "Customers",      icon: <PeopleIcon />,  path: "/customers" },
    // { text: "Settings",       icon: <SettingsIcon />,path: "/settings" },
  ];

  const list = () => (
    <Box sx={{
      width: 272,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "#fff",
    }}>

      {/* ── Drawer Header ── */}
      <Box sx={{
        padding: "24px 20px 20px",
        background: "linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)",
        flexShrink: 0,
      }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "12px", mb: "14px" }}>

          {/* Globe logo tile */}
          <Box sx={{
            width: 44, height: 44, borderRadius: "14px",
            background: "rgba(255,255,255,0.18)",
            border: "1.5px solid rgba(255,255,255,0.30)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <GlobeLogo />
          </Box>

          <Box>
            <Box sx={{
              fontSize: "20px", fontWeight: 800, color: "#fff",
              letterSpacing: "-0.4px", fontFamily: "'Outfit', sans-serif",
            }}>
              Admin TravelNest
            </Box>
            <Box sx={{
              fontSize: "10px", fontWeight: 500,
              color: "rgba(255,255,255,0.65)",
              letterSpacing: "2px", textTransform: "uppercase",
              fontFamily: "'Outfit', sans-serif",
            }}>
              Explore & Manage
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ── Menu List ── */}
      <List sx={{
        padding: "12px",
        flex: 1,
        overflowY: "auto",
        "&::-webkit-scrollbar": { width: 0 },
      }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ marginBottom: "4px" }}>
            <ListItemButton
              onClick={() => {
                if (item.path) navigate(item.path);
                setOpen(false);
              }}
              sx={{
                borderRadius: "12px",
                padding: "10px 12px",
                border: "1px solid transparent",
                transition: "all 0.18s ease",
                "&:hover": {
                  background: "linear-gradient(135deg, #e8f4ff, #dbeeff)",
                  border: "1px solid #c0dcff",
                  transform: "translateX(4px)",
                  "& .icon-tile": {
                    background: "#2196F3",
                    "& svg": { color: "#fff" },
                  },
                  "& .MuiListItemText-primary": { color: "#0d47a1" },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, marginRight: "12px" }}>
                <Box className="icon-tile" sx={{
                  width: 36, height: 36, borderRadius: "10px",
                  background: "#e8f4ff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background 0.18s",
                  "& svg": { fontSize: 18, color: "#2196F3", transition: "color 0.18s" },
                }}>
                  {item.icon}
                </Box>
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#334155",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* ── Footer ── */}
      <Box sx={{
        padding: "16px 20px",
        borderTop: "1px solid #e8f0ff",
        textAlign: "center",
        flexShrink: 0,
      }}>
        <Box sx={{
          fontSize: "12px", color: "#94a3b8",
          fontFamily: "'Outfit', sans-serif",
        }}>
          © 2024 TravelNest
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {/* ── Header ── */}
      <Box sx={{
        height: 68,
        background: "#fff",
        display: "flex",
        alignItems: "center",
        paddingLeft: 2,
        paddingRight: 2,
        borderBottom: "1px solid #e0ecff",
        position: "relative",
        zIndex: 1100,
        gap: "16px",
      }}>

        {/* Menu toggle button */}
        <IconButton
          onClick={toggleDrawer(true)}
          sx={{
            width: 42, height: 42,
            borderRadius: "12px",
            border: "1.5px solid #d0e4ff",
            background: "#f0f6ff",
            transition: "all 0.2s ease",
            "&:hover": {
              background: "#dceeff",
              borderColor: "#90c4ff",
              transform: "rotate(90deg)",
            },
          }}
        >
          <MenuIcon sx={{ fontSize: 22, color: "#2196F3" }} />
        </IconButton>

        {/* Brand */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px", flex: 1 }}>
          <Box sx={{
            width: 38, height: 38, borderRadius: "12px",
            background: "linear-gradient(135deg, #2196F3, #1565c0)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <ExploreIcon sx={{ color: "#fff", fontSize: 20 }} />
          </Box>
          <Box sx={{
            fontSize: "17px", fontWeight: 700, color: "#0d47a1",
            letterSpacing: "-0.3px", fontFamily: "'Outfit', sans-serif",
          }}>
            TravelNest
          </Box>
        </Box>

        {/* Decorative dots */}
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          {["#c0dcff", "#90c4ff", "#2196F3"].map((bg, i) => (
            <Box key={i} sx={{ width: 8, height: 8, borderRadius: "50%", background: bg }} />
          ))}
        </Box>
      </Box>

      {/* ── Drawer ── */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            borderRight: "1px solid #e0ecff",
            boxShadow: "4px 0 24px rgba(33,150,243,0.10)",
            animation: "slideIn 0.3s ease-out",
          },
        }}
      >
        {list()}
      </Drawer>
      
    </>
  );
};

export default Sidebar;