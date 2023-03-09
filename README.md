# Rock Paper Scissors

One of my first projects working with React, I created the traditional game, Rock Paper Scissors. This was an independent project.

The user can select their choice from the three available options to play against the computer. The winner is then displayed on the screen and the user can continue playing by making their next selection. There is also a "Reset the Game' button that will clear the screen.

Play [Rock Paper Scissors](https://rock-paper-scissors-kp.netlify.app/)

## Demo

# ![](https://i.imgur.com/2Xh4dQL.png)

## Tech Stack

React, JavaScript, HTML, CSS and Bootstrap.

## Installation Instructions

- Clone repo or Download repo
  - npm install --> npm start

## Project Requirements

### The Brief

- Use React to create a rock, paper, scissors game
- Display the player and the AI selections on the page
- Display the winner on the page
- Deployed online
- Completed within 24 hours

### Stage One: The Core Requirements

The game begins when the player makes their selection by clicking one of the three buttons displayed on the screen. The userChoice is set to a function that then returns e.target.innerText and the aiChoice is set to the computerSelection function that generates a random index number for the options array and then uses that value for the aiChoice.

```javaScript
function computerSelection() {
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
  }
```

A winner variable is then set to the findWinner function, taking in the userChoice and aiChoice as parameters. With a winner chosen, the gameState is then updated to include the userChoice, aiChoice and winner and these values are then displayed on the screen.

```javaScript
  function startGame(e) {
    const userChoice = playerSelection(e);
    const aiChoice = computerSelection();
    const winner = findWinner(userChoice, aiChoice);
    setGameState({ userChoice, aiChoice, winner });
  }
```

### Stage Two: Extras

I also included a reset button with an onClick event listener that calls the resetClicked function and updates the GameState object values to empty strings, clearing the board of the previous selections and the winner notification.

## The Wins

Making my findWinner function more concise with the use of || instead of listing every single possible option available.

```javaScript
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
```

## Lessons Learned

- I gained a better understanding of the asynchronous nature of useState with this first project. At first I built this game with three different states to update separately - userChoice, aiChoice and winner. Due to the winner being dependent on the two other states the display winner card was a step behind the player and aiChoice displays.

  I resolved this by making a useState object (gameState) which included userChoice, aiChoice and winner. This ensured all aspects of the game are updated at the same time and that the displayed choices and the winner were both correct.

  ```javaScript
   const [gameState, setGameState] = useState({
    userChoice: "",
    aiChoice: "",
    winner: "",
  });
  ```

- I gained some useful experience using Bootstrap for the first time. This allowed me to import specific components and complete the styling of this project at a faster pace with the supplied templates. It also provided me some experience reading documentation and using a new design tool.
