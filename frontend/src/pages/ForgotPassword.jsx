import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios"
import { toast } from 'react-toastify';


const ForgotPassword = () => {
    const [loading, setLoading] = useState(false);


    const onFinish = async(values) => {
        console.log(values);
        // setLoading(true)
        await axios.post("http://localhost:3001/api/user/forgot_password",{
          email:values.email,
        })
        .then((res)=>{
          console.log(res);
          toast.success("please chack your email and add the new password", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        })
        .catch((err)=>{
          console.log(err);
          let errorMessage=err.response.data.message
          toast.error(errorMessage, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        })
      }
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        // setLoading(false)
      };




  return (
    <div className='flex justify-center items-center w-full h-screen'>
    <Form className='mx-auto w-1/2 pr-32'
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
        label="inter your email"
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
    </div>
  )
}

export default ForgotPassword