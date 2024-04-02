import React, { useState } from 'react'
// 
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// 
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const SightMenu = () => {
  // user data
  const user = useSelector((state)=>(state.user.value))
  // menu item
  let navigate = useNavigate()
  const items = [
    user.isAdmin &&
    getItem('User', 'sub1', <MailOutlined />, [
      getItem('Merchant', '1'),
      getItem('User', '2'),
    ]),
    getItem('Product', 'sub2', <AppstoreOutlined />, [
      getItem('Add Product', '5'),
      getItem('Vew Product', '6'),
    ]),
    getItem('Category', 'sub4', <SettingOutlined />, [
      getItem('Add Category', 'add_category'),
      getItem('Add Subcategory', '10'),
      getItem('Vew Category', '11'),
      getItem('Vew Subcategory', '12'),
    ]),
    getItem('Discount', 'sub5', <SettingOutlined />, [
      getItem('Add Discount', '13'),
      getItem('Vew Discount', '14'),
    ]),
  ];

  const [theme, setTheme] = useState('light');
  const [current, setCurrent] = useState('1');
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  // onclick function
  const onClick = (e) => {
    console.log('click ', e);
    navigate(e.key)
    setCurrent(e.key);
  };

  return (
    <div className=''>
    <Switch
      checked={theme === 'dark'}
      onChange={changeTheme}
      checkedChildren="Dark"
      unCheckedChildren="Light"
    />
    <br />
    <br />
    <Menu
      theme={theme}
      onClick={onClick}
      style={{
        width: "100%",
      }}
      defaultOpenKeys={['sub1']}
      selectedKeys={[current]}
      mode="inline"
      items={items}
    />
  </div>
  )
}

export default SightMenu