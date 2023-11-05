import React, { useState } from 'react'

function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false)

    const handleClick = () => {
        setIsEditing((prevState) => !prevState)
    }

    // const saveName =  ()

    console.log(isEditing)

    return (
        <li>
            <span className="player">
                {isEditing
                    ?
                    <input className="player-name" type='text' value={name}></input>
                    :
                    <span className="player-name">{name}</span>
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}

export default Player
