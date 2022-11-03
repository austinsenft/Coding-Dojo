import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = (props) => {

    const [type, setType] = useState("")
    const [id, setId] = useState("")
    const navigate = useNavigate();
    

    const newRoute = (e) => {
        e.preventDefault();
        console.log(id)
        navigate("/" + type + "/" + id);
    }

    return (
        <div>
            <form onSubmit={ newRoute }>

                <p>Search for: </p>
                <select onChange={e => setType(e.target.value)} >
                    <option value="people">Person</option>
                    <option value="planets">Planet</option>
                </select>
                <input onChange={e => setId(e.target.value)} type="number" min={1} />
                <button>Search</button>

            </form>
        </div>
    )
};

export default Form;