import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function PrivetRout({children}) {
  var data = useSelector((st)=>st)
  console.log(data);
  return (
    <div>
        {data.isLogin ? children  : <Navigate to={"/login"}/>    }
    </div>
  )
}

export default PrivetRout