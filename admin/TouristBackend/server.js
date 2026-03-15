// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const multer = require("multer");
// const path = require("path");
// const PlaceModel = require("./Models/Place");
// require("dotenv").config();
// const placeRoutes = require("./routes/placeRoutes"); // Import the route
// const authRoute=require("./routes/auth")
// const UserModel=require("./Models/User")
// const passport = require("passport");
// const session = require("express-session");
// require("./config/passport");


// const app = express();
// const PORT = process.env.PORT || 5000;

// // ===== Middleware =====
// app.use(cors());
// app.use(express.json());

// // Serve uploaded images as static files
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// app.use("/api/auth", authRoute);


// app.use(cors({
//   origin: "http://localhost:3000",
//   credentials: true
// }));

// app.use(
//   session({
//     secret: "secretkey",
//     resave: false,
//     saveUninitialized: true
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());
// // ===== MongoDB Connection =====
// mongoose
//   .connect("mongodb+srv://amal8949:amal8949@cluster0.hgvzq.mongodb.net/panel")
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(err));

// // ===== Multer Config for Image Upload =====
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // Save files in 'uploads' folder
//   },
//   filename: function (req, file, cb) {
//     // Add timestamp to filename to avoid collisions
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// app.use("/places", placeRoutes); // all /places requests go to placeRoutes

// // ================= ROUTES =================

// // ✅ Get All Places
// app.get("/", async (req, res) => {
//   try {
//     const places = await PlaceModel.find().sort({ _id: -1 });
//     res.status(200).json(places);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to fetch places" });
//   }
// });

// // ✅ Create Place (with image upload)
// app.post("/tourist", upload.array("image", 5), async (req, res) => {
//   try {
//     const { place, district, category, description } = req.body;

//     const images = req.files
//       ? req.files.map(file => `/uploads/${file.filename}`)
//       : [];

//     const newPlace = await PlaceModel.create({
//       place,
//       district,
//       category,
//       description,
//       image: images, // save array
//     });

//     res.status(201).json(newPlace);
//   } catch (err) {
//     res.status(400).json({
//       message: "Failed to create place",
//       error: err.message,
//     });
//   }
// });


// // ✅ Get Single Place
// app.get("/getplace/:id", async (req, res) => {
//   try {
//     const place = await PlaceModel.findById(req.params.id);
//     if (!place) {
//       return res.status(404).json({ message: "Place not found" });
//     }
//     res.status(200).json(place);
//   } catch (err) {
//     res.status(400).json({ message: "Invalid ID" });
//   }
// });

// // ✅ Update Place (optional: image can be updated too)
// app.put("/update/:id", upload.array("image",5), async (req, res) => {
//   try {
//     const { place, district, category, description } = req.body;

//     let updatedData = { place, district, category, description };

//     // 🔥 Fix for multiple images
//     if (req.files && req.files.length > 0) {
//       updatedData.image = req.files.map(
//         file => `/uploads/${file.filename}`
//       );
//     }

//     const updatedPlace = await PlaceModel.findByIdAndUpdate(
//       req.params.id,
//       updatedData,
//       { new: true }
//     );

//     res.status(200).json(updatedPlace);
//   } catch (err) {
//     res.status(400).json({ message: "Update failed", error: err.message });
//   }
// });


// // ✅ Delete Place
// app.delete("/delete/:id", async (req, res) => {
//   try {
//     await PlaceModel.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Deleted successfully" });
//   } catch (err) {
//     res.status(400).json({ message: "Delete failed" });
//   }
// });

// // ===== Start Server =====
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const PlaceModel = require("./Models/Place");
require("dotenv").config();
const placeRoutes = require("./routes/placeRoutes");
const authRoute = require("./routes/auth");
const UserModel = require("./Models/User");

const passport = require("passport");
const session = require("express-session");
require("./config/passport");
const taxiRoutes = require("./routes/Taxiroute");
const TouristPackage=require("./routes/packageroute")
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;


// ===== Middleware =====
app.use(cors({
  origin: true,
  credentials: true
}));

app.use(express.json());


// ===== Google Auth Session =====
app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());


// Serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// ===== Auth Routes (Google + Login/Register) =====
app.use("/api/auth", authRoute);

app.use("/api", taxiRoutes);
app.use("/api",TouristPackage)
app.use("/api", userRoutes);


// ===== MongoDB Connection =====
mongoose
  .connect("mongodb+srv://amal8949:amal8949@cluster0.hgvzq.mongodb.net/panel")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


// ===== Multer Config =====
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use("/places", placeRoutes);



// ================= ROUTES =================

// Get All Places
app.get("/", async (req, res) => {
  try {
    const places = await PlaceModel.find().sort({ _id: -1 });
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch places" });
  }
});


// Create Place
app.post("/tourist", upload.array("image", 5), async (req, res) => {
  try {
    const { place, district, category, description } = req.body;

    const images = req.files
      ? req.files.map(file => `/uploads/${file.filename}`)
      : [];

    const newPlace = await PlaceModel.create({
      place,
      district,
      category,
      description,
      image: images,
    });

    res.status(201).json(newPlace);
  } catch (err) {
    res.status(400).json({
      message: "Failed to create place",
      error: err.message,
    });
  }
});


// Get Single Place
app.get("/getplace/:id", async (req, res) => {
  try {
    const place = await PlaceModel.findById(req.params.id);
    if (!place) {
      return res.status(404).json({ message: "Place not found" });
    }
    res.status(200).json(place);
  } catch (err) {
    res.status(400).json({ message: "Invalid ID" });
  }
});


// Update Place
app.put("/update/:id", upload.array("image", 5), async (req, res) => {
  try {
    const { place, district, category, description } = req.body;

    let updatedData = { place, district, category, description };

    if (req.files && req.files.length > 0) {
      updatedData.image = req.files.map(
        file => `/uploads/${file.filename}`
      );
    }

    const updatedPlace = await PlaceModel.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    res.status(200).json(updatedPlace);
  } catch (err) {
    res.status(400).json({ message: "Update failed", error: err.message });
  }
});


// Delete Place
app.delete("/delete/:id", async (req, res) => {
  try {
    await PlaceModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: "Delete failed" });
  }
});


// ===== Start Server =====
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});