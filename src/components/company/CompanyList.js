import React from "react";
import { Link } from 'react-router-dom';
import { Card, CardBody, Button, Container, Row, Col, CardHeader, Modal, ModalHeader, ModalBody, ModalFooter} from "shards-react";
// import './CompanyList.scss';

// Import React Table
import ReactTable from "react-table";
import checkboxHOC from "react-table/lib/hoc/selectTable";
import "react-table/react-table.css";
import Chance from "chance";
import matchSorter from 'match-sorter'

import testData from "../../data/dummy_data-company.json";


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
class CompanyListComponent extends React.Component {
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
      selectedOption2: '',
      selectedOption3: ''
    };
    this.radioChange = this.radioChange.bind(this);
    this.radioChange2 = this.radioChange2.bind(this);
    this.radioChange3 = this.radioChange3.bind(this);
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
  radioChange3(e) {
    this.setState({
      selectedOption3: e.currentTarget.value
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
              <span className="text-uppercase page-subtitle">Companies</span>
              <h3 className="page-title">List of Available Companies</h3>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xl="3" sm="6" md="3">
              <Card className="card-featured-left card-featured-tertiary mb-3">
                <CardBody>
                  <div className="widget-summary">
                    <div className="widget-summary-col widget-summary-col-icon">
                      <div className="summary-icon bg-tertiary">
                        <i className="material-icons">domain</i>
                      </div>
                    </div>
                    <div className="widget-summary-col">
                      <div className="summary">
                        <h4 className="title">All Companies</h4>
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
                        <h4 className="title">Newly Added Companies</h4>
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
                        <i className="material-icons">report</i>
                      </div>
                    </div>
                    <div className="widget-summary-col">
                      <div className="summary">
                        <h4 className="title">Reported Companies</h4>
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
                        <i className="material-icons">pages</i>
                      </div>
                    </div>
                    <div className="widget-summary-col">
                      <div className="summary">
                        <h4 className="title">Company Requests</h4>
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
                <span>Companies</span>
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
                    Header: "Company Name",
                    id: "company_name",
                    accessor: d => d.company_name,
                    filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["company_name"] }),
                    filterAll: true    
                  },
                  {
                    Header: "Website",
                    id: "email_address",
                    accessor: d => d.email_address,
                    filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["email_address"] }),
                    filterAll: true   
                  },
                  {
                    Header: "Country",
                    id: "country",
                    accessor: d => d.country,
                    filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["country"] }),
                    filterAll: true   
                  },
                  {
                    Header: "Status",
                    accessor: "account_status",
                    id: "account_status",
                    Cell: row => (
                      <span>
                        {row.value === 'Deactive' ? <span className="badge badge-danger">Deactive</span> : row.value === 'Active' ? <span className="badge badge-success">Active</span> : row.value === 'Hold'? <span className="badge badge-warning">Hold</span>:"Deactive"}
                      </span>
                    ),
                    filterMethod: (filter, row) => {
                      if (filter.value === "All") {
                        return true;
                      }
                      if (filter.value === "Active") {
                        return row[filter.id] === "Active";
                      }
                      if (filter.value === "Deactive") {
                        return row[filter.id] === "Deactive";
                      }
                      if (filter.value === "Hold") {
                        return row[filter.id] === "Hold";
                      }
                    },
                    Filter: ({ filter, onChange }) =>
                      <select
                        onChange={event => onChange(event.target.value)}
                        style={{ width: "100%" }}
                        value={filter ? filter.value : "All"}
                      >
                        <option value="All">Show All</option>
                        <option value="Active">Active</option>
                        <option value="Deactive">Deactive</option>
                        <option value="Hold">Hold</option>
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
                        <Link className="mr-1 btn-icon btn btn-secondary btn-sm btn-pill" to={'/company-details'}><i className="material-icons">edit</i></Link>
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
                      <Row>
                        <Col>
                          <div className="py-2 px-3 table-responsive">
                            <table className="table table-bordered m-0 table-sm table-dark">
                              <tbody>
                                <tr>
                                  <th>Company Name</th>
                                  <td>Mark</td>
                                </tr>
                                <tr>
                                  <th>Company Description</th>
                                  <td>Lorem Ipsom</td>
                                </tr>
                                <tr>
                                  <th>Company Address</th>
                                  <td>Jacob Inc, USA</td>
                                </tr>
                                <tr>
                                  <th>Website</th>
                                  <td>www.JacobInc.com</td>
                                </tr>
                                <tr>
                                  <th>Country</th>
                                  <td>USA</td>
                                </tr>
                                <tr>
                                  <th>Company Type</th>
                                  <td>Sales</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div className="py-2 px-3">
                            <React.Fragment>                              
                              {/* <Button className="mr-1" pill size="sm" theme="secondary" title="Edit">Edit</Button> */}
                              <Link className="mr-1 btn btn-secondary btn-sm btn-pill" to={'/company-details'}>Edit</Link>
                              <Button pill size="sm" className="" theme="danger" title="Delete" onClick={this.toggleModal.bind(this)}>Delete</Button>
                            </React.Fragment>
                          </div>
                        </Col>
                      </Row>
                    </React.Fragment>
                  );
                }}
                {...checkboxProps}
              />
              {/* Confirmation popup */}
              <Modal size="md" open={modalOpen} toggle={this.toggleModal.bind(this)} modalClassName="modal-danger" centered>
                <ModalHeader closeAriaLabel="close" className="py-2 px-3">Please Confirm</ModalHeader>
                <ModalBody className="py-3 px-3">Are You sure you want to delete this company.</ModalBody>
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
                          <th scope="row" className="table-active">Company Name</th>
                          <td>
                            <label className={this.state.selectedOption === "Mark" ? 'selected' : ''}>
                              <input type="radio" value="Mark" checked={this.state.selectedOption === "Mark"} onChange={this.radioChange} /><span>Mark</span>
                            </label>
                          </td>
                          <td>
                            <label className={this.state.selectedOption === "Jerry" ? 'selected' : ''}>
                              <input type="radio" value="Jerry" checked={this.state.selectedOption === "Jerry"} onChange={this.radioChange} /><span>Jerry</span>
                            </label>
                          </td>
                          <td>
                            <label className={this.state.selectedOption === "Louis" ? 'selected' : ''}>
                              <input type="radio" value="Louis" checked={this.state.selectedOption === "Louis"} onChange={this.radioChange} /><span>Louis</span>
                            </label>
                          </td>
                          <th className="table-info">{this.state.selectedOption}</th>
                        </tr>
                        <tr>
                          <th scope="row" className="table-active">Company Address</th>
                          <td>
                            <label className={this.state.selectedOption2 === "Jacob" ? 'selected' : ''}>
                              <input type="radio" value="Jacob" checked={this.state.selectedOption2 === "Jacob"} onChange={this.radioChange2} /><span>Jacob</span>
                            </label>
                          </td>
                          <td>
                            <label className={this.state.selectedOption2 === "Thornton" ? 'selected' : ''}>
                              <input type="radio" value="Thornton" checked={this.state.selectedOption2 === "Thornton"} onChange={this.radioChange2} /><span>Thornton</span>
                            </label>
                          </td>
                          <td>
                            <label className={this.state.selectedOption2 === "Langer" ? 'selected' : ''}>
                              <input type="radio" value="Langer" checked={this.state.selectedOption2 === "Langer"} onChange={this.radioChange2} /><span>Langer</span>
                            </label>
                          </td>
                          <th className="table-info">{this.state.selectedOption2}</th>
                        </tr>
                        <tr>
                          <th scope="row" className="table-active">Email</th>
                          <td>
                            <label className={this.state.selectedOption3 === "Shilen" ? 'selected' : ''}>
                              <input type="radio" value="Shilen" checked={this.state.selectedOption3 === "Shilen"} onChange={this.radioChange3} /><span>Shilen</span>
                            </label>
                          </td>
                          <td>
                            <label className={this.state.selectedOption3 === "Larry" ? 'selected' : ''}>
                              <input type="radio" value="Larry" checked={this.state.selectedOption3 === "Larry"} onChange={this.radioChange3} /><span>Larry</span>
                            </label>
                          </td>
                          <td>
                            <label className={this.state.selectedOption3 === "Albert" ? 'selected' : ''}>
                              <input type="radio" value="Albert" checked={this.state.selectedOption3 === "Albert"} onChange={this.radioChange3} /><span>Albert</span> 
                            </label>
                          </td>
                          <th className="table-info">{this.state.selectedOption3}</th>
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

export default CompanyListComponent;
