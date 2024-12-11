import React, { useState } from 'react'
import View from './view'

function Form() {
    var [obj, setObj] = useState({
        name: '',
        course: '',
        hobby: [""],
        tec: [""]
    })
    var [data, setData] = useState([])

    function getData(h) {
        var { name, value, dataset } = h.target

        if (name == "hobby") {
            let arr = [...obj.hobby]
            arr[dataset.index] = value
            setObj({ ...obj, hobby: arr })
        }
        else if (name == "tec") {
            let arr2 = [...obj.tec]
            arr2[dataset.index] = value
            setObj({ ...obj, tec: arr2 })
        }
        else {
            setObj({ ...obj, [name]: value })
        }
    }

    function addInput() {
        setObj({ ...obj, hobby: [...obj.hobby, ""] })

    }
    function add2input() {
        setObj({ ...obj, tec: [...obj.tec, ""] })

    }
    function subData(j){
        j.preventDefault()
        setData([...data,obj])
        console.log(data);
    }

    return (
        <>
            <div className='main'>
                <form action="" onSubmit={subData}>
                    <h1 className='h1'>Detail</h1>
                    <input className='tt' type="text" name='name' placeholder='Enter Your Name' onChange={getData} />
                    <input className='tt' type="text" name='course' placeholder='Enter Your Course' onChange={getData} />
                    <div className='po'>
                        <input className='btn1' type="button" name='hobby' value="Add" onClick={addInput} />
                        {
                            obj.hobby.map((el, index) => {
                                return <>
                                    <input className='hobbyinput' type="text" name='hobby' placeholder='Enter Your Hobby' onChange={getData} data-index={index} />
                                </>
                            })
                        }
                    </div>
                    <div className='po'>
                        <input className='btn1' type="button" name='tec' value="Add" onClick={add2input} />
                        {
                            obj.tec.map((el, index) => {
                                return <>
                                    <input className='hobbyinput' type="text" name='tec' placeholder='Technology' onChange={getData} data-index={index} />
                                </>
                            })
                        }
                    </div>
                    <input className='tt' type="submit" />
                </form>
            </div>
            <View data ={data}/>
        </>
    )
}

export default Form
