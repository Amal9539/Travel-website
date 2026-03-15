const mongoose = require("mongoose")

const TaxiBookingSchema = new mongoose.Schema({

  pickup: {
    type: String,
    required: true
  },

  destination: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    required: true
  },

  vehicle: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  status: {
    type: String,
    default: "Pending"
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }

}, { timestamps: true })

module.exports = mongoose.model("TaxiBooking", TaxiBookingSchema)