import { twMerge } from 'tailwind-merge'

const Images = ({src,className,alt}) => {
  return (
    <img className={twMerge('w-full object-cover',className)}  src={src} alt={alt} />
  )
}

export default Images