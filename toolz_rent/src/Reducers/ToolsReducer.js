import {ToolsAction} from '../Actions/index'

const intialState = {
    toolsResponse:[],
    toolsbyidresponse:[],
    error:'',
};

export default function  (state = intialState, action) {
    switch (action.type) {
        //tableview of tools
        case ToolsAction.TOOLS_REQUEST:
            return {
                ...state
            }
        case ToolsAction.TOOLS_REQUEST_SUCCESS:
            return {
                ...state,
                toolsResponse:action.payload
                
            }
        case ToolsAction.TOOLS_REQUEST_FAIL:
            return {
                ...state,
                error:action.payload.error
            }
            //tools add
            case ToolsAction.TOOLS_ADD_REQUEST:
            return {
                ...state
            }
        case ToolsAction.TOOLS_ADD_REQUEST_SUCCESS:
            return {
                ...state,
                isToolAdd:1
                
            }
        case ToolsAction.TOOLS_ADD_REQUEST_FAIL:
            return {
                ...state,
                isToolAdd:2
            }
//tool delete
            case ToolsAction.TOOLS_DELETE_REQUEST:
                return {
                    ...state
                }
            case ToolsAction.TOOLS_DELETE_REQUEST_SUCCESS:
                return {
                    ...state,
                    isToolDelete:1
                    
                }
            case ToolsAction.TOOLS_DELETE_REQUEST_FAIL:
                return {
                    ...state,
                    isToolDelete:2
                }
            //tool update
            case ToolsAction.TOOLS_UPDATE_REQUEST:
                return {
                    ...state
                }
            case ToolsAction.TOOLS_UPDATE_REQUEST_SUCCESS:
                return {
                    ...state,
                    isToolUpdate:1
                    
                }
            case ToolsAction.TOOLS_UPDATE_REQUEST_FAIL:
                return {
                    ...state,
                    isToolUpdate:2
                }
            //tool select y id
            case ToolsAction.TOOLS_SELECTBYID_REQUEST:
                return {
                    ...state
                }
            case ToolsAction.TOOLS_SELECTBYID_REQUEST_SUCCESS:
                return {
                    ...state,
                    toolsbyidresponse:action.payload
                    
                }
            case ToolsAction.TOOLS_SELECTBYID_REQUEST_FAIL:
                return {
                    ...state,
                    error:action.payload.error
                }
         
            default:
                return {
                     ...state
                }
    }
}