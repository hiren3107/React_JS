function Productlist({arr,handelEdit,handelDelet,arr1,tru}){
    return (
        <>
        <div className="main">
        {
            tru == false?arr.map((el)=>{
            return <div key={el.id} className="card">
                <img src={el.img}/>
                <h1>{el.name}</h1>
                <h1>{el.price}</h1>
                <h1>{el.des}</h1>
                <button className="del" onClick={()=>{handelEdit(el.id)}}>delet</button> &nbsp;&nbsp;&nbsp;
                <button className="edi" onClick={()=>{handelDelet(el.id)}}>edit</button>
            </div>
        }): arr1.map((el)=>{
            return <div key={el.id} className="card">
                <img src={el.img}/>
                <h1>{el.name}</h1>
                <h1>{el.price}</h1>
                <h1>{el.des}</h1>
                <button className="del" onClick={()=>{handelEdit(el.id)}}>delet</button> &nbsp;&nbsp;&nbsp;
                <button className="edi" onClick={()=>{handelDelet(el.id)}}>edit</button>
            </div>
        })
        }
        </div>
        </>
    )
}

export default Productlist