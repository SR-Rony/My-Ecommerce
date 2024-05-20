import React from 'react'
import Image from 'next/image'


async function getData() {
    const res = await fetch('http://localhost:3001/api/product')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   

export const Product = async() => {
    const data = await getData()
    console.log(data.data);
  return (
    data.data.map((item)=>(
        <div>
            <h2>{item.name}</h2>
            <Image
                src={`http://localhost:3001${item.images}`}
                width={500}
                height={500}
                alt="Picture of the author"
            />
            {item.saleprice 
                ? <div><span><del>{item.regularprice}</del></span> <span>{item.saleprice}</span></div>
                : <p>{item.saleprice}</p>
            }
        </div>
    ))
  )
}
