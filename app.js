document.addEventListener('DOMContentLoaded', () => {


  //************************************************************* = my variables
  const grid = document.querySelector('.grid')
  const width = 18
  const squares = []
  const snake = [3,2,1,0]
  let direction = 'right'
  // const apple = null
  let scoreCount = 0
  let snakeSpeed = 300
  const score = document.querySelector('.score')

  //************************************** = for let statement pushing my square into my grid
  for(let i = 0; i < width * width; i++) {
    const square = document.createElement('DIV')
    squares.push(square)
    grid.appendChild(square)
  }


  //************************************************************* = My Functions!

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

  function food(){
    const chosenSquare = squares[Math.floor(Math.random() * squares.length)]
    chosenSquare.classList.add('food')
    console.log(chosenSquare)
  }

  function gameOver() {
    grid.classList.remove('grid')
    clearInterval(moveSnake)
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

    drawSnake()

    setTimeout(moveSnake, snakeSpeed)
  }
  // setTimeout better than interval here because it looks to run again in the set amount of time whereas setInterval says do this once and be set in stone


  //************************************************************* = kill the snake. reset the snake when it hits itself or the wall.

  moveSnake()

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
  //********************************************* = listening to downward input key in order to change the direction.
  document.addEventListener('keydown', (e) => {
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
  food()

})
