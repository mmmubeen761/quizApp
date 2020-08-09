window.onload = function() {
    show(0)
}


var questionsArray = [{

        question: "Q1. What is the output of 5 + 9 ?",
        answer: "d) 14",
        options: [
            "a) 8",
            "b) 9",
            "c) 10",
            "d) 14"
        ]
    },

    {

        question: "Q2. What is the output of 8 + 1 ?",
        answer: "b) 9",
        options: [
            "a) 5",
            "b) 9",
            "c) 10",
            "d) 11"
        ]
    },

    {

        question: "Q3. What is the output of 4 + 3 ? ",
        answer: "d) 7",
        options: [
            "a) 2",
            "b) 6",
            "c) 10",
            "d) 7"
        ]
    },

    {

        question: "Q4. What is the output of 3 + 2 ?",
        answer: "c) 5",
        options: [
            "a) 8",
            "b) 9",
            "c) 5",
            "d) 4"
        ]
    },

    {

        question: "Q5. What is the output of 3 + 7 ?",
        answer: "c) 10",
        options: [
            "a) 8",
            "b) 9",
            "c) 10",
            "d) 3"
        ]
    },


];


function vlidate() {
    sessionStorage.clear();
    var input = document.getElementById("userName");
    if (input.value == "" || input.value == " ") {
        alert("User Name Required!");
    } else {
        sessionStorage.setItem("name", input.value);
        startQuiz();
    }
}
var questionCount = 0;
var score = 0;
var currentAns = "";

function show(e) {
    // question
    var questionEl = document.getElementById("questionEl");
    questionEl.innerHTML = questionsArray[e].question;

    // show option
    var optio = document.getElementsByClassName("optionEl");
    for (var i = 0; i < optio.length; i++) {
        optio[i].innerHTML = questionsArray[e].options[i];
    }
}





function activeClas(e) {
    removeClas();
    e.classList.add("active")
}

function removeClas() {
    var active = document.getElementsByClassName("active");
    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove("active")
    }
}


function countScor(e) {
    var answ = document.getElementsByClassName("active");
    if (answ[0].innerHTML == questionsArray[e].answer) {
        score += 10;
        sessionStorage.setItem("score", score)
        sessionStorage.setItem("time", min + sec)
    }
}



function nextQ() {

    countScor(questionCount);
    questionCount++;
    if (questionCount <= questionsArray.length - 1) {
        show(questionCount);
    }
    removeClas();
    setResult();
}

function showResult() {
    document.getElementById("result") = sessionStorage.getItem("userscore");
}

function startQuiz() {
    window.location.href = "quiz.html";

}

function setResult() {
    if (questionCount == questionsArray.length) {

        window.location.href = "greet.html"
    }
    var result = document.getElementById("result");
    sessionStorage.setItem("userscore", score);
}


function again() {
    window.location.href = "index.html"
}

//......................................................... timer..........................................

var min = 0;
var sec = 0;
var minhead = document.getElementById("min");
var sechead = document.getElementById("sec");
var interval;

function timer() {
    sec++
    sechead.innerHTML = sec;
    if (sec >= 60) {
        min++
        minhead.innerHTML = "0" + min;
        sec = 0;
    }
}
interval = setInterval(timer, 1000)
    // var time = min + "minutes " + sec + " seconds";