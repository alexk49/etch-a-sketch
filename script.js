function setGrid (gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement('div')
    row.classList.add('row')

    for (let j = 0; j < (gridSize); j++) {
      const square = document.createElement('div')
      square.classList.add('square')

      square.addEventListener('mouseover', () => {
        if (hoverOption.checked === false) {
          ;
        } else {
          updateSquare(square)
        }
      })
      square.addEventListener('click', () => {
        if (clickOption.checked === false) {
          ;
        } else {
          updateSquare(square)
        }
      })
      row.appendChild(square)
    }
    grid.appendChild(row)
  }
};

function updateSquare (square) {
  if (square.style.backgroundColor) {
    darkenSquare(square)
  } else {
    const rgbValues = generateRandomColour()
    changeBackgroundColor(square, rgbValues)
  }
};

function darkenSquare (square) {
  const rgbString = square.style.backgroundColor
  const newValues = darkenRgbValues(rgbString)
  square.style.backgroundColor = newValues
}

function darkenRgbValues (rgbString) {
  // rgb string will always be given as written in css:
  // rgb(num, num, num)
  const colours = rgbString.substring(4, rgbString.length - 1).split(',')

  const red = reduceNumberBy10Percent(colours[0])
  const green = reduceNumberBy10Percent(colours[1])
  const blue = reduceNumberBy10Percent(colours[2])
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

const submitGridSizeButton = document.querySelector('#submit-grid-size-button')
submitGridSizeButton.addEventListener('click', () => {
  let gridSize = document.getElementById('square-size').value
  while (gridSize < 0 || gridSize > 100) {
    gridSize = Number(prompt("That's not going to work. Enter a number between 0 and 100", 16))
  }
  resetGrid()
  setGrid(gridSize)
})

const submitContainerSizeButton = document.querySelector('#submit-container-size')
submitContainerSizeButton.addEventListener('click', () => {
  let containerSize = document.getElementById('container-size').value
  while (containerSize < 2 || containerSize > 1000) {
    containerSize = Number(prompt("That's not going to work. Enter a number between 2 and 1000", 600))
  }
  const grid = document.querySelector('#grid')
  grid.style.width = containerSize + 'px'
  const options = document.querySelector('#options')
  options.style.width = parseInt(containerSize) + 200 + 'px'
})

const clickOption = document.querySelector('#click-option')
const hoverOption = document.querySelector('#hover-option')

clickOption.addEventListener('click', (event) => {
  if (event.target.checked) {
    hoverOption.checked = false
  }
})

hoverOption.addEventListener('click', (event) => {
  if (event.target.checked) {
    clickOption.checked = false
  }
})

setGrid(defaultGridSize)
