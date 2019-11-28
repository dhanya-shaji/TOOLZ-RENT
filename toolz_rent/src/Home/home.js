import React from "react";
import { Provider } from "react-redux";
import sagas from '../Sagas/index'
import ConfigureStore from "./ConfigureStore";
import  Login from '../Container/Login/Login';
import {hashHistory} from 'react-router'
import OpenHome from "./OpenHome";
const store = ConfigureStore();
store.runSaga(sagas);



export default class home extends React.Component {
  componentWillMount(){
    if(sessionStorage.getItem('token') === null){
               
        //window.location.reload();
        hashHistory.push({
            pathname: '/',
        })

    }
}

    render()
     {      
      return (
        < Provider store={store}>
          
    {/* check if user logined or not  */}
    {sessionStorage.getItem('token') != null
        ? 
        <div className="">
            <OpenHome
                location={this.props.location} 
                history={this.props.history}
                children= {this.props.children}/>
              
           </div>
   
        : <div className="">
               <Login 
                />
                
           </div>
           
      }


            
      
            </Provider> 
      )
    }
}