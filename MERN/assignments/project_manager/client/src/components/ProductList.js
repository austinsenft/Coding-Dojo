import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const ProductList = (props) => {
    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }
    return (

        <div>
            <h3>All Products</h3>
            {props.product.map((product, i) => {
                // NOTE the link and button both inside the p tag - jsx elements must have one parent element error if not
                return <p key={i}>
                    <Link to={`/product/${product._id}`}>
                        {product.title}
                    </Link>
                    |
                    <button className="btn btn-danger" onClick={(e) => { deleteProduct(product._id) }}>
                        Delete
                    </button>
                </p>
                
            })}
        </div>

    )
}

export default ProductList;

