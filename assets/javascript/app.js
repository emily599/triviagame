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
var index = 0;


$(document).ready(function () {

    var start = $("<button>");
    start.text("Start");
    $("#buttons").append(start);

    $("#buttons").on("click", function () {
        startGame();

    })


    function startGame() {
        makeAnswerButtons();
        callQuestion();
        timer();
        run();
    }

    function makeAnswerButtons() { //creates buttons
        for (var i = 0; i < questions[index].answers.length; i++) {
            var answerButton = $("<button>");
            answerButton.addClass("answer");
            answerButton.text(questions[index].answers[i]);
            $("#buttons").append(answerButton);


        }
    };

    function end() {

        $("#question").text("Total Correct: " + totalCorrect);
        $("#buttons").text("Total Incorrect: " + totalIncorrect);
        $("#nextQuestion").text("Total Unanswered: " + totalUnanswered);
        $("#nextQuestion").append("<br></br>");
        var restart = $("<button>");
        $("#nextQuestion").append(restart);
        restart.text("Restart");


    }



    //makeAnswerButtons();

    function callQuestion() { //shows question
        $("#question").text(questions[index].question);
    };

    // callQuestion();

    var number = 16;
    var intervalId;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(timer, 1000);
    }

    function clear(response) {
        $("#question").text(response);
        $("#buttons").text("Correct Answer: " + (questions[index].correctAnswer));
        clearInterval(intervalId);

        if (questions.length - 1 === index) {
            var nextQuestion = $("<button>");
            $("#nextQuestion").append(nextQuestion);
            nextQuestion.text("Results");


        }
        else {
            var nextQuestion = $("<button>");
            $("#nextQuestion").append(nextQuestion);
            nextQuestion.text("Next Question");

        }

    }

    $('body').on("click", ".answer", function () {
        console.log(($(this).text()));
        console.log((questions[index].correctAnswer));
        if (($(this).text()) === ((questions[index].correctAnswer))) { //if correct 
            // alert("correct");
            totalCorrect++;
            clear("Correct!");
        }
        else { //if incorrect
            // alert("incorrect");
            totalIncorrect++;
            clear("Incorrect!");
        }
    })
    function timer() {
        number--;
        $("#timeRemaining").text("Time Remaining: " + number);
        if (number === 0) { //if time runs out
            // alert("times up");
            totalUnanswered++;
            clear("Time's Up!");

        }

    }

    $("#nextQuestion").click(function () {
        console.log($("button").text());
        if ($("button").text() === "Restart") {
            index = 0;
            number = 16;
            run();
            $("#buttons").html("");
            makeAnswerButtons();
            $("#nextQuestion").html("");
            callQuestion();
            totalCorrect = 0;
            totalIncorrect = 0;
            totalUnanswered = 0;

        }
        if ($("button").text() === "Results") {
            end();

        }
        else {
            index++;
            number = 16;
            run();
            $("#buttons").html("");
            makeAnswerButtons();
            $("#nextQuestion").html("");
            callQuestion();
        }



    })

    //timer();
    //   run();


})
