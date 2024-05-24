import React from "react";
import window from '../../Assets/SVG/windows11-original.svg';
import vscode from '../../Assets/SVG/vscode-original.svg';
import postman from '../../Assets/SVG/postman-plain.svg';
import linux from '../../Assets/SVG/linux-plain.svg';
import vercel from '../../Assets/SVG/vercel-original.svg'

import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <img src={window}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={vscode}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={vercel}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={postman}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={linux}/>
      </Col>
    </Row>
  );
}

export default Toolstack;
