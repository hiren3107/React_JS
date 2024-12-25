import React from 'react';
import { Link } from 'react-router-dom';

const Productlist = ({arr}) => {
    return (
        <div>
            {
                arr.map((el)=>{
                    return <div key={el.id}>
                      <Link to={`/singalproduct/${el.id}`}> <h1>{el.title}</h1> </Link>
                        <p>{el.body}</p>
                    </div>
                })
            }
        </div>
    );
}

export default Productlist;
