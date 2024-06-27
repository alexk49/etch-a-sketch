const defaultGridSize = 16;

function setGrid (gridSize) {
    const grid = document.querySelector("#grid");
    
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

const submitButton = document.querySelector('#submit-button')
submitButton.addEventListener('click', () => {
    setGrid(gridSize);
});

setGrid(defaultGridSize);
