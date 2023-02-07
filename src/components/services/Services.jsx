import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./service.css"
import ServiceData from "../data/ServiceData";
export default function Services() {
  return (
    <>
    <section className='service-section mt-4'>
      <Container>
        <Row>
          {
            ServiceData.map((val, index) =>(
            <Col lg="3" md="4" key={index}>
             <div className="service-content" style={{background:`${val.bg}` }} >
                <span><i class="fa-solid fa-truck"></i> </span>
                <div>
                  <h3>{val.title}</h3>
                  <p>{val.subtitle}</p>
                </div>
              </div>
             </Col>
            ))
          }
          
          
            

        </Row>
      </Container>
      
      
    </section>
    </>
  );
}
