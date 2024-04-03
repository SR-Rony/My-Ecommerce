const mongoose = require('mongoose');
const {Schema} = mongoose;

const subCatSchema = new Schema({
    name:{
        type: String,
        required:[true,"user name is require"],
        unique:true
    },
    ownerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    catId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    status :{
        type:String,
        enum:["pandding","rejecated","approved"],
        default:"pandding"
    }
}) 

module.exports = mongoose.model("Subcategory",subCatSchema)