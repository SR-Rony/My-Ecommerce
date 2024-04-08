import React, { useEffect, useState } from 'react'
import { Space, Table, Tag } from 'antd';
import axios  from "axios"



const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Images',
      dataIndex: 'Images',
      key: 'Images',
    },
    {
      title: 'Regular Price',
      dataIndex: 'regularprice',
      key: 'regularprice',
    },
    {
      title: 'sale Price',
      dataIndex: 'saleprice',
      key: 'saleprice',
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          {/* <a>{record.name}</a> */}
          <a>Delete</a>
        </Space>
      ),
    },
  ];


const VewProduct = () => {
    const [product,setProduct]= useState([])

    useEffect(()=>{
       async function vewProduct() {
            const allProduct =await axios.get("http://localhost:3001/api/product")
            console.log(allProduct.data.data);
            let array =[]
            allProduct.data.data.map((item)=>{
             array.push(
               {
                key: item._id,
                images:item.images,
                name: item.name,
                description:item.description,
                regularprice: item.regularprice,
                saleprice: item.saleprice,
               },
             )
           })
           setProduct(array)
        }
        vewProduct()
    },[])




  return (
    <Table columns={columns} dataSource={product}/>
  )
}

export default VewProduct