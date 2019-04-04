document.addEventListener('DOMContentLoaded', () => {

  // VARIABLES
  //************************************************************* = my variables
  // const body = document.querySelector('body')
  const main = document.querySelector('main')
  const grid = document.querySelector('.grid')
  const score = document.querySelector('.score')
  const resetButton = document.querySelector('.resetButton')
  const playButton = document.querySelector('.playButton')
  const mainScreen = document.querySelector('.mainScreen')
  const mySound = document.querySelector('audio')
  const nav = document.querySelector('nav')
  const width = 18
  const squares = []
  // const hidden = document.getElementById('playButton').style.display = 'none'
  let snake = [3,2,1,0]
  let square = []
  let scoreCount = 0
  let snakeSpeed = 350
  let direction = 'right'
  let gameInPlay = true
  let timer


  //*************************************************************

  //************************************** = for let statement pushing my square into my grid
  for(let i = 0; i < width * width; i++) {
    if (gameInPlay === true) {
      square = document.createElement('DIV')
      squares.push(square)
      grid.appendChild(square)
    }
  }


  // FUNCTIONS
  //************************************************************* = random number created to make my apple.
  function drawSnake() {
    console.log('drawing')
    snake.forEach(index => squares[index].classList.add('snake')) // adding a square to the snake
  }

  function dieSnake() {
    if(snake.slice(1).includes(snake[0])){
      return gameOver()
    }
  }

  function eraseSnake() {
    console.log('erasing')
    snake.forEach(index =>
      squares[index].classList.remove('snake')) // deleting a square from the snake
  }

  function startScreen() {
    grid.classList.remove('grid')
    main.classList.add('startScreen')
    gameInPlay = false
    mainScreen.innerText = ('')
  }

  startScreen()


  function startGame() {
    gameInPlay = true
    playButton.addEventListener('click', () => {
      main.classList.remove('startScreen')
      main.classList.remove('endOfGame')
      snake.forEach(index => squares[index].classList.remove('snake'))
      clearTimeout(timer)
      snake = [3,2,1,0]
      score.innerText = 0
      grid.classList.add('grid')
      direction = 'right'
      snakeSpeed -= 0
      drawSnake()
      moveSnake()
      playButton.innerText = ('')

    })

  }

  startGame()


  function food(){
    // const chosenSquare = squares[Math.floor(Math.random() * squares.length)]
    let randomIndex = Math.floor(Math.random() * squares.length)
    while(squares[randomIndex].classList.contains('snake')) {
      randomIndex = Math.floor(Math.random() * squares.length)
    }
    squares[randomIndex].classList.add('food')
    // chosenSquare.classList.add('fuel')
    // if(chosenSquare.classList.contains('snake')){
    // fuel()

  }



  function gameOver() {
    gameInPlay = false
    grid.classList.remove('grid')
    main.classList.add('endOfGame')


  }

  function gameSound() {
    mySound.src = 'audio/01 Prologue.mp3'
    mySound.play()
  }


  //************************************************************* = function for my snake eating my apple.
  function moveSnake() { //function - moving the snake, making sure it doesn't go past the walls of the game.
    // if statment, if snake contains apple then don't pop off and put one on a score and generate another apple


    if (snake[0] % width === 0 && direction === 'left' ||
    snake[0] % width === width -1  && direction === 'right' ||
    snake[0] - width < 0  && direction === 'up' ||
    snake[0] >= width * (width - 1) && direction === 'down') {
      return gameOver()
    }




    eraseSnake()
    // gameOver()switch(direction){
    switch(direction) {
      case 'right' : moveRight()
        break
      case 'left' : moveLeft()
        break
      case 'up' : moveUp()
        break
      case 'down' : moveDown()

    }


    dieSnake()

    if (squares[snake[0]].classList.contains('food')){
      scoreCount++
      snakeSpeed -= 10
      score.innerText = scoreCount
      squares[snake[0]].classList.remove('food')
      snake.unshift(snake[0])
      food()
    }



    timer = setTimeout(moveSnake, snakeSpeed)
  }

  // setTimeout better than interval here because it looks to run again in the set amount of time whereas setInterval says do this once and be set in stone


  //************************************************************* = kill the snake. reset the snake when it hits itself or the wall.

  // moveSnake()

  // ********************** = function in order to make it move a certain way and what it should add or take off
  function moveRight(){
    eraseSnake()
    snake.pop()
    snake.unshift(snake[0] + 1)
    drawSnake()
  }
  function moveLeft() {
    eraseSnake()
    snake.pop()
    snake.unshift(snake[0] - 1)
    drawSnake()
  }
  function moveUp() {
    eraseSnake()
    snake.pop()
    snake.unshift(snake[0] - width)
    drawSnake()
  }
  function moveDown() {
    eraseSnake()
    snake.pop()
    snake.unshift(snake[0] + width)
    drawSnake()
  }

  moveSnake()

  // EVENTLISTENERS
  //********************************************* = listening to downward input key in order to change the direction.
  document.addEventListener('keydown', (e) => {
    console.log(e.keyCode)
    e.preventDefault()
    switch(e.keyCode) {
      case 37: if (direction !== 'right') direction = 'left'
        break

      case 38: if (direction !== 'down') direction = 'up'
        break

      case 39: if (direction !== 'left') direction = 'right'
        break

      case 40: if (direction !== 'up') direction = 'down'
        break
    }
  })


  resetButton.addEventListener('click', () => {
    snake.forEach(index => squares[index].classList.remove('snake'))
    clearTimeout(timer)
    snake = [3,2,1,0]
    score.innerText = 0
    grid.classList.add('grid')
    direction = 'right'
    snakeSpeed -= 0
    main.classList.remove('endOfGame')
    main.classList.remove('startScreen')
    playButton.innerText = ('')
    drawSnake()
    moveSnake()



  })

  gameSound()
  console.log(gameSound)
  food()
})
