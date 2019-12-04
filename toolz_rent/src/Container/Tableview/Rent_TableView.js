import React, { Component } from "react";
import { connect } from "react-redux"
import { Link } from 'react-router'
import {RentAction} from '../../Actions/index'

import moment from 'moment';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
class Rent_TableView extends Component {
  constructor(props){
    super(props);
    this.state={
      id:'',
      Rent_Rfid:'',
      RDate:'',
      DDate:'',
      Today: moment(new Date()).format('DD-MM-YYYY'),
    }
    this.props.Rentrequest();
    this.conformRentDelete=this.conformRentDelete.bind(this);
    this.StatusChecking=this.StatusChecking.bind(this);
  }
  componentWillMount() {
    fetch("http://localhost/Tool_Rent_Api/count.php?type=getByAllId")
    .then(result => {
      return result.json();
    })
    .then(data => {
    this.setState({
      Rent_Rfid:data.Refno,
      RDate:data.date,
      DDate:data.duedate
       })
    });
  };
  conformRentDelete(Rent_Id){
    console.log("id value" ,Rent_Id); 
    this.props.Rent_delete_request({id:Rent_Id});
    confirmAlert({
      customUI: ({onClose}) => {
          return (
              <div className='custom-ui'>
                  <h1>Deleted</h1>
                  <button
                      onClick={() => {
                          this.deleteRent()
                          onClose()
                      }}>close</button>
              </div>
          )
      }
  })

}
deleteRent = () => {
window.location.reload();
}

  StatusChecking=(Due_Date)=>
{
  var GivenDate = Due_Date;
  var momentObj = moment(GivenDate, 'DD-MM-YYYY');
  var CurrentDate =this.state.Today;
  var momentObj2 = moment(CurrentDate,'DD-MM-YYYY');
  //console.log("givendate",momentObj);
  //console.log("current date",momentObj2);
  if(momentObj>momentObj2){
     return <p style={{color:"green"}}>No Due</p>;      
  }else{
     // console.log('Given date is not greater than the current date.');
       return <p style={{color:"red"}}>Over Due</p>;
  }
}
componentWillReceiveProps(nextProps){
if(this.props.isRentDelete!==nextProps.isRentDelete){
    if(nextProps.isRentDelete===1){
        this.setState({
            id:''
        });
        console.log("haiiiiii")
    } 
}
}
    
 
  render() {
    return (
      <div style={{marginLeft:"100px",marginTop:"50px",marginRight:"20px"}}>
            <div className="app-main__outer">
              <div className="app-main__inner">
                <div className="app-page-title">
                  <div className="page-title-wrapper">
                    <div className="page-title-heading">
                      <div className="page-title-icon">
                        <i className="pe-7s-pen icon-gradient bg-tempting-azure"></i>
                      </div>
                      <div>Rent Details</div>
                    </div>
                    <div className="page-title-actions">
                  <div className="d-inline-block dropdown">
                    <Link to={"/AddRent?Rent_Rfid="+this.state.Rent_Rfid+
                    "&Rdate="+this.state.RDate+"&DDate="+this.state.DDate}>
                    <button className="btn-wide mb-2 mr-2 btn-icon btn btn-primary btn-lg">
                      <i className="pe-7s-science btn-icon-wrapper"></i>
                      Create
                    </button>
                    </Link>
                  </div>
                </div>{" "}
                  </div>
                </div>
                <div className="main-card mb-4 card">
                  <div className="card-body">
                    <table
                      style={{ width: "100%" }}
                      className="table table-hover table-striped table-bordered"
                    >
                      <thead>
                        <tr>
                          <th>REFERENCE ID</th>
                          <th>CUSTOMER NAME</th>
                          <th>RENT DATE</th>
                          <th>DUE DATE</th>
                          <th>STATUS</th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                      {this.props.rentResponse.map((item, i) => (
                        <tr key={i}>
                          <td>{item.Rent_Rfid}</td>
                          <td>{item.Cust_Name}</td>
                          <td>{item.Rent_Date}</td>
                          <td>{item.Due_Date}</td>
                          <td>
                            {this.StatusChecking(item.Due_Date)}
                        
                         </td>
                          <td>
                            <Link to={"/RentEdit?id="+item.Rent_Id+"&rfid="+item.Rent_Rfid}>
                          <button className="btn-wide mb-2 mr-2 btn-icon btn btn-primary btn-sm">
                             <i className="pe-7s-tools btn-icon-wrapper"> </i>
                             View Details
                           </button>
                           </Link>
                          </td>
                          <td>
                          <button className="btn-wide mb-2 mr-2 btn-icon btn btn-primary btn-sm"
                            onClick={()=>this.conformRentDelete(item.Rent_Id)
                           }>
                          <i className="pe-7s-trash btn-icon-wrapper"> </i>
                             Delete
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
          </div>
      
    );
  }
}
const mapStateToProps= state => ({ 
  
  rentResponse:state.Rent.rentResponse,
  error:state.Rent.error,
  isRentDelete:state.Rent.sRentDelete
  
});
const mapDispatchToProps = {
...RentAction
}
export default connect(mapStateToProps,mapDispatchToProps)(Rent_TableView);

