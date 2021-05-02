import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Skill = () => {
    return (
        <div className='mt-5 p-5'>
            <h3>Skills</h3> <hr/> <br/>
            
            <div className='container'>
                html <ProgressBar variant="success" now={40} />
               css <ProgressBar variant="info" now={20} />
               reactjs <ProgressBar variant="warning" now={60} />
               bootstrap <ProgressBar variant="danger" now={80} />

               redux <ProgressBar variant="success" now={40} />
              mongodb  <ProgressBar variant="info" now={20} />
              github  <ProgressBar variant="warning" now={60} />
               heroku <ProgressBar variant="danger" now={80} />

            </div>
        </div>
    );
};

export default Skill;