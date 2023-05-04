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
const answerButton = document.getElementById("answer-buttons");