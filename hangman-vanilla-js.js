const inputText = document.getElementById('Text');
const placeHolder = document.getElementById('placeHolder')
const guessWrong = document.getElementById('guessWrong')

const allThemLetters = a = 'a', b = 'b', c = 'c', d = 'd', e = 'e', f = 'f', g = 'g', h = 'h', i = 'i', j = 'j', k = 'k',
    l = 'l', m = 'm', n = 'n', o = 'o', p = 'p', q = 'q', r = 'r', s = 's', t = 't', u = 'u', v = 'v', w = 'w', x = 'x',
    y = 'y', z = 'z'
const listOfWords = ['syntax', 'code', 'tilde', 'error', 'test', 'buffer']

let chances = 0;
let lettersCorrect = 0
let rightGuesses = []
let wrongGuesses = []
let secretWord = []
let tempString = ''

// const testing = () => {
//     console.log(inputText.value)
// }
const newGame = () => {
    chances = 0; 
    lettersCorrect = 0;
    rightGuesses = [];
    wrongGuesses = [];
    secretWord = listOfWords[Math.floor(Math.random() * 5)].split('');
    tempString = secretWord.map(e => e = '_').join('');
    placeHolder.innerHTML = tempString;
    guessWrong.innerHTML = wrongGuesses.join('')
    console.log(secretWord)
}

const letterGuess = (x) => {
    chances++
    if(secretWord.includes(x) && chances < 5){
        rightGuesses.push(x)
        alert('Yay')
    }else if(!secretWord.includes(x) && chances < 5){
        wrongGuesses.push(x)
        guessWrong.innerHTML = wrongGuesses.join('')
        alert('Whoops! Try again!')
    }else if(chances >= 5){
        alert('Sorry, out of guesses!')
    }
    console.log()
}

const guessing = () => {
    if (inputText.value.toLowerCase() == secretWord){
        alert("You Win!!!")
    }else if (chances < 5){
        alert("Sorry, try again!")
        chances++
    }else{
        alert("Sorry, you lose!")
    }

}

