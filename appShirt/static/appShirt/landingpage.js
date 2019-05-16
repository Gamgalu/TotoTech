$( document ).ready(function() {
    alert("Hello World");
    function select(was) {
        $("#" + was).toggleClass("has-background-success");
    }
    select("anzuege");
  }); 