import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivetRouter = ({children}) => {
    return (
        <div>
            {localStorage.getItem("islog") ? children  : <Navigate to={"/login"}/>    }
        </div>
    );
}

export default PrivetRouter;
