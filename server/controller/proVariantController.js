const Provariant = require("../models/productVariantModel")


// create product
const createProVariant =async(req,res)=>{
    try{
        let {name,regularprice,saleprice,productId}=req.body
        // console.log(name,regularprice,saleprice,productId);
        const proVariant = new Provariant({
            name:name,
            images:`/public/images/${req.file.filename}`,
            regularprice:regularprice,
            saleprice:saleprice,
            productId:productId
        })
        await proVariant.save();
        res.send({
            success:true,
            messages:"new product create",
            data:proVariant
        })
       
    }catch(err){
        console.log(err);
        res.send({
            success:false,
            messages:"new product not create",
        })
    }
}
module.exports ={createProVariant}