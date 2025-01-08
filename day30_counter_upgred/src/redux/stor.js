import { legacy_createStore } from "redux";
import { reducer } from "./reducer";


export var hiren = legacy_createStore(reducer)