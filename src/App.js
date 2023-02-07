import React from "react";
import "./style.css";
import Header from './components/common/header/Header'
import Home from './components/pages/Home/Home'
import Shop from './components/pages/shop/Shop'
// import Cart from './components/pages/cart/Cart'

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
       <Header/>
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/shop' element={<Shop/>} />
         {/* <Route path='/cart' element={<Cart/>} /> */}

       </Routes>
      </BrowserRouter>
    </div>
  );
}
