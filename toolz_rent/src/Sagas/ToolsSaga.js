import {put, call,takeEvery,takeLatest } from 'redux-saga/effects';
import {ToolsAction} from '../Actions/index';
import {selecttools} from '../Apis/Apimethod';
import {Tooladd} from '../Apis/Apimethod';
import {Tooldelete,Toolupdate} from '../Apis/Apimethod'
import {SelectToolById} from '../Apis/Apimethod'
//select all tools
function* Toolsrequest(){
   // console.log("haiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    const toolsresponse = yield call(selecttools);
    const response=toolsresponse.response;
    console.log('hjjj',toolsresponse);
        yield put(ToolsAction.Toolssucess(response))
    
}
//add tools
function* Tools_add_request(action){
    //console.log("haiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    const{TName,TQuantity,TRentcharge}=action.payload;

    const param='&TName='+TName+
    '&TQuantity='+TQuantity+
    '&TRentcharge='+TRentcharge

    const tools_add_response = yield call(Tooladd,param
        );
    const response=tools_add_response.response;
    //console.log('hjjj',tools_add_response);
        yield put(ToolsAction.Tools_add_sucess(response))
    
}
//delete tools
function* Tools_delete_request(action){
    //console.log("haiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    const tools_delete_response = yield call(Tooldelete,
        '&id='+action.payload.id
        );
    const response=tools_delete_response.response; 
    //console.log('hjjj',tools_delete_response);
        yield put(ToolsAction.Tools_delete_sucess(response))
    
}
function* Tools_update_request(action){
    const tools_update_response = yield call(Toolupdate,
        '&TName='+action.payload.TName+
        '&TQuantity='+action.payload.TQuantity+
        '&TRentcharge='+action.payload.TRentcharge+
        '&tid='+action.payload.tid
        );
    const response=tools_update_response.response; 
    //console.log('hjjj',tools_update_response);
        yield put(ToolsAction.Tools_update_sucess(response))
    } 
//select tool by id
function* Tools_selectbyid_request(action){
    const tools_selectbyid_response = yield call(SelectToolById,
        '&id='+action.payload.Tool_Id
        );
    const response=tools_selectbyid_response.response; 
     console.log('response',tools_selectbyid_response);
        yield put(ToolsAction.Tools_selectbyid_sucess(response))
    } 

export default function* ToolsSaga(){
    yield takeLatest(ToolsAction.TOOLS_REQUEST, Toolsrequest);
    yield takeEvery(ToolsAction.TOOLS_ADD_REQUEST, Tools_add_request);
    yield takeEvery(ToolsAction.TOOLS_DELETE_REQUEST, Tools_delete_request);
    yield takeEvery(ToolsAction.TOOLS_UPDATE_REQUEST, Tools_update_request);
    yield takeEvery(ToolsAction.TOOLS_SELECTBYID_REQUEST,Tools_selectbyid_request)
    
}

 