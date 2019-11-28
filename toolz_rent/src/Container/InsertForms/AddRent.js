import React, { Component } from "react";
import { connect } from "react-redux";
import LaddaButton, { XS, ZOOM_OUT } from "react-ladda";
import queryString from "query-string";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { RentAction, CustomerAction, ToolsAction } from "../../Actions/index";
class AddRent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      CName: "",
      TPrice: "",
      TItem: "",
      RDate: "",
      DDate: "",
      Status: "Return",
      Rent_Rfid: "",
      Tname: "",
      Tquantity: "",
      rid: "",
      Tnamevalue: "",
      Render_Quantity: "",
      rfid: "",
      Tool_Id: "",
      Tid: "",
      status:"No Due",
    };
    this.props.Customerrequest();
    this.props.Toolsrequest();
    this.handleChange = this.handleChange.bind(this);
    this.refreshTable=this.refreshTable.bind(this);
    this.onAddrentitem=this.onAddrentitem.bind(this);
    this.onAddrent=this.onAddrent.bind(this);
    this.conformRentitemDelete=this.conformRentitemDelete.bind(this);
    this.refreshTable=this.refreshTable.bind(this);
    this.TotalPriceupdate=this.TotalPriceupdate.bind(this);
    this.quantityCheck=this.quantityCheck.bind(this);
  }
  componentWillMount() {
    let values = queryString.parse(this.props.location.search);
    let Rent_Rfid = values.Rent_Rfid;
    let RDate = values.Rdate;
    let DDate = values.DDate;
    //console.log("state:", this.state.rfid);
    this.setState({
      Rent_Rfid: Rent_Rfid,
      RDate: RDate,
      DDate: DDate
    });
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.toolsbyidresponse !== nextProps.toolsbyidresponse) {
      if (nextProps.toolsbyidresponse.length > 0) {
        this.setState({
          TPrice: nextProps.toolsbyidresponse[0].Tool_Rentcharge,
          Render_Quantity: nextProps.toolsbyidresponse[0].Tool_Quantity
        })
      }
    } 
  if (this.props.isRentitemAdd!==nextProps.isRentitemAdd) {
    if (nextProps.isRentitemAdd===1) {
      this.refreshTable();
      this.setState({loading:false});
    }
  }
  if (this.props.isRentitemDelete!==nextProps.isRentitemDelete) {
  if (nextProps.isRentitemDelete===1) {
    this.refreshTable();
    this.setState({
      id:''
    });
  }
}
}

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    if (event.target.name === "Tname") {
      this.props.Tools_selectbyid_request({ Tool_Id: event.target.value });
    }
  }
  refreshTable = () => {
    this.props.RentItem_select_Request({
      Rent_Rfid:this.state.Rent_Rfid
    })
  };
  onAddrentitem =()=> {
    this.props.Rent_Item_Add_Request({
      Rent_Rfid:this.state.Rent_Rfid ,
      Tname:this.state.Tname,
      TPrice:this.state.TPrice,
      Tquantity:this.state.Tquantity,
      Status:this.state.Status
    });
    this.setState({  loading: true });
  };
  //add rent
  onAddrent = () => {
    this.props.Rent_add_request({
      CName:
        this.state.CName, 
        TPrice:
        this.state.TPrice, 
        Tquantity:
        this.state.Tquantity, 
        RDate:
        this.state.RDate,
        DDate:
        this.state.DDate,
        Status:
        this.state.status,
        Rent_Rfid:
        this.state.Rent_Rfid
    });
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>Done</h1>
            <button
              onClick={() => {
                this.addRent();
                onClose();
              }}
            >
              close
            </button>
          </div>
        );
      }
    });
  };
  addRent = () => {
    window.location.reload();
  };

  //delete rent item
  conformRentitemDelete = data => e => {
    this.props.Rent_item_delete_request({
      id:data
    });
  };
  //total price of rent
  TotalPriceupdate() {
    var sum = 0;
    this.props.rentitemResponse.map(
      item => (sum = Number(parseInt(sum) + parseInt(item.Total_Price)))
    );
    return <h2>{sum}</h2>;
  }
  //quantity checking for tools
  quantityCheck() {
    var availableTool = this.state.Render_Quantity;
    var needTool = this.state.Tquantity;
    if (parseInt(availableTool) < parseInt(needTool)) {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className="custom-ui">
              <h3>Sorry</h3>
              <p>Available only {this.state.Render_Quantity}items</p>
              <button onClick={() => onClose()}>close</button>
            </div>
          );
        }
      });
    }
  }

  render() {
    // console.log("rentitem ",this.props);
    return (
      <div
        style={{ marginLeft: "100px", marginTop: "50px", marginRight: "20px" }}
      >
        <div className="app-main__outer">
          <div className="app-main__inner">
            <div className="app-page-title">
              <div className="page-title-wrapper">
                <div className="page-title-heading">
                  <div>Rent Details</div>
                </div>{" "}
              </div>
            </div>{" "}
            {this.props.itemResponse.length === 0 && <h2>loading....</h2>}
            {this.props.itemResponse.length > 0 && (
              <div className="main-card mb-3 card">
                <div className="card-body">
              
                    <div>
                      <div>
                        <div className="col-md-4 mx-auto">
                          <label>Reference id:</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="Rent_Rfid"
                            value={this.state.Rent_Rfid}
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="col-md-4 mx-auto">
                          <label>Rent date:</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Rent date"
                            name="RDate"
                            value={this.state.RDate}
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="col-md-4 mx-auto">
                          <label>Due date:</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Due date"
                            name="DDate"
                            value={this.state.DDate}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Customer name:</label>
                        <div>
                          <select
                            defaultValue="1"
                            className="form-control"
                            name="CName"
                            value={this.state.CName}
                            onChange={this.handleChange}
                          >
                            <option value="1">-- Select Customer--</option>
                            {this.props.itemResponse.map((item, index) => (
                              <option key={index} value={item.Cust_Name}>
                                {item.Cust_Name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-md-4 mx-auto">
                          <label>Tool name:</label>
                          <select
                            className="form-control"
                            defaultValue="1"
                            name="Tname"
                            value={this.state.Tname}
                            onChange={event => this.handleChange(event)}
                          >
                            <option value="1">-- Select tool--</option>
                            {this.props.toolsResponse.map((item, tidex) => (
                              <option key={tidex} value={item.Tool_Id}>
                                {item.Tool_Name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-4 mx-auto">
                          <label>Unit price:</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="prize"
                            name="TPrice"
                            value={this.state.TPrice}
                          />
                        </div>
                        <div className="col-md-4 mx-auto">
                          <label>Quantity:</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={this.state.Render_Quantity}
                            name="Tquantity"
                            value={this.state.Tquantity}
                            onChange={this.handleChange}
                          />
                          {this.quantityCheck()}
                        </div>
                      </div>

                      <div
                        className="form-group"
                        style={{ marginTop: "100px", marginLeft: "600px" }}
                      >
                        <div className="float-right">  
                        <LaddaButton
                          loading={this.state.loading}
                          onClick={this.onAddrentitem}
                          data-color="#eee"
                          data-size={XS}
                          data-style={ZOOM_OUT}
                          data-spinner-size={20}
                          data-spinner-color="#ddd"
                          data-spinner-lines={12}
                          className="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light ladda-button btn-wd m-r-5 m-b-5"
                        >
                       ADD Tool
                        </LaddaButton>
                        </div>
                        </div>
                      <div style={{ marginTop: "150px" }}>
                        <button
                          className="btn-wide mb-2 mr-2 btn-icon btn btn-primary btn"
                          onClick={() => this.onAddrent()}
                        >
                          SAVE
                        </button>
                      </div>
                    </div>
                    <h3>Total price:</h3>
                    {this.TotalPriceupdate(this.props.rentitemResponse)}
                  
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="col-lg-12">
          <div className="main-card mb-3 card">
            <div className="card-body">
              <button
                className="btn-wide mb-2 mr-2 btn-icon btn btn-primary btn"
                onClick={() => this.refreshTable()}
              >
                Refresh
              </button>
              <table className="mb-0 table table-borderless">
                <thead>
                  <tr>
                    <th>Tool Name</th>
                    <th>Unit price</th>
                    <th>Quantity</th>
                    <th>Total price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.rentitemResponse.map((item, i) => (
                    <tr key={i}>
                      <td>{item.Tool_Name}</td>
                      <td>{item.Tool_Price}</td>
                      <td>{item.Tool_Quantity}</td>
                      <td>{item.Total_Price}</td>
                      <td>
                        <button
                          className="btn-wide mb-2 mr-2 btn-icon btn btn-primary btn"
                          onClick={this.conformRentitemDelete(
                            item.Rent_Item_Id
                          )}
                        >
                          <i className="pe-7s-trash btn-icon-wrapper"> </i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isRentInsert: state.Rent.isRentInsert,
  itemResponse: state.Customer.itemResponse,
  resultCode: state.Customer.resultCode,
  isItem: state.Customer.isItem,
  error: state.Customer.error,
  isCustomerDelete: state.Customer.isCustomerDelete,
  toolsResponse: state.Tools.toolsResponse,
  isRentitemAdd: state.Rent.isRentitemAdd,
  rentitemResponse: state.Rent.rentitemResponse,
  isRentitemDelete: state.Rent.isRentitemDelete,
  toolsbyidresponse: state.Tools.toolsbyidresponse
});
const mapDispatchToProps = {
  ...RentAction,
  ...CustomerAction,
  ...ToolsAction
};
export default connect(mapStateToProps, mapDispatchToProps)(AddRent);
