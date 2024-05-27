const Cupon = require("../models/cuponModel");


const addCupon = async(req,res)=>{
    let {cupon,discount,amount,rang} = req.body;

   let existcupon = await Cupon.exists({cupon:cupon})
   if(existcupon){
    res.send("cupon already exists")
   }else{
    if(discount>100){
        if(amount =="Percent"){
            res.send("Invalid discount cupon")
        }
    }else if(discount > 50){
        if(amount=="Dalivary"){
            res.send("Invalid discount cupon")
        }
    }
   }
}
module.exports = {addCupon}