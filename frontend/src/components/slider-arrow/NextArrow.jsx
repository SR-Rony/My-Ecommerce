import { FaAngleRight } from "react-icons/fa";

const NextArrow = ({onClick}) => {
    
    return (
        <div
          className='w-10 h-10 ring-1 ring-primary bg-transparent text-primary hover:bg-primary hover:text-white absolute rounded-full flex justify-center items-center cursor-pointer top-2/4 right-0 translate-y-[-50%] z-10'
          onClick={onClick}
        ><FaAngleRight/></div>
      );
}
export default NextArrow