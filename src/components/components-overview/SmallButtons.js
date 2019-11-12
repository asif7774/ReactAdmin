import React from "react";
import { Row, Col, Button } from "shards-react";

const SmallButtons = () => (
  <Row className="mb-3 mt-2">
    <Col>
      <Button pill size="sm" theme="primary" className="mb-2 mr-1">
        Primary
      </Button>
      <Button pill size="sm" theme="secondary" className="mb-2 mr-1">
        Secondary
      </Button>
      <Button pill size="sm" theme="success" className="mb-2 mr-1">
        Success
      </Button>
      <Button pill size="sm" theme="danger" className="mb-2 mr-1">
        Danger
      </Button>
      <Button pill size="sm" theme="warning" className="mb-2 mr-1">
        Warning
      </Button>
      <Button pill size="sm" theme="info" className="mb-2 mr-1">
        Info
      </Button>
      <Button pill size="sm" theme="dark" className="mb-2 mr-1">
        Dark
      </Button>
      <Button pill size="sm" theme="white" className="mb-2 mr-1">
        White
      </Button>
    </Col>
  </Row>
);

export default SmallButtons;
