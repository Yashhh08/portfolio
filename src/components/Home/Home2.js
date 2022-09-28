import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HashLink as Link } from 'react-router-hash-link';
import Tilt from "react-parallax-tilt";
import Yash from '../../Assets/Yash.jpeg';
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description" data-aos='fade-right'>
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Aspiring Full Stack Web Developer, Strongly interested in obtaining a Software Developer
            position.

              <br />
              <br />Collaborative team player proficiently working with a multidisciplinary team to convert business needs
              into technical specifications.
              {/* <i>
                <b className="purple"> Javascript. </b>
              </i> */}
              <br />
              <br />
              Capable of detailed programming and development tasks for front-end public and internal websites as well as challenging back-end server code.

              {/* My field of Interest's are building &nbsp;
              <i>
                <b className="purple"></b>
                <b className="purple">
                  Websites.
                </b>
              </i> */}
              <br />
              <br />
              {/* Whenever possible, I also apply my passion for Learning new technologies
              <i>
                <b className="purple">
                  &nbsp;
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple">&nbsp; three.js and Next.js. </b>
              </i> */}
            </p>
          </Col>
          <Col md={3} className="myAvtar" data-aos='fade-left'>
            <Tilt>
              <img src={Yash} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social" data-aos='zoom-in'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links" data-aos='zoom-in-out'>
              <li className="social-icons">
                <a
                  href="https://github.com/Yashhh08"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.google.co.in/maps/place/Dahisar+East,+Mumbai,+Maharashtra/@19.2512246,72.8600327,15z/data=!3m1!4b1!4m5!3m4!1s0x3be7b0eef33fcc13:0xdf8f3b35a262c586!8m2!3d19.2574665!4d72.8650191?hl=en&authuser=0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <GiWorld />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yash-yerunkar-887b9622b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <Link
                  smooth to="#contact"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
