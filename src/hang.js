// gest All Letters
let letters = "abcdefghijklmnopqrstuvwxyz"
let lettersArray = Array.from(letters)

const theLettersCountainer = document.querySelector(".letters")

// creat span of Letters
lettersArray.forEach((letters) => {
    const span = document.createElement("span")
    const letterOfSpan = document.createTextNode(letters.toUpperCase())
    span.className = 'letter-box'
    span.appendChild(letterOfSpan)
    theLettersCountainer.appendChild(span)
})
// All Soundes
const sounds = {
    incorrect: new Audio("Sounds/mixkit-losing-bleeps-2026.wav"),
    correct: new Audio("Sounds/mixkit-retro-arcade-casino-notification-211.wav"),
    win: new Audio("Sounds/preview (1).mp3"),
    lose: new Audio("Sounds/preview.mp3"),
}
// Get All Words Of Object 
const Words = {
    Player: ["Messi", "Ronaldo", "Salah", "Mbappe", "Neymar", "Benzema", "Haaland", "Modric", "Zidane", "Ronaldinho"],
    Film: ["Inception", "Titanic", "Joker", "Avatar", "Gladiator", "Interstellar", "Frozen", "Matrix", "Rocky", "Scarface"],
    Series: ["Friends", "BreakingBad", "MoneyHeist", "Dark", "Vikings", "Sherlock", "Loki", "Dexter", "Narcos", "Wednesday"],
    Game: ["FIFA", "GTA", "Fortnite", "PUBG", "Minecraft", "Valorant", "Roblox", "Apex", "EldenRing", "Cyberpunk"],
    Char: ["Batman", "Spiderman", "Goku", "Naruto", "Ironman", "Superman", "Hulk", "Thor", "Joker", "Deadpool"]
};

// Get Random Word
const allKeys = Object.keys(Words)
// Number Of Keys
const randomNumber = Math.floor(Math.random() * allKeys.length)
// Name Of Keys
const randomName = allKeys[randomNumber]
// Value Of Keys
const randomValue = Words[randomName]
// Number Of Value
const numberValueRandom = Math.floor(Math.random() * randomValue.length)
// Fainly Random Name
const nameValueRandom = randomValue[numberValueRandom]

// Set Word From
document.querySelector(".category span").innerHTML = randomName

// Get Guess Container 
const guessContainer = document.querySelector(".letters-guess")

// Creat Array Letters
const arrayLetters = Array.from(nameValueRandom)

// Loop All Letters By ForEach
arrayLetters.forEach(letters => {
    // Creat All Span 
    const spans = document.createElement('span')

    guessContainer.appendChild(spans)
})

// Get span Guess
const guessSpan = document.querySelectorAll(".letters-guess span")

// Get TheHangMan Element 
const TheHangMan = document.querySelector(".the-hangman")

// Set Index Chosen
let chosenWorng = 0

const emptySpans = document.querySelectorAll('.letters .letter-box')

const fillSpans = document.querySelectorAll(".letters-guess span")
let count = 0
// create Button of Letters
document.addEventListener("click", (e) => {
    let chose = false
    if (e.target.className === 'letter-box') {
        // Add Class Name
        e.target.classList.add("clicked")
        // Get Correct Letter
        const theClickedLetter = e.target.innerHTML.toLowerCase()
        const theChoseLetter = Array.from(nameValueRandom.toLowerCase())
        // Loop For Chosen Letter
        theChoseLetter.forEach((wordLetter, wordIndex) => {
            // All Spans Is Embty And letter Equal ClickedLetter 
            if (theClickedLetter == wordLetter && fillSpans[wordIndex].textContent === "") {
                count++
                chose = true

                // Loop On All Spans Is Equal Word Index
                guessSpan.forEach((span, spanIndex) => {
                    if (wordIndex === spanIndex) {
                        span.innerHTML = theClickedLetter
                        span.classList.add("correct")
                        sounds.correct.currentTime = 0
                        sounds.correct.play().catch(() => { })
                    }
                })
            }
        })
        // Add Class False For Worng Letter
        if (chose !== true) {
            chosenWorng++
            TheHangMan.classList.add(`false-${chosenWorng}`)
            sounds.incorrect.currentTime = 0
            sounds.incorrect.play().catch(() => { })
            // Add Class Finish For Function gameEnd And Game Over
            if (chosenWorng === 8) {
                gameEnd()
                theLettersCountainer.classList.add("finished")
                sounds.lose.currentTime = 0
                sounds.lose.play().catch(() => { })
            }
        }
        // Win Function And Win Game
        if (count === theChoseLetter.length) {
            winGame()
            theLettersCountainer.classList.add("finished")
            sounds.win.currentTime = 0
            sounds.win.play().catch(() => { })
        }
    }
})

// Creat Game Over Function
function gameEnd() {
    const div = document.createElement('div')
    const textDiv = document.createTextNode(`Game Over The Word Is ${nameValueRandom}`)
    div.appendChild(textDiv)
    div.classList.add("game-over")
    document.body.appendChild(div)
}


// creat winner function 
function winGame() {
    // creat Win Div 
    const div = document.createElement("div")
    const textDiv = document.createTextNode('')
    div.classList.add('win')
    div.appendChild(textDiv)
    document.body.appendChild(div)
    if (chosenWorng === 0) {
        textDiv.textContent = 'Perfect! No Mistakes at all 👑'
    } else if (chosenWorng <= 2) {
        textDiv.textContent = 'Great win! Almost perfect ⭐'
    } else if (chosenWorng <= 6) {
        textDiv.textContent = 'Good job! Keep practicing 🙂'
    } else if (chosenWorng === 8) {
        textDiv.textContent = 'win is a win! Barely made it 😬'
    }
}

function winGame1() {
    // creat Win Div 
    const div = document.createElement("div")
    const textDiv = document.createTextNode(`Congratulation You Win The Worng Is Less 8`)
    div.classList.add('win')
    div.appendChild(textDiv)
    document.body.appendChild(div)
}