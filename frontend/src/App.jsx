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
import AddCategory from './pages/dashboard/AddCategory';
import SubCategory from './pages/dashboard/SubCategory';
import VewCategory from './pages/dashboard/VewCategory';
import AddProduct from './pages/dashboard/AddProduct';
import AddVariant from './pages/dashboard/AddVariant';
import AffliateProduct from './pages/dashboard/AffliateProduct';
import VewProduct from './pages/dashboard/VewProduct';
import VewVariant from './pages/dashboard/VewVariant';
import Discount from './pages/dashboard/Discount';
import RootDashobard from './components/dashobard-root/RootDashobard';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Root />}>
          <Route path='/' element={<Home />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/forgot_password' element={<ForgotPassword />}/>
          <Route path='/verification/:token' element={<Verification />}/>
          <Route path='/newpassword/:token' element={<NewPassword />}/>
        </Route>
        <Route path="/" element={<RootDashobard />}>
          <Route path='/dashboard/addcategory' element={<AddCategory />}/>
          <Route path='/dashboard/subcategory' element={<SubCategory />}/>
          <Route path='/dashboard/vewcategory' element={<VewCategory/>}/>
          <Route path='/dashboard/addproduct' element={<AddProduct />}/>
          <Route path='/dashboard/vewproduct' element={<VewProduct />}/>
          <Route path='/dashboard/addvariant' element={<AddVariant />}/>
          <Route path='/dashboard/vewvariant' element={<VewVariant />}/>
          <Route path='/dashboard/discount' element={<Discount />}/>
          <Route path='/dashboard/affliate-product' element={<AffliateProduct />}/>
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
