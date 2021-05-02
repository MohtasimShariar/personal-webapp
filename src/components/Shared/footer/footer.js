import React from "react";
import "./footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import Logo from "../../../assets/icons/logow.webp";
import Jumbotron from "react-bootstrap/Jumbotron";
// import Button from "react-bootstrap/Button";
import { Button, Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const FooterPanel = () => {
  return (
    <div>
      <h1 className="pt-3 text-center font-details-b pb-3">Connect Me </h1>
      <div id="contact">
        
        <Jumbotron className="contact-jumbotron">
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              <div className="m-2">
                <a
                  href="mailto:onim04@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-danger" title="onim04@gmail.com">
                    <i className="fas fa-envelope-square"></i> Email Me
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a
                  href="https://www.linkedin.com/in/md-mohtasim-shariar-026478209/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-primary" title="Visit my LinkenIn">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </Button>
                </a>
              </div>

              <div className="m-2">
                <a
                  href="https://github.com/MohtasimShariar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-dark" title="My other projects">
                    <i className="fab fa-github-square"></i> GitHub
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a
                  href="https://join.skype.com/invite/n8jcFKlUCiIz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    id="skype-btn"
                    variant="outline-info"
                    title="Lets code together!"
                  >
                    <i class="fab fa-skype"></i> Skype
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-info" title="Tweets are welcomed!">
                    <i className="fab fa-twitter"></i> Twitter
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a
                  href="https://www.facebook.com/profile.php?id=100005119937858"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-primary" title="Say hello on FB">
                    <i className="fab fa-facebook-square"></i> FaceBook
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Jumbotron>
      </div>
      <div>
        <div className=" footer-style ">
          © Mohtasim Shariar &nbsp; {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default FooterPanel;
