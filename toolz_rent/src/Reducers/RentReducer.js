import {RentAction} from '../Actions/index'

const intialState = {
    rentResponse:[],
    error:'',
    getrentbyIdresponse:[],
    rentitemResponse:[]
};

export default function  (state = intialState, action) {
    switch (action.type) {
        //tableview of rent
        case RentAction.RENT_REQUEST:
            return {
                ...state
            }
        case RentAction.RENT_REQUEST_SUCCESS:
            return {
                ...state,
                rentResponse:action.payload
                
            }
        case RentAction.RENT_REQUEST_FAIL:
            return {
                ...state,
                error:action.payload.error
            }
            //delete rent item
            case RentAction.RENT_DELETE_REQUEST:
                return {
                    ...state
                }
            case RentAction.RENT_DELETE_REQUEST_SUCCESS:
                return {
                    ...state,
                    isRentDelete:1
                    
                }
            case RentAction.RENT_DELETE_REQUEST_FAIL:
                return {
                    ...state,
                    isRentDelete:2
                }
                //insert rent item
                case RentAction.RENT_ADD_REQUEST:
                return {
                    ...state
                }
            case RentAction.RENT_ADD_REQUEST_SUCCESS:
                return {
                    ...state,
                    isRentInsert:1
                    
                }
            case RentAction.RENT_ADD_REQUEST_FAIL:
                return {
                    ...state,
                    isRentInsert:2
                }
                //get rent item by id
                case RentAction.RENT_BY_ID_REQUEST:
                    return {
                        ...state
                    }
                case RentAction.RENT_BY_ID_REQUEST_SUCCESS:
                    return {
                        ...state,
                        getrentbyIdresponse:action.payload
                        
                    }
                case RentAction.RENT_BY_ID_REQUEST_FAIL:
                    return {
                        ...state,
                        error:action.payload.error
                    }
                    //select all rent items from rentitem table
                    case RentAction.RENTITEM_SELECT_REQUEST:
                        return {
                            ...state
                        }
                    case RentAction.RENTITEM_SELECT_REQUEST_SUCCESS:
                        return {
                            ...state,
                            rentitemResponse:action.payload 
                            
                        }
                    
                        
//detete rentitems
case RentAction.RENT_ITEM_DELETE_REQUEST:
                return {
                    ...state
                }
            case RentAction.RENT_ITEM_DELETE_REQUEST_SUCCESS:
                return {
                    ...state,
                    isRentitemDelete:1
                    
                }
            case RentAction.RENT_ITEM_DELETE_REQUEST_FAIL:
                return {
                    ...state,
                    isRentitemDelete:2
                }
                //update rent item
                case RentAction.RENT_ITEM_UPDATE_REQUEST:
                return {
                    ...state
                }
            case RentAction.RENT_ITEM_UPDATE_REQUEST_SUCCESS:
                return {
                    ...state,
                    isRentitemUpdate:1
                    
                }
            case RentAction.RENT_ITEM_UPDATE_REQUEST_FAIL:
                return {
                    ...state,
                    isRentitemUpdate:2
                }
                //Add rent item
                 
                 case RentAction.RENTITEM_ADD_REQUEST:
                    return {
                        ...state,
                        isRentitemAdd:0
                    }
                case RentAction.RENTITEM_ADD_SUCCESS:
                    return {
                        ...state,
                        isRentitemAdd:1
                        
                    }
    

            default:
                return {
                    ...state
                }
    }
}