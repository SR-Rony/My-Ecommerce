import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import Heading from '../components/heading/Heading';
import { Link, json, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { activeUser } from '../fetures/users/userSlice'
import { useDispatch, useSelector } from 'react-redux';
  

const Login = () => {
  const [loading, setLoading] = useState(false);

  // const user = useSelector((state)=>(state.user.value))
  // console.log(user);
  let navigate = useNavigate()
  let dispatch = useDispatch()

    // useEffect(()=>{
    //   if(user){
    //     navigate("/home")
    //   }
    // },[])

  const onFinish = async(values) => {
    try{
      setLoading(true)
      let data = await axios.post("http://localhost:3001/api/user/login",{
        email:values.email,
        password:values.password
      })
      // 
      let userData=data.data.data
      dispatch(activeUser(userData))
      localStorage.setItem("user",JSON.stringify(userData))
      navigate("/")
      setLoading(false)

    }catch(err){
      console.log(err);
      let error=err.response.data.message
      setLoading(false)
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    setLoading(false)
  };


  return (
  <div className='flex justify-center items-center h-screen'>
    <div className='p-5 shadow-lg ring-1 ring-primary rounded-md'>
      <Heading className='text-3xl mb-10' tag='h1' text="Get started with easily " span="login"/>
      <Form className='mx-auto pr-32'
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
            {type:"email"}
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
            {min:6}
          ]}
        >
          <Input.Password />
        </Form.Item>

        <p onClick={()=>navigate("/forgot_password")} className='text-end text-primary cursor-pointer mb-2'>Forget passeord</p>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          {loading 
        ? <Button type="" className='bg-primary text-white' loading> Loading</Button>
        : <Button className='bg-primary' type="primary" htmlType="submit"> Submit</Button>
        }
        </Form.Item>
      </Form>
      <p className='text-center'>Dont have an acount ? <Link className='text-primary' to='/register'>Register</Link></p>
    </div>
  </div>
  )
}

export default Login