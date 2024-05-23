const Card = require("../models/cardModel");


const addCard = async(req,res)=>{
    const {productId,ownerId,quantity} = req.body
    console.log(req.body);
    let existProductCard = await Card.find({productId:productId});

    if((existProductCard).length > 0){
        let data = await Card.findByIdAndUpdate({_id:existProductCard[0]._id},{quantity:existProductCard[0].quantity + 1},{new:true})
       return res.send(data)
    }else{
        let card = new Card({
            productId: productId,
            ownerId: ownerId,
            quantity: quantity
        })
        card.save()

      return res.send({
        success:true,
        message:"product new card add"
      })
    }
}

const vewCard = async(req,res)=>{
    const card = await Card.find().populate("productId")

    res.send(card)
}

module.exports = {addCard,vewCard}