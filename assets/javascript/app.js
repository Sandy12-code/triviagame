var correct = 0;
var counter = 30;
var wrong = 0;
var interval;


$(document).ready(function () {

    function check() {
        var q1answer = $('input:radio[name=question1]:checked').val();
        var q2answer = $('input:radio[name=question2]:checked').val();
        var q3answer = $('input:radio[name=question3]:checked').val();
        var q4answer = $('input:radio[name=question4]:checked').val();
        var q5answer = $('input:radio[name=question5]:checked').val();
        var q6answer = $('input:radio[name=question6]:checked').val();
        var q7answer = $('input:radio[name=question7]:checked').val();
        var q8answer = $('input:radio[name=question8]:checked').val();
        var q9answer = $('input:radio[name=question9]:checked').val();
        var q10answer = $('input:radio[name=question10]:checked').val();

        userAnswerArr.push(q1answer);
        userAnswerArr.push(q2answer);
        userAnswerArr.push(q3answer);
        userAnswerArr.push(q4answer);
        userAnswerArr.push(q5answer);
        userAnswerArr.push(q6answer);
        userAnswerArr.push(q7answer);
        userAnswerArr.push(q8answer);
        userAnswerArr.push(q9answer);
        userAnswerArr.push(q10answer);


        for (let i =0; i< answersArr.length; i++) {
            if (userAnswerArr[i] == answersArr[i]) {
                correct++;
            }
        }
        return correct;
    }

    var answersArr = ["true", "true", "true", "false", "false", "true", "true", "true", "false", "true"];
    var userAnswerArr = [];
    $("#after-submit").hide();
    $("#quiz").hide();


    function run() {
        clearInterval(interval);
        interval = setInterval(decrement, 1000);
        $("#timer").text(counter);

    }

    $("#startgame").on("click", function () {
        $("#quiz").show();
        run();


    })

    $("#submit_button").on('click', function(event) {
        event.preventDefault();
        stop();
        displayResults();
    })

function decrement() {
    counter--;

    $('#display').html("<p>Time Remaining: " + counter + "</p>");
    $("#timer").text(counter);

    console.log(counter);

    if (counter === 0) {
        stop();
        displayResults();
    }
}

function stop() {
    clearInterval(interval);
}

function displayResults() {
    let correctScore = check();
    $("#number-correct").html(correctScore);
    $("#after-submit").show();
}


})