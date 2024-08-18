import { FiSearch,FiShoppingCart  } from "react-icons/fi";
import {Link} from 'react-router-dom'
import { FaRegCircleUser  } from "react-icons/fa6";
import {FaRegHeart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import Heading from "../heading/Heading";
import Paragraph from "../paragraph/Paragraph";

const Navbar = () => {
  

  let userInfo = useSelector(state =>state.user.value)

  // const handleProfile =()=>{
  //   setProfile(tr)
  // }

  return (
    <nav className='py-4 bg-black text-white absolute z-50 w-full top-0 left-0 shadow-xl'>
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-12 gap-5 items-center">
            <div className="order-1 col-span-6 sm:col-span-3">
             <Link to="/"> <Heading className='inline-block' tag="h1" text="Ecommerce"/></Link>
            </div>
            <div className="order-3 sm:order-2 col-span-12 sm:col-span-6 relative">
              <input className='text-base md:text-xl w-full ring-2 ring-primary py-2 px-5 text-black rounded-full focus-visible:ring-offset-transparent' placeholder='Product Search' type="text" />
              <div className="absolute bottom-1/2 translate-y-1/2 cursor-pointer right-0 text-2xl bg-primary h-full w-14 flex justify-center items-center rounded-e-full">
                <FiSearch className='font-bold'/>
              </div>
            </div>
            <div className="order-2 sm:order-3 col-span-6 sm:col-span-3 flex gap-3 md:gap-5 text-3xl justify-end  items-center">
              <Link className=''><FaRegHeart/></Link>
              <Link className=''><FiShoppingCart/></Link>
                {userInfo 
                ?<Link className="text-white" to='/dashboard'>
                  <Paragraph className='text-base' text={userInfo.name}/>
                  {/* <div className='w-8 h-8 ring ring-white rounded-full overflow-hidden cursor-pointer'>
                    <Images src={userInfo.image} alt='profile'/>
                  </div> */}
                </Link>
                :<Link className='' to='/login'><FaRegCircleUser /></Link>
                }
                {/* <Link className='' to='/login'><FaRegCircleUser /></Link> */}
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar