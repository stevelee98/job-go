import { ActionEvent, getActionSuccess } from 'actions/actionEvent';
import { initialState } from './index'
import { ErrorCode } from 'config/errorCode';

export default function (state = initialState, action) {
    switch (action.type) {
        case ActionEvent.GET_SUB_LAUNDRY_INTRO:
        case ActionEvent.GET_PRICE_LAUNDRY_INTRO:
        case ActionEvent.GET_SUB_DRY_CLEAN_INTRO:
        case ActionEvent.GET_PRICE_DRY_CLEAN_INTRO:
            return {
                ...state,
                isLoading: true,
                error: null,
                errorCode: ErrorCode.ERROR_INIT,
                data: null,
                action: action.type
            }
        case getActionSuccess(ActionEvent.GET_SUB_LAUNDRY_INTRO):
        case getActionSuccess(ActionEvent.GET_PRICE_LAUNDRY_INTRO):
        case getActionSuccess(ActionEvent.GET_SUB_DRY_CLEAN_INTRO):
        case getActionSuccess(ActionEvent.GET_PRICE_DRY_CLEAN_INTRO):
            return {
                ...state,
                isLoading: false,
                data: action.payload.data.data !== undefined ? action.payload.data.data : null,
                errorCode: action.payload.data.errorCode,
                action: action.type,
            }
        case ActionEvent.REQUEST_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
                errorCode: action.payload.errorCode,
                action: action.type
            }
        default:
            return state;
    }
}