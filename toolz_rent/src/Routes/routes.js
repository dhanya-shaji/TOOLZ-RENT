import React from "react";
import { Route, Router,IndexRoute,browserHistory } from "react-router";
import Login from '../Container/Login/Login'
import home from '../Home/home'
import OpenHome from '../Home/OpenHome'
import ToolsView from '../Container/Tableview/ToolsView'
import CustomerView from '../Container/Tableview/CustomerView'
import ChangePassword from '../Container/Login/ChangePassword'
import AddTools from '../Container/InsertForms/AddTools'
import Rent_TableView from '../Container/Tableview/Rent_TableView'
import AddCustomers from '../Container/InsertForms/AddCustomers'
import AddRent from '../Container/InsertForms/AddRent'
import dash from '../Container/Dashboard/dash'
import RentEdit from '../Container/Edit/RentEdit'
import AddRentItem from '../Container/InsertForms/AddRentItem'
import CustomerEdit from '../Container/Edit/CustomerEdit'
import ToolEdit from '../Container/Edit/ToolEdit'
import RentItemEdit from '../Container/Edit/RentItemEdit'
export default (
    <Router history={browserHistory}>
      <Route path="/" component={home}>
      <IndexRoute component={Login} />
      <Route path="/home" component={home}/>
      <Route path="/Login" component={Login}></Route>
      <Route path="/OpenHome" component={OpenHome}></Route>
      <Route path="/ToolsView" component={ToolsView}></Route>
      <Route path="/CustomerView" component={CustomerView}></Route>
      <Route path="/ChangePassword" component={ChangePassword}></Route>
      <Route path="/AddTools" component={AddTools}></Route>
      <Route path="/Rent_TableView" component={Rent_TableView}></Route>
      <Route path="/AddCustomer" component={AddCustomers}></Route>
      <Route path="/AddRent" component={AddRent}></Route>
      <Route path="/dashboard" component={dash}></Route>
      <Route path="/RentEdit" component={RentEdit}></Route>
      <Route path="/AddRentItem" component={AddRentItem}></Route>
      <Route path="/CustomerEdit" component={CustomerEdit}></Route>
      <Route path="/ToolEdit" component={ToolEdit}></Route>
      <Route path="/RentItemEdit" component={RentItemEdit}></Route>
      </Route>
    </Router>

  ); 