$(document).ready(function () {

    //Initialize Global Variables
    var questions = [{
        question: "What is the name of the town where the Simpsons live?",
        answerArray: [{
            answer: "Shelbyville",
            val: 0
        }, {
            answer: "Springfield",
            val: "correct"
        }, {
            answer: "Toronto",
            val: 0
        }, {
            answer: "Seinfield",
            val: 0
        },],
        response: "The Simpsons live in Springfield!"
    }, {
        question: "What is the name of the Simpsons' next door neighbour?",
        answerArray: [{
            answer: "Ned Flanders",
            val: "correct"
        }, {
            answer: "Moe Szyslak",
            val: 0
        }, {
            answer: "Seymour Skinner",
            val: 0
        }, {
            answer: "Barney Gumble",
            val: 0
        },],
        response: "The name of the Simpsons' next door neighbour is Ned Flanders!"
    }, {
        question: "How old is Bart?",
        answerArray: [{
            answer: "9",
            val: 0
        }, {
            answer: "12",
            val: 0
        }, {
            answer: "14",
            val: 0
        }, {
            answer: "10",
            val: "correct"
        },],
        response: "Bart is 10 years old!"
    }, {
        question: "Who runs the Kwik-E-Mart?",
        answerArray: [{
            answer: "Homer",
            val: 0
        }, {
            answer: "Apu",
            val: "correct"
        }, {
            answer: "Lenny",
            val: 0
        }, {
            answer: "Carl",
            val: 0
        }],
        response: "Apu runs the Kwik-E-Mart!"
    }, {
        question: "Who inventd the Flaming Moe?",
        answerArray: [{
            answer: "Homer",
            val: "correct"
        }, {
            answer: "Marge",
            val: 0
        }, {
            answer: "Moe",
            val: 0
        }, {
            answer: "Bart",
            val: 0
        },],
        response: "Homer invented the Flaming Moe!"
    }, {
        question: "Who continuously tries to kill Bart?",
        answerArray: [{
            answer: "Sideshow Mel",
            val: 0
        }, {
            answer: "Krusty the Clown",
            val: 0
        }, {
            answer: "Sideshow Bob",
            val: "correct"
        }, {
            answer: "Ned Flanders",
            val: 0,
        },],
        response: "Sideshow Bob continuosuly tries to kill Bart!"
    }, {
        question: "What is Marge's maiden name?",
        answerArray: [{
            answer: "Flanders",
            val: 0
        }, {
            answer: "Simpson",
            val: 0
        }, {
            answer: "Smith",
            val: 0
        }, {
            answer: "Bouvier",
            val: "correct"
        },],
        response: "Marge's maiden name is Bouvier!"
    },
    ];

    var time = 20;
    var totalQuestions = questions.length;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = totalQuestions;

    var i = 0;
    var time = 20;
    var intervalId;
    var clockRunning = false;

    // Functions

    // Function to display questions and answers
    function displayQuestion(x) {
        //goes through question array to display question object
        var display = $("<div>");
        var displayQuestion = $("<h3>");
        displayQuestion.text(questions[i].question);
        display.append(displayQuestion);
        //finds answers in question array, displays answers as buttons with values 
        for (j = 0; j < questions[i].answerArray.length; j++) {
            var displayAns = $("<button>");
            displayAns.addClass("btn btn-outline-secondary ans");
            displayAns.text(questions[i].answerArray[j].answer);
            displayAns.val(questions[i].answerArray[j].val);
            display.append(displayAns);
        }
        $("#questionArea").append(display);
    };

    
    




});