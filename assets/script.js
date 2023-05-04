const questions = [
    {
        question: "A web browser ___________",
        answers: [
            {text: "is a program that runs on a web server", correct: false},
            {text: "starts when a web server sends a page to a client", correct: false},
            {text: "starts when an HTTP request is made", correct: false},
            {text: "is a program that runs on a client computer", correct: true},
        ]
    },
    {
        question: "An HTTP response is sent from ___________",
        answers: [
            {text: "the web server to the application server", correct: false},
            {text: "the client to the web server", correct: false},
            {text: "the application server to the web server", correct: false},
            {text: "the web server to the client", correct: true},
        ]
    },
    {
        question: "When a browser makes a request for a static web page, the web server ___________",
        answers: [
            {text: "returns the HTML for the page and the browser renders it", correct: true},
            {text: "generates the HTML for the page and returns it to the browser", correct: false},
            {text: "renders the HTML for the page and returns it to the browser", correct: false},
            {text: "finds the HTML for the page and renders it", correct: false},
        ]
    },
    {
        question: "When a browser makes a request for a dynamic web page _____________",
        answers: [
            {text: "the web server processes the request and returns the HTML to the browser", correct: false},
            {text: "the web server gets the data for the request from a database and returns the data to the browser", correct: false},
            {text: "an application server processes the request and returns the HTML to the web server", correct: true},
            {text: "an application server processes the request and returns the HTML to the browser", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

// function resets two variables: currentQuestionIndex and score to 0, and makes next button visible.
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion(){
    resetState(); // function will reset previous question and answer.
    let currentQuestion = questions[currentQuestionIndex]; // variable selects a question by it's index number from a pool of questions.
    let questionNo = currentQuestionIndex + 1; // then adds + 1 to that question's index for display purposes.
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // here, we add the question to #question in index.html file.

    currentQuestion.answers.forEach(answer => { // grab answers from the same pool of questions.
        const button = document.createElement("button"); // creates a button tag and saves it as var button.
        button.innerHTML = answer.text; // add text of an answer to the button element index.html.
        button.classList.add("btn"); // we add class btn to a button element.
        answerButtons.appendChild(button); // we display button in answer-buttons the question and answers.
    })
}

// removes all the previous children of answerButtons var.
function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz(); // it will call the startQuiz function and set the index and score to 0; then it will call the showQuestion with the question number and answer buttons.