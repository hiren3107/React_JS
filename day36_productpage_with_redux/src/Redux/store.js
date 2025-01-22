import { applyMiddleware, legacy_createStore } from "redux";
import { productReducer } from "./ProductReducer/reducer";
import { thunk } from "redux-thunk";



export var hiren = legacy_createStore(productReducer,applyMiddleware(thunk))