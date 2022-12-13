import React from "react";
import Pokecard from "./Pokecard";

const Pokedex = (props) => {
    return (
        <div>
            <h1>Pokedex</h1>
            <div>
                {props.pokemon.map(p => (
                    <Pokecard id = {p.id} name = {p.name} type = {p.type} exp = {p.base_experience}></Pokecard>
                ))}
            </div>
        </div>
    )
} 

export default Pokedex;