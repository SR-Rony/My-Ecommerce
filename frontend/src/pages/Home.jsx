import React, { useEffect } from 'react'
import UserList from '../components/users-list/UserList'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const user = useSelector((state)=>state.user.value)
  let navigate = useNavigate()

  useEffect(()=>{
    if(!user){
      navigate("/login")
    }else{
      navigate("/home")
    }
  },[])

  return (
    <div>
      <h1>welcome to home pages</h1>
    </div>
  )
}

export default Home