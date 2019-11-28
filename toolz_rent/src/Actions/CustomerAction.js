import {createAction } from 'redux-actions';
//Customer table view 
export const CUST_REQUEST ="CUST_REQUEST"
export const Customerrequest=createAction(CUST_REQUEST);

export const CUST_REQUEST_SUCCESS="CUST_REQUEST_SUCCESS"
export const Customersucess=createAction(CUST_REQUEST_SUCCESS); 

export const CUST_REQUEST_FAIL="CUST_REQUEST_FAIL"
export const Customerfail=createAction(CUST_REQUEST_FAIL);
 
//Add new customers 
export const CUST_ADD_REQUEST ="CUST_ADD_REQUEST"
export const Customer_add_request=createAction(CUST_ADD_REQUEST);

export const CUST_ADD_REQUEST_SUCCESS="CUST_ADD_REQUEST_SUCCESS"
export const Customer_add_sucess=createAction(CUST_ADD_REQUEST_SUCCESS); 

export const CUST_ADD_REQUEST_FAIL="CUST_ADD_REQUEST_FAIL"
export const Customer_add_fail=createAction(CUST_ADD_REQUEST_FAIL);
 
//delete customers

export const CUST_DELETE_REQUEST ="CUST_DELETE_REQUEST"
export const Customer_delete_request=createAction(CUST_DELETE_REQUEST);

export const CUST_DELETE_REQUEST_SUCCESS="CUST_DELETE_REQUEST_SUCCESS"
export const Customer_delete_sucess=createAction(CUST_DELETE_REQUEST_SUCCESS); 

export const CUST_DELETE_REQUEST_FAIL="CUST_DELETE_REQUEST_FAIL"
export const Customer_delete_fail=createAction(CUST_DELETE_REQUEST_FAIL);

//Customer Select BY id

export const CUST_SELECT_REQUEST ="CUST_SELECT_REQUEST"
export const Customerselectrequest=createAction(CUST_SELECT_REQUEST);

export const CUST_SELECT_REQUEST_SUCCESS="CUST_SELECT_REQUEST_SUCCESS"
export const Customerselectsucess=createAction(CUST_SELECT_REQUEST_SUCCESS); 

export const CUST_SELECT_REQUEST_FAIL="CUST_SELECT_REQUEST_FAIL"
export const Customerselectfail=createAction(CUST_SELECT_REQUEST_FAIL);
//customer update

export const CUST_UPDATE_REQUEST ="CUST_UPDATE_REQUEST"
export const Customerupdaterequest=createAction(CUST_UPDATE_REQUEST);

export const CUST_UPDATE_REQUEST_SUCCESS="CUST_UPDATE_REQUEST_SUCCESS"
export const Customerupdatesucess=createAction(CUST_UPDATE_REQUEST_SUCCESS); 

export const CUST_UPDATE_REQUEST_FAIL="CUST_UPDATE_REQUEST_FAIL"
export const Customerupdatefail=createAction(CUST_UPDATE_REQUEST_FAIL);
