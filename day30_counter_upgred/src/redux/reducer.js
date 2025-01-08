
var Value = {
    count5 : 0,
    countSquar : 2 ,
    countMulti : 1
}



export var reducer = (state = Value,{type,payload})=>{
    switch (type) {
        case "plus5":
            return {...state,count5 : state.count5 + 5};
        case "multi" :
            return {...state,countSquar : state.countSquar * state.countSquar}
        case "inputValue" : 
            return {...state,countMulti : state.countMulti * payload}
        default:
            return state
    }
}