import React from "react";
import { Col } from "react-bootstrap";

export default function ProductCart({items}) {
  return (
    <>
      <Col lg="3" md="4">
        <div className='product-items'>
          <div className="cart-img">
             <img src="https://cdn.pixabay.com/photo/2014/12/21/23/39/armchair-575788__340.png" alt=""/>
          </div>
          <div className='p-2 product-info'>
              <h3>{items.productName}</h3>
              <span className="text-center">Chair</span>
          </div>
           <div className="bottom-cart-product d-flex align-items-center justify-content-between p-2" >
             <span className="price">${items.price}</span>
            <span><i class="fa-solid fa-plus"></i></span>
           </div>
        </div>
      </Col>
    </>
  );
}
