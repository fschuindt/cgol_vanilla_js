export class View {
    static gridContainer = document.getElementById('grid-container');

    static setGridSize(x, y) {
        this.gridContainer.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
        this.gridContainer.style.gridTemplateRows = `repeat(${y}, 1fr)`;
    }

    static clearGrid() {
        while (this.gridContainer.firstChild) {
            this.gridContainer.removeChild(this.gridContainer.firstChild);
        }
    }

    static spawnGrid(x, y) {
        this.clearGrid();
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < x * y; i++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            fragment.appendChild(gridItem);
        }

        this.gridContainer.appendChild(fragment);
    }

    static render(state) {
        let childIndex = 0;

        state.forEach(row => {
            row.forEach(cell => {
                const gridItem = this.gridContainer.children[childIndex++];
                if (cell) {
                    gridItem.classList.add('active');
                } else {
                    gridItem.classList.remove('active');
                }
            });
        });
    }
}
