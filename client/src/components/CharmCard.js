import React from 'react';
import "./styles/CharmCard.css";
import sprites from "../assets/charms.png";

const CharmCard = ({position, handleOnClick}) => {
    const {id, backgroundPosition} = position;
    const style = {backgroundImage: `url(${sprites})`, backgroundPosition};

    return (
        <button onClick={() => handleOnClick(id)} style={style} className="charm-card">
            
        </button>
    );
}

export default CharmCard;