const username = document.querySelector('username')
const saveScore = document.querySelector('save-score')

const highScore = JSON.parse(localStorage.getItem('highScores')) || {}