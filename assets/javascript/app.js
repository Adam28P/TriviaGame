$(document).ready(function () {

    //Initialize Question Variable
    var triviaQuestions = [{
        question: "What is the name of the town where the Simpsons live?",
        answerChoices: ["Shelbyville", "Springfield", "Toronto", "Queens"],
        answer: 1
    }, {
        question: "What is the name of the Simpsons' next door neighbour?",
        answerChoices: ["Ned Flanders", "Moe Szyslak", "Seymour Skinner", "Barney Gumble"],
        answer: 0
    }, {
        question: "How old is Bart?",
        answerChoices: ["9", "12", "14", "10"],
        answer: 3
    }, {
        question: "Who runs the Kwik-E-Mart?",
        answerChoices: ["Homer", "Marge", "Apu", "Moe"],
        answer: 2
    }, {
        question: "What is the name of the creator of The Simpsons?",
        answerChoices: ["Hank Azaria", "Nancy Cartwright", "Seth MacFarlane", "Matt Groening"],
        answer: 3
    }, {
        question: "Who invented the Flaming Moe?",
        answerChoices: ["Homer", "Marge", "Moe", "Lenny"],
        answer: 0
    }, {
        question: "Who continuously tries to kill Bart?",
        answerChoices: ["Sideshow Mel", "Krusty the Clown", "Sideshow Bob", "Ned Flanders"],
        answer: 2
    }, {
        question: "What is Marge's maiden name?",
        answerChoices: ["Flanders", "Simpson", "Ziff", "Bouvier"],
        answer: 3
    }, {
        question: "What year did The Simpsons premiere?",
        answerChoices: ["1993", "1989", "1999", "1990"],
        answer: 1
    }, {
        question: "What is the name of Bart's favourite TV show?",
        answerChoices: ["Tom and Jerry", "Icky and Sticky", "Itchy and Scratchy", "Inky and Pinky"],
        answer: 2
    }, {
        question: "Who shot Mr. Burns?",
        answerChoices: ["Maggie", "Bart", "Smithers", "Marge"],
        answer: 0
    }, {
        question: "On what street do The Simpsons live?",
        answerChoices: ["Sheepberry Terrace", "Evergreen Terrace", "Woodview Terrace", "Pine Tree Terrace"],
        answer: 1
    }, {
        question: "How many kids do Apu and Manjula have?",
        answerChoices: ["7", "6", "8", "9"],
        answer: 2
    }];

    // Initialize variables
    var gifArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10', 'question11', 'question12', 'question13'];
    var currentQuestion;
    var correctAnswer;
    var incorrectAnswer;
    var unanswered;
    var secondsRemaining;
    var time;
    var answered;
    var userSelect;


    var wrongSound = new Audio('assets/music/doh.mp3');
    var rightSound = new Audio('assets/music/smart.mp3');
    var lostSound = new Audio('assets/music/nevertry.mp3');
    var winSound = new Audio('assets/music/woohoo.wav');
    var startSound = new Audio('assets/music/theme.mp3');

    // Create message variable that has an object with different message properties
    var messages = {
        correct: "Cowabunga! That's right!",
        incorrect: "D'oh! That's wrong!",
        endTime: "Time is up!",
        finished: "That's all we've got! Let's see how well you did."
    }

    // Play background music when web page loads
    window.onload = function () {
        startSound.play();
    };

    $("hr").hide();

    //  Functions go here

    // When start button is clicked, we hide that button and start the newGame function
    $('#start-button').on('click', function () {
        startSound.pause();
        $(this).hide();
        $("#start-title").hide();
        $("hr").show();
        newGame();
    });

    // When start over button is clicked, start a new game
    $('#restart-button').on('click', function () {
        $(this).hide();
        newGame();
    });

    // Function to run when new game begins. Reset variables.
    function newGame() {
        $('#finalMessage').empty();
        $('#correctAnswers').empty();
        $('#incorrectAnswers').empty();
        $('#unanswered').empty();
        currentQuestion = 0;
        correctAnswer = 0;
        incorrectAnswer = 0;
        unanswered = 0;
        newQuestion();
    }

    // Function to show current question and answers
    function newQuestion() {
        $("hr").show();
        $('#gif').empty();
        $('#message').empty();
        $('#correctedAnswer').empty();
        answered = true;

        $('#currentQuestion').html('Question ' + (currentQuestion + 1) + ' of ' + triviaQuestions.length);
        $('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');

        // Loop through answers in array
        for (var i = 0; i < 4; i++) {
            var choices = $('<div>');
            choices.text(triviaQuestions[currentQuestion].answerChoices[i]);
            choices.attr({ 'data-index': i });
            choices.addClass('thisChoice btn btn-info');
            $('.answerChoices').append(choices);
        }

        // Run countdown clock
        countdown();

        // Clicking an answer will stop the timer and setup the answer page
        $('.thisChoice').on('click', function () {
            userSelect = $(this).data('index');
            clearInterval(time);
            answerCheck();
        });
    }

    // Function to set up the countdown timer on the screen
    function countdown() {
        secondsRemaining = 20;
        $('#timeLeft').html('<h5>Time Left: ' + secondsRemaining + '</h5>');
        answered = true;

        // Runs countdown timer function every 1 second for timer to go down
        time = setInterval(showCountdown, 1000);
    }

    // Function to make the countdown timer go down by 1 second
    function showCountdown() {
        secondsRemaining--;
        $('#timeLeft').html('<h5>Time Left: ' + secondsRemaining + '</h5>');
        if (secondsRemaining < 1) {
            clearInterval(time);
            answered = false;
            answerCheck();
        }
    }

    // Function to calculate if the answer is correct or not
    function answerCheck() {
        $("hr").hide();
        $('#currentQuestion').empty();
        $('.thisChoice').empty();
        $('.answerChoices').empty();
        $('.question').empty();
        $('#timeLeft').empty();

        var rightAnswerText = triviaQuestions[currentQuestion].answerChoices[triviaQuestions[currentQuestion].answer];
        var rightAnswerIndex = triviaQuestions[currentQuestion].answer;

        $('#gif').html('<img src = "assets/images/' + gifArray[currentQuestion] + '.gif">');

        // Checks to see if answer is correct, incorrect, or unanswered
        if ((userSelect == rightAnswerIndex) && (answered == true)) {
            rightSound.play();
            correctAnswer++;
            $('#message').html(messages.correct);
        } else if ((userSelect != rightAnswerIndex) && (answered == true)) {
            wrongSound.play();
            incorrectAnswer++;
            $('#message').html(messages.incorrect);
            $('#correctedAnswer').html('The correct answer is: ' + rightAnswerText);
        } else {
            wrongSound.play();
            unanswered++;
            $('#message').html(messages.endTime);
            $('#correctedAnswer').html('The correct answer is: ' + rightAnswerText);
            answered = true;
        }

        if (currentQuestion == (triviaQuestions.length - 1)) {
            setTimeout(scoreboard, 6500)
        } else {
            currentQuestion++;
            setTimeout(newQuestion, 6500);
        }
    }

    // Function to show final scoreboard at the end of the game
    function scoreboard() {
        if (correctAnswer >= 7) {
            winSound.play();
        } else {
            lostSound.play();
        }
        $("hr").hide();
        $('#gif').empty();
        $('#timeLeft').empty();
        $('#message').empty();
        $('#correctedAnswer').empty();
        $('#gif').empty();

        $('#finalMessage').html(messages.finished);
        $('#correctAnswers').html("Correct Answers: " + correctAnswer);
        $('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
        $('#unanswered').html("Unanswered: " + unanswered);
        $('#restart-button').addClass('reset btn btn-info');
        $('#restart-button').show();
        $('#restart-button').html('Restart');
    }

});