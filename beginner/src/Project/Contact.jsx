import {useState} from 'react';
function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>

      <form>
        <h3> Name: </h3>
        <input type="text" placeholder="Your Name" required /> 
        <h3> Email: </h3>
        <input type="email" placeholder="Your Email" required />
        <h3> Subject: </h3>
        <input type="text" placeholder="Subject" /> 
        <h3> Message: </h3>
        <textarea placeholder="Your Message" rows="5" required></textarea>  <br></br>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
