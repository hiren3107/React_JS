import React, { useRef, useState } from 'react'
import Tender from './render'


function AddData() {
    var h1 = useRef(0)
    var h2 = useRef(0)
    var h3 = useRef(0)
    var [Arr, setArr] = useState([])
    function send(hi) {
        hi.preventDefault()
        var Data = {
            Title: h1.current.value,
            Price: h2.current.value,
            Img: h3.current.value
        }
        setArr([...Arr, Data])
    }

    return (
        <>
            <div className='bapo'>
                <div className="bachu">
                    <h1>Enter Product Data</h1>
                    <form action="" onSubmit={send}>
                        <input type="text" required  placeholder='Enter Product Title' ref={h1}/> <br />
                        <input type="text" required placeholder='Enter Product Price' ref={h2} /> <br />
                        <input type="text" required placeholder='Enter Product Imgage URL' ref={h3} /> <br />
                        <input type="submit" />
                    </form>
                </div>
            </div>
            <Tender detail={Arr} />
        </>
    )
}

export default AddData

