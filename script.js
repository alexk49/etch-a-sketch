function setGrid (gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement('div')
    row.classList.add('row')

    for (let j = 0; j < (gridSize); j++) {
      const square = document.createElement('div')
      square.classList.add('square')

      square.addEventListener('mouseover', () => {
        if (square.style.backgroundColor) {
          darkenRgbValues(square)
        } else {
          const rgbValues = generateRandomColour()
          changeBackgroundColor(square, rgbValues)
        }
      })
      row.appendChild(square)
    }
    grid.appendChild(row)
  }
};

function darkenRgbValues (div) {
  const rgbValues = div.style.backgroundColor
  const newValues = darkenColour(rgbValues)
  div.style.backgroundColor = newValues
}

function darkenColour (rgbString) {
  // rgb string will always be given as written in css:
  // rgb(num, num, num)
  values = rgbString.substring(4, rgbString.length - 1).split(',')

  const red = reduceNumberBy10Percent(values[0])
  const green = reduceNumberBy10Percent(values[1])
  const blue = reduceNumberBy10Percent(values[2])
  return 'rgb(' + red + ', ' + green + ', ' + blue + ')'
}

function reduceNumberBy10Percent (number) {
  return parseInt(number * 0.9)
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
  // returns number between 0 and 255
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

const defaultGridSize = 16
const grid = document.querySelector('#grid')

const submitButton = document.querySelector('#submit-button')
submitButton.addEventListener('click', () => {
  const gridSize = document.getElementById('grid-size').value
  resetGrid()
  setGrid(gridSize)
})

setGrid(defaultGridSize)
