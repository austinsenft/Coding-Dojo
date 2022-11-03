import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const People = (props) => {

    const { id } = useParams();
    console.log(id);

    const [responseData, setResponseData] = useState([]);
    useEffect(() => {
        axios
            .get('https://swapi.dev/api/people/' + id)
            .then(response => { setResponseData(response.data) })
            .catch(err => console.log("❌", err))
    }, [id])



    return (
        <div>
            <p>Person ID: {id}</p>
            {/* {JSON.stringify(responseData.name)} */}
            <h1>{responseData.name}</h1>
            <h3>Height:   {responseData.height}</h3>
            <h3>Hair Color:   {responseData.hair_color}</h3>
            <h3>Eye Color:   {responseData.eye_color}</h3>
            <h3>Gender:   {responseData.gender}</h3>
        </div>
    )
};

export default People;
