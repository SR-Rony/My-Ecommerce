const mongoose = require('mongoose');
const {Schema} = mongoose;

const proVariantSchema = new Schema({
    name:{
        type: String,
        required:[true,"user name is require"],
        unique:true
    },
    images :{
        type:String
    },
    regularprice:{
        type:String,
        required:[true,"regularprice name is require"],
    },
    saleprice:{
        type:String,
        required:[true,"saleprice name is require"],
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        raf:"Product"
    }
}) 

module.exports = mongoose.model("Provariant",proVariantSchema)