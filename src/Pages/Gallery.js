import React from "react";

import images from "../Components/images";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { Col, Container, Image } from "react-bootstrap";
import PageLayout from "../Components/PageLayout";

export const Gallery = () => {
  return (
    <PageLayout>
      <SimpleReactLightbox>
        <Container className='mt-2 image-col'>
          <Col>
            <SRLWrapper>
              {images.map((image) => {
                return (
                  <a key={image.id} href={image.src} data-attribute='SRL'>
                    <Image
                      data-aos='fade-in'
                      data-aos-duration='4000'
                      data-aos-delay={(50 * image.id).toString()}
                      src={image.src}
                      alt={image.description}
                      width='300'
                      height='300'
                    />
                  </a>
                );
              })}
            </SRLWrapper>
          </Col>
        </Container>
      </SimpleReactLightbox>
    </PageLayout>
  );
};

// {images.map((item) => {
//   return (
//     <Col xs={12} sm={6} md={4}>
//       <Image
//         className='GalleryImage'
//         key={item.id}
//         src={item.location}
//         alt='pic'
//       />
//     </Col>
//   );
// })}
