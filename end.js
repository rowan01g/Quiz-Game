const username = document.querySelctor("#username")
const saveScoreBtn = document.querySelctor("#saveScoreBtn")
const finalScore = document.querySelctor("#finalScore")
const mostRecentScore = document.querySelctor("#mostRecentScore")

const highScore = JSON.parse(localStorage.getItem("highScores")) || [] //localStorage.getItem("highScores") retrieves highscores from local storage

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScore.push(score)

    highScores.sort((a, b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign("/")
}