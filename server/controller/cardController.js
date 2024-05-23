const Card = require("../models/cardModel");


const addCard = async(req,res)=>{
    const {productId,ownerId,quantity} = req.body
    console.log(req.body);
    let existProductCard = await Card.find({productId:productId});

    if((existProductCard).length > 0){
       return res.send("product card is already add")
    }else{
        let card = new Card({
            productId: '664c2062f380b1021e07b344',
            ownerId: '66091a1d38a5c69529ef5f1c',
            quantity: 2
        })
        card.save()

      return res.send("product new card add")
    }
}

module.exports = {addCard}