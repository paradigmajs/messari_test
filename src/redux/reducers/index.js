import { combineReducers } from "redux";
import { asset } from "./asset_reducer";
import { messari } from './messari_reducer';

export const rootReducer = combineReducers({
    messari,
    asset
})