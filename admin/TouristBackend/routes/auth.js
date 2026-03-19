// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const jwt = require("jsonwebtoken");
// const User = require("../Models/User");
// const passport = require("passport");


// router.post('/register', async (req, res) => {
//     const { name, email, password } = req.body;

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = new User({
//         name,
//         email,
//         password: hashedPassword
//     });

//     await user.save();
//     res.json({ message: "User registered" });
// });
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });
//   if (!user) return res.status(400).json("User not found");

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) return res.status(400).json("Invalid password");

//   const token = jwt.sign({ id: user._id }, "secretkey");

//   res.json({ token, user });
// });

// // Google Login
// router.post("/google", async (req, res) => {
//   try {
//     const { credential } = req.body;

//     const { data } = await axios.get(
//       `https://oauth2.googleapis.com/tokeninfo?id_token=${credential}`
//     );

//     const { sub, name, email } = data;
//     const lowerEmail = email.toLowerCase();

//     let user = await User.findOne({ email: lowerEmail });

//     if (!user) {
//       user = await User.create({
//         googleId: sub,
//         name,
//         email: lowerEmail,   // ✅ fixed
//       });
//     } else if (!user.googleId) {
//       user.googleId = sub;
//       await user.save();
//     }

//     const token = jwt.sign(
//       { id: user._id },
//       process.env.JWT_SECRET,
//       { expiresIn: "7d" }
//     );

//     res.json({ token, user });

//   } catch (error) {
//     console.log(error.response?.data || error.message);
//     res.status(400).json({ message: "Google login failed" });
//   }
// });


// router.get(
//   "/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     successRedirect: "http://localhost:3000",
//     failureRedirect: "/login"
//   })
// );


// module.exports = router;


const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const passport = require("passport");

const User = require("../Models/User");


// REGISTER
router.post('/register', async (req, res) => {
  try {

    const { name, email, phone, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      phone,
      password: hashedPassword
    });

    await user.save();

    res.json({ message: "User registered successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Register failed" });
  }
});


// LOGIN
router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "secretkey",
      { expiresIn: "7d" }
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone:user.phone
      }
    });

  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }

});


// Google Login
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google Callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "https://travel-website-5-62rm.onrender.com/login",
    session: false
  }),
  (req, res) => {

    const token = jwt.sign(
      { id: req.user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    const name = req.user.name;
    const email = req.user.email;

    res.redirect(
      `https://travel-website-5-62rm.onrender.com/login?token=${token}&name=${name}`
    );
  }
);
router.delete("/deleteuser/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    console.log("Deleting user:", userId);

    // ✅ FIX: validate ID
    const mongoose = require("mongoose");
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;