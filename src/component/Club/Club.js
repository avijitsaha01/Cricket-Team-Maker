import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Player from '../Player/Player';
import playersData from '../../data.json';
import Team from '../Team/Team';
import './Club.css'

const Club = () => {
    //using state
    const [players, setPlayers] = useState([]);
    const [list, setList] = useState([]);

    //load data
    useEffect(() => {
        setPlayers(playersData);
    }, []);

    //handle event listner
    const handleAddPlayer = (player) =>{
      let newList = [...list, player];
      setList(newList);
      document.getElementById(player.id).disabled = true;
    }
    
    return (
        <div className="row">
            <div className="col-md-9 pr-0">
            <div className="titleWraper">
                <h3 className="playerTitle">Bangladeshi Players</h3>
            </div>
            <div className="card-group">
            {
                    players.map(player => 
                    <Player key={player.id} 
                    player={player} 
                    handleAddPlayer = {handleAddPlayer}
                    ></Player>)
            }
            </div>
                
            </div>
            <div className="pl-0 col-md-3">
                <Team team={list}></Team>
            </div>
        </div>
    );
};

export default Club;