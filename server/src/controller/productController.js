const Product = require("../models/productModel")

// create product
const createProduct =async(req,res)=>{
    try{
        let {name,description,}=req.body
        console.log(`/public/images/${req.file.filename}`);
        const product = new Product({
            name:name,
            description:description,
            images:`/public/images/${req.file.filename}`
        })
        await product.save();
        res.send({
            success:true,
            messages:"new product create",
            data:product
        })
       
    }catch(err){
        console.log(err);
        res.send({
            success:false,
            messages:"new product not create",
        })
    }
}
module.exports ={createProduct}