var initial = {
    isLogin : false,
    userName : "",
    isErr: false ,
    isLoding : false,
    isPass : false
}

export var login_reducer = (sate=initial,{type,payload})=>{

    switch (type) {
        case "loding":
            return {...sate,isLoding : true}
        case "wrongPass" : 
            return {...sate,isLoding : false , isPass : true}
        case "done":
            return {...sate,isLoding : false , isLogin : true , userName : payload}
        case "errr":
            return {...sate,isLoding : false  , isErr:true , isPass : false}
      
        default:
            return sate
    }

}