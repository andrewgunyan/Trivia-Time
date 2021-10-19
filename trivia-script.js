window.onload = triviaThing(), stateChange();

var nextButton = document.getElementById('skip');
nextButton.addEventListener("click", triviaThing);

var randInt;
var json_solution;

function stateChange() {
    setTimeout(function () {
        var answerBox = document.getElementsByClassName('answerBox');
        var solution = document.getElementById('solution');

        solution.addEventListener("click", showSolution);

        for(let i = 0; i < answerBox.length; i++) {
            answerBox[i].addEventListener("click", function() {
                if (i == randInt) {
                    answerCorrect();
                }
                else {
                    answerIncorrect();
                }
                //console.log("Clicked index: " + i);        rgb(151, 151, 151)
            })
        }
    }, 200);
}

function hideSolution() {
    document.getElementById("solution").innerText = "Show Solution";
    document.getElementById("solution").style.background = "rgb(29, 28, 28)";
    document.getElementById("solution").style.color = "rgb(151, 151, 151)";
}

function showSolution() {
    console.log("Cheater :(");
    document.getElementById("solution").innerText = json_solution;
}

function answerCorrect() {
    console.log("Correct! Yay!");
    document.getElementById("solution").style.background = "rgb(151, 151, 151)";
    document.getElementById("solution").style.color = "rgb(11, 87, 34)";
    document.getElementById("solution").innerText = "Correct!";
}

function answerIncorrect() {
    console.log("Incorrect!")
    document.getElementById("solution").style.background = "rgb(29, 28, 28)";
    document.getElementById("solution").style.color = "rgb(80, 12, 12)";
    document.getElementById("solution").innerText = "Incorrect";
}

function myFunction() {
    alert("Hello! I am an alert box!");
  }

function triviaThing() {

    const url = "https://opentdb.com/api.php?amount=1";

    fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json.results[0].type);
        if (json.results[0].type != "multiple") {
            triviaThing();
            return;
        }

        json_solution = json.results[0].correct_answer;

        let category = "";
        category += json.results[0].category;
        document.getElementById("category").innerHTML = category;

        let question = "";
        question += json.results[0].question;
        document.getElementById("question").innerHTML = question;
        
        let answers = "";
        randInt = Math.floor(Math.random() * 4);
        let j = 0;
        for (let i = 0; i < 4; i++) {
            if (i == randInt) {
                answers += "<button class='answerBox'>";
                answers += "<h3>" + json.results[0].correct_answer + "</h>"
                answers += "</button>";
            }
            
            else {
                answers += "<button class='answerBox'>";
                answers += "<h3>" + json.results[0].incorrect_answers[j] + "</h>"
                answers += "</button>";
                j++;
            }
        }
        document.getElementById("answers").innerHTML = answers;
        hideSolution();
        stateChange();
    });
}
