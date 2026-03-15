const mongoose=require('mongoose')
const PackageSchema=new mongoose.Schema({
     packagename:String,
        destination:String,
        description:String,
        price:Number,
        duration:String,
        startdate:Date,
        enddate:Date,
        maxpeople:Number,
        hotel:String,
        transport:String,
        foodinclude:String,
        image:[String]
})
const PackageModel=mongoose.model("package",PackageSchema)
module.exports=PackageModel