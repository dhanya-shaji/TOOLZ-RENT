import React, { Component } from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import LaddaButton, { XS, ZOOM_OUT } from "react-ladda";
import { RentAction, CustomerAction,ToolsAction } from "../../Actions/index";
class AddRentItem extends Component {
  constructor(props) {
    super(props);
    this.state={
      Rent_Rfid:'',
      Tname:'',
      Tquantity:'',
      Status:'',
      loading: false, 
    
    };
    console.log(this.props);
    this.props.Toolsrequest(); 
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    let values = queryString.parse(this.props.location.search);
    let Id = values.id;
    fetch("http://localhost/Tool_Rent_Api/rent.php?type=getById&id="+Id)
    .then(result => {
      return result.json();
    })
    .then(data => {
      console.log(data, "datssssssssssssssssss");
    data.map((item)=>(
    this.setState({
      Rent_Rfid:item.Rent_Rfid,
       
       })
    ))});
};
handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  
  }
  onAddrentitem=() => {
    this.props.Rent_item_add_request({
      Rent_Rfid:this.state.Rent_Rfid,
      Tname:this.state.Tname, 
      Tquantity:this.state.Tquantity,
      Status:this.state.Status
    });
  };
  
  componentWillReceiveProps(nextProps) {
    if (this.props.isRentitemInsert !== nextProps.isRentitemInsert) {
      if (nextProps.isRentitemInsert === 1) {
        console.log("state aaaa",this.state);
        this.setState({
          Rent_Rfid:'',
          Tname:'',
          Tquantity:'',
           Status:''
        });
      }
    }
  }

  render() {
    return (
      <div
        style={{ marginLeft: "100px", marginTop: "50px", marginRight: "20px" }}
      >
        <div className="app-main__outer">
          <div className="app-main__inner">
            <div className="app-page-title">
              <div className="page-title-wrapper">
                <div className="page-title-heading">
                  <div>Add new item</div>
                </div>{" "}
              </div>
            </div>{" "}
              <div className="main-card mb-3 card">
                <div className="card-body">
                  <form className="col-md-10 mx-auto">
                    <div className="form-group">
                      <label>Reference number:</label>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          name="Rent_Rfid"
                          value={this.state.Rent_Rfid}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  <div className="form-group">
                      <label>Tool name:</label>
                      <div>
                        <select 
                          className="form-control"
                          name="Tname"
                          value={this.state.Tname}
                         onChange={this.handleChange}
                        >
                          {this.props.toolsResponse.map((item, i) => (
                            <option value={item.Tool_Name}>
                              {item.Tool_Name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Tool Quantity:</label>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Tool quantity"
                          name="Tquantity"
                          value={this.state.Tquantity}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Status:</label>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Status"
                          name="Status"
                          value={this.state.Status}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <div className="float-left">
                        <LaddaButton
                          loading={this.state.loading}
                         onClick={() => this.onAddrentitem()}
                          data-color="#eee"
                          data-size={XS}
                          data-style={ZOOM_OUT}
                          data-spinner-size={20}
                          data-spinner-color="#ddd"
                          data-spinner-lines={12}
                          className="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light ladda-button btn-wd m-r-5 m-b-5"
                        >
                          ADD
                        </LaddaButton>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  toolsResponse:state.Tools.toolsResponse,
  isRentitemInsert:state.Rent.isRentitemInsert,

});
const mapDispatchToProps = {
  ...RentAction,
  ...CustomerAction,
  ...ToolsAction
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddRentItem);
