import React, { useState } from 'react'
import Heading from '../components/heading/Heading';
import { Button, Checkbox, Form, Input } from 'antd';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import slugify from 'react-slugify';

const AddVariant = () => {
  const user = useSelector((state)=>(state.user.value))
  
  
  const [slugText,setSlugText]=useState("")
  const [loading, setLoading] = useState(false);
  const [discription, setDiscritption] = useState('');
  const [images, setImages] = useState({});

  const onFinish = async(values) => {
      try{
        const data = await axios.post("http://localhost:3001/api/product",{
          name:values.name,
          description:discription,
          images:images,
          regularprice:values.regularprice,
          saleprice:values.saleprice,
          slug:slugText
        },
        {
          headers:{
            "Content-Type":"multipart/form-data"
          }
        }
      )
      }catch(error){
        console.error(error)
      }
  }
  const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
      setLoading(false)
  };  

  const handleImages =(e)=>{
    console.log("images",e.target.files[0]);
    setImages(e.target.files[0])
  }

  return (
    <div className='flex justify-center items-center h-[80vh]'>
    <div className='p-5 shadow-lg ring-1 text-center ring-primary rounded-md'>
      <Heading className='text-3xl mb-10' tag='h1' text="Product variant add"/>
      <Form className='mx-auto pr-32 w-full'
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
          label="Product Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please inter your product ',
            },
            {type:"text"}
          ]}
        >
          <Input onChange={(e)=>setSlugText(e.target.value)} className='ml-4' />
        </Form.Item>
        <Form.Item
          label="Product image"
          name="imags"
          rules={[
            {
              required: true,
              message: 'Please inter your image ',
            },
            {type:"text"}
          ]}
        >
          <Input onChange={handleImages} type='file' />
        </Form.Item>
        <Form.Item
          label="regular Price"
          name="regularprice"
          rules={[
            {
              required: true,
              message: 'Please inter your regular Price ',
            },
            {type:"text"}
          ]}
        >
          <Input className='ml-4' />
        </Form.Item>
        <Form.Item
          label="sale Price"
          name="saleprice"
          rules={[
            {
              required: true,
              message: 'Please inter your sale Price ',
            },
            {type:"text"}
          ]}
        >
          <Input className='ml-4' />
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
  </div>
  )
}

export default AddVariant