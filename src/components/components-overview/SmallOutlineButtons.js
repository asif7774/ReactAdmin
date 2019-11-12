import React from "react";
import { Row, Col, Button } from "shards-react";

const SmallOutlineButtons = () => (
  <Row>
    <Col>
      <Button outline pill size="sm" theme="primary" className="mb-2 mr-1">
        Primary
      </Button>
      <Button outline pill size="sm" theme="secondary" className="mb-2 mr-1">
        Secondary
      </Button>
      <Button outline pill size="sm" theme="success" className="mb-2 mr-1">
        Success
      </Button>
      <Button outline pill size="sm" theme="danger" className="mb-2 mr-1">
        Danger
      </Button>
      <Button outline pill size="sm" theme="warning" className="mb-2 mr-1">
        Warning
      </Button>
      <Button outline pill size="sm" theme="info" className="mb-2 mr-1">
        Info
      </Button>
      <Button outline pill size="sm" theme="dark" className="mb-2 mr-1">
        Dark
      </Button>
      <Button outline pill size="sm" theme="light" className="mb-2 mr-1">
        Light
      </Button>
    </Col>
  </Row>
);

export default SmallOutlineButtons;
