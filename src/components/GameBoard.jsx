import React, { useState } from 'react'

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    const handleClick = (rowIndex, colIndex) => {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
            // console.log(updatedBoard)
            updatedBoard[rowIndex][colIndex] = 'X'
            return updatedBoard
        })
    }

    return (
        <ol id='game-board'>
            {gameBoard.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((symbol, colIndex) =>
                            <li key={colIndex}>
                                <button onClick={() => handleClick(rowIndex, colIndex)}>
                                    {symbol}
                                </button>
                            </li>
                        )}
                    </ol>
                </li>
            )}
        </ol>
    )
}

export default GameBoard
