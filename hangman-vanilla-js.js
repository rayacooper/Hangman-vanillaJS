const inputText = document.getElementById('Text');
const placeHolder = document.getElementById('placeHolder')
const guessWrong = document.getElementById('guessWrong')
const WordPrompt = document.getElementById('WordPrompt')
const Gallows = document.getElementById('Gallows')

const allThemLetters = a = 'A', b = 'B', c = 'C', d = 'D', e = 'E', f = 'F', g = 'G', h = 'H', i = 'I', j = 'J', k = 'K',
    l = 'L', m = 'M', n = 'N', o = 'O', p = 'P', q = 'Q', r = 'R', s = 'S', t = 'T', u = 'U', v = 'V', w = 'W', x = 'X',
    y = 'Y', z = 'Z'
const listOfWords = ['VELOCIRAPTOR', 'HERMIONE', 'ARRAKIS', 'TREEBEARD', 'JIMINY', 'PATRICK', 'TUMNUS', 'ISABEAU']
const listOfPrompts = ["Clever girl....!",
                        "The brightest witch of her age", 
                        "The spice must flow", 
                        "This conversation feels like it's been going on for months", 
                        "Always let your conscience be your guide!",
                        "I am not a crusty crab >:(",
                        "This faun no longer works for the White Witch",
                        "She's a hawk in the daytime" ]

let rando = 0;
let chances = 0;
let rightGuesses = []
let wrongGuesses = []
let secretWord = []
let prompter = ''
let tempString = ''

const newGame = () => {
    chances = 0; 
    rightGuesses = [];
    wrongGuesses = [];
    Gallows.src = './Hangman-00.svg'
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
        Gallows.src = `./Hangman-0${wrongGuesses.length}.svg`
    }else if(chances >= 5){
        Gallows.src = './Hangman-06.svg'
        setTimeout(() => {
            alert(`Sorry, the word we were looking for was: ${secretWord.join('')}`)
        }, 500);
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

