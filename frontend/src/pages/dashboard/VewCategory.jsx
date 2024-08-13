import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import axios from 'axios';


const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>{record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
    },
  ];







const VewCategory = () => {

    const [categoryList, setCategoryList] = useState([]);
    console.log(categoryList);
    // const [categoryId, setCategoryId] = useState("");

    useEffect(()=>{
        async function allCat() {
           let categoryData = await axios.get("http://localhost:3001/api/product/allcategory")
           // console.log(categoryData.data.cat);
           let array =[]
           categoryData.data.cat.map((item)=>{
             array.push(
               {
                key: item._id,
                 name: item.name,
               },
             )
           })
           setCategoryList(array)
         }
         allCat()
       },[])



  return (
    <Table columns={columns} dataSource={categoryList} />
  )
}

export default VewCategory