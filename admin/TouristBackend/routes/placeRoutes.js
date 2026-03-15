// routes/placeRoutes.js
const express = require("express");
const router = express.Router();
const Place = require("../Models/Place");

// GET /places?page=1&limit=5
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;  // current page
    const limit = parseInt(req.query.limit) || 4; // items per page

    const skip = (page - 1) * limit;

    const total = await Place.countDocuments();
    const places = await Place.find().skip(skip).limit(limit);

    res.json({
      data: places,
      total,
      page,
      totalPages: Math.ceil(total / limit)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
