// const express = require("express");
// const router = express.Router();
// const TaxiBooking = require("../Models/TaxiBooking");

// // Create booking
// router.post("/booktaxi", async (req, res) => {
//   try {

//     const booking = new TaxiBooking({
//       ...req.body,
//       user: req.body.userId
//     });

//     await booking.save();

//     res.json({ message: "Taxi booked successfully" });

//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// // Get all bookings (Admin)
// router.get("/taxibookings", async (req, res) => {
//   try {

//     const bookings = await TaxiBooking.find()
//       .populate("user", "name");

//     res.json(bookings);

//   } catch (error) {
//     res.status(500).json(error);
//   }
// });
// router.put("/status/:id", async (req, res) => {

//   const { status } = req.body;

//   await TaxiBooking.updateOne(
//     { _id: req.params.id },
//     { $set: { status: status } }
//   );

//   res.send("Status Updated");

// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const TaxiBooking = require("../Models/TaxiBooking");


// Create booking
router.post("/booktaxi", async (req, res) => {
  try {

    const booking = new TaxiBooking({
      ...req.body,
      user: req.body.userId
    });

    await booking.save();

    res.json({ message: "Taxi booked successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Get all bookings (Admin)
router.get("/taxibookings", async (req, res) => {
  try {

    const bookings = await TaxiBooking.find()
      .populate("user", "name email");

    res.json(bookings);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Get bookings for specific user
router.get("/mybookings/:userId", async (req, res) => {
  try {

    const bookings = await TaxiBooking.find({
      user: req.params.userId
    });

    res.json(bookings);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Update booking status (Admin)
router.put("/status/:id", async (req, res) => {
  try {

    const { status } = req.body;

    const updated = await TaxiBooking.findByIdAndUpdate(
      req.params.id,
      { status: status },
      { new: true }
    );

    res.json(updated);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;