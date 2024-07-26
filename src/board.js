export class Board {
  constructor(x, y) {
    this._x = x;
    this._y = y;
    this._state = this._createEmptyState();
  }

  set x(x) {
    this._x = x;
  }

  get x() {
    return this._x;
  }

  set y(y) {
    this._y = y;
  }

  get y() {
    return this._y;
  }

  set state(state) {
    this._state = state;
  }

  get state() {
    return this._state;
  }

  setAt(x, y, value) {
    if (this._isValidCoordinate(x, y)) {
      this._state[this._y - y][x - 1] = value;
    }
  }

  getAt(x, y) {
    return this._isValidCoordinate(x, y)
      ? this._state[this._y - y][x - 1]
      : undefined;
  }

  getRowAt(y) {
    return y > 0 && y <= this._y ? this._state[this._y - y] : undefined;
  }

  flipAt(x, y) {
    if (this._isValidCoordinate(x, y)) {
      this.setAt(x, y, !this.getAt(x, y));
    }
  }

  randomize() {
    this._state = Array.from({ length: this._y }, () =>
      Array.from({ length: this._x }, () => Math.random() >= 0.5)
    );
  }

  _createEmptyState() {
    return Array.from({ length: this._y }, () => Array(this._x).fill(false));
  }

  _isValidCoordinate(x, y) {
    return x > 0 && x <= this._x && y > 0 && y <= this._y;
  }
}
