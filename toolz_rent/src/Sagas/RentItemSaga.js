import {put, call,takeEvery} from 'redux-saga/effects';
import {RentAction} from '../Actions/index';
import {insertRentItem,
    getRentitem,
    UpdateRentItemStatus
    
} from '../Apis/Apimethod'
function* Rent_Item_Add_Request(action){
    const Rent_item_response = yield call(insertRentItem,
        '&Rent_Rfid=' +
        action.payload.Rent_Rfid +
        '&Tname=' +
        action.payload.Tname +
        '&TPrice=' +
        action.payload.TPrice +
        '&Tquantity=' +
        action.payload.Tquantity +
        '&Status=' +
        action.payload.Status
        );
    const response=Rent_item_response.response;
    if(response.usercode===1){
     console.log('response',Rent_item_response);

        yield put(RentAction.Rent_Item_Add_Sucess(response))
    } 
}
//select  rentitems from rentitem table 
function* RentItem_select_Request(action){
    const Rent_item_response = yield call(getRentitem,
        '&rfid='+action.payload.Rent_Rfid);
    const response=Rent_item_response.response;
    console.log('hjjj',Rent_item_response);
        yield put(RentAction.Rent_Item_Select_Sucess(response))
    }

//status updation of rentitem
    function* RentItem_status_update_request(action){
        const Rent_status_update_response = yield call(UpdateRentItemStatus,
            '&id='+action.payload.Rent_Item_Id);
        const response=Rent_status_update_response.response;
        if(response.resultcode===1){
        console.log('hjjj',Rent_status_update_response);
            yield put(RentAction.RentItem_status_update_Sucess(response))
        }
    }



export default function* RentItemSaga(){
    yield takeEvery(RentAction.RENTITEM_ADD_REQUEST,Rent_Item_Add_Request);
    yield takeEvery(RentAction.RENTITEM_SELECT_REQUEST,RentItem_select_Request);
    yield takeEvery(RentAction.RENTITEM_STATUS_UPDATE,RentItem_status_update_request);
    
}
