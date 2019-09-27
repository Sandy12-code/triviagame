
$(document).ready(function () {

    $(".answers").hide();
    $("#correct").hide();
    $("#wrong").hide();
    $("#timeout").hide();
    $("#retryButton").hide();
    $("#good").hide();
    $("#normal").hide();
    $("#loser").hide();
    $(".questions").hide();

    var correctPoints = 0;
    var counter = 3;
    var guesses = [];
    // tot ?
    var tot = "";
    // num ?
    var num = 1;
    var solutions = ["True", "True", "True", "True", "False", "False", "True", "True", "False", "True"];

    function run() {
        var interval = setInterval(decrement, 1000);
    }

    function decrement() {
        counter--;

        if (counter == 0) {
            console.log(counter)
            $("#timeout").show();
            $("#retryButton").show();
        }

    }

    $("#startgame").on("click", function () {
        run()
    })
    // function start() {

    //     // DONE: Use setInterval to start the count here and set the clock to running.
    //     if (!gamestart) {
    //         intervalId = setInterval(count, 30000);
    //         counter = true;
    //         console.log(gamestart);
    //     }
    // }

    function myFunction() {
        var checkBox = document.getElementById("true");
        var text = document.getElementById("check");
        if (checkBox.True == true) {
            text.style.display = "check-mark";
            console.log(checkBox);
        }
        else {
            text.style.display = "X";
            console.log(wrong);
        }
    }

    //true section start

    $("#V").click(function () {
        guesses.push("True");
        // $("#display").text("correct");
        // $("#ans" + num).text("correct");
        num += 1;
        tot = "question" + num;
        // counter = 10;
        if (num <= 10) {
            $("#" + tot).show();
            console.log(true)
        } //if continue

        else {
            $("#retryButton").show();
        }
        for (var i = 0; i < guesses.length; i++) {
            if (guesses[i] === solutions[i]) {
                $("#correct" + i).show();
                correctPoints += 1;
                console.log(retry);
            } //if show correct solutions
            else {
                $("#wrong" + i).show();
            } // else show wrong solutions
            $("#score").text("Score " + correctPoints + " /10");
        }
    });

    //false section start
    $("#F").click(function () {
        guesses.push("False");
        $("#ans" + num).text("False");
        counter = 10;
        num += 1;
        tot = "ask" + num;
        console.log(false);
        if (num <= 10) {
            $("#" + tot).show();
        } //if continue
        for (var i = 0; i < guesses.length; i++) {
            if (guesses[i] === solutions[i]) {
                $("#correct" + i).show();
                correctPoints += 1;
            }

            if (correctPoints >= 8) {
                $("#good").show();
                sfondo("linear-gradient(to top, rgba(60,70,200,0.6), rgba(0,150,0,0.5))");
            }
            else if (correctPoints > 4 && correctPoints < 8) {
                $("#normal").show();
                sfondo("linear-gradient(to top, rgba(60,70,200,0.6), rgba(0,150,0,0.5))");
            }
            else {
                $("#loser").show();
                sfondo("linear-gradient(to top, rgba(60,70,200,0.6), rgba(0,150,0,0.5))");
            }
            $('#retryButton').click(function () {
                location.reload(false);
            });
        }
    });
})

