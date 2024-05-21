"use client"

import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'

export const Banner = () => {
  return (
    <Carousel>
        <Carousel.Item>
        <Image
        src="http://localhost:3001/public/images/1712636354889-667660149.png"
        width={1300}
        height={500}
        alt="Picture of the author"
        />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image
        src="http://localhost:3001/public/images/1712636354889-667660149.png"
        width={1300}
        height={500}
        alt="Picture of the author"
        />
        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image
            src="http://localhost:3001/public/images/1712636354889-667660149.png"
            width={1300}
            height={500}
            alt="Picture of the author"
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
