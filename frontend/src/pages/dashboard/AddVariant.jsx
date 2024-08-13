import React, { useEffect, useState } from 'react'
import { Button,Form, Input,Select } from 'antd';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Heading from '../../components/heading/Heading';
// import slugify from 'react-slugify';

const AddVariant = () => {
  const user = useSelector((state)=>(state.user.value))
  
  
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const [productId,setProductId]=useState("")
  const [images, setImages] = useState({});

  useEffect(()=>{
   async function productVew() {
      let allProduct = await axios.get("http://localhost:3001/api/product")
      let array =[]
      allProduct.data.data.map((item)=>{
        array.push({
          value:item._id,
          label:item.name,
        })
      })
      setProductList(array)
    }
    productVew()
  },[])

  const onFinish = async(values) => {
      try{
        const data = await axios.post("http://localhost:3001/api/product/provariant",{
          name:values.name,
          images:images,
          regularprice:values.regularprice,
          saleprice:values.saleprice,
          productId:productId
        },
        {
          headers:{
            "Content-Type":"multipart/form-data"
          }
        }
      )
      console.log('form all data',data)
      }catch(error){
        console.error("error data",error)
      }
  }
  const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
      setLoading(false)
  };  

  const handleImages =(e)=>{
    setImages(e.target.files[0])
  }

  // handle select
  const handleChange = (value) => {
    setProductId(value)
  };

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
          <Input />
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
        <Select
      defaultValue=""
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={productList}
    />

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