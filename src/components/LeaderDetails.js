import React from 'react'

function LeaderDetails(props) {
    return (
        <div className="leaderDiv">
            {props.leader.name}
            <button>+</button>
            <button>-</button>
            {props.leader.point}
        </div>
    )
}

export default LeaderDetails
