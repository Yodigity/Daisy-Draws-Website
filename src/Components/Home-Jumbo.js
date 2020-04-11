import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";

export const HomeJumbo = () => {
  return (
    <Jumbotron className='bg-dark text-white'>
      <Container>
        <h1>Leading Designs</h1>
        <p>
          Bringing you the most uptodate technologies and platforms for all your
          design needs.
        </p>
        <p>
          <Button variant='primary' href='/gallery'>
            View Gallery
          </Button>
        </p>
      </Container>
    </Jumbotron>
  );
};
