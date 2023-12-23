function createGrid() {
    const grid = document.createElement('div');
    grid.classList.add('grid');
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

function addSketchingEffect() {
    const grids = document.querySelectorAll('.grid');

    let trigger = false;
    ['mousedown', 'mouseover'].forEach( event => {
        grids.forEach(grid => {
            grid.addEventListener(event, e => {
                if (trigger) {
                    e.target.style.background = 'red';
                }
            });
        });
    });
    const sketchboard = document.querySelector("#sketchboard");
    sketchboard.addEventListener('mousedown', () => {
        trigger = true;
    }, true);
    sketchboard.addEventListener('mouseup', () => {
        trigger = false;
    });
    sketchboard.addEventListener('dragstart', e => {
        e.preventDefault();
    });
}

function createSketchboard(row, column) {
    const sketchboard = document.createElement('div');
    sketchboard.id = 'sketchboard';

    for (let i = 0; i < row; i++) {
        const gridColumn = createGridColumn(column);
        sketchboard.appendChild(gridColumn);
    }
    
    const container = document.querySelector('#container');
    container.appendChild(sketchboard);

    addSketchingEffect();
}

function resizeSketchboard() {
    let gridSize = +prompt("Enter new grid size (1 ~ 100):", 16);
    while (!(gridSize > 0 && gridSize < 101)) {
        alert("Only 1 ~ 100 is allowed.");
        gridSize = +prompt("Enter new grid size (1 ~ 100):", 16);
    }

    const container = document.querySelector('#container');
    container.removeChild(sketchboard);
    createSketchboard(gridSize, gridSize);
}

function createResizeButton() {
    const resizeButton = document.createElement('button');
    resizeButton.textContent = "Change grid size";
    resizeButton.addEventListener('click', resizeSketchboard);
    
    const container = document.querySelector('#container');
    container.appendChild(resizeButton);
}

createResizeButton();
createSketchboard(16, 16);