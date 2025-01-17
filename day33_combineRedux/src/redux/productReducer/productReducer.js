
var initial = {
    isProductLogin : false,
    isProduct : false,
    isProductErr : false
} 

export var productReducer = (state = initial,{type,payload})=>{

    switch (type) {
        case "proLoding":
            return {...state,isProductLogin : true}
        case "proLoding":
            return {...state,isProductLogin : false , isProduct : true}
        case "proLoding":
            return {...state,isProductLogin : false , isProductErr:true}
        default:
            return state
    }
}

