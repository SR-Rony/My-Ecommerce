"use client"

import React from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Image from 'next/image'


async function getData() {
    const res = await fetch('http://localhost:3001/api/product/card')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

const Card =async () => {
    const data = await getData()

    const handleClick =async(id,type)=>{
        console.log("click hosse",id,type);
      const respons =   await fetch(`http://localhost:3001/api/product/card?type=${type}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
              productId: id,
            }),
        })
        const content = await respons.json()
        // .then(res=>res.json())
        // .then(data=>console.log(data))
    }

  return (
    <section>
        <Container>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Image</th>
                <th>Name</th>
                <th>quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
                </tr>
            </thead>
            <tbody>
            {data.map((item,index)=>(
                <tr key={index}>
                <td>
                <Image
                src={`http://localhost:3001${item.productId.images}`}
                width={50}
                height={50}
                alt="Picture of the author"
                />
                </td>
                <td>{item.productId.name}</td>
                <td> 
                  <button onClick={()=>handleClick(item.productId._id,"incre")}>+</button>
                  {item.quantity}
                  <button onClick={()=>handleClick(item.productId._id,"dicre")}>-</button>
                </td>
                <td>{item.productId.saleprice ? item.productId.saleprice :item.productId.regularprice }</td>
                <td>{item.productId.saleprice ? item.productId.saleprice *item.quantity :item.productId.regularprice*item.quantity }</td>
                </tr>
            ))}
            </tbody>
            </Table>
        </Container>
    </section>
  )
}

export default Card