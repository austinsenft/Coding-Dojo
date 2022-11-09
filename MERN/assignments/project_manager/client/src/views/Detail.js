import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

    // VIEW ONE 
const Detail = (props) => {
    const [product, setproduct] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => setproduct(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className='container'>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/product/" + product._id + "/edit"}>
                Edit
            </Link>
        </div>
    )
}

export default Detail;