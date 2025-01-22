import { isdone, iserr, isloding } from "./actionType";

 var patharnilakir={
    isLoding :false,
    isDone:false,
    isErr:false,
    arr:[]
 }

export var productReducer = (state = patharnilakir,{type,payload})=>{

    switch (type) {
        case isloding:
            return {...state,isLoding : true}
        
        case isdone:
            return {...state,isLoding : false,isDone:true,arr:payload}

        case iserr:
            return {...state,isLoding : false, isErr:true}
            
        default:
            return state
    }
}