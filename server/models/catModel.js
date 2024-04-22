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
        ref:"User"
    },
    status :{
        type:String,
        enum:["pandding","rejecated","approved"],
        default:"pandding"
    }


}) 

module.exports = mongoose.model("Category",categorySchema)