import { legacy_createStore } from "redux";
import { login_reducer } from "./loginReducer/reducer";



export var hiren = legacy_createStore(login_reducer)