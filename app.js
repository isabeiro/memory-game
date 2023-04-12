document.addEventListener('DOMContentLoaded', () => {

  //cards
  const cardArray = [
    {
      name: 'bart',
      img: 'img/bart.png'
    },
    {
      name: 'bart',
      img: 'img/bart.png'
    },
    {
      name: 'homer',
      img: 'img/homer.png'
    },
    {
      name: 'homer',
      img: 'img/homer.png'
    },
    {
      name: 'homer2',
      img: 'img/homer2.png'
    },
    {
      name: 'homer2',
      img: 'img/homer2.png'
    },
    {
      name: 'lisa',
      img: 'img/lisa.png'
    },
    {
      name: 'lisa',
      img: 'img/lisa.png'
    },
    {
      name: 'marge',
      img: 'img/marge.png'
    },
    {
      name: 'marge',
      img: 'img/marge.png'
    },
    {
      name: 'meg',
      img: 'img/meg.png'
    },
    {
      name: 'meg',
      img: 'img/meg.png'
    },
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  const button = document.querySelector('#button')

  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

  //gameboard
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'img/donut.png')
      card.setAttribute('dataId', i)
      card.addEventListener('click', flipCard)

      grid.appendChild(card)
    }
  }

  //check matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute('src', 'img/yellow.png')
      cards[optionTwoId].setAttribute('src', 'img/yellow.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)

      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'img/donut.png')
      cards[optionTwoId].setAttribute('src', 'img/donut.png')
      cards[optionOneId].addEventListener('click', flipCard)
      cards[optionTwoId].addEventListener('click', flipCard)
    }

    cardsChosen = []
    cardsChosenId = []

    resultDisplay.textContent = cardsWon.length

    if (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip the card
  function flipCard() {
    var cardId = this.getAttribute('dataId')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    this.removeEventListener('click', flipCard)
    
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 400)
    }
  }

  //try again
  button.onclick = () => {
    window.location.reload()
  }
  createBoard()
})