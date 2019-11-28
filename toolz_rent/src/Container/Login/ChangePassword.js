import React, { Component } from "react";
import {connect} from "react-redux"
import {LoginAction} from '../../Actions/index';
import LaddaButton, {XS, ZOOM_OUT} from 'react-ladda';
class  ChangePassword extends Component {
  constructor() {
    super();
    this.state={
        loadingSubmitButton:false,
        new_password:'',
        confirm_password:''

    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    });
}
onUpdatePassword=()=>{
  this.props.changePassword({
      Password :   this.state.new_password,
      confirm_password:this.state.confirm_password,
      Username: sessionStorage.getItem("Username"),

  })
}
componentWillReceiveProps(nextProps){
  if(this.props.isPasswordChanged!==nextProps.isPasswordChanged){
      if(nextProps.isPasswordChanged===1){
          this.setState({
              new_password:'',
              confirm_password:'',

          })
      } 
  }
}

  render() {
    return (
      <div className="app-container app-theme-white body-tabs-shadow">
        <div className="app-container">
          <div className="h-100 bg-premium-dark">
            <div className="d-flex h-100 justify-content-center align-items-center">
              <div className="mx-auto app-login-box col-md-8">
                <div className="modal-dialog w-100">
                  <div className="modal-content">
                    <div className="modal-body">
                      <h5 className="modal-title">
                        <h4 className="mt-2">
                          <div>TOOLZ RENT</div>   
                        </h4>
                      </h5>
                      <div className="divider row"></div>
                      <div className="form-row">
                        <div className="col-md-12">
                        <div className="form-group">
                                  <label for="new_password">New Password</label>
                                  <input type="password"
                                   className="form-control" 
                                  name="new_password" id="new_password"
                                   value={this.state.new_password} 
                                   onChange={this.handleChange} 
                                   placeholder="New Password"/>
                              </div>
                                 <div className="form-group">
                                   <label for="confirm_password">Conform Password</label>
                                   <input type="password" 
                                   className="form-control" 
                                   name="confirm_password"
                                    id="confirm_password" 
                                    value={this.state.confirm_password}
                                     onChange={this.handleChange} 
                                     placeholder="Conform Password"/>
                                 </div>
                                    <LaddaButton
                                        loading={this.state.loadingSubmitButton}
                                        onClick={this.onUpdatePassword}
                                        data-color="#eee"
                                        data-size={XS}
                                        data-style={ZOOM_OUT}
                                        data-spinner-size={20}
                                        data-spinner-color="#ddd"
                                        data-spinner-lines={12}
                                        className="btn btn-success waves-effect text-left ladda-button btn-wd m-l-5 pull-right ">
                                        Update
                </LaddaButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>
     </div>
     </div>
    );
  }
}
function mapToSateToProps(state){
  return{
      isPasswordChanged : state.Login.isPasswordChanged,
      passwordChangeErrorMsg:state.Login.passwordChangeErrorMsg,
  }
}
export default connect(mapToSateToProps,{
  ...LoginAction
})(ChangePassword);
