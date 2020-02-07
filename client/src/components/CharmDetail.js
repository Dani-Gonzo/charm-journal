import React from 'react';
import "./styles/CharmDetail.css";
import {charmPositions} from '../charmPositions';
import sprites from "../assets/charms.png";

const CharmDetail = ({charm}) => {
    const {id, name, description, notches} = charm;
    let style;
    if (id) {
        const index = id - 1;
        const backgroundPosition = charmPositions[index].backgroundPosition;
        style = {backgroundImage: `url(${sprites})`, backgroundPosition};
    }
    

    return (
        <div className="charm-detail">
            <div className="sprite-image" style={style}></div>
            <div className="data-wrapper">
                <h1 className="charm-name">{name}</h1>
                <p className="charm-data">Notch Cost: {notches}</p>
                <p className="charm-data">{description}</p>
            </div>
        </div>
    );
}

export default CharmDetail;