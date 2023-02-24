let player = {
    name: "emoghene",
    chips: 145,
}


let cards = []
let sum = 0
console.log(sum)
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")



playerEl.textContent = [player.name + ":  $" + player.chips]

console.log(cards)

function getRandomCard() {

    let cardRandom = Math.floor(Math.random() * 13 ) + 1
    if (cardRandom > 10){
        return 10 
    }else if (cardRandom === 1) {
        return 11
    }else {
        return cardRandom
    }
}
 console.log(cards)



function startGame() {
    renderGame()
}

let firstCard = getRandomCard()
let secondCard = getRandomCard()
cards = [firstCard, secondCard]
sum = firstCard + secondCard

function renderGame() {
    cardEl.textContent = "cards: " 
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "sum: " + sum
    if (sum <= 20) {
        message = "do you want another card"
    } else if (sum === 21){
       message = "you've got Blackjack"
       hasBlackJack = true
    }else {
        message = "you lose"
        isAlive = false
    } 
    messageEl.textContent = message
}
function newCard() {

    if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push (card)
    renderGame()
    }
}





