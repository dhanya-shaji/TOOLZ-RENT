import React, { Component } from "react";
import { connect } from "react-redux";
import { hashHistory } from "react-router";
import { LoginAction } from "../../Actions/index";
import LaddaButton, { XS, ZOOM_OUT } from "react-ladda";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      loading: false,
      isLoginSucess: true,
      error: ""
      
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }
  //bind textbox values in state
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  //login function
  login = () => {
    console.log("login started");
    this.props.Loginrequest({
      Username: this.state.username,
      Password: this.state.password
    });
    this.setState({ loading: true });
  };

  componentWillReceiveProps(nextProps) {

   if (nextProps.isLogin) {
      sessionStorage.setItem('token', '1213')
    let loginResponseSerialized=JSON.stringify(nextProps.loginResponse.userData)
    console.log('loginResponseSerialized',loginResponseSerialized)
  sessionStorage.setItem('Username',this.state.username)
  sessionStorage.setItem('id',this.state.id)
  if(nextProps.loginResponse.userData.id==="1"){
      hashHistory.push({ pathname: '/dashboard' })
   //this.props.history.push('/');
  }

   } else {

   this.setState({
   loading: false,
  isLoginSucess:false,
  error:nextProps.error,
   })

  }

   }
  render() {
    
    return (
      <div className="app-container app-theme-white body-tabs-shadow">
        <div className="app-container">
          <div className="h-100 bg-plum-plate bg-animation">
            <div className="d-flex h-100 justify-content-center align-items-center">
              <div className="mx-auto app-login-box col-md-8">
                <div className="modal-dialog w-100 mx-auto">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="h5 modal-title text-center">
                        <h4 className="mt-2">
                          <div>TOOLZ RENT</div>
                          <span>
                         Please sign in to your account below.
                          </span>
                        </h4>
                      </div>
                      <form className="">
                        <div className="form-row">
                          <div className="col-md-12">
                            <div className="position-relative form-group">
                              <input
                                type="text"
                                onChange={this.handleChange}
                                name="username"
                                className="form-control"
                                placeholder="Username"
                                value={this.state.username}
                              />
                            </div>
                          </div>
                       
                        <div className="col-md-12">
                          <div className="position-relative form-group">
                            <input
                              type="password"
                              onChange={this.handleChange}
                              name="password"
                              className="form-control"
                              placeholder="Password"
                              value={this.state.password}
                            />
                          </div>
                        </div>
                        </div>
                        <p className="text-danger">
                          {this.state.isLoginSucess === false
                            ? this.state.error
                            : ""}
                        </p>
                      </form>
                      <div className="divider"></div>
                     
                    </div>
                    <div className="modal-footer clearfix">
                      <div className="float-right">
                        <LaddaButton
                          loading={this.state.loading}
                          onClick={() => this.login()}
                          data-color="#eee"
                          data-size={XS}
                          data-style={ZOOM_OUT}
                          data-spinner-size={20}
                          data-spinner-color="#ddd"
                          data-spinner-lines={12}
                          className="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light ladda-button btn-wd m-r-5 m-b-5"
                        >
                          SignIn
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
    );
  }
}
function mapStateToProps(state) {
  return {
    loginResponse: state.Login.loginResponse,
    loginStatus: state.Login.loginStatus,
    token: state.Login.token,
    resultCode: state.Login.resultCode,
    isLogin: state.Login.isLogin,
    error: state.Login.error
  };
}
export default connect(
  mapStateToProps,
  {
    ...LoginAction
  }
)(Login);
