import React from 'react'

function Players(props) {

    return (
        <div>
            <h4>Players</h4>
            <ul>
                {
                    props.team ? props.sports[props.sport][props.team].map((player, i) => (
                        <li key={i}>{player}</li>
                    )) :
                    <li>Select a team</li>
                }
            </ul>
        </div>
    )
}

export default Players;