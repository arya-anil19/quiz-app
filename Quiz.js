const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Paris', correct: true },
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false },
            { text: 'Rome', correct: false }
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            { text: 'Earth', correct: false },
            { text: 'Mars', correct: true },
            { text: 'Jupiter', correct: false },
            { text: 'Venus', correct: false }
        ]
    },
    {
        question: 'What is the largest mammal?',
        answers: [
            { text: 'Elephant', correct: false },
            { text: 'Blue Whale', correct: true },
            { text: 'Giraffe', correct: false },
            { text: 'Hippopotamus', correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', startQuiz);

function startQuiz() {
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    const questionContainer = document.getElementById('question');
    const answerButtons = document.getElementById('answer-buttons');
    
    questionContainer.innerText = question.question;
    answerButtons.innerHTML = '';

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;
    setAnswerStatus(document.body, correct);

    if (correct) {
        score++;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResult();
    }
}

function setAnswerStatus(element, correct) {
    clearAnswerStatus(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearAnswerStatus(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function showResult() {
    const questionContainer = document.getElementById('question');
    const answerButtons = document.getElementById('answer-buttons');
    const nextButton = document.getElementById('next-btn');

    questionContainer.innerText = `Quiz Completed! Your Score: ${score} / ${questions.length}`;
    answerButtons.innerHTML = '';
    nextButton.style.display = 'none';
}
