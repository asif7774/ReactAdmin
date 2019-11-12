import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, Button, ListGroup, ListGroupItem, Row, Col, Form, FormInput, FormGroup, FormTextarea, FormSelect } from "shards-react";

const UserDetails = ({ userDetails }) => (
    <React.Fragment>
        <Row>
            <Col lg="4">
                <Card small className="mb-4 pt-3">
                    <CardHeader className="border-bottom text-center">
                        <div className="mb-3 mx-auto">
                            <img
                                className="rounded-circle"
                                src={userDetails.avatar}
                                alt={userDetails.name}
                                width="110"
                            />
                        </div>
                        <h4 className="mb-0">{userDetails.name}</h4>
                        <span className="text-muted d-block mb-2">{userDetails.jobTitle}</span>
                        {/* <Button pill outline size="sm" className="mb-2">
                            <i className="material-icons mr-1">person_add</i> Follow
                        </Button> */}
                                    </CardHeader>
                                    <ListGroup flush>
                                        {/* <ListGroupItem className="px-4">
                            <div className="progress-wrapper">
                            <strong className="text-muted d-block mb-2">
                                {userDetails.performanceReportTitle}
                            </strong>
                            <Progress
                                className="progress-sm"
                                value={userDetails.performanceReportValue}
                            >
                                <span className="progress-value">
                                {userDetails.performanceReportValue}%
                                </span>
                            </Progress>
                            </div>
                        </ListGroupItem> */}
                        <ListGroupItem className="p-4">
                            <strong className="text-muted d-block mb-2">
                                {userDetails.metaTitle}
                            </strong>
                            <span>{userDetails.metaValue}</span>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
            <Col lg="8">
                <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Account Details</h6>
                    </CardHeader>
                    <ListGroup flush>
                        <ListGroupItem className="p-3">
                            <Row>
                                <Col>
                                    <Form>
                                        <Row form>
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feFirstName">First Name</label>
                                                <FormInput
                                                    id="feFirstName"
                                                    placeholder="First Name"
                                                    value="Sierra"
                                                    onChange={() => { }}
                                                />
                                            </Col>
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feLastName">Last Name</label>
                                                <FormInput
                                                    id="feLastName"
                                                    placeholder="Last Name"
                                                    value="Brooks"
                                                    onChange={() => { }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row form>
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feEmail">Email</label>
                                                <FormInput
                                                    type="email"
                                                    id="feEmail"
                                                    placeholder="Email Address"
                                                    value="sierra@example.com"
                                                    onChange={() => { }}
                                                    autoComplete="email"
                                                />
                                            </Col>
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feEmail">Alternate Email</label>
                                                <FormInput
                                                    type="email"
                                                    id="altEmail"
                                                    placeholder="Alternate Email Address"
                                                    value="sierra@example.com"
                                                    onChange={() => { }}
                                                    autoComplete="email"
                                                />
                                            </Col>
                                        </Row>
                                        <Row form>
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feEmail">Phone Number</label>
                                                <FormInput
                                                    type="text"
                                                    id="phone_number"
                                                    placeholder="9827012345"
                                                    value="9827012345"
                                                    onChange={() => { }}
                                                />
                                            </Col>
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feEmail">Mobile Number</label>
                                                <FormInput
                                                    type="text"
                                                    id="mobile"
                                                    placeholder="Mobile Number"
                                                    onChange={() => { }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row form>
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feEmail">Company Name</label>
                                                <FormInput
                                                    type="text"
                                                    id="company"
                                                    placeholder="Company Name"
                                                    onChange={() => { }}
                                                />
                                            </Col>
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feEmail">Designation</label>
                                                <FormInput
                                                    type="text"
                                                    id="company"
                                                    placeholder="Company Name"
                                                    onChange={() => { }}
                                                />
                                            </Col>                                            
                                        </Row>
                                        <FormGroup>
                                            <label htmlFor="feAddress">Address</label>
                                            <FormInput
                                                id="feAddress"
                                                placeholder="Address"
                                                value="1234 Main St."
                                                onChange={() => { }}
                                            />
                                        </FormGroup>
                                        <Row form>
                                            <Col md="3" className="form-group">
                                                <label htmlFor="feCity">City</label>
                                                <FormInput
                                                    id="feCity"
                                                    placeholder="City"
                                                    onChange={() => { }}
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
                                                    onChange={() => { }}
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
                                            <Col md="12" className="form-group">
                                                <label htmlFor="feDescription">Description</label>
                                                <FormTextarea id="feDescription" rows="5" />
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
                                        
                                        <Button pill size="sm" theme="primary" title="Update Account">Update Account</Button>
                                    </Form>
                                </Col>
                            </Row>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
        </Row>

    </React.Fragment>
);

UserDetails.propTypes = {
    /**
     * The user details object.
     */
    userDetails: PropTypes.object
};

UserDetails.defaultProps = {
    userDetails: {
        name: "Asif Ansari",
        avatar: require("./../../images/avatars/3.jpg"),
        jobTitle: "Project Manager",
        performanceReportTitle: "Workload",
        performanceReportValue: 74,
        metaTitle: "Description",
        metaValue:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
    }
};

export default UserDetails;
