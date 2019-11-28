import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { CustomerAction } from "../../Actions/index";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
class CustomerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
    this.props.Customerrequest();
  }

  conformCustomerDelete(Cust_Id){
    console.log("id value", Cust_Id);
    this.props.Customer_delete_request({ id:Cust_Id });
        confirmAlert({
          customUI: ({ onClose }) => {
            return (
              <div className="custom-ui">
                <h1>Deleted....!</h1>
                <button
                  onClick={() => {
                    this.deleteCustomer();
                    onClose();
                  }}
                >
                  Close
                </button>
              </div>
            );
          }
        })
    
  };
  deleteCustomer = () => {
    
    window.location.reload();
  };
  componentWillReceiveProps(nextProps) {
    if (this.props.isCustomerDelete !== nextProps.isCustomerDelete) {
      if (nextProps.isCustomerDelete === 1) {
       
        this.setState({
          id: ""
        });
      }
    }
  }

  render() {
    return (
      <div
        style={{ marginLeft: "100px", marginTop: "50px", marginRight: "20px" }}
      >
        <div class="app-main__outer">
          <div class="app-main__inner">
            <div class="app-page-title">
              <div class="page-title-wrapper">
                <div class="page-title-heading">
                  <div class="page-title-icon">
                    <i class="pe-7s-science icon-gradient bg-happy-itmeo"></i>
                  </div>
                  <div>CUSTOMERS PROFILE</div>
                </div>
                <div class="page-title-actions">
                  <div class="d-inline-block dropdown">
                    <Link to="/AddCustomer">
                      <button className="btn-wide mb-2 mr-2 btn-icon btn btn-primary btn-lg">
                        <i className="pe-7s-science btn-icon-wrapper"></i>
                        Create
                      </button>
                    </Link>
                  </div>
                </div>{" "}
              </div>
            </div>
            {this.props.itemResponse.length === 0 && <h2>Loading...</h2>}
            {this.props.itemResponse.length > 0 && (
              <div>
                {this.props.itemResponse.map((item, i) => (
                  <div class="col-md-12 col-lg-6 col-xl-4">
                    <div class="card-shadow-primary profile-responsive card-border mb-3 card">
                      <div class="dropdown-menu-header">
                        <div class="dropdown-menu-header-inner bg-danger">
                          <div class="menu-header-content btn-pane-right">
                            <div>
                              <h5 class="menu-header-title">
                                {item.Cust_Name}
                              </h5>
                            </div>
                            <div class="menu-header-btn-pane">
                              <Link to={"/CustomerEdit?id="+item.Cust_Id} param={{data:item}}>
                                <button class="btn-wide mb-2 mr-2 btn-icon btn btn-primary btn-sm">
                                  <i class="pe-7s-tools btn-icon-wrapper"> </i>
                                  Edit
                                </button>
                              </Link>
                              <button
                                class="btn-wide mb-2 mr-2 btn-icon btn btn-primary btn-sm"
                                onClick={()=>this.conformCustomerDelete(
                                  item.Cust_Id
                                )}
                              >
                                <i class="pe-7s-trash btn-icon-wrapper"> </i>
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                              <div class="widget-content-left">
                                <div class="widget-heading">HOUSE NAME</div>
                              </div>
                              <div class="widget-content-right">
                                <div class=" text-primary">
                                  {item.Cust_Housename}
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                              <div class="widget-content-left">
                                <div class="widget-heading">CITY</div>
                              </div>
                              <div class="widget-content-right">
                                <div class=" text-primary">
                                  <span>{item.Cust_City}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                              <div class="widget-content-left">
                                <div class="widget-heading">PHONE NUMBER</div>
                              </div>
                              <div class="widget-content-right">
                                <div class=" text-primary">
                                  <span>{item.Cust_Phonenumber}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                              <div class="widget-content-left">
                                <div class="widget-heading">EMAIL</div>
                              </div>
                              <div class="widget-content-right">
                                <div class="text-primary">
                                  <span>{item.Cust_Email}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                              <div class="widget-content-left">
                                <div class="widget-heading">MOBILE</div>
                              </div>
                              <div class="widget-content-right">
                                <div class=" text-primary">
                                  <span>{item.Cust_Mobile}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                              <div class="widget-content-left">
                                <div class="widget-heading">
                                  ID PROOF NUMBER
                                </div>
                              </div>
                              <div class="widget-content-right">
                                <div class="text-primary">
                                  <span>{item.Cust_Id_Proof_No}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                              <div class="widget-content-left">
                                <div class="widget-heading">REFERENCED BY</div>
                              </div>
                              <div class="widget-content-right">
                                <div class=" text-primary">
                                  <span>{item.Refereneced_By}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  itemResponse: state.Customer.itemResponse,
  resultCode: state.Customer.resultCode,
  isItem: state.Customer.isItem,
  error: state.Customer.error,
  isCustomerDelete: state.Customer.isCustomerDelete
});
const mapDispatchToProps = {
  ...CustomerAction
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerView);
