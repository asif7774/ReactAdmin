import React from "react";
import { ButtonGroup, Button } from "shards-react";

const ButtonGroups = () => (
  <ButtonGroup className="mb-3">
    <Button pill theme="primary">Fizz</Button>
    <Button pill theme="white">Buzz</Button>
    <Button pill theme="white">Foo</Button>
    <Button pill theme="white">Bar</Button>
  </ButtonGroup>
);

export default ButtonGroups;
