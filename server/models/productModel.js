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
    },
    regularprice:{
        type:String,
        required:[true,"regularprice name is require"],
    },
    saleprice:{
        type:String
    },
    slug:{
        type:String,
        required:[true,"slug name is require"],
    }


}) 

module.exports = mongoose.model("Product",productSchema)