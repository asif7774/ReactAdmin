import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, Button, ListGroup, ListGroupItem, Row, Col, Form, FormInput, FormTextarea, Container, FormSelect } from "shards-react";

const ProductDetails = ({ productDetails }) => (
<Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-2">
      <Col xs="12" sm="4" className="text-sm-left mb-3" >
        <span className="text-uppercase page-subtitle">Overview</span>
        <h3 className="page-title">Product Detail</h3>
      </Col>
    </Row>
  <Row>
    <Col lg="4">
      <Card small className="mb-4 pt-2">
        <CardHeader className="border-bottom text-center">
          {/* <div className="mb-3 mx-auto">
            <img
              className="rounded-circle"
              src={productDetails.avatar}
              alt={productDetails.name}
              width="110"
            />
          </div> */}
          <h4 className="mb-0">{productDetails.name}</h4>
          {/* <span className="text-muted d-block mb-2">{productDetails.jobTitle}</span> */}
        </CardHeader>
        <ListGroup flush>
          {/* <ListGroupItem className="px-4">
            <div className="progress-wrapper">
              <strong className="text-muted d-block mb-2">
                {productDetails.performanceReportTitle}
              </strong>
              <Progress
                className="progress-sm"
                value={productDetails.performanceReportValue}
              >
                <span className="progress-value">
                  {productDetails.performanceReportValue}%
                </span>
              </Progress>
            </div>
          </ListGroupItem> */}
          <ListGroupItem className="p-4">
            <strong className="text-muted d-block mb-2">
              {productDetails.metaTitle}
            </strong>
            <span>{productDetails.metaValue}</span>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </Col>
    <Col lg="8">
      <Card small className="mb-4">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Product Details</h6>
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <Row>
              <Col>
                <Form>
                  <Row form>
                    <Col md="6" className="form-group">
                      <label htmlFor="feFirstName">Product Name</label>
                      <FormInput
                        id="feFirstName"
                        placeholder="First Name"
                        value="Hight Purity Quartz Sand"
                        onChange={() => {}}
                      />
                    </Col>
                    <Col md="6" className="form-group">
                      <label htmlFor="feLastName">Product Added By</label>
                      <FormInput
                        id="feLastName"
                        placeholder="Last Name"
                        value="Brooks"
                        onChange={() => {}}
                      />
                    </Col>
                  </Row>
                  <Row form>
                    <Col md="6" className="form-group">
                      <label htmlFor="feEmail">Date Added On</label>
                      <FormInput
                        type="date"
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
                  <Row form>
                      <Col md="6" className="form-group">
                          <label htmlFor="Status">Status</label>
                          <FormSelect id="Status">
                              <option>Active</option>
                              <option>Deactive</option>
                              <option>Hold</option>
                          </FormSelect>
                      </Col>
                      <Col md="6" className="form-group">
                          <label htmlFor="HSCode">HSCode</label>
                          <FormInput
                            type="number"
                            id="HSCode"
                            placeholder="HSCode"
                            onChange={() => {}}
                          />
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

ProductDetails.propTypes = {
  /**
   * The user details object.
   */
  productDetails: PropTypes.object
};

ProductDetails.defaultProps = {
  productDetails: {
    name: "Hight Purity Quartz Sand",
    // avatar: require("./../../images/avatars/3.jpg"),
    performanceReportValue: 74,
    metaTitle: "Description",
    metaValue:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
  }
};

export default ProductDetails;
