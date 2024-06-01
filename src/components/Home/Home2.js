import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import profile from "../../Assets/about_profile_png.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Socialiconfixed from "../Socialiconfixed";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <div className="home_about_row">
          <div className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="web-text-color"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="web-text-color"> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="web-text-color">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="web-text-color">
                  Data Science.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="web-text-color">Node.js</b> and
              <i>
                <b className="web-text-color">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="web-text-color"> React.js , Next.js and NoSQL Database like MongoDB</b>
              </i>
            </p>
          </div>
          <div  className="myAvtar">
            <div className="profile_card">
              <img className="cardimg" src={profile} alt=""/>
            </div>
          </div>
        </div>
        <Row>
          
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
             <Socialiconfixed/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
