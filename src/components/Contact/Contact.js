import React from 'react';
import './Contact.css';
import { Container } from 'react-bootstrap'; 

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container fluid className="contact mt-5">
        For all inquiries, please contact me through email or messaging
        <br/>
        <br/>
        Email: wavern8769@gmail.com
        <br/>
        Instagram: <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/the_iced_latte/">@the_iced_latte</a>
      </Container>
    )
  }
}

export default Contact;
