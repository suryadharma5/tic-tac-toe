import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [isSelected, setIsSelected] = useState('X')
  // const [isActive, set]

  const handleSelect = (rowIndex, colIndex) => {
    setIsSelected((prevState) => prevState === 'X' ? 'O' : 'X')
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X'

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O'
      }
      const updatedTurns = [
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
          <Player initialName="Player 1" symbol="X" isActive={isSelected === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={isSelected === 'O'} />
        </ol>
        <GameBoard onSelectedButton={handleSelect} turns={gameTurns} />
        <Log />
      </div>
    </main>
  )
}

export default App
