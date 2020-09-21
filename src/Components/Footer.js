import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

export default () => {
  return (
    <div className='navbar-default'>
      <Navbar bg='light' variant='light'>
        <Navbar.Brand variant='light'>Mingdan Art</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Nav className='ml-auto'>
          <Nav.Link href='facebook.com'>
            <FontAwesomeIcon icon={faFacebookSquare} size='lg' />
          </Nav.Link>

          <Nav.Link href='instagram.com'>
            <FontAwesomeIcon icon={faInstagramSquare} size='lg' />
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
