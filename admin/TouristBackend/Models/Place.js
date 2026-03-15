const mongoose=require("mongoose")
const PlaceSchema=new mongoose.Schema({
    place:String,
    district:String,
    category:String,
    description:String,
    image: [String]
})
const PlaceModel=mongoose.model("Place",PlaceSchema)
module.exports=PlaceModel