import React from 'react';
import { Card ,Button } from 'react-bootstrap';
import Navbar from "../../Shared/navbar/navbar";
import Slide1 from "../../../assets/img/carousal/slide1.webp";
import Slide2 from "../../../assets/img/carousal/slide2.webp";
import Slide3 from "../../../assets/img/carousal/slide3.webp";

const Projects = () => {
    return (
        <div>
            <Navbar></Navbar>   <br />
            <br />
            <br />
            <div className="row bg-success p-5 m-5">
                    <div className="col-md-4">
                        <Card>
                            <Card.Img variant="top" src={Slide1} style={{ height: '300px', width: 'auto' }} />
                            <Card.Body>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                     <div className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, nostrum.
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, nostrum.
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, nostrum.
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, nostrum.
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, nostrum.</div>
                     <div className="">
                     <Button variant="primary">Primary</Button>  
                     <Button variant="primary">Primary</Button>
                     </div>
                   
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <Card.Img variant="top" src={Slide1} style={{ height: '300px', width: 'auto' }} />
                            <Card.Body>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            <br />
            <div className="container mt-5">
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
           
              
            </div>
        </div>
    );
};

export default Projects;