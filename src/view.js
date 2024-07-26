export class View {
    static setGridSize(x, y) {
        const gridContainer = document.getElementById('grid-container');

        gridContainer.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${y}, 1fr)`;
    }

    static clearGrid() {
        const gridContainer = document.getElementById('grid-container');

        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }
    }

    static spawnGrid(x, y) {
        const gridContainer = document.getElementById('grid-container');

        for (let i = 0; i < x * y; i++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridContainer.appendChild(gridItem);
        }
    }

    static render(state) {
        const gridContainer = document.getElementById('grid-container');
        let child_index = 0;

        state.map((row, row_index) => {
            row.map((cell, cell_index) => {
                if (cell) {
                    gridContainer.children[child_index++].classList.add('active');
                } else {
                    gridContainer.children[child_index++].classList.remove('active');
                }
            });
        });
    }
}
