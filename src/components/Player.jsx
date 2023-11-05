import React, { useState } from 'react'

function Player({ initialName, symbol }) {
    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState(initialName)

    const handleClick = () => {
        setIsEditing((prevState) => !prevState)
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (
        <li>
            <span className="player">
                {isEditing
                    ?
                    <input className="player-name" type='text' value={name} onChange={handleChange}></input>
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
