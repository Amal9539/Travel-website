const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // remove extra spaces
    },
    email: {
      type: String,
      required: true,
      unique: true, // prevent duplicate emails
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      // password is required only for normal login (not Google)
    },
    phone: {
      type: String,
    },
    googleId: {
      type: String, // store Google OAuth ID
      default: null,
    },
    isAdmin: {
      type: Boolean,
      default: false, // for admin panel and protected routes
    },
    status: {
      type: String,
      enum: ["Pending", "Active", "Suspended"], // restrict values
      default: "Pending",
    },
  },
  { timestamps: true } // automatically adds createdAt and updatedAt
);

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;