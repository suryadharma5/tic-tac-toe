import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-combination"
import GameOver from "./components/GameOver"

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X'

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }

  return currentPlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [players, setPlayers] = useState({
    'X': 'Player 1',
    'O': 'Player 2'
  })

  const activePlayer = deriveActivePlayer(gameTurns)

  // copy agar kita ga bergantung pada initial array, jadi kita buat deep copynya
  let gameBoard = [...initialGameBoard.map(array => [...array])]

  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square

    gameBoard[row][col] = player
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol]
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner

  const handleSelect = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns)

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O'
      }
      const updatedTurns = [
        //ini berarti state yang baru akan masuk ke index paling pertama
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns
      ]
      return updatedTurns
    })
  }

  const handleRematch = () => {
    setGameTurns([])
  }

  const handleSavePlayerName = (symbol, newName) => {
    setPlayers((prevState) => {
      return {
        ...prevState,
        [symbol]: newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} onChangeName={handleSavePlayerName} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} onChangeName={handleSavePlayerName} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} handleClick={handleRematch} />}
        <GameBoard onSelectedButton={handleSelect} board={gameBoard} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  )
}

export default App
