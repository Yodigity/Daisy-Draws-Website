import React from "react";
import { Image, Container, Col } from "react-bootstrap";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import images from "../Components/images";
import PageLayout from "../Components/PageLayout";

export const Home = () => {
  return (
    <PageLayout>
      <Container className='mt-2'>
        <SimpleReactLightbox>
          <Col>
            <SRLWrapper>
              {images.map((image, index) => {
                return (
                  <a key={image.id} href={image.src} data-attribute='SRL'>
                    <Image
                      data-aos='fade-in'
                      data-aos-duration='4000'
                      data-aos-delay={(50 * image.id).toString()}
                      className='galleryImage'
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
        </SimpleReactLightbox>
      </Container>
    </PageLayout>
  );
};
