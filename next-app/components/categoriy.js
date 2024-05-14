import Link from 'next/link'
import React from 'react'


async function getData() {
    const res = await fetch('http://localhost:3001/api/product/allcategory')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   

export const Categoriy = async() => {
    const data = await getData()
  return (
    data.cat.map((item)=>(
        <div><Link href={`/category/${item._id}`}>{item.name}---{item.ownerId.name}</Link></div>
    ))
  )
}
