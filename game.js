const question = document. querySelector('#question') //returns the first Element within the document that matches the specified CSS selector, or group of CSS selectors
const choices = Array.from(document.querySelectorAll('.choice-text')) //querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors, then array from creates an array from them.
const progressText = document. querySelector('#progressText')
const scoreText = document. querySelector('#score')
const progressBarFull = document. querySelector('#progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true 
let score = 0 
let questionCounter = 0
let availableQuestions = []

let questions [
    {
        question: 'what is 2 + 2',
        choice1: "2",
        choice2: "4",
        choice3: "22",
        choice4: "17",
        answer: 2,
    },
    {
        question: 'What is the capital of France?',
        choice1: "Berlin",
        choice2: "Paris",
        choice3: "Madrid",
        choice4: "Rome",
        answer: 2,
    },
    {
        question: 'Which planet is known as the Red Planet?',
        choice1: "Earth",
        choice2: "Jupiter",
        choice3: "Mars",
        choice4: "Venus",
        answer: 3,
    },
    {
        question: 'What is the chemical symbol for water?',
        choice1: "H2O",
        choice2: "CO2",
        choice3: "NaCl",
        choice4: "O2",
        answer: 1,
    },
    {
        question: 'How many continents are there on Earth?',
        choice1: "5",
        choice2: "6",
        choice3: "7",
        choice4: "8",
        answer: 3,
    },
]

const SCORE_POINTS = 100 
const MAX_QUESTIONS = 4

startGame = () => { //assigning a function "arrow function"
    questionCounter = 0
    score = 0 
    availableQuestions = [...question] //sqare brackets is an array and spread operator (...) gets all the values from questions
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS ) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }
}