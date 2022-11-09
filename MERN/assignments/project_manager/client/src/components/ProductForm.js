import React, { useState } from 'react'
import axios from 'axios';
export default (props) => {
    //keep track of what is being typed via useState hook
    const {onSubmitHandler} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState(null);
    



    //onChange to update title, price and description
    return (

        <form onSubmit={ (e) => {
            onSubmitHandler(e, title, price, description)}}>
            <h1>Product Manager</h1> 
            <p>
                <label>Title</label><br />
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </p>
                {
                    errors?.title && (
                        <span className="text-danger">{errors.title?.message}</span>
                    )
                }
            <p>
                <label>Price</label><br />
                <input type="text" onChange={(e) => setPrice(e.target.value)} value={price} />
            </p>
            <p>
                <label>Description</label><br />
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
            </p>

            <input type="submit" />
        </form>
    )
}