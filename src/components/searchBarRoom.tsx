
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { PersonConfig } from "../Classes/Interfaces";

export default function SearchBarRoom( {data}:{data:PersonConfig[]} ) {
  console.log(data)
  return (
    <Container className="mt-5">
      <Row>
        <Col sm={4}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button>
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}