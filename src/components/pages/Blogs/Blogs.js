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
        
      <div className="py-2 text-center footer-style">Here was my blogs link.
      <br></br>Click here and read</div>

        <br/>
        <Row>
            <Col className="d-flex justify-content-center flex-wrap uppercase  capitalize">
              
              <div className="m-2">
                <a
                  href="https://shariar.medium.com/ten-basic-topics-on-javascript-for-the-beginners-32ce5d52e412"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-dark" title="My other projects">
                    <i className="fas fa-envelope-square"></i> Blog 1  <br></br><strong className="  text-capitalize">#Ten basic topics on javascript for the beginners</strong>
                  </Button>
                </a>
              </div>

              <div className="m-2">
                <a
                  href="https://shariar.medium.com/ten-common-tricks-of-javascript-beginners-d80ddbe1684a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    id="skype-btn"
                    variant="outline-info"
                    title="Lets code together!"
                  >
                    <i class="fas fa-envelope-square"></i> Blog 2  <br></br><strong className="   text-capitalize">#Ten common tricks of javascript beginners</strong>
                  </Button>
                </a>
              </div>

              <div className="m-2">
                <a href="https://shariar.medium.com/ten-basic-documents-and-code-on-javascript-for-beginners-a469eae003f3" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-info" title="Tweets are welcomed!">
                    <i className="fas fa-envelope-square"></i> Blog 3  <br></br><strong className="  text-capitalize">#Code on javascript for beginners</strong>
                  </Button>
                </a>
              </div>

              <div className="m-2">
                <a
                  href="https://shariar.medium.com/ten-basic-topics-on-react-for-the-beginners-f564f128508b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-primary" title="Say hello on FB">
                    <i className="fas fa-envelope-square"></i> Blog 4  <br></br><strong className="  text-capitalize">#ten basic topics on react for the beginners</strong>
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
