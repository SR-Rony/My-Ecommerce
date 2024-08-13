import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Form, Input, } from 'antd';
import Heading from '../components/heading/Heading';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';



const Register = () => {
  const [loading, setLoading] = useState(false);
  const user = useSelector((state)=>(state.user.value))
  let navigate=useNavigate()

  // useEffect(()=>{
  //   if(user){
  //     navigate("/home")
  //   }
  // },[])

  const onFinish = async(values) => {
    console.log('Success:', values.images);
    setLoading(true)

    await axios.post("http://localhost:3001/api/user/register",{
        name:values.name,
        email:values.email,
        password:values.password
      })
      .then((res)=>{
        let message = res.data.message
        if(message){
          toast.success("please chack your email and verify", {
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
        navigate("/login")
        setLoading(false)
    })
    .catch((err)=>{
      setLoading(false)
      console.log(err);
      let existsEmail = err.response.data.messages;
      if(existsEmail){
        toast.error("email already exists", {
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
    })


  }
  
  const onFinishFailed = (errorInfo) => {
    setLoading(false)
    console.log('Failed:', errorInfo);
  };


  return (
   <div className='flex justify-center items-center h-screen'>
    <div className='p-5 shadow-lg ring-1 ring-primary rounded-md'>
      <Heading className='text-3xl mb-10' tag='h1' text="Get started with easily " span="register"/>
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
        label="name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
          {min:3}
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
          {type:"email"},
          
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="password"
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
      <p className='text-center'>Already have an acount ? <Link className='text-primary' to='/login'>Login</Link></p>
    </div>
  </div>
  )
}

export default Register