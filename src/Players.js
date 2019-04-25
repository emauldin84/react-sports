import React from 'react'

function Players(props) {

    return (
        <div>
            <h4>Players</h4>
            <ul>
                {
                    props.sports['football']['falcons'].map((player, i) => (
                        <li key={i}>{player}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Players;