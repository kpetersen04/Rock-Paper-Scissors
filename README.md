# Rock Paper Scissors

One of my first projects working with React, I created the traditional game, Rock Paper Scissors. 

The user can select their choice from the three available options to play against the computer. The winner is then displayed on the screen and the user can continue playing by making their next selection. There is also a "Reset the Game' button that will clear the screen. 

Play [Rock Paper Scissors!](https://rock-paper-scissors-kp.netlify.app/)

## Demo
# ![](https://i.imgur.com/2Xh4dQL.png)

## Tech Stack
React, JavaScript, HTML, CSS and Bootstrap. 


## Installation Instructions
- Clone repo or Download repo 
  - npm install --> npm start

## The Wins 
Making my findWinner function more concise with the use of || instead of listing every single possible option available. 

```bash
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

  I resolved this by make a a useState object (gameState) which included userChoice, aiChoice and winner. This ensured all states updated at the same time and that the displayed choices and the winner were both correct. 

- I gained some useful experience using Bootstrap for the first time. This allowed me to import specific components and complete the styling of this project at a faster pace with the supplied templates. It also provided me some experience reading documentation and using a new design tool.