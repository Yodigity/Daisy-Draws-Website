import React from "react";
import { Form, Row, Col, Container } from "react-bootstrap";

export const Contact = () => {
  return (
    //Sort out Cols and Rows
    <Container className='m-5'>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId='exampleForm.ControlInput1'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='name@example.com' />
            </Form.Group>

            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as='textarea' rows='3' />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
