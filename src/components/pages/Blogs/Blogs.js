import React from "react";
import FooterPanel from "../../Shared/footer/footer";
import Navbar from "../../Shared/navbar/navbar";
import { Button, Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const Blogs = () => {
  return (
    <div>
        <Navbar></Navbar>
        <br/>
        <br/>
        <br/>
        <br/>
        
      <div className="py-2 text-center footer-style">Here was my blogs link.Click here and read</div>

        <br/>
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
                  href="https://shariar.medium.com/ten-basic-topics-on-javascript-for-the-beginners-32ce5d52e412"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-primary" title="Say hello on FB">
                    <i className="fas fa-envelope-square"></i> Blog 4
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <FooterPanel></FooterPanel>
    </div>
  );
};

export default Blogs;
