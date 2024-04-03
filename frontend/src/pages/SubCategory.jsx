import React, { useEffect, useState } from 'react'
import Heading from '../components/heading/Heading';
import { Button, Checkbox, Form, Input,Select  } from 'antd';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';

const SubCategory = () => {

    const user = useSelector((state)=>(state.user.value))
    console.log(user._id);

    const [loading, setLoading] = useState(false);
    const [categoryList, setCategoryList] = useState([]);
    const [categoryId, setCategoryId] = useState("");

    useEffect(()=>{
      async function allCat() {
         let categoryData = await axios.get("http://localhost:3001/api/product/allcategory")
         // console.log(categoryData.data.cat);
         let array =[]
         categoryData.data.cat.map((item)=>{
           array.push(
             {
               value: item._id,
               label: item.name,
             },
           )
         })
         setCategoryList(array)
       }
       allCat()
     },[])

    // /////////

    const onFinish = async(values) => {
        console.log(values);
        try{
          const data = await axios.post("http://localhost:3001/api/product/subcategory",{
            name:values.name,
            catId:categoryId,
            ownerId:user._id
          })
          // console.log(data.data.message);
          toast.error(data.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }catch(error){
          console.error(error)
        }
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setLoading(false)
      };    

      // ////////
      const onChange = (value) => {
        console.log(`selected ${value}`);
        setCategoryId(value)
      };
      const onSearch = (value) => {
        console.log('search:', value);
      };
      
      // Filter `option.label` match the user type `input`
      const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


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
          label="subcategory name:"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please inter your product ',
            },
            {type:"text"}
          ]}
        >
          <Input className='ml-4' />
        </Form.Item>

        <Select
        showSearch
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={filterOption}
        options={categoryList}
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

export default SubCategory