import React, { useState, useEffect } from "react";
import { Container , Row, Col} from "react-bootstrap";
import {Link} from 'react-router-dom'
import Services from "../../services/Services";
import ProductList from "../../ui/ProductList";
import Hero from './hero/Hero'
import Clock  from '../../ui/Clock'
import Products from './../../data/Products';

import "./home.css"
// import Services from "../Home/Home"

export default function Home() {

  const [data, setdata] = useState([])
  const [bestSaleTranding, setBestSaleTranding] = useState([])
  const [newMobileproduct, setNewMobileProduct] = useState([])
  const [WirelessProduct, setWirelessProduct] = useState([])
  const [popularProduct, setPopularProduct] = useState([])

  useEffect(()=>{
      const filterdata = Products.filter((items) =>
       items.category === "chair"
      );
      const filterBestSale = Products.filter((items) =>
       items.category === "sofa"
      );
        const filterNewMobileProduct = Products.filter((items) =>
        items.category === "mobile"
        );
        const filterWirelessProduct = Products.filter((items) =>
         items.category === "wireless"
        );  
        const filterPopularProduct = Products.filter((items) =>
        items.category === "watch"
       ); 

     setdata(filterdata)
     setBestSaleTranding(filterBestSale)
     setNewMobileProduct(filterNewMobileProduct)
     setWirelessProduct(filterWirelessProduct)
     setPopularProduct(filterPopularProduct)

  },[])
  return (
    <>
      <Hero/>
      <Services/>
      <section className='tranding_products py-4 mb-5'>
        <Container>
          <Row> 
            <Col lg='12' className='text-center my-5'>
              <h1 className='section_title'>Tranding Products</h1>
            </Col>
            <ProductList  data={data} />
          </Row>
        </Container>
      </section>
      

      <section className="best_tranding mb-5">
      <Container>
          <Row> 
            <Col lg='12' className='text-center my-5'>
              <h1 className='section_title'>Best Sales</h1>
            </Col>
            <ProductList  data={bestSaleTranding} />
          </Row>
        </Container>
      </section>

      <section className="time_count">
        <Container>
          <Row> 
            <Col lg='6' md="6" className=''>
              <div className="clock_content">
                <h4 className="text-white fs-6 mb-2">Limited Offers </h4>
                <h3 className="text-white fs-6 mb-3">Quality Armchair</h3>
              </div>
                 <Clock/>
                <button className="btn_store shop__btn">
                  <Link>Visit Store</Link>
                </button>
            </Col>
            <Col lg='6' md="6" className=''>
              <div className="clock-img">
               <img src="https://media.istockphoto.com/id/869078270/photo/armchair-isolated-on-white-background-3d-rendering.jpg?b=1&s=170667a&w=0&k=20&c=eWOYtEpcDKw-XLUQX13-K7c5jn_S8hbeWaZC_r4nrtg=" alt="" />
               </div>
           </Col>
          </Row>
        </Container>
      </section>


      <section className='Arial_products py-4'>
        <Container>
          <Row> 
            <Col lg='12' className='text-center my-5'>
              <h1 className='section_title'>New Arrials Products</h1>
            </Col>
            <ProductList  data={newMobileproduct} />
            <ProductList  data={WirelessProduct} />
          </Row>
        </Container>
      </section>

      
      <section className='puploar_products py-4 mb-5'>
        <Container>
          <Row> 
            <Col lg='12' className='text-center my-5'>
              <h1 className='section_title'>popular in  Category</h1>
            </Col>
            <ProductList  data={popularProduct} />
          </Row>
        </Container>
      </section>
      
    </>
  );
}
