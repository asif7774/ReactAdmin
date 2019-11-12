import React from "react";
import { Container, Row, Col} from "shards-react";

import UserDetails from "../components/users/UserDetail";

const UserProfile = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-2">
      <Col xs="12" sm="4" className="text-sm-left mb-3" >
        <span className="text-uppercase page-subtitle">Overview</span>
        <h3 className="page-title">User Profile</h3>
      </Col>
    </Row>
    <UserDetails />
  </Container>
);

export default UserProfile;
