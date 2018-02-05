$(document).ready(function () {
    /*
        Not too good looking right now but it will evolve. Right now the priority is functionality!
            $("#goal").click(function () {
            $("#eq_slb").css('zIndex', '2');
            $("#eq_slb").animate({
                width: '100%'
            });
        });*/
    $(".goal").click(function () {

        var randomNumber = Math.floor(Math.random() * 2) + 1;
        if (randomNumber === 1) {
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

});