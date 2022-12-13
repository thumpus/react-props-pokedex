import React from 'react';
import './Pokecard.css';

const Pokecard = (props) => {
    let imgSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`

    return (
        <div className="Pokecard">
            <h2>{props.name}</h2>
            <img src = {imgSource} />
            <div>{props.type} Type</div>
            <div>EXP: {props.exp}</div>
        </div>
    )
}

export default Pokecard;