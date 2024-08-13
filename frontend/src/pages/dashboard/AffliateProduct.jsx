import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const AffliateProduct = () => {
  let user = useSelector((state)=>state.user.value)
  console.log(user);

  const [allProduct,setAllProduct] = useState([])
  useEffect(()=>{
    async function vewProduct (){
       let product = await axios.get("http://localhost:3001/api/product")
       console.log(product.data.data);
       setAllProduct(product.data.data)
    }
    vewProduct()
  },[])

  return (
    <div>
      {allProduct.map((item,index)=>(
        <div key={index}>
         {console.log(item.slug)}
          <h2>{item.name} ---{`http://localhost:3000/product/${item.slug}?userId:${user._id}`}</h2>
        </div>
      ))}
    </div>
  )
}

export default AffliateProduct