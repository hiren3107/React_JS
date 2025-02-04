import React from 'react';
import { Navigate } from 'react-router-dom';

const PriveteRouter = ({children}) => {
    return (
        <div>
            {localStorage.getItem("islog") ? children  : <Navigate to={"/login"}/>    }
        </div>
    );
}

export default PriveteRouter;
