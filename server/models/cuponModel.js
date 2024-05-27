
const mongoose = require('mongoose');
const {Schema} = mongoose;

const cuponSchema = new Schema({
    cupon:{
        type:String,
        unique:true
    },
    discount:{
        type:String,
        required:true
    },
    amount :{
        type:Number,
        required:true
    },
    rang:{
        type:Number,
        required:true
    }

}) 

module.exports = mongoose.model("Cupon",cuponSchema)












// const mongoose = require('mongoose');
// const {Schema} = mongoose;

// const cuponSchema = new Schema({
//     cupon:{
//         unique:true
//     },
//     discount:{
//         type:String,
//         required:true,
//     },
//     amount :{
//         type:Number,
//         required:true
//     },
//     rang:{
//         type:Number,
//         required:true
//     }

// }) 

// module.exports = mongoose.model("Cupon",cuponSchema)