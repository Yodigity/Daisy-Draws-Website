import React, {useState, useEffect} from "react";
import { Container, Fade } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

export default ({ children }) => {
 const [open, setOpen] = useState(false);

useEffect(() => {
  setTimeout(() => setOpen(true), 100)
  
}, [])
return(
  <Container fluid className='px-0 theme-light app-container'>
    
    <Header />
    <Fade in={open} timeout={700}> 
    <Container fluid className=' px-0 text-center min-vh-100'>
    
      {children}
       
    </Container>
    </Fade> 
    <Footer />
   
  </Container>
)
};
