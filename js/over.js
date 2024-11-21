// About Quiz
// Waag het niet om vals te spelen! ( ✧≖ ͜ʖ≖)

// Start variables
const start = document.getElementById('start').addEventListener('click', beginquiz);
const introduction = document.getElementById('about-introduction');

// Question 1 variables
const question1 = document.getElementById('question1');
const rightAnswer1 = document.getElementById('rightanswer1');
const wrongAnswer1 = document.getElementById('wronganswer1');
const rightButton1 = document.querySelector('.q1aCorrect').addEventListener('click', q1aCorrectFunct);
const wrongButton1 = document.querySelectorAll('.q1aWrong');
for(let i = 0; i < wrongButton1.length; i++){
    wrongButton1[i].addEventListener('click', q1aWrongFunct)
};
const nextButton1 = document.querySelectorAll('.q1Next');
for(let i = 0; i < nextButton1.length; i++){
    nextButton1[i].addEventListener('click', q1NextQuestionFunct)
};

// Question 2 variables
const question2 = document.getElementById('question2');
const rightAnswer2 = document.getElementById('rightanswer2');
const wrongAnswer2 = document.getElementById('wronganswer2');
const rightButton2 = document.querySelector('.q2aCorrect').addEventListener('click', q2aCorrectFunct);
const wrongButton2 = document.querySelectorAll('.q2aWrong');
for(let i = 0; i < wrongButton2.length; i++){
    wrongButton2[i].addEventListener('click', q2aWrongFunct)
};
const nextButton2 = document.querySelectorAll('.q2Next');
for(let i = 0; i < nextButton2.length; i++){
    nextButton2[i].addEventListener('click', q2NextQuestionFunct)
};

// Question 3 variables
const question3 = document.getElementById('question3');
const rightAnswer3 = document.getElementById('rightanswer3');
const wrongAnswer3 = document.getElementById('wronganswer3');
const rightButton3 = document.querySelector('.q3aCorrect').addEventListener('click', q3aCorrectFunct);
const wrongButton3 = document.querySelectorAll('.q3aWrong');
for(let i = 0; i < wrongButton3.length; i++){
    wrongButton3[i].addEventListener('click', q3aWrongFunct)
};
const nextButton3 = document.querySelectorAll('.q3Next');
for(let i = 0; i < nextButton3.length; i++){
    nextButton3[i].addEventListener('click', q3NextQuestionFunct)
};

// Question 4 variables
const question4 = document.getElementById('question4');
const rightAnswer4 = document.getElementById('rightanswer4');
const wrongAnswer4 = document.getElementById('wronganswer4');
const rightButton4 = document.querySelector('.q4aCorrect').addEventListener('click', q4aCorrectFunct);
const wrongButton4 = document.querySelectorAll('.q4aWrong');
for(let i = 0; i < wrongButton4.length; i++){
    wrongButton4[i].addEventListener('click', q4aWrongFunct)
};
const nextButton4 = document.querySelectorAll('.q4Next');
for(let i = 0; i < nextButton4.length; i++){
    nextButton4[i].addEventListener('click', continueFunct)
};

// Score variables
const aboutFinal = document.getElementById('about-final');
const totalScore = document.getElementById('score');
let scoringText = document.getElementById('scoringtext');
let points = 0;
const returnButton = document.querySelector('.return').addEventListener('click', returnFunct);


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
}

// Question 4 functions
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

// Total and return function
function continueFunct() {
    rightAnswer4.style.display = "none";
    wrongAnswer4.style.display = "none";
    aboutFinal.style.display = "block";
    if (points == 0) {
        scoringText.innerHTML = "<h2 class='about-highlight'>Ik moet bijna huilen! Geen een correct antwoord</h2>"
    } else if (points == 1) {
        scoringText.innerHTML = "<h2 class='about-highlight'>Really? Nou ja, je hebt 1 goed antwoord</h2>"
    } else if (points == 2) {
        scoringText.innerHTML = "<h2 class='about-highlight'>Niet slecht! Je hebt 2 goede antwoorden</h2>"
    } else if (points == 3) {
        scoringText.innerHTML = "<h2 class='about-highlight'>Ken je mij al? Je hebt 3 van de 4 goed!</h2>"
    } else if (points == 4) {
        scoringText.innerHTML = "<h2 class='about-highlight'>Je hebt 4 van de 4 goed, ben je een stalker?!</h2>"
    }
}

function returnFunct() {
    aboutFinal.style.display = "none";
    introduction.style.display = "block";
    points = 0;
}