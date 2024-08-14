import React from 'react'
import { twMerge } from 'tailwind-merge'

const Button = ({text,className,onClick}) => {
  return (
    <button onClick={onClick} className={twMerge("text-primary text-base font-semibold ring-2 ring-primary bg-transparent py-1 px-4 rounded-full duration-100 hover:bg-primary hover:text-white  ",className)}>{text}</button>
  )
}

export default Button