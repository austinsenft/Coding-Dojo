import React, { useEffect, useState } from "react";
import axios from 'axios';

const Pokemon = (props) => {
    const [pokemonList, setPokemonList] = useState([]);

    const getPokemon = (e) => {
        axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then((response) => {
            setPokemonList(response.data.results);
        })
        .catch(error => console.log(error))
    };


    return (
        <div>
            <button onClick={getPokemon}>
                Fetch Pokemon
            </button>
            <ul>
                {pokemonList.length > 0 && pokemonList.map((pokemon, index) => {
                    return <li key={index}>{pokemon.name}</li>;
                })}
            </ul>
        </div>
    );
}

export default Pokemon;