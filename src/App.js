import './App.css';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Home from '../src/components/Home/Home';
import Sketches from '../src/components/Sketches/Sketches';
import Illustration from '../src/components/Illustration/Illustration';
import Contact from '../src/components/Contact/Contact';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container fluid>
        <Router>
          <Row>
            <Col xs={2} sm={2} lg={2}>
              <Nav defaultActiveKey="/" className="flex-column nav-bar">
                <Nav.Link className="nav-link" href="/">
                  <Link to="/">HOME</Link>
                </Nav.Link>
                <Nav.Link className="nav-link" eventKey="/Illustrations">
                  <Link to="/Illustrations">ILLUSTRATIONS</Link>
                </Nav.Link>
                <Nav.Link className="nav-link" eventKey="/Sketches">
                  <Link to="/Sketches">SKETCHES</Link>
                </Nav.Link>
                <Nav.Link className="nav-link" eventKey="/Contact">
                  <Link to="/Contact">CONTACT</Link>
                </Nav.Link>
              </Nav>
            </Col>
            <Col xs={10} sm={10} lg={10}>
              <Routes>
                <Route exact path="/" element={<Home/>}>
                </Route>
                <Route path="/Sketches" element={<Sketches/>}>
                </Route>
                <Route path="/Illustrations" element={<Illustration/>}>
                </Route>
                <Route path="/Contact" element={<Contact/>}></Route>
              </Routes>
            </Col>
          </Row>
        </Router>
      </Container>
    );
  }
}

export default App;
