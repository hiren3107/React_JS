import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../Firebase/fire';

const Productlist = () => {
    var [Data, setData] = useState({
        Title: "",
        Price: "",
        Img: ""
    })
    var [id, setId] = useState("")
    var [arr, setArr] = useState([])

    var user = collection(db, "user")

    async function getData() {
        var get = await getDocs(user)

        var ans = get.docs.map((e) => {
            return { id: e.id, ...e.data() }
        })

        setArr(ans);
    }

    // console.log(arr);

    useEffect(() => {
        getData()
    }, [])


    function handdel(h) {

        var { value, name } = h.target
        setData({ ...Data, [name]: value })
    }
    async function send(hi) {
        hi.preventDefault()

        if (id == "") {
            var data = await addDoc(user, Data)
            alert("Data Submited...")
            setData({
                Title: "",
                Price: "",
                Img: ""
            })
            // console.log(data);
            
        }
        else{
            var edit = doc(db, "user", id)
            
            updateDoc(edit,Data)

            alert("Data Edited............")
            setData({
                Title: "",
                Price: "",
                Img: ""
            })
            setId("")
            
        }
        
        getData()
    }

    async function handdelDelet(deletId) {
        var del = doc(db, "user", deletId)
        await deleteDoc(del)
        // console.log(del);
        getData()
    }

    function handdelEdit(editId) {

        arr.forEach((el)=>{
            if(el.id == editId){
                setData({
                    Title: el.Title,
                    Price: el.Price,
                    Img: el.Img
                })
            }
        })



        setId(editId)
    }

    return (
        <>
            <div className='bapo'>
                <div className="bachu">
                    <h1>Enter Product Data</h1>
                    <form action="" onSubmit={send}>
                        <input type="text" value={Data.Title} required name='Title' placeholder='Enter Product Title' onChange={handdel} /> <br />
                        <input type="text" value={Data.Price} required name='Price' placeholder='Enter Product Price' onChange={handdel} /> <br />
                        <input type="text" value={Data.Img} required name='Img' placeholder='Enter Product Imgage URL' onChange={handdel} /> <br />
                        {id == "" ? <input type="submit" value="Submit"/>  :  <input type="submit"  value="Edit"/> }
                    </form>
                </div>
            </div>
            <div className='main'>
                {
                    arr.map((el) => {
                        return <div className='card'>
                            <img className='img' src={el.Img} alt={el.Title} />
                            <h1>{el.Title}</h1>
                            <h3>{el.Price}</h3>
                            <div className='btn-box'>
                                <button className='edit' onClick={() => handdelEdit(el.id)}>Edite</button>
                                <button className='delet' onClick={() => handdelDelet(el.id)}>Delet</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    );
}
export default Productlist;
