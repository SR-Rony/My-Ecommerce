"use client"

import React from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Image from 'next/image'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


async function getData() {
    const res = await fetch('http://localhost:3001/api/product/card')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

const Card =async () => {
    const data = await getData()

    let totalPrice = 0

    data.map((item)=>{totalPrice += item.productId.saleprice ? item.productId.saleprice *item.quantity :item.productId.regularprice*item.quantity })

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
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Price</th>
                <th>Tax (15%)</th>
                <th>Delivary</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{totalPrice}</td>
                <td>{totalPrice*15/100}</td>
                <td>50</td>
                <td>{totalPrice+(totalPrice*15/100)}</td>
              </tr>
            </tbody>
          </Table>

            <PayPalScriptProvider options={{ clientId: "test" }}>
              <PayPalButtons style={{ layout: "horizontal" }} />
          </PayPalScriptProvider>
        </Container>
    </section>
  )
}

export default Card