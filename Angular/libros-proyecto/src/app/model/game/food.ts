import { randomGridPosition } from "./gameboard-grid.util";

export class Food {
  EXPANSION_RATE = 1;
  score = 0;
  food: any;
  snake;
  constructor(snake: any) {
    this.snake = snake;
    this.food = this.getRandomFoodPosition();
  }

  update() {
    if (this.snake.onSnake(this.food)) {
      this.snake.expandSnake(this.EXPANSION_RATE);
      this.food = this.getRandomFoodPosition();
      this.addScore = 1;
    }
  }

  draw(gameBoard: any) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = this.food.y;
    foodElement.style.gridColumnStart = this.food.x;
    foodElement.classList.add('food');
    foodElement.style.borderRadius = '50%';
    foodElement.style.backgroundColor = '#007580';
    foodElement.style.transition = 'all .3ms ease-in';
    foodElement.style.border = '0.25vmin solid black';
    gameBoard.appendChild(foodElement);
  }


  getRandomFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || this.snake.onSnake(newFoodPosition)) {
      newFoodPosition = randomGridPosition()
    }
    return newFoodPosition;
  }

  set addScore(val: number) {
    this.score+=val;
  }

  get currentScore() {
    return this.score;
  }
}