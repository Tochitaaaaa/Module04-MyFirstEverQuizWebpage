var timerObject = document.getElementById("timer");
var introPage = document.getElementById("intro");
var questionSection = document.getElementById("questionSection");
var endOfQuiz = document.getElementById("theEnd");
var highScoresPage = document.getElementById("highscores");
var theEnd = false
var as1=document.getElementById("as1");
var as2=document.getElementById("as2");
var as3=document.getElementById("as3");
var as4=document.getElementById("as4");
var question = document.getElementById("question");
var counter = 60;
var questionIndex = 0;
var timeReduced = null;
var resultScore = document.getElementById("resultado")

function startTimer(){
    timeReduced = setInterval(function(){
    timerObject.innerHTML="Time: " + counter;
    counter--;
    if(counter <= 0){
      questionSection.style.display="none";
      highScoresPage.style.display="block";
      endOfQuiz.style.display="block";
      clearInterval(timeReduced);
      questionIndex=0;
    }
    if(theEnd){
      questionSection.style.display="none";
      highScoresPage.style.display="block";
      endOfQuiz.style.display="block";
      clearInterval(timeReduced);
      questionIndex=0;
    }
  },1000);
      introPage.style.display="none";
      questionSection.style.display= "block";
      showQuestion1Data();
}


function showQuestion1Data() {
  question.innerHTML="What does HTML stand for?";
  as1.innerHTML="Random numbers";
  as2.innerHTML="Hyper Text Markup Language";
  as2.setAttribute("data-is-correct",true)
  as3.innerHTML="Hot Mail";
  as4.innerHTML="How to Make Lasagna";
  questionIndex=1;
}

function showQuestion2Data() {
  question.innerHTML="When the user clicks a button, _________ is triggered.";
  as1.innerHTML="a method";
  as2.innerHTML="a setting";
  as2.removeAttribute("data-is-correct");
  as3.innerHTML="an event";
  as3.setAttribute("data-is-correct",true)
  as4.innerHTML="Ha property";
  questionIndex=2;
}

function showQuestion3Data() {
  question.innerHTML="Pseudocode is:";
  as1.innerHTML="data that have been encoded for security.";
  as2.innerHTML="a program that doesn’t work";
  as3.innerHTML="the obscure language computer personnel use when speaking.";
  as3.removeAttribute("data-is-correct");
  as4.innerHTML="a description of an algorithm similar to a computer language";
  as4.setAttribute("data-is-correct",true)
  questionIndex=3;
}

function showQuestion4Data() {
  question.innerHTML="An algorithm is defined as:";
  as1.innerHTML="a logical sequence of steps that solve a problem.";
  as1.setAttribute("data-is-correct",true)
  as2.innerHTML="a mathematical formula that solves a problem.";
  as3.innerHTML="a tempo for classical music played in a coda.";
  as4.innerHTML="a tool that designs computer programs and draws the user interface.";
  as4.removeAttribute("data-is-correct");
  questionIndex=4;
}

function nextQuestion(){
  if (questionIndex ==1)
    showQuestion2Data();
  else if (questionIndex ==2)
    showQuestion3Data();
  else if (questionIndex ==3)
    showQuestion4Data();
  else if (questionIndex ==4)
  stopTimer();
}

function as1_click (params) {
  if (questionIndex < 4)
  {
    if (!params.getAttribute("data-is-correct"))
    counter = counter - 10;
  }
  nextQuestion()
}

function as2_click (params) {
  if (questionIndex < 4)
 {
  if (!params.getAttribute("data-is-correct"))
  counter = counter - 10;
 }
  nextQuestion()
}

function as3_click (params) {
  if (questionIndex < 4)
  {
    if (!params.getAttribute("data-is-correct"))
    counter = counter - 10;
  }
  nextQuestion()
}

function as4_click (params) {
  if (questionIndex < 4)
  {
    if (!params.getAttribute("data-is-correct"))
    counter = counter - 10;
  }
  nextQuestion()
}

function stopTimer(){
    clearInterval(timeReduced)
    endOfQuiz.style.display="block";
    questionSection.style.display= "none";
    highScoresPage.style.display="block";
    resultScore.style.display="block";
}


// function startTimer(){
//     timerObject.innerHTML="Time: " + counter;
//     introPage.style.display= "none";
//     questionSection.style.display= "block";
//     highScoresPage.style.display="none";
//         var countDown = setInterval(function(){
//         counter--;
//         timerObject.innerHTML="Time: " + counter;
//         if (counter === 0){
//             stopTimer();
//         }
//     }, 1000);
// }