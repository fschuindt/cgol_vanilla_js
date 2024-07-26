export class Board {
    constructor(x, y) {
        this._x = x;
        this._y = y;
        this._state = this.emptyState();
    }

    set x(x) {
        this._x = x;
    }

    set y(y) {
        this._y = y;
    }

    set state(state) {
        this._state = state;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    get state() {
        return this._state;
    }

    getAt(x, y) {
        return this._state[this._state.length - y][x - 1];
    }

    getRowAt(y) {
        return this._state[this._state.length - y];
    }

    setAt(x, y, value) {
        this._state[this._state.length - y][x - 1] = value;
    }

    flipAt(x, y) {
        this.setAt(x, y, !this.getAt(x, y));
    }

    randomize() {
        this._state = Array(this._y).fill().map(() =>
            Array(this._x).fill().map(() => this.#randomCell())
        );
    }

    emptyState() {
        return Array(this._y).fill().map(() => Array(this._x).fill(0));
    }

    #randomCell() {
        return Math.random() >= 0.5;
    }
}