import React from "react";
import { Col, Row } from "react-bootstrap";
import cplusplus from '../../Assets/SVG/cplusplus-plain.svg';
import javascript from '../../Assets/SVG/javascript-plain.svg';
import typescript from '../../Assets/SVG/typescript-plain.svg';
import mysql from '../../Assets/SVG/mysql-plain-wordmark.svg';
import ract from '../../Assets/SVG/react-original.svg';
import express from '../../Assets/SVG/express-original.svg';
import nodejs from '../../Assets/SVG/nodejs-original-wordmark.svg';
import mongodb from '../../Assets/SVG/mongodb-plain.svg';
import mongoose from '../../Assets/SVG/mongoose-original.svg';
import redux from '../../Assets/SVG/redux-original.svg';
import npm from '../../Assets/SVG/npm-original-wordmark.svg';
import tailwindcss from '../../Assets/SVG/tailwindcss-original.svg';
import jest from '../../Assets/SVG/jest-plain.svg';
import github from '../../Assets/SVG/github-original.svg';


import { CgCPlusPlus } from "react-icons/cg";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px",  }} id="techonology">
        <h1 className="project-heading web-text-color web_white_color">
          Professional <strong className="web-text-color">Skillset </strong>
        </h1>
       <Col md={1}></Col>
      <Col xs={3} md={1} className="tech-icons">
        {/* <CgCPlusPlus /> */}
        <img src={cplusplus}/>
      </Col>
      <Col xs={3} md={1} className="tech-icons">
      <img src={javascript}/>
      </Col>
      <Col xs={3} md={1} className="tech-icons">
      <img src={typescript}/>
      </Col>
      <Col xs={3} md={1} className="tech-icons">
      <img src={nodejs}/>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
      <img src={express}/>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
      <img src={ract}/>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
      <img src={mysql}/>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
      <img src={redux}/>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
      <img src={tailwindcss}/>
      </Col>
      <Col md={1}></Col>
      <Col xs={4} md={1} className="tech-icons">
      <img src={mongodb}/>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
      <img src={mongoose}/>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
      <img src={npm}/>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
      <img src={jest}/>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
      <img src={github}/>
      </Col>
    </Row>
  );
}

export default Techstack;
