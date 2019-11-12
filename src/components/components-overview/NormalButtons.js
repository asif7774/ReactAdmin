import React from "react";
import { Row, Col, Button } from "shards-react";

const NormalButtons = () => (
  <Row>
    <Col>
      <Button pill theme="primary" className="mb-2 mr-1">
        Primary
      </Button>
      <Button pill theme="secondary" className="mb-2 mr-1">
        Secondary
      </Button>
      <Button pill theme="success" className="mb-2 mr-1">
        Success
      </Button>
      <Button pill theme="danger" className="mb-2 mr-1">
        Danger
      </Button>
      <Button pill theme="warning" className="mb-2 mr-1">
        Warning
      </Button>
      <Button pill theme="info" className="mb-2 mr-1">
        Info
      </Button>
      <Button pill theme="dark" className="mb-2 mr-1">
        Dark
      </Button>
      <Button pill theme="light" className="mb-2 mr-1">
        Light
      </Button>
    </Col>
  </Row>
);

export default NormalButtons;
