import React from 'react'

function Teams (props) {
    return (
        <div>
            <h4>Teams</h4>
            <ul>
                {
                    Object.keys(props.sports['football']).map(
                        (team, i) => (
                            <li key={i}>{team}</li>
                        ))
                }
            </ul>
        </div>
    )
}







export default Teams;