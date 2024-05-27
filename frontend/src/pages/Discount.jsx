import React, { useState } from 'react'
import { Button, Form, Input,Select } from 'antd';
import Heading from '../components/heading/Heading';

const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

const Discount = () => {
    const [discountPrice,setDiscountPrice]= useState("Fixed")

    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };

  return (
    <div className='flex justify-center items-center h-[80vh]'>
    <div className='p-5 shadow-lg ring-1 text-center ring-primary rounded-md'>
      <Heading className='text-3xl mb-10' tag='h1' text="Discount"/>
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
          label="Cupon"
          name="cupon"
          rules={[
            {
              required: true,
              message: 'Please inter your Cupon ',
            },
            {type:"text"}
          ]}
        >
          <Input className='ml-4' />
        </Form.Item>
        <Form.Item
          label="Discount"
          name="discount"
          rules={[
            {
              required: true,
              message: 'Please inter your Discount ',
            },
            {type:"text"}
          ]}
        >
          <Input className='ml-4' />
        </Form.Item>
        <Form.Item
          label="Cupon Rang"
          name="rang"
          rules={[
            {
              required: true,
              message: 'Please inter your rang ',
            },
            {type:"text"}
          ]}
        >
          <Input className='ml-4' />
        </Form.Item>

        <Select
      defaultValue="Fixed"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'Fixed',
          label: 'fixed',
        },
        {
          value: 'Percent',
          label: 'percent',
        },
        {
          value: 'Dalivary',
          label: 'dalivary',
        },
      ]}
    />

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
            <Button className='bg-primary mt-5' type="primary" htmlType="submit"> Submit</Button>
        </Form.Item>
      </Form>
    </div>
  </div>
  )
}

export default Discount