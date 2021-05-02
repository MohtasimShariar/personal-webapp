import React from "react";
import { Card, Button } from "react-bootstrap";
import Navbar from "../../Shared/navbar/navbar";
import FooterPanel from "../../Shared/footer/footer";
import country from "../../../assets/img/carousal/country.png";
import country1 from "../../../assets/img/carousal/country1.png";
import Song from "../../../assets/img/carousal/Song.png";
import Song1 from "../../../assets/img/carousal/Song1.png";
import personal from "../../../assets/img/carousal/personal.png";
import personal1 from "../../../assets/img/carousal/personal1.png";
import solarstudio from "../../../assets/img/carousal/solarstudio.png";
import solarstudio1 from "../../../assets/img/carousal/solarstudio1.png";
import League from "../../../assets/img/carousal/League.png";
import League1 from "../../../assets/img/carousal/League1.png";
import ticket from "../../../assets/img/carousal/ticket.png";
import ticket1 from "../../../assets/img/carousal/ticket1.png";
import Books from "../../../assets/img/carousal/Books.png";
import Books1 from "../../../assets/img/carousal/Books1.png";



const Projects = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="py-2 text-center footer-style">All Projects </div>
      <hr />
      <br />
       
      <div className="row bg-light p-2 m-2">
        <div className="col-md-5">
          <Card>
            <Card.Img
              variant="top"
              src={Books}
              style={{ height: "300px", width: "auto" }}
            />
            <Card.Body>
              <Card.Text>
                <span>Home page </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-2">
          <div className="">
            <span>Name: Solar-Books </span>
            <br />
It's a full stack react app.For this app i use: "Mongodb,firebase,react,react-bootstrap,bootstrap,react-dom,react-hook-form,react-icons,react-router-dom. It's a Google login type app.
        
             <br />
          </div>
          <div className="">
            <a
              href="https://github.com/MohtasimShariar/Solar-Books-Client"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Button variant="primary">Git code</Button>
            </a>
            <a
              href="https://solar-books.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Button variant="primary">Live site</Button>
            </a>
          </div>
        </div>
        <div className="col-md-5">
          <Card>
            <Card.Img
              variant="top"
              src={Books1}
              style={{ height: "300px", width: "auto" }}
            />
            <Card.Body>
              <Card.Text>
                <span>Gmail Login page </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <br />

      <div className="row bg-light p-2 m-2">
        <div className="col-md-5">
          <Card>
            <Card.Img
              variant="top"
              src={ticket}
              style={{ height: "300px", width: "auto" }}
            />
            <Card.Body>
              <Card.Text>
                <span>Home page </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-2">
          <div className="">
            <span>Name: Solar-ticket </span>
            <br />
              It's a ticket buy site.This website using
            react-js,react-bootstrap,React-Route,Font-Awesome.
             <br />
          </div>
          <div className="">
            <a
              href="https://github.com/MohtasimShariar/Solar-ticket"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Button variant="primary">Git code</Button>
            </a>
            <a
              href="https://relaxed-heisenberg-6565bc.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Button variant="primary">Live site</Button>
            </a>
          </div>
        </div>
        <div className="col-md-5">
          <Card>
            <Card.Img
              variant="top"
              src={ticket1}
              style={{ height: "300px", width: "auto" }}
            />
            <Card.Body>
              <Card.Text>
                <span>Gmail Login page </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <br />

      <div className="row bg-light p-2 m-2">
        <div className="col-md-5">
          <Card>
            <Card.Img
              variant="top"
              src={League}
              style={{ height: "450px", width: "auto" }}
            />
            <Card.Body>
              <Card.Text>
                <span>Home page </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-2">
          <div className="">
            <span>Name: English Premier League </span>
            <br />
            A online English Premier League details site.
            <br />
            <span>Features: </span>
            It's a English Premier League project. In this project i use react route and some awesome feature. 1.Some teams in English Premier League. 2.when i click a team explor then the website show details on it.
            <br />
            <span> Frontend: </span> HTML5, CSS3, ES6, React, Bootstrap,
            React-Spring.
            <br />
            <span> Backend: </span> ReST API, netlify, Git.
            <br />
          </div>
          <div className="">
            <a
              href="https://github.com/MohtasimShariar/English-Premier-League"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Button variant="primary">Git code</Button>
            </a>
            <a
              href="https://zealous-minsky-4162bb.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Button variant="primary">Live site</Button>
            </a>
          </div>
        </div>
        <div className="col-md-5">
          <Card>
            <Card.Img
              variant="top"
              src={League1}
              style={{ height: "450px", width: "auto" }}
            />
            <Card.Body>
              <Card.Text>
                <span>League Player view page </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <br />

      <div className="row bg-light p-2 m-2">
        <div className="col-md-5">
          <Card>
            <Card.Img
              variant="top"
              src={solarstudio}
              style={{ height: "450px", width: "auto" }}
            />
            <Card.Body>
              <Card.Text>
                <span>Home page </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-2">
          <div className="">
            <span>Name: Solar Studio </span>
            <br />
            A online service providing site.
            <br />
            <span>Features: </span>
            I’ve created a simple full-stack project. It has two part One is
            Client part, and Second part Clients can give their feedback. They
            orders some service and payment in online platform.
            <br />
            <span> Frontend: </span> HTML5, CSS3, ES6, React, Bootstrap,
            React-Spring.
            <br />
            <span> Backend: </span> MongoDB, ReST API, NodeJS, Firebase, Git,
            Heroku.
            <br />
          </div>
          <div className="">
            <a
              href="https://github.com/MohtasimShariar/Solar-studio-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Button variant="primary">Git code</Button>
            </a>
            <a
              href="https://solar-studio-d83bc.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Button variant="primary">Live site</Button>
            </a>
          </div>
        </div>
        <div className="col-md-5">
          <Card>
            <Card.Img
              variant="top"
              src={solarstudio1}
              style={{ height: "450px", width: "auto" }}
            />
            <Card.Body>
              <Card.Text>
                <span>Project page </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <br />

      <div className="row bg-light p-2 m-2">
        <div className="col-md-5">
          <Card>
            <Card.Img
              variant="top"
              src={personal}
              style={{ height: "300px", width: "auto" }}
            />
            <Card.Body>
              <Card.Text>
                <span>Home page </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-2">
          <div className="">
            <span>Name: Personal Web-App </span>
            <br />
            This website using
            react-js,react-bootstrap,React-Route,Font-Awesome. <br />
          </div>
          <div className="">
            <a
              href="https://github.com/MohtasimShariar/personal-webapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Button variant="primary">Git code</Button>
            </a>
            <a
              href="https://mohtasimshariar.github.io/Solar-Song-App/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Button variant="primary">Live site</Button>
            </a>
          </div>
        </div>
        <div className="col-md-5">
          <Card>
            <Card.Img
              variant="top"
              src={personal1}
              style={{ height: "300px", width: "auto" }}
            />
            <Card.Body>
              <Card.Text>
                <span>Project page </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <br />

      <div className="row bg-light p-2 m-2">
        <div className="col-md-5">
          <Card>
            <Card.Img
              variant="top"
              src={Song}
              style={{ height: "300px", width: "auto" }}
            />
            <Card.Body>
              <Card.Text>
                <span>Main page</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-2">
          <div className="">
            <span>Name: Solar-Song-App </span>
            <br />
            This website using rest songs API using react-js react bootstrap{" "}
            <br />
          </div>
          <div className="">
            <a
              href="https://github.com/MohtasimShariar/Solar-Song-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Button variant="primary">Git code</Button>
            </a>
            <a
              href="https://mohtasimshariar.github.io/Solar-Song-App/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Button variant="primary">Live site</Button>
            </a>
          </div>
        </div>
        <div className="col-md-5">
          <Card>
            <Card.Img
              variant="top"
              src={Song1}
              style={{ height: "300px", width: "auto" }}
            />
            <Card.Body>
              <Card.Text>
                <span>When you search a song </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <br />

      <div className="row bg-light p-2 m-2">
        <div className="col-md-5">
          <Card>
            <Card.Img
              variant="top"
              src={country1}
              style={{ height: "300px", width: "auto" }}
            />
            <Card.Body>
              <Card.Text>
                <span>Main page</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-2">
          <div className="">
            <span>Name: All-country-details </span>
            <br />
            This website using rest countries API using react-js react bootstrap
            <br />
          </div>
          <div className="">
            <a
              href="https://github.com/MohtasimShariar/All-country-details"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Button variant="primary">Git code</Button>
            </a>
            <a
              href=" https://mohtasimshariar.github.io/All-country-details/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Button variant="primary">Live site</Button>
            </a>
          </div>
        </div>
        <div className="col-md-5">
          <Card>
            <Card.Img
              variant="top"
              src={country}
              style={{ height: "300px", width: "auto" }}
            />
            <Card.Body>
              <Card.Text>
                <span>When searching page</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <br />

      {/* <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 col-12">
                    <Card>
                    <Card.Img variant="top" src={Slide1} style={{height:'500px',width:'auto'}} />
                    <Card.Body>
                        <Card.Text>
                           simple e-commerce website
                        </Card.Text>
                    </Card.Body>
                </Card>
                    </div>
                   
                    <div className="col-md-6 col-12">
                    <Card>
                    <Card.Img variant="top" src={Slide3} style={{height:'500px',width:'auto'}} />
                    <Card.Body>
                        <Card.Text>
                           simple react website
                        </Card.Text>
                    </Card.Body>
                </Card>
                    </div>
                </div>

                <Card className='mt-3'>
                    <Card.Img variant="top" src={Slide2} style={{height:'500px',width:'auto'}} />
                    <Card.Body>
                        <Card.Text>
                          full stack service provider website
                        </Card.Text>
                    </Card.Body>
                </Card>
           
              
            </div> */}
      <FooterPanel></FooterPanel>
    </div>
  );
};

export default Projects;
