const Product = require("../models/productModel")


// vew all product
const vewProduct =async(req,res)=>{
    try{
        const allProduct = await Product.find()
        res.status(201).send({
            success:true,
            message:"vew all product",
            data:allProduct
        })

    }catch(error){
        console.log(error);
    }
}

// create product
const createProduct =async(req,res)=>{
    try{
        let {name,description,regularprice,saleprice,slug}=req.body
        console.log(`/public/images/${req.file.filename}`);
        const product = new Product({
            name:name,
            description:description,
            images:`/public/images/${req.file.filename}`,
            regularprice:regularprice,
            saleprice:saleprice,
            slug:slug
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
// vew single product
const singleProduct =async(req,res)=>{
    let slug = req.params.slug
    try{
        let singlePro = await Product.findOne({slug:slug})
        res.send({
            success:true,
            messages:"vew single product",
            data:singlePro
        })
       
    }catch(err){
        console.log(err);
        res.send({
            success:false,
            messages:"single product not vew",
        })
    }
}
module.exports ={createProduct,vewProduct,singleProduct}