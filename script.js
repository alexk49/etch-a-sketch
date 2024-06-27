const defaultGridSize = 16

const grid = document.querySelector('#grid')

function setGrid (gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement('div')
    row.classList.add('row')

    for (let j = 0; j < (gridSize); j++) {
      const square = document.createElement('div')
      square.classList.add('square')

      square.addEventListener('mouseover', () => {
        // square.classList.add('highlight')
        const rgbValues = generateRandomColour()
        changeBackgroundColor(square, rgbValues)
      })
      row.appendChild(square)
    }
    grid.appendChild(row)
  }
};

function changeBackgroundColor (div, rgbValues) {
  // change background of div to given rgb values
  // values stored in an array
  const colour = 'rgb(' + rgbValues[0] + ' ' + rgbValues[1] + ' ' + rgbValues[2] + ')'
  div.style.background = colour
}

function resetGrid () {
  while (grid.hasChildNodes()) {
    grid.removeChild(grid.lastChild)
  }
}

function generateRgbColourCode () {
  return Math.floor(Math.random() * 255)
}

function generateRandomColour () {
  // rgb values are set like: rgb(31 120 50);
  // and have to be between 0 and 255
  const colourCodes = []
  while (colourCodes.length < 3) {
    colourCodes.push(generateRgbColourCode())
  }
  return colourCodes
};

const submitButton = document.querySelector('#submit-button')
submitButton.addEventListener('click', () => {
  const gridSize = document.getElementById('grid-size').value
  resetGrid()
  setGrid(gridSize)
})

setGrid(defaultGridSize)
