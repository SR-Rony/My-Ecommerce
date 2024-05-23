"use client"

import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'

export const Banner = () => {
  return (
    <Carousel>
        <Carousel.Item>
        <Image
        src="http://localhost:3001/public/images/1716400331848-82473147.jpg"
        width={1420}
        height={400}
        />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image
        src="http://localhost:3001/public/images/1716400331848-82473147.jpg"
        width={1420}
        height={400}
        />
        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image
            width={1420}
            height={400}
            src="http://localhost:3001/public/images/1716400331848-82473147.jpg"
            
            />
        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}
