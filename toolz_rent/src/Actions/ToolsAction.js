import {createAction } from 'redux-actions';
//Tools table view 
export const TOOLS_REQUEST ="TOOLS_REQUEST"
export const Toolsrequest=createAction(TOOLS_REQUEST);

export const TOOLS_REQUEST_SUCCESS="TOOLS_REQUEST_SUCCESS"
export const Toolssucess=createAction(TOOLS_REQUEST_SUCCESS); 

export const TOOLS_REQUEST_FAIL="TOOLS_REQUEST_FAIL"
export const ToolSfail=createAction(TOOLS_REQUEST_FAIL);

//add new tools

export const TOOLS_ADD_REQUEST ="TOOLS_ADD_REQUEST"
export const Tools_add_request=createAction(TOOLS_ADD_REQUEST);

export const TOOLS_ADD_REQUEST_SUCCESS="TOOLS_ADD_REQUEST_SUCCESS"
export const Tools_add_sucess=createAction(TOOLS_ADD_REQUEST_SUCCESS); 

export const TOOLS_ADD_REQUEST_FAIL="TOOLS_ADD_REQUEST_FAIL"
export const Tools_add_fail=createAction(TOOLS_ADD_REQUEST_FAIL);
   
//delete tools

export const TOOLS_DELETE_REQUEST ="TOOLS_DELETE_REQUEST"
export const Tools_delete_request=createAction(TOOLS_DELETE_REQUEST);

export const TOOLS_DELETE_REQUEST_SUCCESS="TOOLS_DELETE_REQUEST_SUCCESS"
export const Tools_delete_sucess=createAction(TOOLS_ADD_REQUEST_SUCCESS); 

export const TOOLS_DELETE_REQUEST_FAIL="TOOLS_DELETE_REQUEST_FAIL"
export const Tools_delete_fail=createAction(TOOLS_DELETE_REQUEST_FAIL);

//tool update
export const TOOLS_UPDATE_REQUEST ="TOOLS_UPDATE_REQUEST"
export const Tools_update_request=createAction(TOOLS_UPDATE_REQUEST);

export const TOOLS_UPDATE_REQUEST_SUCCESS="TOOLS_UPDATE_REQUEST_SUCCESS"
export const Tools_update_sucess=createAction(TOOLS_UPDATE_REQUEST_SUCCESS); 

export const TOOLS_UPDATE_REQUEST_FAIL="TOOLS_UPDATE_REQUEST_FAIL"
export const Tools_update_fail=createAction(TOOLS_UPDATE_REQUEST_FAIL);

//tool by id -selection
export const TOOLS_SELECTBYID_REQUEST ="TOOLS_SELECTBYID_REQUEST"
export const Tools_selectbyid_request=createAction(TOOLS_SELECTBYID_REQUEST);

export const TOOLS_SELECTBYID_REQUEST_SUCCESS="TOOLS_SELECTBYID_REQUEST_SUCCESS"
export const Tools_selectbyid_sucess=createAction(TOOLS_SELECTBYID_REQUEST_SUCCESS); 

export const TOOLS_SELECTBYID_REQUEST_FAIL="TOOLS_SELECTBYID_REQUEST_FAIL"
export const Tools_selectbyid_fail=createAction(TOOLS_SELECTBYID_REQUEST_FAIL);

