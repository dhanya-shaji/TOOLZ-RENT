import React,{Component} from "react";
import { connect } from "react-redux";
import {LoginAction} from '../../Actions/index'
 class dash extends Component {
     constructor(props){
         super(props);
         this.props.Countrequest();
     }
  render() {
      console.log("props",this.props.countResponse);
    return (
      <div
        style={{ marginLeft: "100px", marginTop: "50px", marginRight: "20px" }}
      >
        <div class="app-main__outer">
          <div class="app-main__inner">
            <div class="tabs-animation">           
              <div class="row">
                <div class="col-md-6 col-xl-4">
                  <div class="card mb-3 widget-content bg-night-fade">
                    <div class="widget-content-wrapper text-white">
                      <div class="widget-content-left">
                        <div class="widget-heading">Total Customers</div>
                      </div>
                      <div class="widget-content-right">
                        <div class="widget-numbers text-white">
    <span>{this.props.countResponse.C_Cust}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-xl-4">
                  <div class="card mb-3 widget-content bg-arielle-smile">
                    <div class="widget-content-wrapper text-white">
                      <div class="widget-content-left">
                        <div class="widget-heading">Tools</div>
                      </div>
                      <div class="widget-content-right">
                        <div class="widget-numbers text-white">
                          <span>{this.props.countResponse.C_Tool}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-xl-4">
                  <div class="card mb-3 widget-content bg-happy-green">
                    <div class="widget-content-wrapper text-white">
                      <div class="widget-content-left">
                        <div class="widget-heading">Rent</div>
                      </div>
                      <div class="widget-content-right">
                        <div class="widget-numbers text-white">
                          <span>{this.props.countResponse.C_Rent}</span>
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
const mapStateToProps = state => ({
    countResponse:state.Login.countResponse,
    errors:state.Login.errors,
  
  });
  const mapDispatchToProps = {
   ...LoginAction
  };
export default connect(mapStateToProps,
    mapDispatchToProps)(dash);