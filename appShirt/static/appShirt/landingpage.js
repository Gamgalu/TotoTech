$( document ).ready(function() {
    jQuery.select = function select(was) {
        $("#" + was).toggleClass("has-background-success");
    }
    jQuery.countgreen = function countgreen(was) {
        var x = $(".has-background-success").length;
        return x; 
    }

    // select("anzuege");

  }); 