import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, Button, ListGroup, ListGroupItem, Row, Col, Form, FormInput, FormGroup, FormTextarea, FormSelect, Container} from "shards-react";

const CompanyDetails = ({ companyDetails }) => (
<Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-2">
      <Col xs="12" sm="4" className="text-sm-left mb-3" >
        <span className="text-uppercase page-subtitle">Overview</span>
        <h3 className="page-title">Company Detail</h3>
      </Col>
    </Row>
  <Row>
    <Col lg="4">
      <Card small className="mb-4 pt-3">
        <CardHeader className="border-bottom text-center">
          {/* <div className="mb-3 mx-auto">
            <img
              className="rounded-circle"
              src={companyDetails.avatar}
              alt={companyDetails.name}
              width="110"
            />
          </div> */}
          <h4 className="mb-0">{companyDetails.name}</h4>
          {/* <span className="text-muted d-block mb-2">{companyDetails.jobTitle}</span> */}
        </CardHeader>
        <ListGroup flush>
          {/* <ListGroupItem className="px-4">
            <div className="progress-wrapper">
              <strong className="text-muted d-block mb-2">
                {companyDetails.performanceReportTitle}
              </strong>
              <Progress
                className="progress-sm"
                value={companyDetails.performanceReportValue}
              >
                <span className="progress-value">
                  {companyDetails.performanceReportValue}%
                </span>
              </Progress>
            </div>
          </ListGroupItem> */}
          <ListGroupItem className="p-4">
            <strong className="text-muted d-block mb-2">
              {companyDetails.metaTitle}
            </strong>
            <span>{companyDetails.metaValue}</span>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </Col>
    <Col lg="8">
      <Card small className="mb-4">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Company Details</h6>
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <Row>
              <Col>
                <Form>
                  <Row form>
                    <Col md="6" className="form-group">
                      <label htmlFor="feFirstName">Company Name</label>
                      <FormInput
                        id="feFirstName"
                        placeholder="First Name"
                        value="Sierra"
                        onChange={() => {}}
                      />
                    </Col>
                    <Col md="6" className="form-group">
                      <label htmlFor="feEmail">Email</label>
                      <FormInput
                        type="email"
                        id="feEmail"
                        placeholder="Email Address"
                        value="sierra@example.com"
                        onChange={() => {}}
                        autoComplete="email"
                      />
                    </Col>
                  </Row>
                  <Row form>
                    <Col md="12" className="form-group">
                      <label htmlFor="feDescription">Description</label>
                      <FormTextarea id="feDescription" rows="5" />
                    </Col>
                  </Row>
                  <FormGroup>
                    <label htmlFor="feAddress">Address</label>
                    <FormInput
                      id="feAddress"
                      placeholder="Address"
                      value="1234 Main St."
                      onChange={() => {}}
                    />
                  </FormGroup>
                  <Row form>
                    <Col md="3" className="form-group">
                      <label htmlFor="feCity">City</label>
                      <FormInput
                        id="feCity"
                        placeholder="City"
                        onChange={() => {}}
                      />
                    </Col>
                    <Col md="3" className="form-group">
                      <label htmlFor="feInputState">State</label>
                      <FormSelect id="feInputState">
                        <option>Choose...</option>
                        <option>...</option>
                      </FormSelect>
                    </Col>
                    <Col md="3" className="form-group">
                      <label htmlFor="feZipCode">Zip</label>
                      <FormInput
                        id="feZipCode"
                        placeholder="Zip"
                        onChange={() => {}}
                      />
                    </Col>
                    <Col md="3" className="form-group">
                      <label htmlFor="Country">Country</label>
                      <FormSelect id="Country">
                        <option>Choose...</option>
                        <option>...</option>
                      </FormSelect>
                    </Col>
                  </Row>
                  <Row form>
                      <Col md="4" className="form-group">
                          <label htmlFor="feInputState">Account Status</label>
                          <FormSelect id="feInputState">
                              <option >Active</option>
                              <option>Deactive</option>
                              <option>Hold</option>
                          </FormSelect>
                      </Col>
                  </Row>
                  
                  <Button pill size="sm" theme="primary" title="Update Account">Update Information</Button>
                </Form>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </Col>
  </Row>
  </Container>
);

CompanyDetails.propTypes = {
  /**
   * The user details object.
   */
  companyDetails: PropTypes.object
};

CompanyDetails.defaultProps = {
    companyDetails: {
    name: "Asif Ansari",
    avatar: require("./../../images/avatars/2.jpg"),
    jobTitle: "Project Manager",
    performanceReportTitle: "Workload",
    performanceReportValue: 74,
    metaTitle: "Description",
    metaValue:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
  }
};

export default CompanyDetails;
