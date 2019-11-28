import React, { Component } from "react";
import { connect } from "react-redux"
import { Link } from 'react-router'
import {ToolsAction} from '../../Actions/index'
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
class ToolsView extends Component {
    constructor(props){
        super(props);
          this.state={
            id:''
          }
        this.props.Toolsrequest(); 
        this.conformToolDelete=this.conformToolDelete.bind(this);
        
      }
      conformToolDelete(Tool_Id){
        console.log("id value" ,Tool_Id);
        this.props.Tools_delete_request({id:Tool_Id});
         confirmAlert({
          customUI: ({onClose}) => {
              return (
                  <div className='custom-ui'>
                      <h1>Deleted....!!!</h1>
                      <button
                          onClick={() => {
                              this.deleteTool()
                              onClose()
                          }}>Close</button>
                  </div>
              )
          }
      })

  }
  deleteTool = () => {
    window.location.reload();
  }
  componentWillReceiveProps(nextProps){
    if(this.props.isToolDelete!==nextProps.isToolDelete){
        if(nextProps.isToolDelete===1){
            this.setState({
                id:''
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
                 <div className="page-title-icon">
                   <i className="pe-7s-science icon-gradient bg-happy-itmeo"></i>
                 </div>
                 <div>TOOLS PROFILE</div>
               </div>
               <div className="page-title-actions">
                 <div className="d-inline-block dropdown">
                  <Link to="/AddTools">
                   <button className="btn-wide mb-2 mr-2 btn-icon btn btn-primary btn-lg">
                     <i className="pe-7s-science btn-icon-wrapper"></i>
                     Create
                   </button>
                   </Link>
                   <div
                     tabindex="-1"
                     role="menu"
                     aria-hidden="true"
                     className="dropdown-menu dropdown-menu-right"
                   >
                     <ul className="nav flex-column"></ul>
                   </div>
                 </div>
               </div>{" "}
             </div>
           </div>
          { this.props.toolsResponse.length === 0 && <h2>Loading...</h2>}
              {this.props.toolsResponse.length > 0 && (
             <div>
                 
                {this.props.toolsResponse.map((item, i) => (

           <div className="col-md-12 col-lg-6 col-xl-4">
             <div className="card-shadow-primary profile-responsive card-border mb-3 card">
               <div className="dropdown-menu-header">
                 <div className="dropdown-menu-header-inner bg-danger">
                  
                   
                   <div className="menu-header-content btn-pane-right">
                     <div>
                       <h5 className="menu-header-title">{item.Tool_Name}</h5>
                     </div>
                     <div className="menu-header-btn-pane">
                       <Link to={"/ToolEdit?id="+item.Tool_Id}>
                     <button className="btn-wide mb-2 mr-2 btn-icon btn btn-primary btn-sm">
                             <i className="pe-7s-tools btn-icon-wrapper"> </i>
                             Edit
                           </button>
                           </Link>
                           <button className="btn-wide mb-2 mr-2 btn-icon btn btn-primary btn-sm"
                           onClick={()=>this.conformToolDelete(item.Tool_Id)
                           }>
                             <i className="pe-7s-trash btn-icon-wrapper"> </i>
                             Delete
                           </button>
                     </div>
                   </div>
                 </div>
               </div>
               <ul className="list-group list-group-flush">
                 <li className="list-group-item">
                   <div className="widget-content p-0">
                     <div className="widget-content-wrapper">
                       <div className="widget-content-left">
                         <div className="widget-heading">TOOLS QUANTITY</div>
                       </div>
                       <div className="widget-content-right">
                         <div className=" text-primary">
                         {item.Tool_Quantity}
                         </div>
                       </div>
                     </div>
                   </div>
                 </li>
                 <li className="list-group-item">
                   <div className="widget-content p-0">
                     <div className="widget-content-wrapper">
                       <div className="widget-content-left">
                         <div className="widget-heading">RENTCHARGE</div>
                       </div>
                       <div className="widget-content-right">
                         <div className=" text-primary">
                           <span>{item.Tool_Rentcharge}</span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </li>
                 
               </ul>
             </div>
           </div>
                 ))}
                 </div>
           )}
         </div>
       </div>
       </div>
   );
 }
}


const mapStateToProps= state => ({ 
  
  toolsResponse:state.Tools.toolsResponse,
  resultCode: state.Tools.resultCode,
  isItem: state.Tools.isItem,
  error:state.Tools.error,
  isToolDelete:state.Tools.isToolDelete
});
const mapDispatchToProps = {
...ToolsAction
}
export default connect(mapStateToProps,mapDispatchToProps)(ToolsView);
