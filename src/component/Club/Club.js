import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Player from '../Player/Player';
import playersData from '../../data.json';

const Club = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        setPlayers(playersData);
    }, []);

    return (
        <div className="row">
            <div className="row col-md-9 card-group">
                {
                    players.map(player => <Player player={player}></Player>)
                }
            </div>
            <div className="col-md-3">
                <h2></h2>
            </div>
        </div>
    );
};

export default Club;