import React from 'react';
import "./styles/CharmList.css";
import CharmCard from './CharmCard';
import {charmPositions} from '../charmPositions';

const CharmList = ({handleOnClick}) => {
    const cards = charmPositions.map(position => {
        return (
            <CharmCard
                key={position.id}
                position={position}
                handleOnClick={handleOnClick}
            />
        );
    });

    return (
        <div className="charm-list">
            {cards}
        </div>
    );
}

export default CharmList;