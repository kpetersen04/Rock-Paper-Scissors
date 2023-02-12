import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function App() {
  const options = ["Rock", "Paper", "Scissors"];

  const [gameState, setGameState] = useState({
    userChoice: "",
    aiChoice: "",
    winner: "",
  });

  function startGame(e) {
    const userChoice = playerSelection(e);
    const aiChoice = computerSelection();
    const winner = findWinner(userChoice, aiChoice);
    setGameState({ userChoice, aiChoice, winner });
  }

  function playerSelection(e) {
    return e.target.innerText;
  }

  function computerSelection() {
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
  }

  function findWinner(userChoice, aiChoice) {
    if (userChoice === aiChoice) {
      return "It's a tie, you both picked the same thing!";
    } else if (
      (userChoice === "Rock" && aiChoice === "Scissors") ||
      (userChoice === "Paper" && aiChoice === "Rock") ||
      (userChoice === "Scissors" && aiChoice === "Paper")
    ) {
      return "The player!";
    } else {
      return "The computer!";
    }
  }

  function resetClicked(e) {
    setGameState({
      userChoice: "",
      aiChoice: "",
      winner: "",
    });
  }

  return (
    <>
      <div className="hero">
        <h1 className="title">Rock Paper Scissors</h1>
        <p>
          Make your choice by clicking the button with your prefered option and
          see if you can win against the computer.
        </p>
        <div className="selection-buttons">
          {options.map((option) => (
            <Button
              className="mbs"
              style={{
                marginRight: "40px",
                width: "120px",
                cursor: "pointer",
              }}
              variant="secondary"
              key={option}
              onClick={startGame}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>

      <div className="result-display">
        <div className="players-choices">
          <h2>
            <Card style={{ width: "300px" }}>
              <Card.Body>
                <Card.Title> Player choice: </Card.Title>
                <Card.Text>
                  <span className="playerChoice">{gameState.userChoice}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </h2>
          <h2>
            <Card style={{ width: "300px" }}>
              <Card.Body>
                <Card.Title> AI choice: </Card.Title>
                <Card.Text>
                  <span className="aiChoice">{gameState.aiChoice}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </h2>
        </div>
        <div className="winner-display">
          <Card style={{ width: "450px" }}>
            <Card.Body>
              <Card.Title>And the winner is...</Card.Title>
              <Card.Text>
                <span className="winner">{gameState.winner}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="resetBtn">
        <Button
          style={{ width: "200px" }}
          variant="dark"
          value="reset"
          onClick={resetClicked}
        >
          Reset the Game
        </Button>
      </div>
    </>
  );
}

export default App;
