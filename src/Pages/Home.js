import React, {useState, useEffect} from "react";
import { Image, Container, Col, Fade } from "react-bootstrap";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import images from "../Components/images";
import PageLayout from "../Components/PageLayout";

export const Home = () => {
  const [open, setOpen] = useState(false);

useEffect(() => {
  setTimeout(() => setOpen(true), 400)
  
}, [])

  return (
    <PageLayout>
      <Container className='mt-2'>
        
        <SimpleReactLightbox>
          <Col>
            <SRLWrapper>
      
              {images.map((image, index) => {
                return(
                  
                  <Fade in={open}  timeout={700}>
                  <a key={image.id} href={image.src} data-attribute='SRL'>
                    <Image
                      src={image.src}
                      alt={image.description}
                      width='200'
                      height='200'
                    />
                  </a>
                  </Fade>
               
                )
              })}
              
           
            </SRLWrapper>
          </Col>
        </SimpleReactLightbox>
       
      </Container>
    </PageLayout>
  );
};
