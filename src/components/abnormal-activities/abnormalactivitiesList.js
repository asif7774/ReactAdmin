import React from "react";
import { Card, CardBody, Button, Container, Row, Col, CardHeader, Modal, ModalHeader, ModalBody, ModalFooter } from "shards-react";
import './abnormalActivitiesList.scss';

class AbnormalActivitiesListComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      showFilter: false,
      modalOpen: false,
      modalInfoOpen: false,
    };
  }

  toggleModal() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  toggleInfoModal() {
    this.setState({
      modalInfoOpen: !this.state.modalInfoOpen
    });
  }

  render() {
    const { modalOpen, modalInfoOpen } = this.state;

    return (
      <div className="no-gutters row">
        <Container fluid className="main-content-container px-4  slim-scroll">
          <Row noGutters className="page-header py-2">
            <Col xs="12" sm="4" className="text-sm-left mb-2" >
              <span className="text-uppercase page-subtitle">Abnormal Activity Reports</span>
              <h3 className="page-title">List of Abnormal Activity Reports</h3>
            </Col>
          </Row>
          <Card small>
            <CardHeader className="border-bottom  py-2 px-3">
              <h6 className="m-0 d-flex align-items-center">
                <span>Abnormal Activity Reports</span>
              </h6>
            </CardHeader>
            <CardBody className="p-0">
              <div className="comment-widgets slim-scroll">   

                <div className="d-flex flex-row comment-row mt-0 mb-0">
                  <div className="pr-2 pt-2 pl-0">
                    <img src={require("../../assets/images/avatars/0.jpg")} alt="user" width="40" className="rounded-circle" />
                  </div>
                  <div className="comment-text w-100">
                    <h5 className="font-normal mb-1">Pavan kumar</h5>
                    <span className="text-muted mr-2 font-12">10:20 AM 20 may 2019</span>
                    <span className="mb-2 d-block font-14 text-muted font-light mt-3">Pavan Kumar has changed his company <b>5 times</b> since last weeek</span>
                    <div className="mt-3">
                      <Button onClick={this.toggleModal.bind(this)} pill outline size="sm" theme="info" title="Reject" className="mr-2"><i className="material-icons mr-1">clear</i>Put Account on Hold</Button>
                      <Button onClick={this.toggleInfoModal.bind(this)} pill outline size="sm" theme="primary" title="View Detail">View Account Details</Button>
                    </div>
                  </div>
                </div>
                
                <div className="d-flex flex-row comment-row mt-0 mb-0">
                  <div className="pr-2 pt-2 pl-0">
                    <img src={require("../../assets/images/avatars/3.jpg")} alt="user" width="40" className="rounded-circle" />
                  </div>
                  <div className="comment-text w-100">
                  <h5 className="font-normal mb-1">Sonu Nigam</h5>
                    <span className="text-muted mr-2 font-12">10:20 AM 20 may 2019</span>
                    <span className="mb-2 d-block font-14 text-muted font-light mt-3">Pavan Kumar has changed his company <b>5 times</b> since last weeek</span>
                    <div className="mt-3">
                      <Button onClick={this.toggleModal.bind(this)} pill outline size="sm" theme="info" title="Reject" className="mr-2"><i className="material-icons mr-1">clear</i>Put Account on Hold</Button>
                      <Button onClick={this.toggleInfoModal.bind(this)} pill outline size="sm" theme="primary" title="View Detail" className="mr-2">View Account Details</Button>
                      <Button onClick={this.toggleInfoModal.bind(this)} pill outline size="sm" theme="primary" title="View Detail">View Added Products</Button>
                    </div>
                  </div>
                </div>

                

              </div>
              {/* Confirmation popup */}
              <Modal size="md" open={modalOpen} toggle={this.toggleModal.bind(this)} modalClassName="modal-danger" centered>
                <ModalHeader closeAriaLabel="close" className="py-2 px-3">Please Confirm</ModalHeader>
                <ModalBody className="py-3 px-3">Are You sure you want to reject this request.</ModalBody>
                <ModalFooter className="py-2 px-3">
                  <Button pill size="sm" theme="secondary" title="No" onClick={this.toggleModal.bind(this)}>No</Button>
                  <Button pill size="sm" theme="danger" title="Yes">Yes</Button>
                </ModalFooter>
              </Modal>

              {/* Information popup */}
              <Modal size="md" open={modalInfoOpen} toggle={this.toggleInfoModal.bind(this)} modalClassName="modal-info" center>
                <ModalHeader closeAriaLabel="close" className="py-2 px-3">Pavan Kumar</ModalHeader>
                <ModalBody className="py-3 px-3">                  
                  <div className="py-2 px-3 table-responsive">
                    <table className="table table-bordered m-0 table-sm">
                      <thead>
                        <colgroup>
                          <col style={{width:"50px"}} />
                          <col style={{width:"50%"}} />
                          <col style={{width:"50%"}} />
                          <col style={{width:"50px"}} />
                        </colgroup>
                        <tr>
                          <th style={{width:"50px"}}></th>   
                          <th>Product Name</th>
                          <th style={{width:"80px"}}></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>   
                          <td className="text-center">1</td>                               
                          <td>Hight Purity Quartz Sand</td>
                          <td>
                            <React.Fragment>
                              <Button pill size="sm" className="btn-icon mr-1" theme="success" title="Approve">
                                <i className="material-icons">done</i>
                              </Button>
                              <Button pill size="sm" className="btn-icon" theme="danger" title="Reject">
                                <i className="material-icons">clear</i>
                              </Button>
                            </React.Fragment>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </ModalBody>
                <ModalFooter className="py-2 px-3">
                  <Button pill outline size="sm" theme="success" title="Approve" className="mr-2"><i className="material-icons mr-1">done</i>Approve</Button>
                  <Button onClick={this.toggleInfoModal.bind(this)} pill outline size="sm" theme="danger" title="Reject"><i className="material-icons mr-1">clear</i>Reject</Button>  
                </ModalFooter>
              </Modal>

            </CardBody>
          </Card>
        </Container>
      </div>
      );
    }
  }
          
export default AbnormalActivitiesListComponent;
