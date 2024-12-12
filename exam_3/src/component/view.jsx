
function View({data}){
    console.log(data);
return(<>
    {
        data.map((Element)=>{
            return <div>
                <h1>Product name : {Element.name}</h1>
                <h1>Product Price : {Element.price}</h1>
                <h1>Product category : {Element.Category}</h1>
                <h1>Product description : {Element.des}</h1>
                <h1>img : {Element.file}</h1>
                <br /><br /><br />
                {/* <img src={Element.file} alt="" /> */}
            </div>
        })
    }
</>)
}

export default View