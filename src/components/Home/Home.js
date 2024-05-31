import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import About from "../../../src/components/About/About"
import Footer from "../Footer";
import Particle from "../Particle";
import personalimg from '../../Assets/ROHAN HOval 1.gif';
import Projects from "../Projects/Projects";
import Home2 from "./Home2";
import Type from "./Type";
import Socialicons from "../Socialicons";
import Profile from "./Profile";
import Contactme from "../Contact/Contactme";
import Mynavabar from "../Mynavabar";

function Home() {
  return (
    <section id="home">
      <div >
      
      <img
        src={personalimg}
        style={{ height:'100vh',
        boxShadow: 'inset 0 10px 10px -10px rgba(0, 0, 0, 0.5)'}}
        className="landing_page"
        />
        </div>
      {/* <Socialicons/> */}
      {/* <Container fluid className="home-section" id="home"> */}
        

      
        {/* <Particle /> */}
        {/* <Container className="home-content"> */}
          {/* <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading web-text-color">
                Hello It's me{" "}
                <span className="wave" role="img" aria-labelledby ="wave">
                  
                </span>
              </h1>

              <h1 className="heading-name web-text-color">
                I'M
                <strong className="orangered"> ROHAN HOVAL</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }} >
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid "
                style={{ maxHeight: "400px" }} 
              />
              {/* <Profile/> */}
            {/* </Col>
          </Row> } */}
        {/* </Container> */}
      {/* </Container> */}
    
    </section>
  );
}

export default Home;
