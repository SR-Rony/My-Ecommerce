import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import child from '../../assets/child.svg'
import mans from '../../assets/mens.svg'
import bag from '../../assets/handbag.svg'
import shoes from '../../assets/shoes.089eac13.svg'
import clothing from '../../assets/clothing.svg'
import { useState } from "react";
import NextArrow from "../slider-arrow/NextArrow";
import PrevArrow from "../slider-arrow/PrevArrow";
import Images from "../images/Images";
import Paragraph from "../paragraph/Paragraph";
const imageArray = [bag,shoes,clothing,bag,shoes,clothing,bag,shoes,clothing,bag,shoes,clothing]

const Category = () => {

  const [array, setArray]=useState(imageArray)

    const settings = {
      prevArrow:<PrevArrow/>,
      nextArrow:<NextArrow/>,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows:false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2,
              arrows:false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows:false
            }
          }
        ]
      };


  return (
    <section className="mt-5 py-5 shadow-lg bg-white">
        <div className="container mx-auto px-2">
            <div className="slider-container flex-row justify-center">
        <Slider {...settings}>
          {array.map((item,index)=>(
              <div className=" py-4 flex text-center cursor-pointer" key={index}>
              <div className=" mx-auto w-28 h-28 ring ring-secoundary hover:ring-primary rounded-full p-4">
                <Images className='w-12 mx-auto' src={item}/>
                <Paragraph text='Mans'/>
              </div>
          </div>
          ))}
        </Slider>
            </div>
        </div>
    </section>
  )
}

export default Category