import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AffliateProduct = () => {

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
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default AffliateProduct