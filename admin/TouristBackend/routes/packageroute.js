const express = require("express")
const router = express.Router()
const multer = require("multer")
const Tpackage = require("../Models/package")

// multer storage
const storage = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null,"uploads/")
  },
  filename: (req,file,cb)=>{
    cb(null,Date.now()+"-"+file.originalname)
  }
})

const upload = multer({storage})

// ADD PACKAGE
router.post("/addpackages", upload.single("image"), async (req,res)=>{
  try{

    const newpackage = new Tpackage({
      ...req.body,
      image:[`/uploads/${req.file.filename}`]
    })

    await newpackage.save()

    res.json({message:"Package Added Successfully"})

  }catch(error){
    res.status(500).json(error)
  }
})

// GET PACKAGE
router.get("/package", async (req,res)=>{
  const packages = await Tpackage.find()
  res.json(packages)
})

module.exports = router