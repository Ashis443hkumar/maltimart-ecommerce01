import React,{ useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "../../pages/cart/Cart";
import './header.css'

export default function Header() {
  const [showCart, setShowCart] = useState(false)

  return (
    <>
      <header class='header'>
        <div class="logo">
          <span><i class="fa-solid fa-user"></i></span>
          <h3>Logo</h3>
        </div>
        <nav class='navigation'>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/shop'>Shop</NavLink></li>
            <li><NavLink to='/cart'>Cart</NavLink></li>
          </ul>
        </nav>
        <div class='social-link'>
          <span><i class="fa-regular fa-heart"></i></span>
          <span onClick={() =>{setShowCart(true)}}><i class="fa-solid fa-cart-shopping"></i></span>
          <span>
            <i class="fa-solid fa-user"></i>
          </span>
        </div>
      </header>

      {showCart && <Cart setShowCart={setShowCart} />}
    </>
  );
}
