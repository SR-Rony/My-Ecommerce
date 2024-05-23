const mongoose = require('mongoose');
const {Schema} = mongoose;

const catdSchema = new Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    ownerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    },
    quantity :{
        type:Number
    }

}) 

module.exports = mongoose.model("Card",catdSchema)