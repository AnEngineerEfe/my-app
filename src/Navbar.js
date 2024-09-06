import React from 'react';
import { Navbar as BootstrapNavbar, Nav ,Col,Row} from 'react-bootstrap';
import logo from '../Assets/food-recipe-logo.png';
import './Navbar.css';

const Navbar = ({ setView }) => {
  return (
    <Row>
        <Col lg={6} md={6} sm={12}>
    <BootstrapNavbar bg="light" expand="sm">
    <Col sm={1} md={2}>
      <BootstrapNavbar.Brand href="#home">
        <img
          src={logo}
          width="80"
          height="60"
          className="d-inline-block align-top imagine"
          alt="Logo"
        />
      </BootstrapNavbar.Brand>
      </Col>

      <Col sm={9} md={10}>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto navfour">
          <Nav.Link onClick={() => setView('#homer')}>Ana Sayfa</Nav.Link>
          <Nav.Link onClick={() => setView('#products')}>Ürünler</Nav.Link>
          <Nav.Link onClick={() => setView('#about')}>Hakkımızda</Nav.Link>
          <Nav.Link onClick={() => setView('#communicate')}>İletişim</Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
      </Col>
    </BootstrapNavbar>
    </Col>
    </Row>
  );
};

export default Navbar;
