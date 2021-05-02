import React from 'react';
import emailjs from 'emailjs-com';
import "./contact-form.css";
import Navbar from '../../Shared/navbar/navbar';
import FooterPanel from '../../Shared/footer/footer';


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_cfak6ql', 'shariar', e.target, 'user_y9geiMU0McPmPfcIBU77k')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return(
        <div>
          <Navbar></Navbar>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        <div className="container">
          <h2 className="text-center">Mail Box   </h2>
        <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Your Name" name="name"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Use Your Gmail Account" name="email"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Mail Subject" name="subject"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Write me a massage" name="message"></textarea>
                    </div>
                    <div className="col-8 pt-3 mx-auto text-center ">
                        <input type="submit" className="btn btn-info" value="Send Message"></input>
                    </div>
                </div>
            </form>
        </div>
        <FooterPanel></FooterPanel>
    </div>
 
    
)
}


// export default ContactForm;

