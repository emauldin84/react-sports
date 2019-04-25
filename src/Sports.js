import React from 'react';

function Sports(props) {

    return (
    <div>
        <h4>Sports</h4>
        <ul>
            {
                Object.keys(props.sports).map((sport, i) => (
                    <li key={i} onClick={props.displayTeams}>{sport}</li>
                    )
                )
            }
        </ul>
    </div>
)
}









export default Sports;