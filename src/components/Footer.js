import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/aniket20505/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/aniketraj1615" target="_blank"><img src={navIcon4} alt="Icon" /></a>
              <a href="https://leetcode.com/aniketraj1615/" target="_blank"><img src={navIcon5} alt="Icon" /></a>
              <a href="https://www.instagram.com/an.iket1816/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>@Aniket</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
