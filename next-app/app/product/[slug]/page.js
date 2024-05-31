import React from 'react'

async function getData({slug}) {
    const res = await fetch(`http://localhost:3001/api/product/singleproduct/${slug}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }


const SingleProduct = async ({params}) => {
    let data =await getData(params)
    console.log( data.data);
    let singleData = data.data
  return (
    <div>
        <h2>{singleData.name}</h2>
        <p>{singleData.description}</p>
    </div>
  )
}

export default SingleProduct