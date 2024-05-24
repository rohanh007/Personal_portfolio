import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/SVG/rohan_img.svg";
import About from "../../../src/components/About/About"
import Footer from "../Footer";
import Particle from "../Particle";
import Projects from "../Projects/Projects";
import Home2 from "./Home2";
import Type from "./Type";
import Socialicons from "../Socialicons";
import Profile from "./Profile";

function Home() {
  return (
    <section>
      <Socialicons/>
      <Container fluid className="home-section" id="home">
      
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
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
            </Col>
          </Row>
        </Container>
      </Container>
    
      <Home2 />
      <About/>
      <Projects/>
    </section>
  );
}

export default Home;
