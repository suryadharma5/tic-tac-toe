function GameBoard({ onSelectedButton, board }) {

    // const [gameBoard, setGameBoard] = useState(initialGameBoard)

    // const handleClick = (rowIndex, colIndex) => {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
    //         // console.log(updatedBoard)
    //         updatedBoard[rowIndex][colIndex] = activePlayer
    //         return updatedBoard
    //     })
    //     onSelectedButton()
    // }

    return (
        <ol id='game-board'>
            {board.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((symbol, colIndex) =>
                            <li key={colIndex}>
                                <button onClick={() => onSelectedButton(rowIndex, colIndex)} disabled={symbol !== null}>
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
