import React from "react";
import { Navbar, Nav, NavLink } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import "../App.css";

export const Navigation = () => {
  return (
    <div className='navbar-default'>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'
        fluid='true'
      >
        <Navbar.Brand href='#home'>Mingdan Art</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto '>
            <LinkContainer to='/' className='mr-3 text-white'>
              <NavLink>Home</NavLink>
            </LinkContainer>
            <LinkContainer to='/about' className='mr-3 text-white'>
              <NavLink>About</NavLink>
            </LinkContainer>
            <LinkContainer to='/gallery' className='mr-3 text-white'>
              <NavLink href='#'>Gallery</NavLink>
            </LinkContainer>
            <LinkContainer to='/contact' className='mr-3 text-white'>
              <NavLink>Contact</NavLink>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
