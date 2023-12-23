function createGrid() {
    const grid = document.createElement('div');
    grid.classList.add('grid');

    let trigger = false;
    grid.addEventListener('mouseover', e => {
        if (trigger) {
            e.target.style.background = 'red';
        }
    });
    document.addEventListener('mousedown', e => {
        e.target.style.background = 'red';
        trigger = true;
    });
    document.addEventListener('mouseup', () => {
        trigger = false;
    });

    return grid;
}

function createGridColumn(column) {
    const gridColumn = document.createElement('div');
    gridColumn.classList.add('column');

    for (let i = 0; i < column; i++) {
        const grid = createGrid();
        gridColumn.appendChild(grid);
    }

    return gridColumn;
}

function createSketchboard(row, column) {
    const sketchboard = document.createElement('div');
    sketchboard.id = 'sketchboard';

    for (let i = 0; i < row; i++) {
        const gridColumn = createGridColumn(column);
        sketchboard.appendChild(gridColumn);
    }

    sketchboard.addEventListener('dragstart', e => {
        e.preventDefault();
    });
    
    return sketchboard;
}

const container = document.querySelector('#container');
const sketchboard = createSketchboard(16, 16);
container.appendChild(sketchboard);