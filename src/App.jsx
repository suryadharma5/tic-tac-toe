import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X'

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }

  return currentPlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([])

  const activePlayer = deriveActivePlayer(gameTurns)

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

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectedButton={handleSelect} turns={gameTurns} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  )
}

export default App
