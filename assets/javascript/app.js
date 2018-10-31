var questions = [
    {
        question: "What is the name of Link's horse throughout The Legend of Zelda series?",
        answers: ["Midna", "Epona", "Ponita", "Zora"],
        correctAnswer: "Epona",
    },
    {
        question: "In Ocarina of Time, Link has to fight using a different style against Ganandorf. What sport does this battle closely resemble?",
        answers: ["Golf", "Karate", "Fencing", "Tennis"],
        correctAnswer: "Tennis",
    },
    {
        question: "Who is the Goddess of Wisdom?",
        answers: ["Nayru", "Farore", "Din", "Zelda"],
        correctAnswer: "Nayru",
    },
    {
        question: "How many sages are there?",
        answers: ["10", "3", "4", "6"],
        correctAnswer: "6",
    },
    {
        question: "Who is the antagonist in Twilight Princess?",
        answers: ["Ghirahim", "Zant", "Ganondorf", "The imprisoned and Demise"],
        correctAnswer: "Zant",
    },
]


var timeRemmaining;
var totalCorrect;
var totalIncorrect;
var totalUnanswered;


$(document).ready(function () {

    function makeAnswerButtons() { //creates buttons
        for (var i = 0; i < questions[0].answers.length; i++) {
            var answerButton = $("<button>");
            answerButton.addClass("answer");

            answerButton.text(questions[0].answers[i]);

            $("#buttons").append(answerButton);
        }
    };

    makeAnswerButtons();

    function callQuestion() { //shows question
        $("#question").text(questions[0].question);
    };

    callQuestion();

    var number = 30;
    var intervalId;

    function timesUp() { //function that switches to answer screen when timer reaches 0

    };

    function timer() {

        $("#timeRemaining").text("time");
    };
    timer();


})