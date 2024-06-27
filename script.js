const defaultGridSize = 16;

const grid = document.querySelector("#grid");

function setGrid (gridSize) {
    for (let i = 0; i < gridSize; i++) {

        const row = document.createElement("div");
        row.classList.add("row");
        
        for (let j = 0; j < (gridSize); j++) {
            const column = document.createElement("div");
            column.classList.add("column");
            column.classList.add("square");

            column.addEventListener('mouseover', () => {
                column.classList.add("highlight");
            });
            row.appendChild(column);

        }
        grid.appendChild(row);
    }
};

function resetGrid () {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.lastChild);
    }
}

const submitButton = document.querySelector('#submit-button')
submitButton.addEventListener('click', () => {
    let gridSize = document.getElementById('grid-size').value
    resetGrid()
    setGrid(gridSize);
});

setGrid(defaultGridSize);
