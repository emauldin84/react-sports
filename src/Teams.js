import React from 'react'

function Teams (props) {
    return (
        <div>
            <h4>Teams</h4>
            <ul>
                {
                    Object.keys(props.sports[props.sport]).map(
                        (team, i) => (
                            <li key={i} onClick={() => props.displayPlayers(team)}>{team}</li>
                        ))
                }
            </ul>
        </div>
    )
}







export default Teams;