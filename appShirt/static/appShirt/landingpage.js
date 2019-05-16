$( document ).ready(function() {
    jQuery.select = function select(was) {
        $("#" + was).toggleClass("has-background-success");
    }

    // select("anzuege");

  }); 