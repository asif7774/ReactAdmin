import React from "react";
import {Card, CardBody, Button, Form, FormInput, FormGroup } from "shards-react";
// import './ForgotPassword.css';

class ForgotPasswordComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="h-100 no-gutters row">
        <div className="auth-form mx-auto my-auto">
          <Card>          
            <CardBody>
              <img className="auth-form__logo d-table mx-auto mb-3" src={require("./../../images/logo.svg")} alt="Mappes Admin - Login" />
              <h5 className="auth-form__title text-center mb-4">Forgot Password</h5>
              <Form>
                <FormGroup>
                  <label htmlFor="#exampleInputEmail1">Email address</label>
                  <FormInput id="#exampleInputEmail1" placeholder="Enter email" />
                  <small className="form-text text-muted text-center">You will receive an email with a unique token.</small>
                </FormGroup>
                <Button type="submit" pill className="d-table mx-auto">Send Link</Button>
              </Form>
            </CardBody>
          </Card>
          <div className="auth-form__meta d-flex mt-4">
            <a className="mx-auto" href="/login">Take me back to login.</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPasswordComponent;
