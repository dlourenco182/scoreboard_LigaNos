$(document).ready(function () {
    $("#goal").click(function () {
        $("#eq_slb").css('zIndex', '2');
        $("#eq_slb").animate({
            width: '100%'
        });
    });
});