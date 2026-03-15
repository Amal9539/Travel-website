const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TouristModel=require('./Models/Tourist')

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(
  "mongodb+srv://amal8949:amal8949@cluster0.hgvzq.mongodb.net"
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// 🔹 GET ALL PLACES
app.get("/", (req, res) => {
  TouristModel.find()
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
});

// 🔹 CREATE
app.post("/createtouristplaces", (req, res) => {
  TouristModel.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
});

// 🔹 GET BY ID  ✅ (THIS WAS YOUR MAIN BUG)
app.get("/gettourist/:id", (req, res) => {
  TouristModel.findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
});

// 🔹 UPDATE
app.put("/updatetourist/:id", (req, res) => {
  TouristModel.findByIdAndUpdate(
    req.params.id,
    {
      place: req.body.place,
      location: req.body.location,
      category:req.body.category,
      descrption: req.body.descrption,
    },
    { new: true }
  )
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
});




app.delete('/delete/:id',(req,res)=>{
  const id=req.params.id
  TouristModel.findByIdAndDelete({_id:id})
  .then(places=>res.json(places))
  .catch(err=>res.json(err))
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
