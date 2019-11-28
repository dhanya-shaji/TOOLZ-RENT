import { put, call,takeEvery} from 'redux-saga/effects';
import {CustomerAction} from '../Actions/index';
import {select} from '../Apis/Apimethod';
import {Customeradd,Customerdelete,CustomerSelectById,UpdateCustomer} from '../Apis/Apimethod'
function* Customerrequest(){
    console.log("haiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    const customerresponse = yield call(select);
    const response=customerresponse.response;
    console.log('hjjj',customerresponse);
        yield put(CustomerAction.Customersucess(response))
    
}
function* Customer_add_request(action){ 
    console.log("haiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    const customer_add_response = yield call(Customeradd,
        '&CName='+action.payload.CName+
        '&CHousename='+action.payload.CHousename+
        '&CCity='+action.payload.CCity+
        '&CPhonenumber='+action.payload.CPhonenumber+
        '&CEmail='+action.payload.CEmail+
        '&CMobile='+action.payload.CMobile+
        '&CId='+action.payload.CId+
        '&Ref_by='+action.payload.Ref_by
        )
    ;
    const response=customer_add_response.response;
    console.log('hjjj',customer_add_response);
        yield put(CustomerAction.Customer_add_sucess(response))    
}
//delete customers

function* Customer_delete_request(action){
    //console.log("haiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    const Customer_delete_response = yield call(Customerdelete,
        '&id='+action.payload.id
        );
    const response=Customer_delete_response.response; 
    console.log('hjjj',Customer_delete_response);
        yield put(CustomerAction.Customer_delete_sucess(response))
    
}
//customer by id
function* Customerselectrequest(action){
    console.log("haiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    const customerselectresponse = yield call(CustomerSelectById,
        '&id='+action.payload.id);
    const response=customerselectresponse.response;
    console.log('hjjj',customerselectresponse);
        yield put(CustomerAction.Customerselectsucess(response))
    
}
//update customer
function* Customerupdaterequest(action){
    console.log("haiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",action);
    const customerupdateresponse = yield call(UpdateCustomer,
        '&CName='+action.payload.CName+
        '&CHousename='+action.payload.CHousename+
        '&CCity='+action.payload.CCity+
        '&CPhonenumber='+action.payload.CPhonenumber+
        '&CEmail='+action.payload.CEmail+
        '&CMobile='+action.payload.CMobile+
        '&CId='+action.payload.CId+
        '&Ref_by='+action.payload.Ref_by+
        '&cid='+action.payload.cid);
    const response=customerupdateresponse.response;
    console.log('hjjj',customerupdateresponse);
        yield put(CustomerAction.Customerupdatesucess(response))
    
}


export default function* CustomerSaga(){
    yield takeEvery(CustomerAction.CUST_REQUEST, Customerrequest);
    yield takeEvery(CustomerAction.CUST_ADD_REQUEST, Customer_add_request);  
    yield takeEvery(CustomerAction.CUST_DELETE_REQUEST, Customer_delete_request);
    yield takeEvery(CustomerAction.CUST_SELECT_REQUEST, Customerselectrequest);
    yield takeEvery(CustomerAction.CUST_UPDATE_REQUEST, Customerupdaterequest);
    
}

