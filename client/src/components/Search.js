import React from "react";
import { Form, Col, Row } from "react-bootstrap";
function Search() {
  return (
    <Form>
      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="search" placeholder="Search for a book" />
        </Col>
      </Form.Group>
    </Form>
  );
}

export default Search;
