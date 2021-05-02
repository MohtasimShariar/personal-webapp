import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
import Profile from "../../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import FooterPanel from "../../Shared/footer/footer";
import Navbar from "../../Shared/navbar/navbar";

const About = () => {
  return (
    <div id="about">
      <Navbar></Navbar>
      <br />
      <br />
      <br />
      <br />
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>

            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                <strong>&nbsp;Md.Mohtasim Shariar</strong>
                <br />
                To obtain a challenging position that allows me to utilize my
                current skills to assist in advancing a business that offers a
                stable employment opportunity. I am also eager to learn new
                skills and technological advancements.
                <br />
                <strong>Educational Qualification</strong>

                <strong>Bachelor of Science (BSC)</strong>
                 Institute: Bangladesh Army University
                of Engineering and Technology (BAUET) Department: Computer
                Science and Engineering (CSE) Result: GPA- 3.00(up to 7th
                semester) Passing Year: 2021
                <strong>Higher Secondary Certificate (HSC)</strong>
                 Institute: Ishwardi
                Government Collage Result: GPA- 4.50 Group: Science Passing
                Year: 2016
                <strong>Secondary School Certificate (SSC)</strong>
                 Institute: Sara Marwari Model
                School and College Result: GPA- 5.00 Group: Science Passing
                Year: 2014
                <strong>Declaration</strong>
                I the undersigned, declare that to the best of my
                knowledge and belief, this resume correctly describes
                qualifications, my experience and myself. I agree and accept
                that I will be liable immediate termination of service if I am
                found to have false information.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1EBh1B7ZJGL86u-FzyhGUxVTEvQ3Bu-2i/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/uc?export=download&id=1EBh1B7ZJGL86u-FzyhGUxVTEvQ3Bu-2i"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        Download Resume Here
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/MohtasimShariar?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/md-mohtasim-shariar-026478209/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterPanel></FooterPanel>
    </div>
  );
};

export default About;
