$(document).ready(function () {
    jQuery.select = function select(was) {
        $("#" + was).toggleClass("has-background-success");
    }
    jQuery.countgreen = function countgreen(was) {
        var x = $(".has-background-success").length;
        return x;
    }
    $("#weiterdiv").click(function () {
        //alert("Handler for .click() called.");
        var href = $('.button is-success is-pulled-right').attr('href');
        window.location.href = href;
    });

});
