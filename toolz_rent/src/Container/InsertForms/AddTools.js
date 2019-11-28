import React,{Component} from "react";
import {ToolsAction} from "../../Actions/index"
import {connect} from "react-redux"
import LaddaButton, { XS, ZOOM_OUT } from "react-ladda"
 class AddTools extends Component {
   constructor(){
     super();
     this.state={
       TName:'',
       TQuantity:'',
       TRentcharge:'',
       loading: false,
     }
     this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
       this.setState({
           [event.target.name]: event.target.value
       });
   }
   onAddtools=()=>{
     this.props.Tools_add_request({
     TName:this.state.TName,
     TQuantity:this.state.TQuantity,
     TRentcharge:this.state.TRentcharge
     });
     
   }
   componentWillReceiveProps(nextProps){
    if(this.props.isToolAdd!==nextProps.isToolAdd){
        if(nextProps.isToolAdd===1){
            this.setState({
           TName:'',
           TQuantity:'',
           TRentcharge:'' 
  
            });

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
                    <div>Add New Tools</div>
                  </div>{" "}
                </div>
              </div>{" "}
              <div className="main-card mb-3 card">
                <div className="card-body">
                  <form
                    className="col-md-10 mx-auto"
                  >
                    <div className="form-group">
                      <label>Tool name:</label>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Tool name"
                          name="TName"
                          required
                          value={this.state.TName}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Tool quantity:</label>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Tool quantity"
                          required
                          name="TQuantity"
                          value={this.state.TQuantity}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Tool rentcharge/day:</label>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Tool rent charge / day"
                          name="TRentcharge"
                          required
                          value={this.state.TRentcharge}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                    <div className="float-left">
                        <LaddaButton
                          loading={this.state.loading}
                          onClick={() => this.onAddtools()}
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
isToolAdd:state.Tools.isToolAdd
})
export default connect(mapStateToProps,{...ToolsAction})(AddTools);
