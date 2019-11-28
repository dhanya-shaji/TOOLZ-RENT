import React from 'react'
import Header from '../Container/layout/Header';
import Sidebar from '../Container/layout/Sidebar';
export default class OpenHome extends React.Component{
    render()
    {

        return(
            <div>
                <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
        <Header/> 
          <div className="app-main">
                <Sidebar
                location={this.props.location} 
                history={this.props.history}/>
        
         
              </div>
              <div id="page-wrapper">
                 {this.props.children}
             </div>
         
        }

        </div> 
            </div>
        )
    }
}