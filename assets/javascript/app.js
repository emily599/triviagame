var questions = [
    {
        question: "What is the name of Link's horse throughout The Legend of Zelda series?",
        answers: ["Midna", "Ponita", "Zora", "Epona"],
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
var totalCorrect = 0;
var totalIncorrect = 0;
var totalUnanswered = 0;

var userAnswer;


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

    var number = 15;
    var intervalId;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(timer, 1000);
    }

    $('button').click(function () {
        console.log(($(this).text()));
        console.log((questions[0].correctAnswer));
        if (($(this).text()) === ((questions[0].correctAnswer))) { //if correct 
            alert("correct");
            totalCorrect++;
        }
        else { //if incorrect
            alert("incorrect");
            totalIncorrect++;
        }
    })




    function timer() {
        number--;
        $("#timeRemaining").text("Time Remaining: " + number);
        if (number === 0) {//Second scenario: if user runs out of time
            alert("times up");
            totalUnanswered++;
        }

    }

    timer();
    run();


})
