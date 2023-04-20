import { Github } from "react-bootstrap-icons";

import React from "react"
import { Container, Row, Col} from "react-bootstrap";

export default function Footer () {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
          <p><small>&copy; </small>
          <br />
          <a href="" target="_blank" rel="referrer">Code in Github</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}