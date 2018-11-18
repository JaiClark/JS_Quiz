function populate() {
    if(quiz.isEnded()) {
       showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show the choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress () {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
        gameOverHtml += "<h2 id='score'>Your Score: " + quiz.score + "</h2>";
        var element = document.getElementById("quiz");
        element.innerHTML = gameOverHtml;
}


// Create the questions
var questions = [
    new Question("Who lives in a pineapple under the sea?", ["SpongeBob", "Sandy", "Patrick", "Mr.Krabs"], "SpongeBob"),
    new Question("Where does Spongebob work?", ["Chum Bucket", "Goofy Goober", "Salty Splatoon", "Krusty Krab"], "Krusty Krab"),
    new Question("What is the name of SpongeBob's snail?", ["Jim", "Larry", "Gary", "Squidward"], "Gary"),
    new Question("Who is SpongeBob's best Friend?", ["Sheldon", "Plankton", "Patrick", "Pearl"], "Patrick"),
    new Question("Who is SpongeBobs favorite superhero duo?", ["Batman & Robin", "Mermaid Man & Barnicle Boy", "Antman & The Wasp", "Iron Man & Captain America"], "Mermaid Man & Barnicle Boy")
];

var quiz = new Quiz(questions);

populate();

