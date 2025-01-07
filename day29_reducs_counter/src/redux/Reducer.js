import { ochu, vadhu } from "./actionType";

var counter = 0

var reducs = (state = counter,action)=>{

    switch (action.type) {
        case vadhu:
           return state + 1
        case ochu:
           return state - 1
        default:
          return  state
    }
}

export default reducs