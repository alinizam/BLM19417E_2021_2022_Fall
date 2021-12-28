import React from 'react'

function DisplayHistory(props) {
    return (
        <div>
            {props.preState.map(function (item, i) {
                return <li key={i}>Action: {item.act} PrevValue: {item.prevValue}</li>
            })}
        </div>
    )
}

export default DisplayHistory
