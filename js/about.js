const start = document.getElementById('start').addEventListener("click", beginquiz);
const introduction = document.getElementById('about-introduction');
const question1 = document.getElementById('question1');
const rightAnswer1 = document.getElementById('rightanswer1');
const wrongAnswer1 = document.getElementById('wronganswer1');
const q1a1 = document.getElementById('q1a1').addEventListener("click", question1A1);
const q1a2 = document.getElementById('q1a2').addEventListener("click", question1A2);
const q1a3 = document.getElementById('q1a3').addEventListener("click", question1A3);
const q1a4 = document.getElementById('q1a4').addEventListener("click", question1A4);
const puntenTotaal = document.getElementsByClassName("points");

let punten = 0;

function beginquiz() {
    introduction.style.display = "none";
    question1.style.display = "block";
}

function question1A1() {
    question1.style.display = "none";
    wrongAnswer1.style.display = "block";
    punten += 0;
}

function question1A2() {
    question1.style.display = "none";
    wrongAnswer1.style.display = "block";
    punten += 0;
}

function question1A3() {
    question1.style.display = "none";
    rightAnswer1.style.display = "block";
    punten += 1;
}

function question1A4() {
    question1.style.display = "none";
    wrongAnswer1.style.display = "block";
    punten += 0;
}
