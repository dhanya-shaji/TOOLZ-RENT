import React, { Component } from "react";
import queryString from "query-string";
import { RentAction } from "../../Actions/index";
import LaddaButton, { XS, ZOOM_OUT } from "react-ladda";
import { connect } from "react-redux";
class RentEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      Rent_Rfid:'',
      Totalprice:[],
      Rent_Item_Id:'',
      loading:false,
      
    };
    this.onUpdateStatus=this.onUpdateStatus.bind(this);
    this.refresh=this.refresh.bind(this);
    this.TotalPriceupdate=this.TotalPriceupdate.bind(this);
  }
  componentWillMount() {
    let values = queryString.parse(this.props.location.search);
    let Id = values.id;
    let Rfid=values.rfid;
    this.props.getrentById({ id: Id });
    this.props.RentItem_select_Request({Rent_Rfid:Rfid});
    
   
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.rentitemResponse !== nextProps.rentitemResponse) {
     let totalPrice=0;
    nextProps.rentitemResponse.map((item)=>(
      totalPrice=parseFloat(totalPrice)+parseFloat(item.Total_Price)
    ))
    console.log("Total price",totalPrice);
  
    }
    if (this.props.isRentitemStatusUpdate!==nextProps.isRentitemStatusUpdate) {
      if (nextProps.isRentitemStatusUpdate===1) {
        this.setState({loading:false});
        this.refresh();
      }
    }
  }
  
  onUpdateStatus(Rent_Item_Id){
    //console.log(Rent_Item_Id);
    this.props.RentItem_status_update_request({Rent_Item_Id:Rent_Item_Id});
    this.setState({  loading: true }); 
}
refresh=()=>{
  window.location.reload();
}
 

TotalPriceupdate(){
  console.log("componewillmont",this.props.rentitemResponse);
  var sum=0;
  this.props.rentitemResponse.map((item)=>(
    sum=Number(parseInt(sum)+parseInt(item.Total_Price))
  ))
  return<h2>{sum}</h2>
}


  render() {
   // console.log("rentitem ",this.props.rentitemResponse);
    return (
      <div
        style={{ marginLeft: "100px", marginTop: "50px", marginRight: "20px" }}
      >
        <div className="app-main__outer">
          <div className="app-main__inner">
            <div className="app-page-title">
              <div className="page-title-wrapper">
               {this.props.getrentbyIdresponse.length > 0 && (
                      <div className="card-body">
                        {this.props.getrentbyIdresponse.map((item, i) => (
                          <div>
                            <div><h5>REFERENCE NUMBER :{item.Rent_Rfid}</h5></div>
                            <div><h5>CUSTOMER NAME :{item.Cust_Name}</h5></div>
                        <div><h6>Rent Date :{item.Rent_Date}</h6></div>
                        <div><h6>Due Date :{item.Due_Date}</h6></div>
                      </div>
                        ))}
                      </div> 
                )}
                 
              </div>
            </div>
            <div className="main-card mb-3 card">
              <div className="card-body">
        
                <table
                  style={{ width: "100%" }}
                  id="example"
                  className="table table-hover table-striped table-bordered"
                >
                  <thead>
                    <tr>
                      <th>REFERENCE ID</th>
                      <th>TOOL NAME</th>
                      <th>TOOl PRICE</th>
                      <th>TOOL QUANTITY</th>
                      <th>TOTAL PRICE</th>
                      <th>STATUS</th>
                      <th></th>
                  
                    </tr>
                  </thead>
                  <tbody>
                  {this.props.rentitemResponse.map((item, i) => (
                    <tr>
                      <td>{item.Rent_Rfid}</td>
                      <td>{item.Tool_Name}</td>
                      <td>{item.Tool_Price}</td>
                      <td>{item.Tool_Quantity}</td>
                      <td>{item.Total_Price}</td>
                      <td>
                        <LaddaButton
                          loading={this.state.loading}
                         onClick={()=>this.onUpdateStatus(item.Rent_Item_Id)}
                          data-color="#eee"
                          data-size={XS}
                          data-style={ZOOM_OUT}
                          data-spinner-size={20}
                          data-spinner-color="#ddd"
                          data-spinner-lines={12}
                          className="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light ladda-button btn-wd m-r-5 m-b-5"
                        >
                          {item.Status}
                        </LaddaButton>
                      </td>
                      
                    </tr>
                  ))}
                  </tbody>
                </table>
                  <h3>Total price:</h3>
                  {this.TotalPriceupdate(this.props.rentitemResponse)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  getrentbyIdresponse: state.Rent.getrentbyIdresponse,
  error: state.Rent.error,
  rentitemResponse:state.Rent.rentitemResponse,
  isRentitemStatusUpdate:state.Rent.isRentitemStatusUpdate,
  
});
const mapDispatchToProps = {
  ...RentAction
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RentEdit);
