import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className='navbar-default'>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand variant='dark'>Mingdan Art</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Nav className='ml-auto'>
          <Nav.Link href='facebook.com'>
            <FontAwesomeIcon icon={faFacebookSquare} size='lg' />
          </Nav.Link>

          <Nav.Link>
            <FontAwesomeIcon icon={faInstagramSquare} size='lg' />
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
