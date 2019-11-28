import {createAction } from 'redux-actions';
//login 
export const LOGIN_REQUEST ="LOGIN_REQUEST"
export const Loginrequest=createAction(LOGIN_REQUEST);

export const LOGIN_REQUEST_SUCCESS="LOGIN_REQUEST_SUCCESS"
export const Loginsucess=createAction(LOGIN_REQUEST_SUCCESS); 

export const LOGIN_REQUEST_FAIL="LOGIN_REQUEST_FAIL"
export const Loginfail=createAction(LOGIN_REQUEST_FAIL);

//change password
export const CHANGE_PASSWORD="CHANGE_PASSWORD"
export const changePassword=createAction(CHANGE_PASSWORD);

export const CHANGE_PASSWORD_SUCCESS="CHANGE_PASSWORD_SUCCESS"
export const changePasswordSuccess=createAction(CHANGE_PASSWORD_SUCCESS);

export const CHANGE_PASSWORD_FAIL="CHANGE_PASSWORD_FAIL"
export const changePasswordFail=createAction(CHANGE_PASSWORD_FAIL);
//count
export const COUNT_REQUEST ="COUNT_REQUEST"
export const Countrequest=createAction(COUNT_REQUEST);

export const COUNT_REQUEST_SUCCESS="COUNT_REQUEST_SUCCESS"
export const Countsucess=createAction(COUNT_REQUEST_SUCCESS); 

export const COUNT_REQUEST_FAIL="COUNT_REQUEST_FAIL"
export const Countfail=createAction(COUNT_REQUEST_FAIL);
 
