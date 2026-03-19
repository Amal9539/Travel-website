// import React from "react";
// import MyBookings from "./MyBookings";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Profile = () => {
//     const navigate=useNavigate()
//   const name = localStorage.getItem("name");
//   const email = localStorage.getItem("email");
//   const deleteAccount = async () => {
//   const userId = localStorage.getItem("userId");
//   if (!userId) return alert("User ID not found");

//   try {
//     await axios.delete(`https://travel-website-5-62rm.onrender.com/api/auth/deleteuser/${userId}`, {
//       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
//     });
//     alert("Account deleted");
//     localStorage.clear();
//     navigate("/register");
//   } catch (error) {
//     alert(error.response?.data?.message || "Delete failed");
//   }
// };
  
//   return (
//     <div style={{ padding: "20px" }}>

//       <h2>Profile</h2>

//       <p><strong>User Name:</strong> {name || "Not available"}</p>
//       <p><strong>Email:</strong> {email || "Not available"}</p>
//       <MyBookings/>      
//       <button 
//         onClick={deleteAccount}
//         style={{
//           background: "red",
//           color: "white",
//           padding: "10px 15px",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//           marginTop: "10px"
//         }}
//       >
//         Delete Account
//       </button>

//     </div>
//   );
// };

// export default Profile;


import React, { useEffect, useState } from "react";
import MyBookings from "./MyBookings";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f4f1ec",
    padding: "40px 20px",
    fontFamily: "'DM Sans', sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  wrapper: {
    width: "100%",
    maxWidth: "860px",
  },
  header: {
    marginBottom: "24px",
  },
  headerTitle: {
    fontSize: "2rem",
    fontFamily: "'DM Serif Display', serif",
    color: "#1a1a1a",
    letterSpacing: "-0.5px",
  },
  headerSub: {
    fontSize: "0.875rem",
    color: "#888",
    marginTop: "4px",
  },
  card: {
    background: "#fff",
    borderRadius: "16px",
    padding: "28px",
    marginBottom: "16px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
  },
  dangerCard: {
    background: "#fffafa",
    border: "1px solid #fee2e2",
    borderRadius: "16px",
    padding: "28px",
    marginBottom: "16px",
  },
  profileRow: {
    display: "flex",
    alignItems: "center",
    gap: "28px",
    flexWrap: "wrap",
  },
  avatar: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #c9b99a, #8b7355)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.6rem",
    color: "#fff",
    fontFamily: "'DM Serif Display', serif",
    flexShrink: 0,
  },
  infoRow: {
    display: "flex",
    gap: "16px",
    flex: 1,
    flexWrap: "wrap",
  },
  infoItem: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    padding: "12px 20px",
    background: "#f9f7f4",
    borderRadius: "10px",
    flex: 1,
    minWidth: "140px",
  },
  label: {
    fontSize: "0.72rem",
    fontWeight: 600,
    color: "#aaa",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  },
  value: {
    fontSize: "0.95rem",
    fontWeight: 500,
    color: "#2a2a2a",
  },
  badge: {
    fontSize: "0.75rem",
    color: "#999",
    background: "#f0ede8",
    padding: "2px 10px",
    borderRadius: "20px",
    display: "inline-block",
    whiteSpace: "nowrap",
    alignSelf: "center",
  },
  sectionTitle: {
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "#999",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: "14px",
  },
  dangerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "24px",
    flexWrap: "wrap",
  },
  dangerSectionTitle: {
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "#f87171",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: "6px",
  },
  dangerText: {
    fontSize: "0.85rem",
    color: "#888",
    lineHeight: 1.6,
    maxWidth: "480px",
  },
  deleteBtn: {
    padding: "12px 28px",
    background: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "0.9rem",
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    whiteSpace: "nowrap",
    flexShrink: 0,
    opacity: 1,
  },
  deleteBtnDisabled: {
    opacity: 0.6,
    cursor: "not-allowed",
  },
};

const Profile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const initials = name ? name.charAt(0).toUpperCase() : "?";

  // ✅ FIXED DELETE FUNCTION
  const deleteAccount = async () => {
    const userId = localStorage.getItem("userId")?.trim();
    const token = localStorage.getItem("token");

    if (!userId) {
      alert("User ID not found. Please login again.");
      return;
    }

    const confirmDelete = window.confirm(
      "Are you sure you want to permanently delete your account?"
    );
    if (!confirmDelete) return;

    try {
      setLoading(true);

      const res = await axios.delete(
        `https://travel-website-5-62rm.onrender.com/api/auth/deleteuser/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data?.message || "Account deleted successfully");

      // clear only user data
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("name");
      localStorage.removeItem("email");

      navigate("/register", { replace: true });

    } catch (error) {
      console.error(error);

      if (error.response?.status === 401) {
        alert("Session expired. Please login again.");
        navigate("/login");
      } else if (error.response?.status === 404) {
        alert("User not found.");
      } else {
        alert(error.response?.data?.message || "Delete failed");
      }

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>

        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.headerTitle}>My Profile</h2>
          <p style={styles.headerSub}>Manage your account and bookings</p>
        </div>

        {/* Profile Card */}
        <div style={styles.card}>
          <div style={styles.profileRow}>
            <div style={styles.avatar}>{initials}</div>

            <div style={styles.infoRow}>
              <div style={styles.infoItem}>
                <span style={styles.label}>Username</span>
                <span style={styles.value}>{name || "Not available"}</span>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.label}>Email</span>
                <span style={styles.value}>{email || "Not available"}</span>
              </div>
            </div>

            <span style={styles.badge}>Active Member</span>
          </div>
        </div>

        {/* Bookings */}
        <div style={styles.card}>
          <div style={styles.sectionTitle}>My Bookings</div>
          <MyBookings />
        </div>

        {/* Danger Zone */}
        <div style={styles.dangerCard}>
          <div style={styles.dangerRow}>
            <div>
              <div style={styles.dangerSectionTitle}>Danger Zone</div>
              <p style={styles.dangerText}>
                Permanently delete your account and all associated data. This action cannot be undone.
              </p>
            </div>

            <button
              onClick={deleteAccount}
              disabled={loading}
              style={{
                ...styles.deleteBtn,
                ...(loading ? styles.deleteBtnDisabled : {}),
              }}
            >
              {loading ? "Deleting..." : "Delete Account"}
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;