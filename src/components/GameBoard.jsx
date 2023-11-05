import React from 'react'

const initialGameBoard = [
    [null, 'X', 'O'],
    [null, 'X', null],
    ['X', 'O', null]
]

function GameBoard() {
    return (
        <ol id='game-board'>
            {initialGameBoard.map((row, index) =>
                <li key={index}>
                    <ol>
                        {row.map((symbol, colIndex) =>
                            <li key={colIndex}>
                                <button>
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
