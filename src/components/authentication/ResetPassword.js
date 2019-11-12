import React from "react";
import {Card, CardBody, Button, Form, FormInput, FormGroup } from "shards-react";
// import './ResetPassword.css';

class ResetPasswordComponent extends React.Component {
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
              <h5 className="auth-form__title text-center mb-4">Set New Password</h5>
              <Form>
                <FormGroup>
                  <label htmlFor="#password">New Password</label>
                  <FormInput type="password" id="#password" placeholder="New Password" />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="#confirmpassword">Confirm Password</label>
                  <FormInput type="password" id="#confirmpassword" placeholder="Confirm Password" />
                </FormGroup>
                
                <Button type="submit" pill className="d-table mx-auto">Reset Password</Button>
              </Form>
            </CardBody>
          </Card>
          <div className="auth-form__meta d-flex mt-4">
            <a className="mx-auto" href="/login">Take me back to login</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPasswordComponent;
