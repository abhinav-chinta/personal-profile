import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particles from 'react-particles-js';
import Params from '../particlesjs-config.json'
import Type from "./Type";
import Particle from '../Particle'

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle params ={Params}/>
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Abhinav Chinta</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;