import React, { useState } from 'react'

function Player({ initialName, symbol, isActive, onChangeName }) {
    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState(initialName)

    const handleClick = () => {
        setIsEditing((prevState) => !prevState)
        if (isEditing) {
            onChangeName(symbol, name)
        }
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (
        <li className={isActive ? 'active' : undefined}>
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
