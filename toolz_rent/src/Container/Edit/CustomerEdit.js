import React,{Component} from "react";
import {connect} from "react-redux";
import queryString from "query-string";
import { CustomerAction } from "../../Actions/index";
import LaddaButton, { XS, ZOOM_OUT } from "react-ladda"
 class CustomerEdit extends Component {
     constructor(props){
         super(props);
         this.state={
             id:'',
             CName:'',
             CHousename:'',
             CCity:'',
             CPhonenumber:'',
             CEmail:'',
             CMobile:'',
             CId:'', 
             loading: false,
             Ref_by:'',
             cid:''
            
         }
         
    this.handleChange = this.handleChange.bind(this);
     }
     componentWillMount() {
        let values = queryString.parse(this.props.location.search);
        let Id = values.id;
        fetch("http://localhost/Tool_Rent_Api/customer.php?type=getById&id="+Id)
        .then(result => {
          return result.json();
        })
        .then(data => {
          console.log(data, "datssssssssssssssssss");
        data.map((item)=>(
        this.setState({
            cid:item.Cust_Id,
            CName:item.Cust_Name,
            CHousename:item.Cust_Housename,
            CCity:item.Cust_City,
            CPhonenumber:item.Cust_Phonenumber,
            CEmail:item.Cust_Email,
            CMobile:item.Cust_Mobile,
            Ref_by:item.Refereneced_By,
            CId:item.Cust_Id_Proof_No,
           })
        ))});
    };
     handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    onUpdateCustomers=()=>{
      console.log(this.state);
        this.props.Customerupdaterequest({
           CName:this.state.CName,
           CHousename:this.state.CHousename,
           CCity:this.state.CCity,
           CPhonenumber:this.state.CPhonenumber,
           CEmail:this.state.CEmail,
           CMobile:this.state.CMobile,
           CId:this.state.CId,
           Ref_by:this.state.Ref_by,
           cid:this.state.cid
        })
    }
    componentWillReceiveProps(nextProps){
        if(this.props.isCustUpdate!==nextProps.isCustUpdate){
            
                this.setState({
                    CName:'',
                    CHousename:'',
                    CCity:'',
                    CPhonenumber:'',
                    CEmail:'',
                    CMobile:'',
                    CId:'',
                    Ref_by:'',
      
                })
            
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
    <div>Edit Customer Details{this.state.CName}</div>
                  </div>{" "}
                </div>
              </div>{" "}

              <div className="main-card mb-3 card">
                <div className="card-body">
                  <form
                    className="col-md-10 mx-auto">
                         <div className="form-group">
                      <label>Customer id:</label>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          name="cid"
                         defaultValue={this.state.cid}
                         onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Customer name:</label>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          name="CName"
                         // defaultValue={item.Cust_Name}
                          value={this.state.CName}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>House name:</label>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          name="CHousename"
                          defaultValue={this.state.CHousename}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>City:</label>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          name="CCity"
                        defaultValue={this.state.CCity}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Phonenumber:</label>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          name="CPhonenumber"
                          defaultValue={this.state.CPhonenumber}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Email:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="CEmail"
                       defaultValue={this.state.CEmail}
                        onChange={this.handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label>Mobile number:</label>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          name="CMobile"
                          defaultValue={this.state.CMobile}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Id proof number:</label>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          name="CId"
                         defaultValue={this.state.CId}
                         onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Referenced by:</label>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          name="Ref_by"
                          defaultValue={this.state.Ref_by}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                      <div className="form-group">
                    <div className="float-left">
                        <LaddaButton
                          loading={this.state.loading}
                          onClick={() => this.onUpdateCustomers()}
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
const mapStateToProps=state=>({
    isCustUpdate:state.Customer.isCustUpdate,
});

export default connect(mapStateToProps
    ,{...CustomerAction})(CustomerEdit);
