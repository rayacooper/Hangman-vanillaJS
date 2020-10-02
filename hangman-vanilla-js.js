const inputText = document.getElementById('Text');
const placeHolder = document.getElementById('placeHolder')
const guessWrong = document.getElementById('guessWrong')
const WordPrompt = document.getElementById('WordPrompt')

const allThemLetters = a = 'a', b = 'b', c = 'c', d = 'd', e = 'e', f = 'f', g = 'g', h = 'h', i = 'i', j = 'j', k = 'k',
    l = 'l', m = 'm', n = 'n', o = 'o', p = 'p', q = 'q', r = 'r', s = 's', t = 't', u = 'u', v = 'v', w = 'w', x = 'x',
    y = 'y', z = 'z'
const listOfWords = ['syntax', 'coding', 'tilde', 'error', 'test', 'buffer']
const listOfPrompts = ["This has to be right, or the computer can't read your code!", "Everybody's favorite hobby!", "The little squiggle key", "When you mess up your code, you get an...", "Do this to make sure your code works!", "C'mon little grey bar, keep going!"]

let rando = 0;
let chances = 0;
let lettersCorrect = 0
let rightGuesses = []
let wrongGuesses = []
let secretWord = []
let prompter = ''
let tempString = ''

// const testing = () => {
//     console.log(inputText.value)
// }
const newGame = () => {
    chances = 0; 
    lettersCorrect = 0;
    rightGuesses = [];
    wrongGuesses = [];
    rando = Math.floor(Math.random() * 5)
    secretWord = listOfWords[rando].split('');
    prompter = listOfPrompts[rando];
    tempString = secretWord.map(e => e = '_').join('');
    placeHolder.innerHTML = tempString;
    WordPrompt.innerHTML = prompter;
    guessWrong.innerHTML = wrongGuesses.join('');
    console.log(secretWord)
}

const letterGuess = (x) => {
    if(secretWord.includes(x) && chances < 5){
        rightGuesses.push(x);
        updatePlaceholder(x);
        if(tempString === secretWord.join('')){
            setTimeout(() => {
                alert('Good job, you win!')
            }, 500);
        }
    }else if(!secretWord.includes(x) && chances < 5){
        chances++
        wrongGuesses.push(x)
        guessWrong.innerHTML = wrongGuesses.join('')
        alert('Whoops! Try again!')
    }else if(chances >= 5){
        alert('Sorry, out of guesses!')
    }
}

const updatePlaceholder = (x) => {
    tempString = tempString.split('')
        for (var i = 0; i < secretWord.length; i++){ // Adding the 'var' here allowed me to do this for loop
            if (secretWord[i] === x){
                tempString[i] = x;
            }
        }
    tempString = tempString.join('')
    placeHolder.innerHTML = tempString
}

