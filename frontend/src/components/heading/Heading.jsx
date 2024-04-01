import React from 'react'
import { twMerge } from 'tailwind-merge'

const Heading = (props) => {
 const {text,className,span}=props
  return (
    <props.tag className={twMerge("font-bold",className)}>{text} <span className='text-primary'>{span}</span></props.tag>
  )
}

export default Heading