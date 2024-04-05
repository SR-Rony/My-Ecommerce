const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    name:{
        type: String,
        required:[true,"user name is require"],
        unique:true
    },
    description:{
       type:String
    },
    images :{
        type:String
    }


}) 

module.exports = mongoose.model("Product",productSchema)