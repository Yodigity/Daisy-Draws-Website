import React from "react";
import { Row, Card, Button, CardColumns } from "react-bootstrap";

export const Profiles = () => {
  return (
    <>
      <h1>Meet The Team</h1>
      <Row lg={12}>
        <CardColumns>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant='top' src='../Images/Aaron.jpg' />
            <Card.Body>
              <Card.Title>Ethan</Card.Title>
              <Card.Text>Lead Designer</Card.Text>
              <Button href='/about' variant='primary'>
                Read More
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant='top' src='../Images/yui.jpg' />
            <Card.Body>
              <Card.Title>Yui</Card.Title>
              <Card.Text>CEO</Card.Text>
              <Button variant='primary'>Read More</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant='top' src='../Images/themi.jpg' />
            <Card.Body>
              <Card.Title>Themi</Card.Title>
              <Card.Text>Creative Director</Card.Text>
              <Button variant='primary'>Read More</Button>
            </Card.Body>
          </Card>
        </CardColumns>
      </Row>
    </>
  );
};
