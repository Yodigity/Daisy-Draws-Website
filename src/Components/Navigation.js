import React from "react";
import { Navbar, Nav, NavLink } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import "../App.css";

export default () => {
  return (
    <div className='navbar-default'>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='light'
        variant='light'
        fluid='true'
      >
        <Navbar.Brand className='brand-logo' href='/'>
          Daisy Draws
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto '>
            <LinkContainer to='/' className='mr-3'>
              <NavLink>Home</NavLink>
            </LinkContainer>
            <LinkContainer to='/about' className='mr-3 '>
              <NavLink>About</NavLink>
            </LinkContainer>
            <LinkContainer to='/gallery' className='mr-3'>
              <NavLink href='#'>Gallery</NavLink>
            </LinkContainer>
            <LinkContainer to='/resume' className='mr-3 '>
              <NavLink>Resume</NavLink>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
