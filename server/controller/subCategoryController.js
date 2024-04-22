const Subcategory = require("../models/subCatModel")


// create product category
const subCategory = async(req,res)=>{
    try{
        const {name,catId,ownerId}=req.body
        const exsistName = await Subcategory.findOne({name:name})
        if(exsistName){
            res.send({message:"name already exsist"})
        }else{
           const newSubCategory = new Subcategory({
            name:name,
            catId:catId,
            ownerId:ownerId
           })
           newSubCategory.save()
           res.send({
            success:true,
            message:"subcategory create. Wat for admin approval",
            cat:newSubCategory
           })
        }
    }catch(err){
        console.log(err);
    }
}


module.exports = {subCategory}