// first we make sure annyang started succesfully
if (annyang) {

    var pullover = function () {
        alert('Pullover!');
        console.log('Pullover!');
        $.select("pullover");
    };

    var auswahl = function (myParam) {
        // alert('Auswahl: ' + myParam);
        console.log(myParam);
        $.select(myParam);
        if($.countgreen("") > 0) {


            $("#weiterdiv").show();
        } else {
            $("#weiterdiv").hide();
        }
    };

    var weiter = function (myParam) {
        console.log(myParam);

    }

    function iwas(was) {
        alert("iwas" + was);
    }


    function iwas(was) {
        alert("iwas" + was);
    }

    var zeigMir = function (nummer) {
        console.log(nummer)
    }

    // List of all Commands
    var commands = {
        // 'hallo': hallo,
        'pullover': function() {  auswahl('pullover'); },
        'shirt': function() {  auswahl('thsirt'); },
        'schlafshirt': function() {  auswahl('schlafshirt'); },
        'poloshirt': function() {  auswahl('poloshirt'); },
        'anzug': function() {  auswahl('anzug'); },
        'jacken': function() {  auswahl('jacken'); },
        'polo': function() {  auswahl('polo'); },
        'sweatshirt': function() {  auswahl('sweatshirt'); },
        'sakko': function() { auswahl('sakko'); },
        'weiter': function() { auswahl('weiter'); },
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Change language to german
    annyang.setLanguage('de-DE');

    // Start listening.
    annyang.start();
    console.log('Annyang started');
}
