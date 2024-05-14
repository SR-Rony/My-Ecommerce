import React from 'react'

async function getData(id) {
    const res = await fetch(`http://localhost:3001/api/product/allsubcategory?id=${id}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

const Category = async ({params}) => {
    const data = await getData(params.slug)

  return (
    data.subCategory.map((item)=>(
      <h3>{item.name}</h3>
    ))
  )
}

export default Category
