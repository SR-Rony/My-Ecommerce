import { FiSearch,FiShoppingCart  } from "react-icons/fi";
import {Link, useNavigate} from 'react-router-dom'
import { FaRegCircleUser,FaAngleDown   } from "react-icons/fa6";
import {FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import Heading from "../heading/Heading";
import Paragraph from "../paragraph/Paragraph";
import { useEffect, useRef, useState } from "react";
import { Button } from "antd";
import { activeUser } from "../../fetures/users/userSlice";

const Navbar = () => {
  let [dropDown,setDropdown]= useState(false)
  const ref =useRef()

  let userInfo = useSelector(state =>state.user.value)
  let dispatch = useDispatch()
  let navigate = useNavigate()
  

  // const handleProfile =()=>{
  //   setProfile(tr)
  // }

  const handleLogout =()=>{
    dispatch(activeUser(null));
        localStorage.removeItem('user')
        navigate('/login')
  }

  useEffect(()=>{
    document.body.addEventListener("click",(e)=>{
      if(ref.current.contains(e.target)){
        setDropdown(true)
      }else{
        setDropdown(false)
      }
    })
  },[])


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
            <div className="order-2 sm:order-3 col-span-6 sm:col-span-3 flex gap-3 md:gap-5 justify-end  items-center">
              {/* <Link className=''><FaRegHeart/></Link> */}
              <Link className='text-3xl'><FiShoppingCart/></Link>
                {/* {userInfo 
                ?<Link className="text-white" to='/dashboard'>
                  <Paragraph className='text-base' text={userInfo.name}/>
                  <div className='w-8 h-8 ring ring-white rounded-full overflow-hidden cursor-pointer'>
                    <Images src={userInfo.image} alt='profile'/>
                  </div>
                </Link>
                :<Link className='' to='/login'><FaRegCircleUser /></Link>
                } */}
                <div ref={ref} className='flex items-center gap-2 relative cursor-pointer'>
                  <FaRegCircleUser className="text-3xl" />
                  {userInfo && <Paragraph className='text-base' text={userInfo.name}/>}
                  <FaAngleDown className="text-base"/>
                  {dropDown &&
                    <div className="absolute top-12 rounded-md right-0 p-2 w-40 bg-secoundary">
                      <div className="w-5 h-5 absolute bg-secoundary -top-2 right-4 rotate-45"></div>
                      <Link to='/profile'><Paragraph className='border-b-2 pb-2 my-2 border-primary' text='Your Profile'/></Link>
                      <Link to='dashboard'><Paragraph className='border-b-2 pb-2 border-primary' text='Dashboard'/></Link>
                      {/* <span className="w-full h-[2px] bg-primary my-2 block"></span> */}
                      {userInfo
                      ?<Button onClick={handleLogout} className='bg-primary mt-4'> Logout</Button>
                      :<Button onClick={()=>navigate('/login')} className='bg-primary mt-4'> Login</Button>
                      }
                      
                    </div>
                  }
                </div>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar