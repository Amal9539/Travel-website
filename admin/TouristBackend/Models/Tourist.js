const mongoose=require('mongoose')
const TouristSchema=new mongoose.Schema({
    place:String,
    location:String,
    category:String,
    description:String,
})
const TouristModel=mongoose.model("tourist",TouristSchema)
module.exports=TouristModel