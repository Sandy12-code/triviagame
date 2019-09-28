$(document).ready(function () {


    function check() {
        var question1 = document.quiz.question1.value;
        var question2 = document.quiz.question2.value;
        var question3 = document.quiz.question3.value;
        var question6 = document.quiz.question6.value;
        var question7 = document.quiz.question7.value;
        var question8 = document.quiz.question8.value;
        var question10 = document.quiz.question10.value;
        var correct = 0;
        var counter = 30;


        function check() {
            var question4 = document.quiz.question4.value;
            var question5 = document.quiz.question5.value;
            var question9 = document.quiz.question9.value;
            var wrong = 0;


            function run() {
                var interval = setInterval(decrement, 1000);

                function decrement() {
                    counter--;

                    // event listeners
                    $('#display').html("<p>Time Remaining: " + 30 + "</p>");
                    $("#timer").show();
                    $("#startgame").on("click", function () {
                        run()


                        // click button true
                        $('#quiz1 .btn-true').on('click', function () {
                            q1False.fadeIn();
                            console.log(falsefade)
                        });

                        $("#quiz4 .btn-false").on("click", function () {
                            q4True.fadeIn();
                            console.log(truefade)
                        })


                        $('input:radio[name=correct]:checked').val();
                        $('input:radio[name=correct]')[0].checked = true;
                        $('input:radio[name=correct]').attr('checked', false);
                        $('input:radio[name=wrong]:checked').val();
                        $('input:radio[name=wrong]')[0].checked = true;
                        $('input:radio[name=wrong]').attr('checked', false);
                        console.log(working);
                    })

                    console.log(timer);




                    // if (counter == 0) {
                    //     console.log(counter)
                    //     $("#timeout").show();
                    //     $("#retryButton").show();
                    // }
        






                    // $(document).ready(function () {
                    // $(".answers").hide();
                    // $("#correct").hide();
                    // $("#wrong").hide();
                    // $("#timeout").hide();
                    // $("#retryButton").hide();
                    // $("#good").hide();
                    // $("#normal").hide();
                    // $("#loser").hide();
                    // $(".questions").hide();

                    // var correctPoints = 0;
                    // var counter = 3;
                    // var guesses = [];

                    // var solutions = ["True", "True", "True", "True", "False", "False", "True", "True", "False", "True"]













                    // $(".choice").on("click", function () {
                    //     var buttonName = $(this).attr("name")
                    //     if (buttonName == "correct") {

                    //     }
                    //     else {

                    //     }
                    // })


                    // function myFunction() {
                    //     var checkBox = document.getElementById("true");
                    //     var text = document.getElementById("check");
                    //     if (checkBox.True == true) {
                    //         text.style.display = "check-mark";
                    //         console.log(checkBox);
                    //     }
                    //     else {
                    //         text.style.display = "X";
                    //         console.log(wrong);
                    //     }
                    // }

                    //true section start

                    // $("#V").click(function () {
                    //     guesses.push("True");
                    // $("#display").text("correct");
                    // $("#ans" + num).text("correct");
                    // num += 1;
                    // tot = "question" + num;
                    // counter = 10;
                    // if (solutions == 
                    // if (num <= 10) {
                    //     $("#" + tot).show();
                    // console.log(true)
                    // } //if continue

                    // else {
                    //     $("#retryButton").show();
                    // }
                    // for (var i = 0; i < guesses.length; i++) {
                    //     if (guesses[i] === solutions[i]) {
                    //         $("#correct" + i).show();
                    //         correctPoints += 1;
                    //         console.log(retry);
                    // } //if show correct solutions
                    // else {
                    //     $("#wrong" + i).show();
                    // } // else show wrong solutions
                    //         $("#score").text("Score " + correctPoints + " /10");
                    //     }
                    // });

                    //false section start
                    // $("#F").click(function () {
                    //     guesses.push("False");
                    //     $("#ans" + num).text("False");
                    //     counter = 10;
                    //     num += 1;
                    //     tot = "ask" + num;
                    // console.log(false);
                    // if (num <= 10) {
                    //     $("#" + tot).show();
                    // } //if continue
                    // for (var i = 0; i < guesses.length; i++) {
                    //     if (guesses[i] === solutions[i]) {
                    //         $("#correct" + i).show();
                    //         correctPoints += 1;
                    //     }

                    //             if (correctPoints >= 8) {
                    //                 $("#good").show();
                    //                 sfondo("linear-gradient(to top, rgba(60,70,200,0.6), rgba(0,150,0,0.5))");
                    //             }
                    //             else if (correctPoints > 4 && correctPoints < 8) {
                    //                 $("#normal").show();
                    //                 sfondo("linear-gradient(to top, rgba(60,70,200,0.6), rgba(0,150,0,0.5))");
                    //             }
                    //             else {
                    //                 $("#loser").show();
                    //                 sfondo("linear-gradient(to top, rgba(60,70,200,0.6), rgba(0,150,0,0.5))");
                    //             }
                    //             $('#retryButton').click(function () {
                    //                 location.reload(false);
                    //             });
                    //         }
                }
            }
        }
    }
});





