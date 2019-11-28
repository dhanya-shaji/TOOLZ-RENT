import {createAction } from 'redux-actions';
//Tools table view 
export const RENT_REQUEST ="RENT_REQUEST"
export const Rentrequest=createAction(RENT_REQUEST);

export const RENT_REQUEST_SUCCESS="RENT_REQUEST_SUCCESS"
export const Rentsucess=createAction(RENT_REQUEST_SUCCESS); 

export const RENT_REQUEST_FAIL="RENT_REQUEST_FAIL"
export const Rentfail=createAction(RENT_REQUEST_FAIL);

//add new rent

export const RENT_ADD_REQUEST ="RENT_ADD_REQUEST"
export const Rent_add_request=createAction(RENT_ADD_REQUEST);

export const RENT_ADD_REQUEST_SUCCESS="RENT_ADD_REQUEST_SUCCESS"
export const Rent_add_sucess=createAction(RENT_ADD_REQUEST_SUCCESS); 

export const RENT_ADD_REQUEST_FAIL="RENT_ADD_REQUEST_FAIL"
export const Rent_add_fail=createAction(RENT_ADD_REQUEST_FAIL);
   
//delete rent

export const RENT_DELETE_REQUEST ="RENT_DELETE_REQUEST"
export const Rent_delete_request=createAction(RENT_DELETE_REQUEST);

export const RENT_DELETE_REQUEST_SUCCESS="RENT_DELETE_REQUEST_SUCCESS"
export const Rent_delete_sucess=createAction(RENT_DELETE_REQUEST_SUCCESS); 

export const RENT_DELETE_REQUEST_FAIL="RENT_DELETE_REQUEST_FAIL"
export const Rent_delete_fail=createAction(RENT_DELETE_REQUEST_FAIL);
 
//Get by Id 
export const RENT_BY_ID_REQUEST ="RENT_BY_ID_REQUEST"
export const getrentById=createAction(RENT_BY_ID_REQUEST);

export const RENT_BY_ID_REQUEST_SUCCESS="RENT_BY_ID_REQUEST_SUCCESS"
export const getrentByIdSuccess=createAction(RENT_BY_ID_REQUEST_SUCCESS);

export const RENT_BY_ID_REQUEST_FAIL="RENT_BY_ID_REQUEST_FAIL"
export const getrentByIdFail=createAction(RENT_BY_ID_REQUEST_FAIL);
//get all rent items
export const RENTITEM_SELECT_REQUEST ="RENTITEM_SELECT_REQUEST"
export const RentItem_select_Request=createAction(RENTITEM_SELECT_REQUEST);

export const RENTITEM_SELECT_REQUEST_SUCCESS="RENTITEM_SELECT_REQUEST_SUCCESS"
export const Rent_Item_Select_Sucess=createAction(RENTITEM_SELECT_REQUEST_SUCCESS); 


 //delete rentitem
export const RENT_ITEM_DELETE_REQUEST ="RENT_ITEM_DELETE_REQUEST"
export const Rent_item_delete_request=createAction(RENT_ITEM_DELETE_REQUEST);

export const RENT_ITEM_DELETE_REQUEST_SUCCESS="RENT_ITEM_DELETE_REQUEST_SUCCESS"
export const Rent_item_delete_sucess=createAction(RENT_ITEM_DELETE_REQUEST_SUCCESS); 

export const RENT_ITEM_DELETE_REQUEST_FAIL="RENT_ITEM_DELETE_REQUEST_FAIL"
export const Rent_item_delete_fail=createAction(RENT_ITEM_DELETE_REQUEST_FAIL);
//update rent
export const RENT_ITEM_UPDATE_REQUEST ="RENT_ITEM_UPDATE_REQUEST"
export const Rent_item_update_request=createAction(RENT_ITEM_UPDATE_REQUEST);

export const RENT_ITEM_UPDATE_REQUEST_SUCCESS="RENT_ITEM_UPDATE_REQUEST_SUCCESS"
export const Rent_item_update_sucess=createAction(RENT_ITEM_UPDATE_REQUEST_SUCCESS); 

export const RENT_ITEM_UPDATE_REQUEST_FAIL="RENT_ITEM_UPDATE_REQUEST_FAIL"
export const Rent_item_update_fail=createAction(RENT_ITEM_UPDATE_REQUEST_FAIL);
//insert rent item
export const RENTITEM_ADD_REQUEST ="RENTITEM_ADD_REQUEST"
export const Rent_Item_Add_Request=createAction(RENTITEM_ADD_REQUEST);

export const RENTITEM_ADD_SUCCESS="RENTITEM_ADD_SUCCESS"
export const Rent_Item_Add_Sucess=createAction(RENTITEM_ADD_SUCCESS);

