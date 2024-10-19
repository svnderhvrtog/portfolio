// About me page 
// Don't you dare to cheat! ( ✧≖ ͜ʖ≖)

// Start variables
const start = document.getElementById('start').addEventListener('click', beginquiz);
const introduction = document.getElementById('about-introduction');

// Question 1 variables
const question1 = document.getElementById('question1');
const rightAnswer1 = document.getElementById('rightanswer1');
const wrongAnswer1 = document.getElementById('wronganswer1');

// Question 2 variables
const question2 = document.getElementById('question2');
const rightAnswer2 = document.getElementById('rightanswer2');
const wrongAnswer2 = document.getElementById('wronganswer2');

// Question 3 variables
const question3 = document.getElementById('question3');
const rightAnswer3 = document.getElementById('rightanswer3');
const wrongAnswer3 = document.getElementById('wronganswer3');

// Question 4 variables
const question4 = document.getElementById('question4');
const rightAnswer4 = document.getElementById('rightanswer4');
const wrongAnswer4 = document.getElementById('wronganswer4');

// Score variables
const aboutFinal = document.getElementById('about-final');
const totalScore = document.getElementById('score');
let scoringText = document.getElementById('scoringtext');
let points = 0;


// Begin Quiz function
function beginquiz() {
    introduction.style.display = "none";
    question1.style.display = "block";
}

// Question 1 functions
function q1aWrongFunct() {
    question1.style.display = "none";
    wrongAnswer1.style.display = "block";
    points += 0;
}

function q1aCorrectFunct() {
    question1.style.display = "none";
    rightAnswer1.style.display = "block";
    points += 1;
}

function q1NextQuestionFunct() {
    rightAnswer1.style.display = "none";
    wrongAnswer1.style.display = "none";
    question2.style.display = "block";
    console.log(points)
}

// Question 2 functions
function q2aWrongFunct() {
    question2.style.display = "none";
    wrongAnswer2.style.display = "block";
    points += 0;
}

function q2aCorrectFunct() {
    question2.style.display = "none";
    rightAnswer2.style.display = "block";
    points += 1;
}

function q2NextQuestionFunct() {
    rightAnswer2.style.display = "none";
    wrongAnswer2.style.display = "none";
    question3.style.display = "block";
    console.log(points)
}

// Question 3 functions
function q3aWrongFunct() {
    question3.style.display = "none";
    wrongAnswer3.style.display = "block";
    points += 0;
}

function q3aCorrectFunct() {
    question3.style.display = "none";
    rightAnswer3.style.display = "block";
    points += 1;
}

function q3NextQuestionFunct() {
    rightAnswer3.style.display = "none";
    wrongAnswer3.style.display = "none";
    question4.style.display = "block";
    console.log(points)
}

// Question 3 functions
function q4aWrongFunct() {
    question4.style.display = "none";
    wrongAnswer4.style.display = "block";
    points += 0;
}

function q4aCorrectFunct() {
    question4.style.display = "none";
    rightAnswer4.style.display = "block";
    points += 1;
}

function continueFunct() {
    rightAnswer4.style.display = "none";
    wrongAnswer4.style.display = "none";
    aboutFinal.style.display = "block";
    console.log(points)
    if (points == 0) {
        scoringText.innerHTML += "<h2 class='about-highlight'>You make me cry! No correct answer at all</h2>"
    } else if (points == 1) {
        scoringText.innerHTML += "<h2 class='about-highlight'>Well at least you've got 1 correct answer</h2>"
    } else if (points == 2) {
        scoringText.innerHTML += "<h2 class='about-highlight'>Not too bad! You've got 2 correct answers</h2>"
    } else if (points == 3) {
        scoringText.innerHTML += "<h2 class='about-highlight'>Very good! You've got 3 correct answers</h2>"
    } else if (points == 4) {
        scoringText.innerHTML += "<h2 class='about-highlight'>You've got 4 out of 4, are you a stalker?!</h2>"
    }

}