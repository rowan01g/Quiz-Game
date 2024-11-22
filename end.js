const username = document.querySelctor("#username") //all these link calculated values from js to html page
const saveScoreBtn = document.querySelctor("#saveScoreBtn")
const finalScore = document.querySelctor("#finalScore")
const mostRecentScore = document.querySelctor("#mostRecentScore")

const highScore = JSON.parse(localStorage.getItem("highScores")) || [] //localStorage.getItem("highScores") retrieves highscores from local storage

const MAX_HIGH_SCORES = 5 //sets a maximum of 5 highscores on the leaderboard

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault() //this prevents the default action of an element

    const score = { //new object where most recent score and name of user are recorded. username.value allows for the user to input a name into a form
        score: mostRecentScore,
        name: username.value
    }

    highScore.push(score) // new score object (above) is added to the highScore array

    highScores.sort((a, b) => { //orders scores from largest to smallest 
        return b.score - a.score
    })

    highScores.splice(5) //removes all array elemets from the 5th indexe onwards, ensuring onnly the top 5 scores are saved 

    //The updated highScores array is converted to a JSON string using JSON.stringify and stored in localStorage under the key 'highScores'.
    localStorage.setItem('highScores', JSON.stringify(highScores)) //allows highscores to persist over browser sessions 
    window.location.assign("/")
}