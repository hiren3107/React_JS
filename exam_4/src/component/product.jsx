import { useEffect, useState } from "react"
import { v4 } from 'uuid';
import Productlist from "./productlist";

function Product(){
    var [obj,setObj]=useState({
        id:v4(),
        name:'',
        price:"",
        img:"",
        des:""
    })
    var [res,setRes] = useState("")
    var [hh,setHh]=useState("")
    var [tru,setTru]=useState(false)
    var [arr,setArr]=useState(JSON.parse(localStorage.getItem("data")) || [])
    var [arr1,setArr1]=useState([])

    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(arr))
    },[arr])

    function handelChange(h){
        var {name,value} = h.target
        setObj({...obj,[name]:value})
    }

    function handelSubmit(e){
        e.preventDefault()

        if(hh==""){
        setArr([...arr,{...obj,id:v4()}])

        setObj({
            name:'',
            price:"",
            img:"",
            des:""
        })
    }
    else{
        var k = arr.map((el)=>{
            if(el.id == hh){
                return {...el,...obj}
            }
            else{
                return el
            }
        })
        setArr(k) 
        setHh("")
        setObj({
            name:'',
            price:"",
            img:"",
            des:""
        })
    }
    }
    
    function handelEdit(editid){
        var ans = arr.filter((el)=>{
            if(el.id != editid){
               return el
            }
        })
        setArr(ans)
    }

    function handelDelet(deleid){
        setHh(deleid)
        arr.forEach((element) => {
            if(deleid == element.id)
                {
                    setObj({...element})
                }
            });
        }
        
        function short(h){
            var {value} = h.target
            setArr([...arr])
            setTru(true)
            if(value == "hig"){
                var ss= arr.sort((a,b)=>{
                    return b.price - a.price
                })
                setArr1(ss)
            }
            if(value == "low"){
                var sss= arr.sort((a,b)=>{
                    return a.price - b.price
                })
                setArr1(sss)
            }   
        }

    return (
        <>
        <form action="" onSubmit={handelSubmit}>
            <input type="text" value={obj.name} onChange={handelChange} name="name" placeholder="Product name" />
            <input type="number" value={obj.price} onChange={handelChange} name="price" placeholder="Product price" />
            <input type="text" value={obj.img} onChange={handelChange} name="img" placeholder="Product IMG" />
            <input type="text" value={obj.des} onChange={handelChange} name="des" placeholder="Product Description" />
            {/* {hh==""?"": <input type="button" onClick={edited} value="edit"/>} */}
            <input type="submit" value={hh=="" ? "submit" : "Edit"}/>
        </form>
      <center><select value="" onChange={short}>
            <option value="op">Option</option>
            <option value="hig">High to Low</option>
            <option value="low">Low to High</option>
        </select>
        </center>  
        <Productlist arr={arr} handelEdit={handelEdit} handelDelet={handelDelet} arr1={arr1} tru={tru}/>
        </>
    )
}

export default Product