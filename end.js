const username = document.querySelctor("#username")
const saveScoreBtn = document.querySelctor("#saveScoreBtn")
const finalScore = document.querySelctor("#finalScore")
const mostRecentScore = document.querySelctor("#mostRecentScore")

const highScore = JSON.parse(localStorage.getItem("highScores")) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

