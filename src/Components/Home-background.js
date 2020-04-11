import React from "react";
import { Image } from "react-bootstrap";

export const HomeBackground = () => {
  return (
    <div className='landing-banner'>
      <Image
        src='../Images/Landing_banner.jpg'
        fluid
        className='landing-picture'
      />
      <h1 className='background-badge' variant='dark'>
        Fantasy Vs Reality
      </h1>
    </div>
  );
};
