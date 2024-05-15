const Subcategory = require("../models/subCatModel")
const Category = require("../models/catModel")

// create product category
const vewSubCategory = async(req,res)=>{
    let id = req.query.id
    try{
        // const subcategory = await Subcategory.find()
        const subcategory = await Subcategory.find({catId:id}).populate("ownerId")
        res.send({
            success:true,
            message:"Vew all subcategory",
           subCategory:subcategory
        })
    }catch(err){
        console.log(err);
    }
}

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

          await Category.findByIdAndUpdate({_id:catId},{$push : {subCatList:newSubCategory._id}})


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


module.exports = {subCategory,vewSubCategory}