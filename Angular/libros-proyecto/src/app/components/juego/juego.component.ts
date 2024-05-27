import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Food } from '../../model/game/food';
import { Snake } from '../../model/game/snake';
import { outsideGrid } from '../../model/game/gameboard-grid.util';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit, AfterViewInit {

  title = 'snakeGame1938web';
  gameBoard: any;
  snake = new Snake();
  food = new Food(this.snake);

  lastRenderTime = 0;
  gameOver = false;

  ngAfterViewInit() {
    this.gameBoard = document.querySelector('.game-board');
    window.requestAnimationFrame(this.start.bind(this));
  }

  ngOnInit(): void {
    this.snake.listenToInputs(); // Configura los listeners del teclado
  }

  dpadMovement(direction: string) {
    this.snake.input.setDirection(direction);
  }

  start(currentTime: any) {
    if (this.gameOver) {
      return console.log('Game Over');
    }

    window.requestAnimationFrame(this.start.bind(this));
    const secondsSinceLastRender = (currentTime - this.lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / this.snakeSpeed) {
      return;
    }
    this.lastRenderTime = currentTime;

    this.update();
    this.draw();
  }

  update() {
    this.snake.update();
    this.food.update();
    this.checkDeath();
  }

  draw() {
    this.gameBoard.innerHTML = '';
    this.snake.draw(this.gameBoard);
    this.food.draw(this.gameBoard);
  }

  checkDeath() {
    this.gameOver = outsideGrid(this.snake.getSnakeHead()) || this.snake.snakeIntersection();
    if (!this.gameOver) {
      return;
    }
    this.gameBoard.classList.add('blur');
  }

  get snakeSpeed() {
    const score = this.food.currentScore;
    if (score < 10) {
      return 4;
    }
    if (score > 10 && score < 15) {
      return 5;
    }
    if (score > 15 && score < 20) {
      return 6;
    }
    return 7;
  }

  restartGame() {
    this.snake = new Snake();
    this.food = new Food(this.snake);
    this.gameOver = false;
    this.lastRenderTime = 0;
    this.gameBoard.classList.remove('blur');
    window.requestAnimationFrame(this.start.bind(this));
    this.snake.listenToInputs(); // Asegúrate de volver a configurar los listeners del teclado
  }
}
