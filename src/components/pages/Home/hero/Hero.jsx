import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './hero.css';
export default function Hero() {
  return (
    <>
      <section class="hero__section">
        <Container>
          <Row>
            <Col md="6" sm="12">
              <div class="hero-content">
                <p>Treanding Products in 2023</p>
                <h2>Make your Interio more minimalistic & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor aliquid commodi amet fugiat unde. Repellendus nulla
                  vitae vero?
                </p>
                <button class="shop__btn"><Link to="/shop">Shop Now</Link></button>
              </div>
            </Col>
            <Col md="6" sm="12">
              <img
                src="https://img.freepik.com/free-psd/elegant-gray-sofa-one-seater_176382-99.jpg?size=626&ext=jpg&ga=GA1.2.1967952114.1675762609&semt=sph"
                alt="fgt"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
