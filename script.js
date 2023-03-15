function createGridItem() {
    const gridItem = document.createElement('div');
    gridItem.setAttribute('class', 'grid-item');
    gridItem.addEventListener('mousedown', setColor);
    gridItem.addEventListener('mouseover', setColor);
    return gridItem;
}

function createGridRow() {
    const gridRow = document.createElement('div');
    gridRow.setAttribute('class', 'grid-row');
    for (let i = 0; i < 16; i++) {
        const gridItem = createGridItem();
        gridRow.appendChild(gridItem);
    }
    return gridRow;
}

function createGridContainer() {
    const gridContainer = document.querySelector("#grid-container");
    for (let i = 0; i < 16; i++) {
        const gridRow = createGridRow();
        gridContainer.appendChild(gridRow);
    }
}

function setColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = 'black';
}

createGridContainer();
let mouseDown = 0;
document.body.onmousedown = () => mouseDown = 1;
document.body.onmouseup = () => mouseDown = 0;
document.getElementById('grid-container').addEventListener('dragstart', e => e.preventDefault());