$(document).ready(function () {
    /*
        Not too good looking right now but it will evolve. Right now the priority is functionality!
            $("#goal").click(function () {
            $("#eq_slb").css('zIndex', '2');
            $("#eq_slb").animate({
                width: '100%'
            });
        });*/
    function randomTeam() {
        return Math.floor(Math.random() * 2) + 1;
    }

    $(".goal").click(function () {

        var team = randomTeam();
        if (team === 1) {
            var element = document.getElementById('score_home');
            var goal_home = parseInt(element.innerHTML);
            goal_home++;
            element.innerHTML = goal_home;
        } else {
            var elements = document.getElementById('score_away');
            var goal_away = parseInt(elements.innerHTML);
            goal_away++;
            elements.innerHTML = goal_away;
        }

    });

    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    var totalSeconds = 0;
    var myTimer = null;


    $(".start_game").click(function () {

        myTimer = setInterval(setTimer, 1000);

        function setTimer() {
            ++totalSeconds;
            secondsLabel.innerHTML = lapdigit(totalSeconds % 60);
            minutesLabel.innerHTML = lapdigit(parseInt(totalSeconds / 60));
        }

        function lapdigit(val) {
            var valString = val + "";
            if (valString.length < 2) {
                return "0" + valString;
            } else {
                return valString;
            }
        }


    });

    $(".pause_game").click(function () {
        clearInterval(myTimer);
        timer = null;
    });

    $(".reset_game").click(function () {
        var minutesLabel = document.getElementById("minutes");
        var secondsLabel = document.getElementById("seconds");
        var element = document.getElementById('score_home');
        var goal_home = parseInt(element.innerHTML);
        var elements = document.getElementById('score_away');
        var goal_away = parseInt(elements.innerHTML);
        elements.innerHTML = '0';
        element.innerHTML = '0';
        secondsLabel.innerHTML = '00';
        minutesLabel.innerHTML = '00';
        totalSeconds = 0;
    });

    $(".discount").click(function () {
        var discount = Math.floor(Math.random() * 10) + 1;
        alert('Discount time: ' + discount + "!");
    });

    $(".substitution").click(function () {
        clearInterval(myTimer);
        var team = randomTeam();
        if (team === 1) {
            alert('SAI FEJSA ENTRA SAMARIS!');
        } else {
            alert('SAI HERRERA ENTRA ANDRÉ ANDRÉ!');
        }
    });
});