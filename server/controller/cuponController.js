const Cupon = require("../models/cuponModel");


const addCupon = async(req,res)=>{
    try{
        let {cupon,discount,amount,rang} = req.body;
        console.log(req.body);

        let existcupon = await Cupon.exists({cupon:cupon})
        if(existcupon){
            res.send("cupon already exists")
        }else{
            if(discount>100 || amount =="Percent"){
                return res.send("Invalid discount cupon")

            }else if(discount > 50 || amount=="Dalivary"){
                
                return res.send("Invalid discount cupon")
                
            }else{
                let newCupon = new Cupon({
                    cupon:cupon,
                    discount:discount,
                    amount:amount,
                    rang:rang
                })
               newCupon.save()
              return  res.send(newCupon)
            }
        }
    }catch(error){
        res.send(error)
    }
}
module.exports = {addCupon}