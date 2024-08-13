import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import slugify from 'react-slugify';
import Heading from '../../components/heading/Heading';

const AddProduct = () => {
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
        console.log("data",data);
        // console.log(data.data.message);
        // toast.error(data.data.message, {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "dark",
        // });
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
      <Heading className='text-3xl mb-10' tag='h1' text="New Product Add"/>
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
        <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor&nbsp;5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event,editor ) => {
                console.log( "description",editor.getData() );
                setDiscritption(editor.getData())
            } }
            onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
            } }
            onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
            } }
        />
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
        {/* <Form.Item
          label="slug"
          name="slug"
          rules={[
            {
              required: true,
              message: 'Please inter your slug ',
            },
            {type:"text"}
          ]}
        >
          <Input defaultValue={slugify(slugText)} disabled className='ml-4' />
        </Form.Item> */}
        <label htmlFor="">Slug : </label>
        <input className='ring-1 ring-secoundary w-1/2 rounded-md p-2 m-3' disabled value={slugify(slugText)} type="text" />

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

export default AddProduct