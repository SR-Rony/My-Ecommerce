const mongoose = require('mongoose');
const {Schema} = mongoose;

const categorySchema = new Schema({
    name:{
        type: String,
        required:[true,"user name is require"],
        unique:true
    },
    ownerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    },
    status :{
        type:String,
        enum:["pandding","rejecated","approved"],
        default:"pandding"
    },
    subCatList:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subcategory"
    }]

}) 

module.exports = mongoose.model("Category",categorySchema)