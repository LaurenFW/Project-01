document.addEventListener('DOMContentLoaded', () => {


  //************************************************************* = my variables
  const grid = document.querySelector('.grid')
  const width = 18
  const squares = []
  const snake = [3,2,1,0]
  let direction = 'right'
  const apple = null
  let scoreCount = 0
  const score = document.querySelector('.score')

  //************************************** = for let statement pushing my square into my grid
  for(let i = 0; i < width * width; i++) {
    const square = document.createElement('DIV')
    squares.push(square)
    grid.appendChild(square)
  }


  //************************************************************* = random number created to make my apple.
  function food(){
    const chosenSquare = squares[Math.floor(Math.random() * squares.length)]
    chosenSquare.classList.add('food')
    console.log(chosenSquare)
  }


  //and one to score, i want it to add one to my snake but not pop one off.
  //otherwise do nothing???
  //then generate a new random number for the apple.
  // }

  //************************************************************* = My Functions!!
  function drawSnake() {
    console.log('drawing')
    snake.forEach(index => squares[index].classList.add('snake')) // adding a square to the snake
  }

  function eraseSnake() {
    console.log('erasing')
    snake.forEach(index =>
      squares[index].classList.remove('snake')) // deleting a square from the snake
  }


  //************************************************************* = function for my snake eating my apple.
  function moveSnake() { //function - moving the snake, making sure it doesn't go past the walls of the game.
    // if statment, if snake contains apple then don't pop off and put one on a score and generate another apple

    //
    // if (snake[0] % width === 0 && direction === 'left' ||
    // snake[0] % width === width -1  && direction === 'right' ||
    // snake[0] - width < 0  && direction === 'up' ||
    // snake[0] > width * width  && direction === 'down') ||
    // snake.slice(1).includes(snake[0])){

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
    drawSnake()
  }

  eraseSnake()
  //switch statement.

  if (squares[snake[0]].classList.contains('apple')) {
    scoreCount++
    score.innerText = scoreCount
    squares[snake[0]].classList.remove('apple')
    snake.unshift(snake[0])
    apple()
  }




  // this sets the interval of the move to a second.


  setInterval(moveSnake, 100)
  //************************************************************* = for loop to stop snake going into itself.


  // var checkCollision = function() {
  //   for(var i = 0; i < squares.length; i++) {
  //     if(snake[i] === snake[i])
  //       return true
  //
  //     else return false
  //   }
  //
  // }
  // checkCollision()

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

  //********************************************* = listening to downward input key in order to change the direction.
  document.addEventListener('keydown', (e) => {
    switch(e.keyCode) {

      case 37: direction = 'left'
        break

      case 38: direction = 'up'
        break

      case 39: direction = 'right'
        break

      case 40: direction = 'down'
        break
    }
  })

  food()
})
