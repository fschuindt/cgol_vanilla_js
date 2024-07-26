import { Board } from './board.js';
import { Neighbours } from './neighbours.js';
import { View } from './view.js';

export class Game {
    constructor(x, y, clock) {
        this._generation = 0;
        this._x = x;
        this._y = y;
        this._clock = clock;

        let board = new Board(x, y);
        board.randomize();

        this._board = board;
    }

    static launch(x, y, clock) {
        const gridContainer = document.getElementById('grid-container');

        View.clearGrid();
        View.setGridSize(x, y);
        View.spawnGrid(x, y);

        let game = new Game(x, y, clock);
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
        const currentBoard = this._board;
        let neighbours;
        let x, y;
        let is_alive;

        currentBoard._state.map((row, row_index) => {
            row.map((cell, cell_index) => {
                x = cell_index + 1;
                y = currentBoard.y - row_index;

                neighbours = Neighbours.countAlive(currentBoard, x, y);
                is_alive = currentBoard.getAt(x, y);

                if (is_alive && neighbours < 2) {
                    this._board.setAt(x, y, false);
                } else if (is_alive && neighbours <= 3) {
                    this._board.setAt(x, y, true);
                } else if (is_alive && neighbours > 3) {
                    this._board.setAt(x, y, false);
                } else if (neighbours == 3) {
                    this._board.setAt(x, y, true);
                }
            });
        });

        this._generation++;
    }
}
