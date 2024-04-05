const Product = require("../models/productModel")

// create product
const createProduct =async(req,res)=>{
    try{
        let {name,description,images}=req.body
        console.log(name,description,images);
        const product = new Product({
            name:name,
            description:description,
            images:images
        })
        await product.save();
        // res.send({
        //     success:true,

        // })
       
    }catch(err){
        console.log(err);
    }
}
module.exports ={createProduct}