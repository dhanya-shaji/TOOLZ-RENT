import React,{Component} from "react";
import {ToolsAction} from "../../Actions/index"
import {connect} from "react-redux"
import queryString from "query-string";
import LaddaButton, { XS, ZOOM_OUT } from "react-ladda"
 class AddTools extends Component {
   constructor(props){
     super(props);
     this.state={
       TName:'',
       TQuantity:'',
       TRentcharge:'',
       loading: false,
       tid:''
     }
     this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount() {
        let values = queryString.parse(this.props.location.search);
        let Id = values.id;
        fetch("http://localhost/Tool_Rent_Api/tools.php?type=getById&id="+Id)
        .then(result => {
          return result.json();
        })
        .then(data => {
          console.log(data, "datssssssssssssssssss");
        data.map((item)=>(
        this.setState({
            TName:item.Tool_Name,
            TQuantity:item.Tool_Quantity,
            TRentcharge:item.Tool_Rentcharge,
            tid:item.Tool_Id
           })
        ))});
    };
    handleChange(event) {
       this.setState({
           [event.target.name]: event.target.value
       });
   }
   onUpdatetools=()=>{
     this.props.Tools_update_request({
     TName:this.state.TName,
     TQuantity:this.state.TQuantity,
     TRentcharge:this.state.TRentcharge,
     tid:this.state.tid
     });
     
   }
   componentWillReceiveProps(nextProps){
    if(this.props.isToolUpdate!==nextProps.isToolUpdate){
        if(nextProps.isToolUpdate===1){
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
                    <div>Edit New Tools</div>
                  </div>{" "}
                </div>
              </div>{" "}
              <div className="main-card mb-3 card">
                <div className="card-body">
                  <form
                    className="col-md-10 mx-auto"
                  >
                       <div className="form-group">
                      <label>Tool id:</label>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          name="tid"
                          value={this.state.tid}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Tool name:</label>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Tool name"
                          name="TName"
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
                          value={this.state.TRentcharge}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                    <div className="float-left">
                        <LaddaButton
                          loading={this.state.loading}
                          onClick={() => this.onUpdatetools()}
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
    isToolUpdate:state.Tools.isToolUpdate
})
export default connect(mapStateToProps,{...ToolsAction})(AddTools);
