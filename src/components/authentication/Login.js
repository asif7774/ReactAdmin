import React from "react";
import {Card, CardBody, Button, Form, FormInput, FormGroup, FormCheckbox } from "shards-react";
// import './Login.scss';

class LoginComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="h-100 no-gutters row">
        <div className="auth-form mx-auto my-auto">
          <Card>          
            <CardBody>
              <img className="auth-form__logo d-table mx-auto mb-3" src={require("./../../images/logo.svg")} width="170px" alt="Mappes Admin - Login" />
              <p className="auth-form__title text-center mb-4">Access Your Account</p>
              <Form>
                <FormGroup>
                  <label htmlFor="#exampleInputEmail1">Email address</label>
                  <FormInput id="#exampleInputEmail1" placeholder="Enter email" />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="#password">Password</label>
                  <FormInput type="password" id="#password" placeholder="Password" />
                </FormGroup>
                <FormGroup>
                  <FormCheckbox>Remember me.</FormCheckbox>
                </FormGroup>
                <Button type="submit" pill className="d-table mx-auto">Access Account</Button>
              </Form>
            </CardBody>
          </Card>
          <div className="auth-form__meta d-flex mt-4">
            <a className="mx-auto" href="/forgot-password">Forgot your password?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
