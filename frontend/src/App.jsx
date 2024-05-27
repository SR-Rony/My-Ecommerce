import React from 'react'
import './App.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root-layout/Root';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verification from './pages/Verification';
import ForgotPassword from './pages/ForgotPassword';
import NewPassword from './pages/NewPassword';
import AddCategory from './pages/AddCategory';
import SubCategory from './pages/SubCategory';
import VewCategory from './pages/VewCategory';
import AddProduct from './pages/AddProduct';
import VewProduct from './pages/VewProduct';
import AddVariant from './pages/AddVariant';
import VewVariant from './pages/VewVariant';
import Discount from './pages/Discount';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/forgot_password' element={<ForgotPassword />}/>
        <Route path='/verification/:token' element={<Verification />}/>
        <Route path='/newpassword/:token' element={<NewPassword />}/>
        <Route path="/" element={<Root />}>
          <Route path='/home' element={<Home />}/>
          <Route path='/addcategory' element={<AddCategory />}/>
          <Route path='/subcategory' element={<SubCategory />}/>
          <Route path='/vewcategory' element={<VewCategory />}/>
          <Route path='/addproduct' element={<AddProduct />}/>
          <Route path='/vewproduct' element={<VewProduct />}/>
          <Route path='/addvariant' element={<AddVariant />}/>
          <Route path='/vewvariant' element={<VewVariant />}/>
          <Route path='/discount' element={<Discount />}/>
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}

export default App
