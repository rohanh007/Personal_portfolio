import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify"}} className="web-text-color web_white_color">
            Hi Everyone, I am <span className="web-text-color">Rohan Hoval </span>
            from <span className="web-text-color"> Pune, India.</span>
            <br />
            I am currently employed as a software developer at Symbiosis.
            <br />
            I have completed BTech in Information Technology  at D.Y.Patil College of Engineering 
            Akurdi.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity" style={{"color":"black"}}>
              <ImPointRight color="black"/> Playing Games
            </li>
            <li className="about-activity" style={{"color":"black"}}>
              <ImPointRight color="black"/> Writing Tech Blogs
            </li>
            <li className="about-activity" style={{"color":"black"}}>
              <ImPointRight color="black"/> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(0,128,128)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rohan Hoval</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
