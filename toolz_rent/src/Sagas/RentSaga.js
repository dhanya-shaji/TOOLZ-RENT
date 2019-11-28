import { put, call,takeEvery} from 'redux-saga/effects';
import {RentAction} from '../Actions/index';
import {selectrent
    ,deleterent,
    insertrent,
    getrent,
    updaterentItem,
    deleterentItem} from '../Apis/Apimethod'
//select all rent items
function* Rentrequest(){
    const rentresponse = yield call(selectrent);
    const response=rentresponse.response;
    console.log('hjjj',rentresponse);
        yield put(RentAction.Rentsucess(response))
    
}
//delete rent 
function* Rent_delete_request(action){
    const deleteresponse = yield call(deleterent,
        '&id='+action.payload.id);
    const response=deleteresponse.response;
    console.log('hjjj',deleteresponse);
        yield put(RentAction.Rent_delete_sucess(response))
    
}
//delete rentitem 
function* Rent_item_delete_request(action){
    const delete_rent_response = yield call(deleterentItem,
        '&id='+action.payload.id);
    const response=delete_rent_response.response;
    if(response.usercode===1){
    console.log('delete response',delete_rent_response);
        yield put(RentAction.Rent_item_delete_sucess(response))
    } 
}
//insert rent 
function* Rent_add_request(action){
    const insertresponse = yield call(insertrent,
        '&CName='
        +action.payload.CName +
        '&TPrice=' +
        action.payload.TPrice +
        '&TItem='+
        action.payload.Tquantity +
        '&RDate=' +
        action.payload.RDate +
        '&DDate=' +
        action.payload.DDate +
        '&Status=' +
        action.payload.Status +
        '&rid=' +
        action.payload.Rent_Rfid
);
    const response=insertresponse.response;
    console.log('hjjj',insertresponse);
        yield put(RentAction.Rent_add_sucess(response))
    
}
//get rent item by id

function* getrentById(action){
    console.log("action id in rent edit",action.payload.id);
    const getrentbyIdresponse = yield call(getrent,
        '&id='+action.payload.id);
    const response=getrentbyIdresponse.response;
    console.log('rent by id',getrentbyIdresponse);
        yield put(RentAction.getrentByIdSuccess(response))
    
}

//update rent item
function* Rent_item_update_request(action){
    const update_rent_response = yield call(updaterentItem,
        '&Rent_Rfid='+action.payload.Rent_Rfid+
        '&Tname='+action.payload.Tname+
        '&Tquantity='+action.payload.Tquantity+
        '&Status='+action.payload.Status+
        '&id='+action.payload.rid);
    const response=update_rent_response.response;
    console.log('hjjj',update_rent_response);
        yield put(RentAction.Rent_item_update_sucess(response))
    
}

export default function* RentSaga(){
yield takeEvery(RentAction.RENT_REQUEST, Rentrequest);
yield takeEvery(RentAction.RENT_DELETE_REQUEST, Rent_delete_request);
yield takeEvery(RentAction.RENT_ITEM_DELETE_REQUEST,Rent_item_delete_request);
yield takeEvery(RentAction.RENT_ADD_REQUEST, Rent_add_request);
yield takeEvery(RentAction.RENT_BY_ID_REQUEST, getrentById);
yield takeEvery(RentAction.RENT_ITEM_UPDATE_REQUEST,Rent_item_update_request);
}