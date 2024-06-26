const grid = document.querySelector("#grid");


const gridSize = 16;

for (let i = 0; i < gridSize; i++) {

    const row = document.createElement("div");
    row.classList.add("row");
    
    for (let j = 0; j < (gridSize); j++) {
        const column = document.createElement("div");
        column.classList.add("column");
        column.classList.add("square");
        row.appendChild(column);
    }
    grid.appendChild(row);
}
