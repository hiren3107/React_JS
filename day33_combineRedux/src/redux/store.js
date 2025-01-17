import { combineReducers, legacy_createStore } from "redux";
import { login_reducer } from "./loginReducer/reducer";
import { productReducer } from "./productReducer/productReducer"

var allReducer = combineReducers({
    login_reducer,
    productReducer 
})

export var hiren = legacy_createStore(allReducer)