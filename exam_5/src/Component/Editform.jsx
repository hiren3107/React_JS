import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Editform = () => {

    var { idd } = useParams()
    console.log(idd);

    var goproduct = useNavigate()
    

    var [Data, setData] = useState({
        Title: "",
        Price: '',
        Img: ""
    })
    function handdel(h) {
        var { value, name } = h.target
        setData({ ...Data, [name]: value })

    }

    useEffect(() => {
        fetch(`http://localhost:3000/product/${idd}`)
            .then((res) => res.json())
            .then((Res) => {
                // console.log(Res);
                setData(Res)
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])

    function send(hi) {
        hi.preventDefault()

       
        fetch(`http://localhost:3000/product/${idd}`,{
            method : "PUT",
            body : JSON.stringify(Data)
        })
        alert("Product Edited.....")

        goproduct("/product")
    }

    

    return (
        <div className='bapo'>
            <div className="bachu">
                <h1>Edite Your Product Data</h1>
                <form action="" onSubmit={send}>
                    <input value={Data.Title} className='input' type="text" required name='Title' placeholder='Enter Product Title' onChange={handdel} /> <br />
                    <input value={Data.Price} className='input' type="text" required name='Price' placeholder='Enter Product Price' onChange={handdel} /> <br />
                    <input value={Data.Img} className='input' type="text" required name='Img' placeholder='Enter Product Imgage URL' onChange={handdel} /> <br />
                    <input className='input' type="submit" value="Edite" />
                </form>
            </div>
        </div>
    );
}

export default Editform;
