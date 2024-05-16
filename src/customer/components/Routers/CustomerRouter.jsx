import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../Pages/Homepage/HomePage';
import Login from '../Login/Login';
import SignUp from '../Signup/SignUp';
import Footer from '../Footer/Footer';
import Cart from '../Cart/Cart';
import Navigation from '../Navigation/Navigation';
import Product from '../Product/Product';
import ProductDetails from '../ProductDetails/ProductDetails';
import Cheakout from '../CheakOut/CheakOut';

import About from '../Company/About';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';


const CustomerRouter = () => {
  return (
    <div>
      <div>
      <Navigation/>
      </div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        
        <Route path='/sign in' element={<SignUp/>}></Route>
        <Route path='/product'element={<Product/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>

        <Route path='/checkout' element={<Cheakout/>}></Route>
        <Route path='/productdetails' element={<ProductDetails/>}></Route>
        <Route path='/comapny' element={<About/>}></Route>
        <Route path='/homecard' element={<HomeSectionCard/>}></Route>
        </Routes>
    
    
    
      <div> <Footer/></div>
    </div>
  );
}

export default CustomerRouter;
