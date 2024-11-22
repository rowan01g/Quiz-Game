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

let questions = [ // rememeber, question from here are passed into another array later: "availableQuestions"
    {
        question: "what is 2 + 2?",
        choice1: "2",
        choice2: "4",
        choice3: "22",
        choice4: "17",
        answer: 2,
    },
    {
        question: "What is the capital of France?",
        choice1: "Berlin",
        choice2: "Paris",
        choice3: "Madrid",
        choice4: "Rome",
        answer: 2,
    },
    {
        question: "Which planet is known as the Red Planet?",
        choice1: "Earth",
        choice2: "Jupiter",
        choice3: "Mars",
        choice4: "Venus",
        answer: 3,
    },
    {
        question: "What is the chemical symbol for water?",
        choice1: "H2O",
        choice2: "CO2",
        choice3: "NaCl",
        choice4: "O2",
        answer: 1,
    },
    {
        question: "How many continents are there on Earth?",
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
    questionCounter = 0 //question counter starts at 0
    score = 0 // score starts at 0 
    availableQuestions = [...questions] //square brackets is an array and spread operator (...) gets all the values from questions 
    getNewQuestion() // a question is loaded at the start of the game
}


/*
In the getNewQuestion function, first, js checks if there are still available question from the pool
and that the number of questions answered does not exceed the maximum number of questions alloqwed
Second, question counter is incremented to keep track of how many questions have been displayaed thus far - this is used to progress the progressBar
Next, a random question is selcted from "availableQuestions" and the question text diplayed in the html question div 
*/

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS ) { //"if there are no more available questions or the question counter has exceeded the maximum alloqwed questions, record the score "
        localStorage.setItem('mostRecentScore', score) //save your score to local storage

        return window.location.assign('/end.html') //directs user to "end" page upon game completion
    }

    questionCounter++ //++ increments (adds one to) its operand and returns the value before or after the increment, will increase question counter by 1 
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}` //backticks create a 'template literal' - this is a string that you can integrate a varibale into
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%` //dispalys ratio of completed questions to max questions as a percentage progress bar
    
    // questionIndex an integer that represent what question we're on in the availableQuestions array
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length) //Math.floor returns the largest integer less than or equal to a given number, Math.random returns a random number between 0 and 1, .length returns the number of elements within an array
    currentQuestion = availableQuestions[questionsIndex] //sets the current question - if questionIndex is 3, the current question will be the 3rd question form the available questions array 
    question.innerText = currentQuestion.question // "innerText" retrieves the visible text content of an element - this sets the question area of html to the current question randomly selected from available questions 

    choices.forEach(choice => {         //Iterates over each element (a choice) in the choices collection, executing the provided callback function for each one.
        const number = choice.dataset['number'] // Retrieves the value of the data-number attribute on the current choice-text element (look at html - in the html, data-number = "x") - selctive for choice-text as this contains data-number
        choice.innerText = currentQuestion['choice' + number] // eg. choice4: "8" - inner text will retrieve "8" as currentQuestion retrieves "choice4" - "choice4" will correspond to an actual question

    })

    availableQuestions.splice(questionsIndex, 1) //removes item from the array available question - if questionsIndex = 5, will remove 6th item
    acceptingAnswers = true 

}

choices.forEach(choice => {
    choice.addEventListener('click', e => { //adds a click event listener to each choice
        if(!acceptingAnswers) return // "if accepeting answers = false" When a return statement is encountered within a function, the function will immediately stop executing

        acceptingAnswers = false //sets accpetingAnswers to false to prevent multiple rapid clicks
        const selectedChoice = e.target //captures chouice user clicked
        const selectedAnswer = selectedChoice.dataset['number'] //retrieves the data-number the use chose

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct': 'incorrect' //determines if selected answer matches correct answer, if so correct, if not, incorrect

        if(classToApply === 'correct') { //adds points if calsstoapply is correct 
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply) // Adds the class ('correct' or 'incorrect') to the parent element of the selected choice. This is often used to visually indicate whether the choice was correct or incorrect (e.g., changing its background colour).

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply) // The applied class ('correct' or 'incorrect') is removed to reset the visual state of the choice.
            getNewQuestion()
        }, 1000) //Delays the execution of the code inside the function by 1000 milliseconds
    })
})

// eg. incrementScore(100) would increase the score by 100 
incrementScore = num => {
    score +=num // increments the value of a variable score by num.
    scoreText.innertext = score
}

startGame()