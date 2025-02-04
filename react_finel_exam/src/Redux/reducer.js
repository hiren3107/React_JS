import { loding, logout, signup} from "./actionType";

var incial = {
    isLoading:false,
    isLogin:false,
    signup :[],


}

var reducs = (state = incial,{type,payload})=>{

    switch (type) {
        case signup:
           return {isLoading:false,isLogin:true,signup:payload}
        case loding:
           return {isLoading:true}
        case logout:
            return {isLogin:false,isLoading:false}
        default:
          return  state
    }
}

export default reducs