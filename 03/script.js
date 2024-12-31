const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Monaco", correct: false },
            { text: "Vatican City", correct: true },
            { text: "Nauru", correct: false },
            { text: "Tuvalu", correct: false },
        ]
    },
    {
        question: "Which country has the most population in the world?",
        answers: [
            { text: "China", correct: false },
            { text: "India", correct: true },
            { text: "USA", correct: false },
            { text: "Indonesia", correct: false },
        ]
    },
    {
        question: "Which is the largest ocean in the world?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Sahara Desert", correct: true },
            { text: "Arabian Desert", correct: false },
            { text: "Gobi Desert", correct: false },
            { text: "Kalahari Desert", correct: false },
        ]
    },
    {
        question: "Which is the largest planet in the solar system?",
        answers: [
            { text: "Mercury", correct: false },
            { text: "Venus", correct: false },
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
        ]
    }
];

let currentQuestionIndex = 0;
let isWrongAnswer = false;

function showQuestion() {
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answerBtn');
    
    questionElement.innerText = questions[currentQuestionIndex].question;
    answerButtonsElement.innerHTML = ''; // Clear previous answers

    questions[currentQuestionIndex].answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text; // Set the button text to the answer text
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        if (button.innerText === answer.text) {
            button.classList.add(correct ? 'correct' : 'wrong');
        }
        button.disabled = true; // Disable all buttons after an answer is selected
    });
    const nextBtn = document.getElementById('nextBtn');
    if (correct) {
        nextBtn.innerText = 'Next';
        isWrongAnswer = false;
    } else {
        nextBtn.innerText = 'Wrong, Try again!';
        isWrongAnswer = true;
    }
    nextBtn.style.display = 'block';
}

function nextQuestion() {
    if (isWrongAnswer) {
        showQuestion();
        document.getElementById('nextBtn').style.display = 'none';
    } else {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
            document.getElementById('nextBtn').style.display = 'none';
        } else {
            // Handle end of quiz
            alert('Quiz completed!');
        }
    }
}

document.getElementById('nextBtn').addEventListener('click', nextQuestion);

// Initialize the quiz
showQuestion();