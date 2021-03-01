import React from 'react';
import './player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    
    //destructuring used here
    const {name,nick_name,player_rule,img,batting_style,bowling_style,slary} = props.player;

    return (
        <div className="col-md-4 mb-5">
            <div className="card shadow mb-5 bg-white rounded">
                <img src={img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h4 className="card-title text-center">{name}</h4>
                    <p className="card-text">Nick Name: {nick_name}</p>
                    <p className="card-text"><small className="text-muted">Player Rule: {player_rule}</small></p>
                    <p className="card-text">Batting Style: {batting_style}</p>
                    <p className="card-text">Bowling Style: {bowling_style}</p>
                </div>
                <div className="card-footer">
                <h6 className="bg-warning p-2 rounded">Salary: <span className="takaSign">&#x9f3;</span> {slary}</h6>
                        <button 
                        onClick={()=> props.handleAddPlayer(props.player)}
                        className="btn btn-success mr-2" 
                        id={props.player.id}>
                        <FontAwesomeIcon icon={faUserPlus}/> Add to Team</button>
                </div>
            </div>
        </div>
    );
};

export default Player;