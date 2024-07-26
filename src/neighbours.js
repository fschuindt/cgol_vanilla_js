export class Neighbours {
    static countAlive(board, x, y) {
        return Neighbours.getCoordinates(board, x, y).reduce((acc, [nx, ny]) => 
            acc + (board.getAt(nx, ny) ? 1 : 0), 0);
    }

    static countDead(board, x, y) {
        return 8 - Neighbours.countAlive(board, x, y);
    }

    static getCoordinates(board, x, y) {
        const directions = [
            [0, -1], [0, 1], [-1, 0], [1, 0], 
            [-1, -1], [1, -1], [-1, 1], [1, 1]
        ];

        return directions
            .map(([dx, dy]) => [x + dx, y + dy])
            .filter(([nx, ny]) => nx >= 0 && nx < board.x && ny >= 0 && ny < board.y);
    }
}
