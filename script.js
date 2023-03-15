function createGridItem() {
    const gridItem = document.createElement('div');
    gridItem.setAttribute('class', 'grid-item');
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

createGridContainer();