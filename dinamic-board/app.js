const board = document.querySelector('#board')
const colors = ['#e74c3c' , '#8e44ad', '#0000ff', '#800080', '#00ffff', '#008000' , '#ffff00']
const SQUARES_NUMBER = 600


for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square)) 

    square.addEventListener('mouseleave', () => removeColor(square)) 

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
  
    setTimeout(() => {
      removeColor(element)
    }, 1)
  }

function removeColor(element) {
    setTimeout(() => {
      element.style.backgroundColor = '1d1d1d'
      element.style.boxShadow = `0 0 2px #000`
    }, 2)
  }

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}