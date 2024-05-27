const Card = require("../models/cardModel");


const addCard = async(req,res)=>{
    const {productId,ownerId,quantity} = req.body
    console.log(req.query);
    let existProductCard = await Card.find({productId:productId});

    if((existProductCard).length > 0){
      if(req.query.type=="incre"){
        await Card.findByIdAndUpdate({_id:existProductCard[0]._id},{quantity:existProductCard[0].quantity + 1},{new:true})
        
      }else if(req.query.type=="dicre"){
        await Card.findByIdAndUpdate({_id:existProductCard[0]._id},{quantity:existProductCard[0].quantity - 1},{new:true})
      }
    }else{
        let card = new Card({
            productId: productId,
            ownerId: ownerId,
            quantity: 1
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