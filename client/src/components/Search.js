import React from "react";
import { Form, Button } from "react-bootstrap";


const Search = (props) => {
  return (
    <Form>
      <Form.Group controlId="formBasicPassword">
        <div className="form-group" style={{ textAlign: "center" }}>
          <input
            style={{ textAlign: "left" }}
            onChange={props.handleInputChange}
            value={props.value}
            name="title"
            type="text"
            className="form-control"
            placeholder="Search here"
            id="title"
          />
          <br />
          <Button onClick={props.handleFormSubmit} className="btn btn-primary">
            Search
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
};

export default Search;
