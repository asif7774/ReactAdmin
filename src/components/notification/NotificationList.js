import React from "react";
import { Card, CardBody, Button, Container, Row, Col, CardHeader, Modal, ModalHeader, ModalBody, ModalFooter } from "shards-react";
import './NotificationList.scss';

class NotificationListComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      showFilter: false,
      modalOpen: false,
    };
  }

  toggleModal() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  render() {
    const { modalOpen } = this.state;

    return (
      <div className="no-gutters row">
        <Container fluid className="main-content-container px-4  slim-scroll">
          <Row noGutters className="page-header py-2">
            <Col xs="12" sm="4" className="text-sm-left mb-2" >
              <span className="text-uppercase page-subtitle">Notification</span>
              <h3 className="page-title">Received Notification</h3>
            </Col>
          </Row>
          <Card small>
            <CardHeader className="border-bottom  py-2 px-3">
              <h6 className="m-0 d-flex align-items-center">
                <span>Received Notification</span>
              </h6>
            </CardHeader>
            <CardBody className="p-0">
              <div className="comment-widgets slim-scroll">   

                <div className="d-flex flex-row comment-row mt-0 mb-0">
                  <div className="pr-2 pt-2 pl-0">
                    <img src={require("../../assets/images/avatars/0.jpg")} alt="user" width="40" className="rounded-circle" />
                  </div>
                  <div className="comment-text w-100">
                    <h5 className="font-normal mb-1 d-flex align-items-center">
                      <span>Pavan kumar</span>
                      <small className="text-muted mr-2 font-12">10:20 AM 20 may 2019</small> 
                      <Button pill size="sm" className="btn-icon ml-auto" theme="danger" title="Delete">
                        <i className="material-icons">delete</i>
                      </Button>
                    </h5>                                       
                    <span className="d-block font-14 text-muted mt-1">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo </span>
                    <div className="mt-3">
                      <Button pill outline size="sm" theme="primary" title="View" className="mr-2" onClick={this.toggleModal.bind(this)}>View Details</Button>
                    </div>
                  </div>
                </div>
                  
                <div className="d-flex flex-row comment-row mt-0 mb-0">
                  <div className="pr-2 pt-2 pl-0">
                    <img src={require("../../assets/images/avatars/3.jpg")} alt="user" width="40" className="rounded-circle" />
                  </div>
                  <div className="comment-text w-100">
                    <h5 className="font-normal mb-1 d-flex align-items-center">
                      <span>Sonu Nigam</span>
                      <small className="text-muted mr-2 font-12">10:20 AM 20 may 2019</small>
                      <Button pill size="sm" className="btn-icon ml-auto" theme="danger" title="Delete">
                        <i className="material-icons">delete</i>
                      </Button>
                    </h5>                    
                    <span className="d-block font-14 text-muted mt-1">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo </span>
                    <div className="mt-3">
                      <Button pill outline size="sm" theme="primary" title="View" className="mr-2" onClick={this.toggleModal.bind(this)}>View Details</Button>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-row comment-row mt-0 mb-0">
                  <div className="pr-2 pt-2 pl-0">
                    <img src={require("../../assets/images/avatars/0.jpg")} alt="user" width="40" className="rounded-circle" />
                  </div>
                  <div className="comment-text w-100">
                    <h5 className="font-normal mb-1 d-flex align-items-center">
                      <span>John Doe</span>
                      <small className="text-muted mr-2 font-12">10:20 AM 20 may 2019</small>
                      <Button pill size="sm" className="btn-icon ml-auto" theme="danger" title="Delete">
                        <i className="material-icons">delete</i>
                      </Button>
                    </h5>                    
                    <span className="d-block font-14 text-muted mt-1">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo </span>
                    <div className="mt-3">
                      <Button pill outline size="sm" theme="primary" title="View" className="mr-2" onClick={this.toggleModal.bind(this)}>View Details</Button>
                    </div>
                  </div>
                </div>
                      
                <div className="d-flex flex-row comment-row mt-0 mb-0">
                  <div className="pr-2 pt-2 pl-0">
                    <img src={require("../../assets/images/avatars/1.jpg")} alt="user" width="40" className="rounded-circle" />
                  </div>
                  <div className="comment-text w-100">
                    <h5 className="font-normal mb-1 d-flex align-items-center">
                      <span>John Doe</span>
                      <small className="text-muted mr-2 font-12">10:20 AM 20 may 2019</small>  
                      <Button pill size="sm" className="btn-icon ml-auto" theme="danger" title="Delete">
                        <i className="material-icons">delete</i>
                      </Button>
                    </h5>                                      
                    <span className="d-block font-14 text-muted mt-1">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo </span>
                    <div className="mt-3">
                      <Button pill outline size="sm" theme="primary" title="View" className="mr-2" onClick={this.toggleModal.bind(this)}>View Details</Button>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-row comment-row mt-0 mb-0">
                  <div className="pr-2 pt-2 pl-0">
                    <img src={require("../../assets/images/avatars/0.jpg")} alt="user" width="40" className="rounded-circle" />
                  </div>
                  <div className="comment-text w-100">
                    <h5 className="font-normal mb-1 d-flex align-items-center">
                      <span>Pavan kumar</span>
                      <small className="text-muted mr-2 font-12">10:20 AM 20 may 2019</small>      
                      <Button pill size="sm" className="btn-icon ml-auto" theme="danger" title="Delete">
                        <i className="material-icons">delete</i>
                      </Button>
                    </h5>                                  
                    <span className="d-block font-14 text-muted mt-1">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo </span>
                    <div className="mt-3">
                      <Button pill outline size="sm" theme="primary" title="View" className="mr-2" onClick={this.toggleModal.bind(this)}>View Details</Button>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-row comment-row mt-0 mb-0">
                  <div className="pr-2 pt-2 pl-0">
                    <img src={require("../../assets/images/avatars/0.jpg")} alt="user" width="40" className="rounded-circle" />
                  </div>
                  <div className="comment-text w-100">
                    <h5 className="font-normal mb-1 d-flex align-items-center">
                      <span>John Doe</span>
                      <small className="text-muted mr-2 font-12">10:20 AM 20 may 2019</small>
                      <Button pill size="sm" className="btn-icon ml-auto" theme="danger" title="Delete">
                        <i className="material-icons">delete</i>
                      </Button>
                    </h5>                    
                    <span className="d-block font-14 text-muted mt-1">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo </span>
                    <div className="mt-3">
                      <Button pill outline size="sm" theme="primary" title="View" className="mr-2" onClick={this.toggleModal.bind(this)}>View Details</Button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Information popup */}
              <Modal size="md" open={modalOpen} toggle={this.toggleModal.bind(this)} modalClassName="modal-info" center>
                <ModalHeader closeAriaLabel="close" className="py-2 px-3">Pavan Kumar</ModalHeader>
                <ModalBody className="py-3 px-3">
                  <span className="d-block font-14">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo </span>
                </ModalBody>
                <ModalFooter className="py-2 px-3">
                  <Button pill size="sm" theme="danger" title="Delete Notification" onClick={this.toggleModal.bind(this)}>Delete Notification</Button>
                  <Button pill size="sm" theme="primary" title="Cancel" onClick={this.toggleModal.bind(this)}>Ok</Button>
                </ModalFooter>
              </Modal>

            </CardBody>
          </Card>
        </Container>
      </div>
      );
    }
  }
          
export default NotificationListComponent;
