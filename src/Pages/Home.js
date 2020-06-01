import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import images from "../Components/images";
import { HomeBackground } from "../Components/Home-background";
import { HomeJumbo } from "../Components/Home-Jumbo";
import { Profiles } from "../Components/Profiles";

export const Home = () => {
  return (
    <div>
      <HomeBackground />
      <Profiles />
      <HomeJumbo />

      <Container>
        <Row className='text-center'>
          <Col></Col>
          <Col className='gallery-preview-header'>
            <h1>Gallery</h1>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <Image src={images[0].location} className='GalleryImage' />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Image src={images[1].location} className='GalleryImage' />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Image src={images[2].location} className='GalleryImage' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
