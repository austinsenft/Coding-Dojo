import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

    // HOMEPAGE
const Main = (props) => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []); 

    const onSubmitHandler = (e, title, price, description) => {
        //prevent default behavior of the submit
        e.preventDefault();
        console.log(title);
        //make a post request to create a new product
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res => {console.log(res)
                setProduct([... product, res.data])
            })
            .catch(err => {
                console.log(err); 
                // setErrors(err?.data?.errors) need to do validations
            })
    }

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }

    return (
        <div className='container'>
            <ProductForm onSubmitHandler ={onSubmitHandler} />
            <hr />
            {loaded && <ProductList product={product} removeFromDom={removeFromDom} />}
        </div>
    );
}

export default Main;