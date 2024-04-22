const Category = require("../models/catModel")



const getCategory = async(req,res)=>{
    try{
        const allCategory = await Category.find()
        res.status(200).send({
        success:true,
        message:"all subcategory show",
        cat:allCategory
        })
    }catch(err){
        console.log(err);
    }
}

// create product category
const createcategory = async(req,res)=>{
    try{
        const {name,ownerId}=req.body
        const exsistName = await Category.findOne({name:name})
        if(exsistName){
            res.send({message:"name already exsist"})
        }else{
           const newCategory = new Category({
            name:name,
            ownerId:ownerId
           })
           newCategory.save()
           res.send({
            success:true,
            message:"category create. Wat for admin approval",
            cat:newCategory
           })
        }
    }catch(err){
        console.log(err);
    }
}

module.exports = {createcategory,getCategory}