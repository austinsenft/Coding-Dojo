import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



const Planets = (props) => {

    const { id } = useParams();
    console.log(id);

    const [responseData, setResponseData] = useState([]);
    useEffect(() => {
        axios
            .get('https://swapi.dev/api/planets/' + id)
            .then(response => { setResponseData(response.data) })
            .catch(err => console.log("❌", err))
    }, [id])



    return (
        <div>
            <p>Planet ID: {id}</p>
            {/* {JSON.stringify(responseData.name)} */}
            <h1>{responseData.name}</h1>
            <h3>Diameter:   {responseData.diameter}</h3>
            <h3>Climate:   {responseData.climate}</h3>
            <h3>Gravity:   {responseData.gravity}</h3>
            <h3>Terrain:   {responseData.terrain}</h3>
        </div>
    )
};

export default Planets;