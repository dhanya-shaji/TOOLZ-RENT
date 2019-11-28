import {CustomerAction} from '../Actions/index'

const intialState = {
    itemResponse:[],
    itemResponseBYID:[],
    error:'',
};

export default function  (state = intialState, action) {
    switch (action.type) {
        //select all customers
        case CustomerAction.CUST_REQUEST:
            return {
                ...state
            }
        case CustomerAction.CUST_REQUEST_SUCCESS:
            return {
                ...state,
                itemResponse:action.payload
                
            }
        case CustomerAction.CUST_REQUEST_FAIL:
            return {
                ...state,
                error:action.payload.error
            }
            //customer insertion
            case CustomerAction.CUST_ADD_REQUEST:
                return {
                    ...state
                }
            case CustomerAction.CUST_ADD_REQUEST_SUCCESS:
                return {
                    ...state,
                    isItemAdded:1
                    
                }
            case CustomerAction.CUST_ADD_REQUEST_FAIL:
                return {
                    ...state,
                    isItemAdded:2
                }
                //customer delete
                case CustomerAction.CUST_DELETE_REQUEST:
                    return {
                        ...state
                    }
                case CustomerAction.CUST_DELETE_REQUEST_SUCCESS:
                    return {
                        ...state,
                        isCustDelete:1
                        
                    }
                case CustomerAction.CUST_DELETE_REQUEST_FAIL:
                    return {
                        ...state,
                        isCustDelete:2
                    }
           //Customer selection by id
           case CustomerAction.CUST_SELECT_REQUEST:
            return {
                ...state,
                itemResponseBYID:[]
            }
        case CustomerAction.CUST_SELECT_REQUEST_SUCCESS:
            return {
                ...state,
                itemResponseBYID:action.payload
                
            }
        case CustomerAction.CUST_SELECT_REQUEST_FAIL:
            return {
                ...state,
                error:action.payload.error,
                itemResponseBYID:[]
            }    
//Customer updation
case CustomerAction.CUST_UPDATE_REQUEST:
    return {
        ...state
    }
case CustomerAction.CUST_UPDATE_REQUEST_SUCCESS:
    return {
        ...state,
        isCustUpdate:1
        
    }
case CustomerAction.CUST_UPDATE_REQUEST_FAIL:
    return {
        ...state,
        isCustUpdate:2
    }    

           
            default:
                return {
                    ...state
                }
    }
}