export class Neighbours {
    static countAlive(board, ...coordinates) {
        return Neighbours.getCoordinates(board, ...coordinates).reduce((acc, coordinate) => {
            if (board.getAt(coordinate[0], coordinate[1])) {
                acc++;
                return acc;
            } else {
                return acc;
            }
        }, 0);
    }

    static countDead(board, x, y) {
        return 8 - Neighbours.countAlive(board, x, y);
    }

    static getCoordinates(board, x, y) {
        let allNeighbours = [
            {coordinate: [x, y - 1], generators: ['sub_y']},
            {coordinate: [x, y + 1], generators: ['add_y']},
            {coordinate: [x - 1, y], generators: ['sub_x']},
            {coordinate: [x + 1, y], generators: ['add_x']},
            {coordinate: [x - 1, y - 1], generators: ['sub_x', 'sub_y']},
            {coordinate: [x + 1, y - 1], generators: ['add_x', 'sub_y']},
            {coordinate: [x - 1, y + 1], generators: ['sub_x', 'add_y']},
            {coordinate: [x + 1, y + 1], generators: ['add_x', 'add_y']}
        ];

        if (x >= board.x) {
            allNeighbours = allNeighbours.filter(neighbour => !neighbour.generators.includes('add_x'));
        }

        if (x <= 1) {
            allNeighbours = allNeighbours.filter(neighbour => !neighbour.generators.includes('sub_x'));
        }

        if (y >= board.y) {
            allNeighbours = allNeighbours.filter(neighbour => !neighbour.generators.includes('add_y'));
        }

        if (y <= 1) {
            allNeighbours = allNeighbours.filter(neighbour => !neighbour.generators.includes('sub_y'));
        }

        return allNeighbours.map((neighbour) => neighbour.coordinate);
    }
}
