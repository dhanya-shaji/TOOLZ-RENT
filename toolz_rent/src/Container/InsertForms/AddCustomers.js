import React,{Component} from "react";
import {connect} from "react-redux"
import { CustomerAction } from "../../Actions/index";
import LaddaButton, { XS, ZOOM_OUT } from "react-ladda"
 class AddCustomers extends Component {
     constructor(){
         super();
         this.state={
             CName:'',
             CHousename:'',
             CCity:'',
             CPhonenumber:'',
             CEmail:'',
             CMobile:'',
             CId:'', 
             loading: false,
             Ref_by:''
         }
         
    this.handleChange = this.handleChange.bind(this);
     }
     handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    onUpdateCustomers=()=>{
        this.props.Customer_add_request({
           CName:this.state.CName,
           CHousename:this.state.CHousename,
           CCity:this.state.CCity,
           CPhonenumber:this.state.CPhonenumber,
           CEmail:this.state.CEmail,
           CMobile:this.state.CMobile,
           CId:this.state.CId,
           Ref_by:this.state.Ref_by
        })
    }
    componentWillReceiveProps(nextProps){
        if(this.props.isItemAdded!==nextProps.isItemAdded){
            if(nextProps.isItemAdded===1){
            
                this.setState({
                    CName:'',
                    CHousename:'',
                    CCity:'',
                    CPhonenumber:'',
                    CEmail:'',
                    CMobile:'',
                    CId:'',
                    Ref_by:''
      
                })
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
                    <div>Add New Customers</div>
                  </div>{" "}
                </div>
              </div>{" "}
              <div className="main-card mb-3 card">
                <div className="card-body">
                  <form
                    className="col-md-10 mx-auto">

                    <div className="form-group">
                      <label>Customer name:</label>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Customer name"
                          name="CName"
                          required
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
                          placeholder="House name"
                          value={this.state.CHousename}
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
                          placeholder="City"
                          value={this.state.CCity}
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
                          placeholder="Phonenumber"
                          name="CPhonenumber" 
                          maxLength="10"                         
                          required
                          value={this.state.CPhonenumber}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Email:</label>
                      <input
                       type="email"
                        className="form-control"
                        name="CEmail"
                        placeholder="Email"
                        required
                        value={this.state.CEmail}
                        onChange={this.handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label>Mobile number:</label>
                      <div>
                        <input
                          type="text" 
                          maxLength="10"
                          className="form-control"
                          placeholder="Mobile number"
                          name="CMobile"
                          required
                          value={this.state.CMobile}
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
                          required
                          placeholder="Id proof number"
                          value={this.state.CId}
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
                          placeholder="Referenced by"
                          name="Ref_by"
                          value={this.state.Ref_by}
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
    isItemAdded: state.Customer.isItemAdded
});

export default connect(mapStateToProps
    ,{...CustomerAction})(AddCustomers);
