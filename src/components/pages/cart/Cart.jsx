import React from "react";

import './cart.css'
export default function Cart({setShowCart}) {
  return (
    <>
      <h2 onClick={() =>{setShowCart(false)}}>cart pages</h2>
    </>
  );
}
