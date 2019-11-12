import React from "react";
import { Link } from 'react-router-dom';
import { Card, CardBody, Button, Container, Row, Col, CardHeader, Modal, ModalHeader, ModalBody, ModalFooter} from "shards-react";
// import './ProductsList.scss';

// Import React Table
import ReactTable from "react-table";
import checkboxHOC from "react-table/lib/hoc/selectTable";
import "react-table/react-table.css";
import Chance from "chance";
import matchSorter from 'match-sorter'

import testData from "../../data/dummy_data.json";


const Table = checkboxHOC(ReactTable);

const chance = new Chance();

function getData(persons) {
  const data = persons.map(item => {
    // using chancejs to generate guid
    // shortid is probably better but seems to have performance issues
    // on codesandbox.io
    const _id = chance.guid();
    return {
      _id,
      ...item
    };
  });
  return data;
}

// function getColumns(data) {
//   const sample = data[0];
//   Object.keys(sample).forEach(key => {
//     if (key !== "_id" && key !== "children") {
//       columns.push({
//         accessor: key,
//         Header: key
//       });
//     }
//   });
//   console.log(columns);
//   return columns;
// }
class ProductListComponent extends React.Component {
  constructor() {
    super();
    const data = getData(testData);
    // const columns = getColumns(data);
    this.state = {
      data,
      selection: [],
      selectAll: false,
      showFilter:false,
      modalOpen: false,
      mergeModalOpen: false,
      selectedOption: '',
      selectedOption2: ''
    };
    this.radioChange = this.radioChange.bind(this);
    this.radioChange2 = this.radioChange2.bind(this);
  }
  
  toggleSelection = (key, shift, row) => {
    /*
      Implementation of how to manage the selection state is up to the developer.
      This implementation uses an array stored in the component state.
      Other implementations could use object keys, a Javascript Set, or Redux... etc.
    */
    // start off with the existing state
    let selection = [...this.state.selection];
    const keyIndex = selection.indexOf(key);
    // check to see if the key exists
    if (keyIndex >= 0) {
      // it does exist so we will remove it using destructing
      selection = [
        ...selection.slice(0, keyIndex),
        ...selection.slice(keyIndex + 1)
      ];
    } else {
      // it does not exist so add it
      selection.push(key);
    }
    // update the state
    this.setState({ selection });
  };

  toggleAll = () => {
    /*
      'toggleAll' is a tricky concept with any filterable table
      do you just select ALL the records that are in your data?
      OR
      do you only select ALL the records that are in the current filtered data?
      
      The latter makes more sense because 'selection' is a visual thing for the user.
      This is especially true if you are going to implement a set of external functions
      that act on the selected information (you would not want to DELETE the wrong thing!).
      
      So, to that end, access to the internals of ReactTable are required to get what is
      currently visible in the table (either on the current page or any other page).
      
      The HOC provides a method call 'getWrappedInstance' to get a ref to the wrapped
      ReactTable and then get the internal state and the 'sortedData'. 
      That can then be iterrated to get all the currently visible records and set
      the selection state.
    */
    const selectAll = this.state.selectAll ? false : true;
    const selection = [];
    if (selectAll) {
      // we need to get at the internals of ReactTable
      const wrappedInstance = this.checkboxTable.getWrappedInstance();
      // the 'sortedData' property contains the currently accessible records based on the filter and sort
      const currentRecords = wrappedInstance.getResolvedState().sortedData;
      // we just push all the IDs onto the selection array
      currentRecords.forEach(item => {
        selection.push(item._original._id);
      });
    }
    this.setState({ selectAll, selection });
  };

  isSelected = key => {
    /*
      Instead of passing our external selection state we provide an 'isSelected'
      callback and detect the selection state ourselves. This allows any implementation
      for selection (either an array, object keys, or even a Javascript Set object).
    */
    return this.state.selection.includes(key);
  };

  logSelection = () => {
    console.log("selection:", this.state.selection);
  };

  onFilterClick() {
    this.setState({
			showFilter: !this.state.showFilter
		});
  }

  toggleModal() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }
  toggleMergeModal() {
    this.setState({
      mergeModalOpen: !this.state.mergeModalOpen
    });
  }
  radioChange(e) {
    this.setState({
      selectedOption: e.currentTarget.value
    });
  }
  radioChange2(e) {
    this.setState({
      selectedOption2: e.currentTarget.value
    });
  }
  render() {
    const { toggleSelection, toggleAll, isSelected, logSelection } = this;
    const { data, selectAll, showFilter, modalOpen, mergeModalOpen} = this.state;
    
    const checkboxProps = {
      selectAll,
      isSelected,
      toggleSelection,
      toggleAll,
      selectType: "checkbox",
      getTrProps: (s, r) => {
        // someone asked for an example of a background color change
        // here it is...
        // const selected = this.isSelected(r.original._id);

        let selected;
        if (r !== undefined) {
          selected = this.isSelected(r.original._id);
        }
        return {
          style: {
            backgroundColor: selected ? "#00bd00" : "",
            color: selected ? '#fff' : 'inherit',
          }
        };
      }
    };

    return (
      <div className="no-gutters row">
        <Container fluid className="main-content-container px-4  slim-scroll">
          <Row noGutters className="page-header py-2">
            <Col xs="12" sm="4" className="text-sm-left mb-3" >
              <span className="text-uppercase page-subtitle">Products</span>
              <h3 className="page-title">List of Available Products</h3>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xl="3" sm="6" md="3">
              <Card className="card-featured-left card-featured-tertiary mb-3">
                <CardBody>
                  <div className="widget-summary">
                    <div className="widget-summary-col widget-summary-col-icon">
                      <div className="summary-icon bg-tertiary">
                        <i className="material-icons">unarchive</i>
                      </div>
                    </div>
                    <div className="widget-summary-col">
                      <div className="summary">
                        <h4 className="title">All Products</h4>
                        <div className="info">
                          <strong className="amount">1281</strong>
                        </div>
                      </div>
                      <div className="summary-footer">
                        <span className="text-muted cursor-pointer">(View All)</span>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="3" sm="6" md="3">
              <Card className="card-featured-left card-featured-success mb-3">
                <CardBody>
                  <div className="widget-summary">
                    <div className="widget-summary-col widget-summary-col-icon">
                      <div className="summary-icon bg-success">
                        <i className="material-icons">queue</i>
                      </div>
                    </div>
                    <div className="widget-summary-col">
                      <div className="summary">
                        <h4 className="title">Newly Added Products</h4>
                        <div className="info">
                          <strong className="amount">100</strong>
                        </div>
                      </div>
                      <div className="summary-footer">
                        <span className="text-muted cursor-pointer">(View All)</span>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="3" sm="6" md="3">
              <Card className="card-featured-left card-featured-red mb-3">
                <CardBody>
                  <div className="widget-summary">
                    <div className="widget-summary-col widget-summary-col-icon">
                      <div className="summary-icon bg-red">
                        <i className="material-icons">warning</i>
                      </div>
                    </div>
                    <div className="widget-summary-col">
                      <div className="summary">
                        <h4 className="title">Reported Products</h4>
                        <div className="info">
                          <strong className="amount">38</strong>
                        </div>
                      </div>
                      <div className="summary-footer">
                        <span className="text-muted cursor-pointer">(View All)</span>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="3" sm="6" md="3">
              <Card className="card-featured-left card-featured-quaternary mb-3">
                <CardBody>
                  <div className="widget-summary">
                    <div className="widget-summary-col widget-summary-col-icon">
                      <div className="summary-icon bg-quaternary">
                        <i className="material-icons">queue_play_next</i>
                      </div>
                    </div>
                    <div className="widget-summary-col">
                      <div className="summary">
                        <h4 className="title">Product Requests</h4>
                        <div className="info">
                          <strong className="amount">12</strong>
                        </div>
                      </div>
                      <div className="summary-footer">
                        <span className="text-muted cursor-pointer">(View All Requests)</span>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Card small className="mb-4">
            <CardHeader className="border-bottom  py-2 px-3">
              <h6 className="m-0 d-flex align-items-center">
                <span>Products</span>
                <span className="cursor-pointer ml-auto fs-21" onClick={this.onFilterClick.bind(this)}><i className="material-icons">search</i></span>
              </h6>
            </CardHeader>
            <CardBody>
              <Table
                filterable={showFilter}
                defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value}
                ref={r => (this.checkboxTable = r)}
                data={data}
                columns={[
                  {
                    expander: true,
                    Header: () => "",
                    width: 65,
                    Expander: ({ isExpanded, ...rest }) =>
                      <div>
                        {isExpanded
                          ? <i className="material-icons">remove_circle_outline</i>
                          : <i className="material-icons">add_circle_outline</i>}
                      </div>,
                    style: {
                      cursor: "pointer",
                      fontSize: 25,
                      padding: "0",
                      textAlign: "center",
                      userSelect: "none"
                    }
                  },
                  {
                    Header: "Product Name",
                    id: "first_name",
                    accessor: d => d.first_name,
                    filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["first_name"] }),
                    filterAll: true    
                  },
                  {
                    Header: "Product Added By",
                    id: "last_name",
                    accessor: d => d.last_name,
                    filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["last_name"] }),
                    filterAll: true   
                  },
                  {
                    Header: "Product Added Date",
                    id: "date",
                    accessor: d => d.date,
                    filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["company_name"] }),
                    filterAll: true   
                  },
                  {
                    Header: "Product Description",
                    id: "company_name",
                    accessor: d => d.company_name,
                    filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["company_name"] }),
                    filterAll: true   
                  },
                  {
                    Header: "HSCode",
                    id: "company_name",
                    accessor: d => d.company_name,
                    filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["company_name"] }),
                    filterAll: true   
                  },
                  {
                    Header: "Status",
                    accessor: "status",
                    id: "status",
                    filterMethod: (filter, row) => {
                      if (filter.value === "all") {
                        return true;
                      }
                      if (filter.value === "active") {
                        return row[filter.id] === "Active";
                      }
                      if (filter.value === "deactive") {
                        return row[filter.id] === "Deactive";
                      }
                    },
                    Filter: ({ filter, onChange }) =>
                      <select
                        onChange={event => onChange(event.target.value)}
                        style={{ width: "100%" }}
                        value={filter ? filter.value : "all"}
                      >
                        <option value="all">Show All</option>
                        <option value="active">Active</option>
                        <option value="deactive">Deactive</option>
                      </select> 
                  },
                  {
                    Header: "Action",
                    width: 100,
                    filterable: false,
                    headerClass: "text-center",
                    className: "text-center action-column",
                    Cell: row => (
                      <React.Fragment>
                        {/* <Button className="mr-1 btn-icon" pill size="sm" theme="secondary" title="Edit">
                          <i className="material-icons">edit</i>
                        </Button> */}
                        <Link className="mr-1 btn-icon btn btn-secondary btn-sm btn-pill" to={'/product-details'}><i className="material-icons">edit</i></Link>
                        <Button pill size="sm" className="btn-icon" theme="danger" title="Delete" onClick={this.toggleModal.bind(this)}>
                          <i className="material-icons">delete</i>
                        </Button>
                      </React.Fragment>
                    )
                  }
                ]}
                defaultPageSize={10}                
                expanded={this.state.expanded}
                onExpandedChange={expanded => this.setState({ expanded })}
                className="-striped -highlight first-column-checkbox"
                SubComponent={row => {
                  return (
                    <React.Fragment>
                      <Row className="pb-2">
                        <Col sm="12">
                          <h5 className="px-3 mt-2 d-flex align-items-center mb-0">
                            <span>Suppliers</span>
                          </h5>
                          <div className="py-2 px-3 table-responsive">
                            <table className="table table-bordered m-0 table-sm table-dark">
                              <thead>
                                <colgroup>
                                  <col style={{width:"50px"}} />
                                  <col style={{width:"50%"}} />
                                  <col style={{width:"50%"}} />
                                  <col style={{width:"50px"}} />
                                </colgroup>
                                <tr>
                                  <th>Campany Name</th>
                                  <th>Country</th>
                                  <th>Listed Contacts</th>
                                  <th style={{width:"80px"}}></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>                                  
                                  <td>Prysmian Group</td>
                                  <td>Itly</td>
                                  <td>12</td>
                                  <td>
                                    <React.Fragment>
                                      <Link className="mr-1 btn-icon btn btn-secondary btn-sm btn-pill" to={'/company-details'}><i className="material-icons">edit</i></Link>
                                      <Button pill size="sm" className="btn-icon" theme="danger" title="Delete" onClick={this.toggleModal.bind(this)}>
                                        <i className="material-icons">delete</i>
                                      </Button>
                                    </React.Fragment>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="px-3">
                            <Button pill size="sm" theme="secondary" title="Save" className="mr-2">Add New</Button>
                            <Button pill size="sm" theme="success" title="Save">Save</Button>
                          </div>
                        </Col>

                        <Col sm="12">
                          <h5 className="px-3 mt-2 d-flex align-items-center mb-0 mt-3">
                            <span>Raw Material &amp; Equipments</span>
                          </h5>
                          <div className="py-2 px-3 table-responsive">
                            <table className="table table-bordered m-0 table-sm table-dark">
                              <thead>
                                <colgroup>
                                  <col style={{width:"50px"}} />
                                  <col style={{width:"50%"}} />
                                  <col style={{width:"50%"}} />
                                  <col style={{width:"50px"}} />
                                </colgroup>
                                <tr>
                                  <th>Product Name</th>
                                  <th>No. of Suppliers</th>
                                  <th style={{width:"80px"}}></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>                                  
                                  <td>Hight Purity Quartz Sand</td>
                                  <td>12</td>
                                  <td>
                                    <React.Fragment>
                                      <Link className="mr-1 btn-icon btn btn-secondary btn-sm btn-pill" to={'/company-details'}><i className="material-icons">edit</i></Link>
                                      <Button pill size="sm" className="btn-icon" theme="danger" title="Delete" onClick={this.toggleModal.bind(this)}>
                                        <i className="material-icons">delete</i>
                                      </Button>
                                    </React.Fragment>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="px-3">
                            <Button pill size="sm" theme="secondary" title="Save" className="mr-2">Add New</Button>
                            <Button pill size="sm" theme="success" title="Save">Save</Button>
                          </div>
                        </Col>

                        <Col sm="12">
                          <h5 className="px-3 mt-2 d-flex align-items-center mb-0 mt-3">
                            <span>Application &amp; End Products</span>
                          </h5>
                          <div className="py-2 px-3 table-responsive">
                            <table className="table table-bordered m-0 table-sm table-dark">
                              <thead>
                                <colgroup>
                                  <col style={{width:"50%"}} />
                                  <col style={{width:"50%"}} />
                                  <col style={{width:"50px"}} />
                                </colgroup>
                                <tr>
                                  <th>Product Name</th>
                                  <th>No. of Suppliers</th>
                                  <th style={{width:"80px"}}></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>                                  
                                  <td>Hight Purity Quartz Sand</td>
                                  <td>12</td>
                                  <td>
                                    <React.Fragment>
                                      <Link className="mr-1 btn-icon btn btn-secondary btn-sm btn-pill" to={'/company-details'}><i className="material-icons">edit</i></Link>
                                      <Button pill size="sm" className="btn-icon" theme="danger" title="Delete" onClick={this.toggleModal.bind(this)}>
                                        <i className="material-icons">delete</i>
                                      </Button>
                                    </React.Fragment>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="px-3">
                            <Button pill size="sm" theme="secondary" title="Save" className="mr-2">Add New</Button>
                            <Button pill size="sm" theme="success" title="Save">Save</Button>
                          </div>
                        </Col>

                        <Col sm="12">
                          <h5 className="px-3 mt-2 d-flex align-items-center mb-0 mt-3">
                            <span>Potential Customers</span>
                          </h5>
                          <div className="py-2 px-3 table-responsive">
                            <table className="table table-bordered m-0 table-sm table-dark">
                              <thead>
                                <colgroup>
                                  <col style={{width:"50%"}} />
                                  <col style={{width:"50%"}} />
                                  <col style={{width:"50px"}} />
                                </colgroup>
                                <tr>
                                  <th>Campany Name</th>
                                  <th>Country</th>
                                  <th style={{width:"80px"}}></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>                                  
                                  <td>Prysmian Group</td>
                                  <td>Itly</td>
                                  <td>
                                    <React.Fragment>
                                      <Link className="mr-1 btn-icon btn btn-secondary btn-sm btn-pill" to={'/company-details'}><i className="material-icons">edit</i></Link>
                                      <Button pill size="sm" className="btn-icon" theme="danger" title="Delete" onClick={this.toggleModal.bind(this)}>
                                        <i className="material-icons">delete</i>
                                      </Button>
                                    </React.Fragment>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="px-3">
                            <Button pill size="sm" theme="secondary" title="Save" className="mr-2">Add New</Button>
                            <Button pill size="sm" theme="success" title="Save">Save</Button>
                          </div>
                        </Col>
                      </Row>
                      
                      {/* <Row>
                        <Col>
                          <div className="py-2 px-3">
                            <React.Fragment> 
                              <Button className="mr-1" pill size="sm" theme="secondary" title="Edit">Edit</Button>
                              <Link className="mr-1 btn btn-secondary btn-sm btn-pill" to={'/product-details'}>Edit</Link>
                              <Button pill size="sm" className="" theme="danger" title="Delete" onClick={this.toggleModal.bind(this)}>Delete</Button>
                            </React.Fragment>
                          </div>
                        </Col>
                      </Row> */}

                    </React.Fragment>
                  );
                }}
                {...checkboxProps}
              />
              {/* Confirmation popup */}
              <Modal size="md" open={modalOpen} toggle={this.toggleModal.bind(this)} modalClassName="modal-danger" centered>
                <ModalHeader closeAriaLabel="close" className="py-2 px-3">Please Confirm</ModalHeader>
                <ModalBody className="py-3 px-3">Are You sure you want to delete this product.</ModalBody>
                <ModalFooter className="py-2 px-3">                  
                  <Button pill size="sm" theme="secondary" title="No" onClick={this.toggleModal.bind(this)}>No</Button>
                  <Button pill size="sm" theme="danger" title="Yes">Yes</Button>
                </ModalFooter>
              </Modal>

              {/* Merge information popup */}
              <Modal size="lg" open={mergeModalOpen} toggle={this.toggleMergeModal.bind(this)} modalClassName="modal-info">
                <ModalHeader closeAriaLabel="close" className="py-2 px-3">Merge Information</ModalHeader>
                <ModalBody className="py-3 px-3">
                  <div className="table-responsive">
                    <table className="table table-sm table-bordered merge-table mb-0">
                      <thead>
                        <tr>
                          <th scope="col" className="table-active"></th>
                          <th scope="col" className="table-active">1</th>
                          <th scope="col" className="table-active">2</th>
                          <th scope="col" className="table-active">3</th>
                          <th scope="col" className="table-active">Selected Information</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row" className="table-active">Product Name</th>
                          <td>
                            <label className={this.state.selectedOption === "Hight Purity Quartz Sand" ? 'selected' : ''}>
                              <input type="radio" value="Hight Purity Quartz Sand" checked={this.state.selectedOption === "Hight Purity Quartz Sand"} onChange={this.radioChange} /><span>Hight Purity Quartz Sand</span>
                            </label>
                          </td>
                          <td>
                            <label className={this.state.selectedOption === "Hight Sand Purity Quartz" ? 'selected' : ''}>
                              <input type="radio" value="Hight Sand Purity Quartz" checked={this.state.selectedOption === "Hight Sand Purity Quartz"} onChange={this.radioChange} /><span>Hight Sand Purity Quartz </span>
                            </label>
                          </td>
                          <td>
                            <label className={this.state.selectedOption === "Hight Quartz Sand Purity" ? 'selected' : ''}>
                              <input type="radio" value="Hight Quartz Sand Purity" checked={this.state.selectedOption === "Hight Quartz Sand Purity"} onChange={this.radioChange} /><span>Hight Quartz Sand Purity</span>
                            </label>
                          </td>
                          <th className="table-info">{this.state.selectedOption}</th>
                        </tr>
                        <tr>
                          <th scope="row" className="table-active">Product Description</th>
                          <td>
                            <label className={this.state.selectedOption2 === "Lorem ipsum dolor sit adipisicing elit." ? 'selected' : ''}>
                              <input type="radio" value="Lorem ipsum dolor sit adipisicing elit." checked={this.state.selectedOption2 === "Lorem ipsum dolor sit adipisicing elit."} onChange={this.radioChange2} /><span>Lorem ipsum dolor sit adipisicing elit.</span>
                            </label>
                          </td>
                          <td>
                            <label className={this.state.selectedOption2 === "Lorem ipsum  elit." ? 'selected' : ''}>
                              <input type="radio" value="Lorem ipsum  elit." checked={this.state.selectedOption2 === "Lorem ipsum  elit."} onChange={this.radioChange2} /><span>Lorem ipsum  elit.</span>
                            </label>
                          </td>
                          <td>
                            <label className={this.state.selectedOption2 === "Lorem ipsum dolor sit amet consectetur." ? 'selected' : ''}>
                              <input type="radio" value="Lorem ipsum dolor sit amet consectetur." checked={this.state.selectedOption2 === "Lorem ipsum dolor sit amet consectetur."} onChange={this.radioChange2} /><span>Lorem ipsum dolor sit amet consectetur.</span>
                            </label>
                          </td>
                          <th className="table-info">{this.state.selectedOption2}</th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <small className="text-muted text-right w-100 d-block">*Please click on the block to select</small>
                </ModalBody>
                <ModalFooter className="py-2 px-3">                  
                  <Button pill size="sm" theme="secondary" title="Cancel" onClick={this.toggleMergeModal.bind(this)}>Cancel</Button>
                  <Button pill size="sm" theme="success" title="Save">Save</Button>
                </ModalFooter>
              </Modal>
              
              <Button onClick={logSelection} className="mt-3 mr-2" pill size="sm" theme="primary" title="Edit">Log Selection</Button>
              <Button onClick={this.toggleMergeModal.bind(this)} className="mt-3" pill size="sm" theme="primary" title="Edit">Merge Information</Button>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

export default ProductListComponent;
