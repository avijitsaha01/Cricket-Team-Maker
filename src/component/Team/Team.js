import React from 'react';
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
const Team = (props) => {
    const team = props.team;
    const totalBudget = team.reduce((totalBudget, player) => totalBudget + player.slary, 0)
    return (
        <div className="team">
            <h5 className="text-info">Selected Player</h5>
            <p className="countPlayer">Total player: {team.length}</p>
            <div>
                {
                    team.map(selectedPlayer =>
                        <div className="alert alert-info d-flex justify-content-between" >
                            <p className="text-dark"><FontAwesomeIcon icon={faUserTie} />
                                <small>
                                    {
                                        " " + selectedPlayer.name
                                    }
                                </small>
                            </p>
                            <p className="text-danger">
                                <FontAwesomeIcon icon={faMoneyBillAlt} />
                                {
                                    " " + selectedPlayer.slary
                                }
                            </p>
                        </div>
                    )
                }
            </div>
            <div className="alert bg-info">
                <p>Total Budget :
                    <span className="text-white font-weight-bold">
                        {
                            " " + totalBudget + " "
                        }
                    </span>Taka
                </p>
            </div>
            <p></p>
        </div>
    );
};

export default Team;