"use client";
import { useEffect, useState } from "react"
import Cell from './components/cells'

const winConditions = [
  [0,1,2], [3,4,5], [6,7,8], // rows
  [0,3,6], [1,4,7], [2,5,8], // columns
  [0,4,8], [2,4,6] // diagonals
]

function Home() {
  const  [cells, setCells] = useState(Array(9).fill(null))
  const [go, setGo] = useState("Circle")
  const[score, setScore] = useState([0,0])

  const checkWinner = () => {
    for (let i = 0; i < winConditions.length; i++) {
      const [a,b,c] = winConditions[i]
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a]
      }
    }
    return null
  }
  useEffect(() => {
    const winner = checkWinner()
    if (winner) {
      if (winner == "Circle") {
        score[0] += 1
        alert("Circle wins!")
      }
      else {
        score[1] += 1
        alert("Cross wins!")
      }
      setCells(Array(9).fill(null))
    }
    else if (!cells.includes(null)) {
      alert("It's a draw!")
    }
  })
  return (
    <main>
      <header><h1>Tic Tac Toe</h1></header>
    <div className="container">
      <div className="score">
        <div className="circleScore">Circle: {score[0]}</div>
        <div className="crossScore">Cross: {score[1]}</div>
      </div>
      <div className="gameBoard"> 
      {cells.map((cell, index) => (
        <Cell id={index} go = {go} setGo={setGo} key={index} cells = {cells} setCells={setCells} cell ={cell}/>
      ))
      }
      </div>
      <div>
        {`Its now ${go} turn !`}
        </div>
    </div>
    </main>
  )
}


export default Home