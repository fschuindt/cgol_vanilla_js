import { Board } from './board.js';
import { Neighbours } from './neighbours.js';
import { View } from './view.js';

export class Game {
  constructor(x, y, clock) {
    this._generation = 0;
    this._x = x;
    this._y = y;
    this._clock = clock;

    this._board = new Board(x, y);
    this._board.randomize();
  }

  static launch(x, y, clock) {
    const gridContainer = document.getElementById('grid-container');

    View.clearGrid();
    View.setGridSize(x, y);
    View.spawnGrid(x, y);

    const game = new Game(x, y, clock);
    game.play();
  }

  play() {
    setInterval(() => {
      this.tick();
      View.render(this._board._state);
      console.log(`Generation: ${this._generation}`);
    }, this._clock);
  }

  tick() {
    const newBoardState = this._board._state.map((row, rowIndex) =>
      row.map((cell, cellIndex) => {
        const x = cellIndex + 1;
        const y = this._board.y - rowIndex;
        const neighbours = Neighbours.countAlive(this._board, x, y);
        const isAlive = this._board.getAt(x, y);

        return this._nextCellState(isAlive, neighbours);
      })
    );

    this._board._state = newBoardState;
    this._generation++;
  }

  _nextCellState(isAlive, neighbours) {
    if (isAlive && neighbours < 2) {
      return false;
    } else if (isAlive && neighbours <= 3) {
      return true;
    } else if (isAlive && neighbours > 3) {
      return false;
    } else if (!isAlive && neighbours == 3) {
      return true;
    }
    return isAlive;
  }
}
