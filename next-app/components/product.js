import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import ProductCart from './productCart'


async function getData() {
    const res = await fetch('http://localhost:3001/api/product')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   

export const Product = async() => {
    const data = await getData()
  return (
    <section>
      <Container>
        <Row>
            {
              data.data.map((item)=>(
                <Col lg={3}>
                  <ProductCart item ={item} />
                </Col>
              ))
            }
        </Row>
      </Container>
    </section>
  )
}
