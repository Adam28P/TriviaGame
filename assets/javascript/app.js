$(document).ready(function () {

    //Initialize Question Variable
    var triviaQuestions = [{
        question: "What is the name of the town where the Simpsons live?",
        answerList: ["Shelbyville", "Springfield", "Toronto", "Queens"],
        answer: 1
    }, {
        question: "What is the name of the Simpsons' next door neighbour?",
        answerList: ["Ned Flanders", "Moe Szyslak", "Seymour Skinner", "Barney Gumble"],
        answer: 0
    }, {
        question: "How old is Bart?",
        answerList: ["9", "12", "14", "10"],
        answer: 3
    }, {
        question: "Who runs the Kwik-E-Mart?",
        answerList: ["Homer", "Marge", "Apu", "Moe"],
        answer: 2
    }, {
        question: "What is the name of the creator of The Simpsons?",
        answerList: ["Hank Azaria", "Nancy Cartwright", "Seth MacFarlane", "Matt Groening"],
        answer: 3
    }, {
        question: "Who inventd the Flaming Moe?",
        answerList: ["Homer", "Marge", "Moe", "Lenny"],
        answer: 0
    }, {
        question: "Who continuously tries to kill Bart?",
        answerList: ["Sideshow Mel", "Krusty the Clown", "Sideshow Bob", "Ned Flanders"],
        answer: 2
    }, {
        question: "What is Marge's maiden name?",
        answerList: ["Flanders", "Simpson", "Ziff", "Bouvier"],
        answer: 3
    }, {
        question: "What year did The Simpsons premiere?",
        answerList: ["1993", "1989", "1999", "1990"],
        answer: 1
    }, {
        question: "What is the name of Bart's favourite TV show?",
        answerList: ["Tom and Jerry", "Icky and Sticky", "Itchy and Scratchy", "Inky and Pinky"],
        answer: 2
    }, {
        question: "Who shot Mr. Burns?",
        answerList: ["Maggie", "Bart", "Smithers", "Marge"],
        answer: 0
    }, {
        question: "On what street do The Simpsons live?",
        answerList: ["Sheepberry Terrace", "Evergreen Terrace", "Woodview Terrace", "Pine Tree Terrace"],
        answer: 1
    }, {
        question: "How many kids do Apu and Manjula have?",
        answerList: ["7", "6", "8", "9"],
        answer: 2
    }];

    // Initialize variables
    var currentQuestion;
    var correctAnswer;
    var incorrectAnswer;
    var unanswered;
    var time;
    var answered;
    var userSelect;
   
    // Create message variable that has an object with different message properties
    var messages = {
        correct: "Cowabunga! That's right!",
        incorrect: "D'oh! That's wrong!",
        endTime: "Time is up!",
        finished: "Alright! Let's see how well you did."
    }


    //  Functions go here

    // When start button is cliked, we hide that button and start the newGame function
    $('#start-button').on('click', function(){
        $(this).hide();
        newGame();
    });

    // Function to run when new game begins. Reset variables.
    function newGame(){
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

    });