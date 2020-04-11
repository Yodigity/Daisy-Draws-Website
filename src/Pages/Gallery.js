import React from "react";

import images from "../Components/images";
import { Row, Col, Container, Image } from "react-bootstrap";

export const Gallery = () => {
  return (
    <div>
      <Container>
        <Row>
          {images.map(item => {
            return (
              <Col xs={12} sm={6} md={4}>
                <Image
                  className='GalleryImage'
                  key={item.id}
                  src={item.location}
                  alt='pic'
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
