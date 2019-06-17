# Project 1: JavaScript Game

### Timeframe
8 days

## Technologies used

* JavaScript (ES6)
* HTML5
* CSS


## Installation

1. Clone or download the repo
1. Open the `index.html` in your browser of choice

## Overview

The landing page: 

<img width="1440" alt="Screenshot 2019-04-05 at 09 47 20" src="https://user-images.githubusercontent.com/46609723/55616027-cee82580-5788-11e9-84a8-eb1f95687d7c.png">

### Introduction/ Hosted Site

Creating the well-known snake game with a twist of Harry Potter.

View my hosted game [Click here](https://laurenfwinter.github.io/Project-01/)

### Controls
To navigate the snake, you have to use the arrow keys on a computer.

### Aim of the Game & Instructions
The aim of the game is to move the snake around the board and eat the food (dementors), you can not bump into the walls or yourself otherwise the game is over. 
The snake will increment with speed the more food you eat.

Start the Game.

<img width="1440" alt="Screenshot 2019-04-05 at 09 47 20" src="https://user-images.githubusercontent.com/46609723/55616027-cee82580-5788-11e9-84a8-eb1f95687d7c.png">


The snake will start moving. Use the arrow keys to direct it to the food. Make sure you do not hit the walls or the snakes tail. 

<img width="1440" alt="Screenshot 2019-04-05 at 10 05 30" src="https://user-images.githubusercontent.com/46609723/55617096-474fe600-578b-11e9-8af0-27b9b9bb277d.png">


See how long you can survive for

<img width="1440" alt="Screenshot 2019-04-05 at 10 07 37" src="https://user-images.githubusercontent.com/46609723/55617153-63538780-578b-11e9-83a5-a2b56eeed72b.png">


 Game over if you bump in to yourself or the walls
 
<img width="1440" alt="Screenshot 2019-04-05 at 10 05 47" src="https://user-images.githubusercontent.com/46609723/55617413-eb399180-578b-11e9-9f1b-58221fa75c55.png">



 

## Process  

After getting the project brief, I starting by creating a Trello board to plan each step. 

To get the basic structure of my grid, I used a for loop to generate 18 x 18 individual divs.

One of the main issues I was facing at the start is that the food was being produced in the snake’s body. This meant that I have to do a function to produce another random div that the snake was not in : 

```javascript

function food(){

let randomIndex = Math.floor(Math.random() * squares.length)

while(squares[randomIndex].classList.contains('snake')) {

randomIndex = Math.floor(Math.random() * squares.length)

}

squares[randomIndex].classList.add('food')

}

```

I also managed to get my game over background popping up when the snake had died. For this I had to remove the grid and add the background image when the gameInPlay was false.

```javascript

function gameOver() {

gameInPlay = false

grid.classList.remove('grid')

main.classList.add('endOfGame')

}
```

I enjoyed making Snake my own game by implementing my style designs in there, as I was following a snake theme with Harry Potter.

I used programs like google images to get my images and gifs and edited them with ezgif.com.

### Challenges

The most challenging part was to make sure the game cleared once the reset button was clicked.

This produced a lot of issues from the score count not clearing to the snake starting too fast. I overcame this by adding an event listener which reset everything.

### Wins

Having a game that works and looks good was a big win. I enjoyed doing this solo project and learnt a lot through functions, switch statements and event listeners

## Future features

* Responsive design
* Leaderboard
