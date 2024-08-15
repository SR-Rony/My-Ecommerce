import React, { useEffect } from 'react'
import UserList from '../components/users-list/UserList'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Banner from '../components/banner/Banner'
import Category from '../components/category/Category'
import AllProduct from '../components/all-product/AllProduct'

const Home = () => {

  // const user = useSelector((state)=>state.user.value)
  // let navigate = useNavigate()

  // useEffect(()=>{
  //   if(!user){
  //     navigate("/login")
  //   }else{
  //     navigate("/home")
  //   }
  // },[])

  return (
    <div className='mt-24 bg-slate-300'>
      <Banner/>
      <Category/>
      <AllProduct/>
    </div>
  )
}

export default Home