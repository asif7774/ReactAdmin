import React from "react";
import { Container, Row, Col } from "shards-react";


const AuthLayout = ({ children }) => (
  <Container fluid className="mvh-100">
    <Row className="mvh-100 ">
      <Col
        className="main-content p-0 mvh-100"
        sm="12"
        tag="main"
      >
        {children}
      </Col>
    </Row>
  </Container>
);



export default AuthLayout;
