function createGrid() {
    const grid = document.createElement('div');
    grid.classList.add('grid');

    let trigger = false;
    grid.addEventListener('mouseover', e => {
        if (trigger) {
            e.target.style.background = 'red';
        }
    });
    document.addEventListener('mousedown', () => {
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

function resizeSketchboard() {
    const gridSize = +prompt("Enter new grid size (1 ~ 100):", 16);
    while (!(gridSize > 0 && gridSize < 101)) {
        alert("Only 1 ~ 100 is allowed.");
        gridSize = +prompt("Enter new grid size (1 ~ 100):", 16);
    }

    const container = document.querySelector('#container');
    const sketchboard = document.querySelector('#sketchboard');
    container.removeChild(sketchboard);
    const newSketchboard = createSketchboard(gridSize, gridSize);
    container.appendChild(newSketchboard);
}

function createResizeButton() {
    const gridSizeButton = document.createElement('button');
    gridSizeButton.textContent = "Change grid size";
    gridSizeButton.addEventListener('click', resizeSketchboard);
    return gridSizeButton;
}

const container = document.querySelector('#container');
const resizeButton = createResizeButton();
const sketchboard = createSketchboard(16, 16);
container.appendChild(resizeButton);
container.appendChild(sketchboard);