const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('#choice-text'))
const scoretext = document.querySelector('#score')
const countdown = document.querySelector('#countdown')

let currentQuestion = {}
let acceptedAnswer = true
let score = 0
let questionCounter = 0
let Timer = 90
let questionBank = []


let questions = [
    {
        question: "Which is not a data type?",
        choice1: 'Array',
        choice2: 'Stingray',
        choice3: 'Numbers',
        choice4: 'Strings',
        answer: 2,
    },
    {
        question: "What opening and closing tag do you need to use Javascript?",
        choice1: '<h1>',
        choice2: '<p>',
        choice3: '<java>',
        choice4: '<script>', 
        answer: 4, 
    },    
    {
        question: "How many <h1> tags should your website have?",
        choice1: '1',
        choice2: '3',
        choice3: 'The limit does not exist',
        choice4: '0', 
        answer: 1,
    },
    {
        question: "Who's the best looking person in the world?",
        choice1: 'Ryan Gosling',
        choice2: 'Jessica Alba',
        choice3: 'The person grading this assignment',
        choice4: 'Hugh Jackman', 
        answer: 3,
    },
    {
        question: "What does HTML stand for?",
        choice1: 'Hold The Mail Lad',
        choice2: 'HyperText Markup Language',
        choice3: 'HyperText Multiple Language', 
        choice4: 'Honor The Midwest Liquor',
        answer: 2,
    },
    {
        question: "Along side a style CSS file, what other CSS file is good to include in your HTML code to help make sure your website looks good regardless of how the user's web browser is set up?",
        choice1: 'A reset CSS file',
        choice2: 'A jass CSS file',
        choice3: 'A java CSS file',
        choice4: 'A security CSS file', 
        answer: 1,
    },
    {
        question: "You're looking at someone's style.css file and you see this: button:hover. What type of class selector is this?",
        choice1: 'Flying',
        choice2: 'Special',
        choice3: 'TCP',
        choice4: 'Pseudo',
        answer: 4,
    },
    {
        question: "In your Java file, you have a variable called name. You want this variable to logged in the web browser's console. What is the code needed to accomplish this?",
        choice1: 'name + console', 
        choice2: 'console(name).write',
        choice3: 'console.log(name)',
        choice4: 'log.console(name)', 
        answer: 3,
    }
]

const SCORE_POINTS = 10
const MAX_QUESTIONS = 8

startQuiz = () => {
    questionCounter = 0
    score = 0
    questionBank = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (questionBank.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('lastScore', score)

        return window.location.assign('./high-score.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`

    const questionIndex = Math.floor(Math.random() * questionBank.length)
    currentQuestion = questionBank[questionIndex]
    question.innerText = currentQuestion.question
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    questionBank.splice(questionIndex, 1)

    acceptedAnswer = true

}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptedAnswer) return 
        acceptedAnswer = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply == 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()


        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoretext.innerText = score
}

