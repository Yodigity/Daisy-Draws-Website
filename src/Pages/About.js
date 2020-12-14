import React from "react";
import PageLayout from "../Components/PageLayout";

import { Container, Image, Row, Col, Nav, Button } from "react-bootstrap";

export const About = () => {
  return (
    <PageLayout>
      <Container className='mt-3'>
        <Row>
          <Col className='my-auto col-md-6  col-sm-12'>
            <article className='w-100 m-auto pt-2 text-justify'>
              <p className='i-5 mt-4 pt-2'>
                Hello there! My name is <b>Daisy</b>, an
                <b> Illustrator</b> discovering the ways of the code. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <p className='i-5'>
                In my spare time, Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
              <p className='i-5'>
                Check out my <Nav.Link href='./Gallery'>projects</Nav.Link> to
                see what I've been up to!
              </p>
            </article>
          </Col>
          <Col className='col-md-6 col-sm-12'>
            <Image
              rounded
              width='400'
              height='500'
              src={"../Images/About/Daisy.jpeg"}
              alt='Daisy'
            />
          </Col>
        </Row>
      </Container>

      <article className='new-opportunities p-2  mt-2'>
        <>
          <Container>
            <div className='d-flex flex-column'>
              <Row>
                <h4 className='text-white'>
                  I am <b>currently looking for new opportunities</b>
                </h4>
              </Row>
              <Row>
                <Button
                  className='mt-2'
                  variant='outline-primary'
                  href='mailto:red.five@rebellion.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Get in touch
                </Button>
              </Row>
            </div>
          </Container>
        </>
      </article>

      <Container>
        <Row>
          <Col>
            <article>
              <h5 className='watch-list-title pt-4'>
                Here are a couple of books from my reading list:
              </h5>
              <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>
                <li>Lord of the Rings</li>
                <li>Indiana Jones</li>
                <li>Back To The Future</li>
              </ul>
            </article>
          </Col>
          <Col>
            <article>
              <h5 className='watch-list-title pt-4'>
                Here are a couple of shows from my watch list:
              </h5>
              <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>
                <li>Lord of the Rings</li>
                <li>Indiana Jones</li>
                <li>Back To The Future</li>
              </ul>
            </article>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
};
