import React from "react";
import Typewriter from "typewriter-effect";
import "./title-massage.css";
import Profile from "../../../assets/img/profile/profile.webp";
import ScrollDown from "../scroll-down/scroll-down";
import Button from "react-bootstrap/Button";

const TitleMessage = () => (
  <>
  <section className="container-fluid header-content">
    <div className="row">
      <div className="styled">
        <div className="titleMessage">
          <div className="heading">
            <div className="main text-center mb-3">
              Hi, I am
              <br />
              <span>
                <strong>Md.Mohtasim shariar</strong>
              </span>
            </div>
            <div className="sub">
              <Typewriter
                options={{
                  strings: ["Web Developer", "Coder", "Web Designer"],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
              <br />
            </div>
          </div>
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/1EBh1B7ZJGL86u-FzyhGUxVTEvQ3Bu-2i/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="m-2" variant="outline-primary">
               Resume
            </Button>
          </a>
        </div>
      </div>

      <div className="col-md-6">
        <img className="img-fluid main-profile " src={Profile} alt="" />
      </div>
    </div>
  </section>
  <ScrollDown />
  </>
);

export default TitleMessage;
