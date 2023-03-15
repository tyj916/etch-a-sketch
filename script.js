function createGridContainer(gridSize) {
    const mainContainer = document.querySelector("#main-container");
    const gridContainer = document.createElement("div");
    gridContainer.setAttribute('id', 'grid-container');
    
    for (let i = 0; i < gridSize; i++) {
        const gridRow = document.createElement('div');
        gridRow.setAttribute('class', 'grid-row');
        for (let i = 0; i < gridSize; i++) {
            const gridItem = createGridItem();
            gridRow.appendChild(gridItem);
        }
        gridContainer.appendChild(gridRow);
    }

    gridContainer.addEventListener('dragstart', e => e.preventDefault()); // prevent drag
    mainContainer.appendChild(gridContainer);
}

function createGridItem() {
    const gridItem = document.createElement('div');
    gridItem.setAttribute('class', 'grid-item');
    gridItem.addEventListener('mousedown', setColor);
    gridItem.addEventListener('mouseover', setColor);
    return gridItem;
}

function setColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = 'black';
}

function removeCurrentGrid() {
    const currentGrid = document.getElementById('grid-container');
    currentGrid.remove();
}

function changeGridSize() {
    let newSize = prompt('Enter a new size (1~100)', 16);
    while (newSize > 100 || newSize < 1) {
        newSize = prompt('Please enter a size between 1~100, try again:', 16);
    }
    removeCurrentGrid();
    createGridContainer(newSize);
}

function createGridSizeButton() {
    const mainContainer = document.querySelector('#main-container');
    const gridSizeButton = document.createElement('button');
    gridSizeButton.setAttribute('id', 'grid-size-button');
    gridSizeButton.innerText = "Change grid size";
    gridSizeButton.addEventListener('click', changeGridSize);
    mainContainer.appendChild(gridSizeButton);
}

createGridSizeButton();
createGridContainer(16);

let mouseDown = 0;
document.body.onmousedown = () => mouseDown = 1;
document.body.onmouseup = () => mouseDown = 0;