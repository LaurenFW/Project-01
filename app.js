document.addEventListener('DOMContentLoaded', () => {


  //************************************************************* = my variables
  const grid = document.querySelector('.grid')
  const width = 18
  const squares = []
  const snake = [3,2,1,0]
  let direction = 'right'
  const apple = null


  //************************************** = for let statement pushing my square into my grid
  for(let i = 0; i < width * width; i++) {
    const square = document.createElement('DIV')
    squares.push(square)
    grid.appendChild(square)
  }


  //************************************************************* = if statement about snake eating an apple.
  // if (statement) {
  // if (squares[snake[0]].classlist.contains('apple')) then dont pop off the end just add one on to the front.
  // generate another random number for the apple




  //************************************************************* = My Functions!!
  function drawSnake() {
    snake.forEach(index => squares[index].classList.add('snake')) // adding a square to the snake
  }

  function eraseSnake() {
    snake.forEach(index =>
      squares[index].classList.remove('snake')) // deleting a square from the snake
  }

  function moveSnake() { //function - moving the snake.

    if (snake[0] % width === 0 && direction === 'left' ||
       snake[0] % width === width -1  && direction === 'right' ||
       snake[0] - width < 0  && direction === 'up' ||
       snake[0] >= width * (width - 1 )  && direction === 'down') {
      return false
    }

    eraseSnake()
    //switch statement.
    switch(direction){

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
  setInterval(moveSnake, 100) // this sets the interval of the move to a second.


  //********************** = function in order to make it move a certain way and what it should add or take off
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

  //************************************************************* = listening to downward input key in order to change the direction.
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
})
