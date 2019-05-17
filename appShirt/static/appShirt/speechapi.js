<<<<<<< HEAD
const recognition = new webkitSpeechRecognition();

let finalTranscript = '';

recognition.lang = 'de-DE';
recognition.continuous = true;

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

var weiter = function () {
    console.log("i was hessre");
    $("#weiterdiv").click();
=======
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

    var weiter = function () {
         console.log("i was here");
        $("#weiterdiv").click();
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
        'weiter': function() { weiter(); },
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Change language to german
    annyang.setLanguage('de-DE');

    // Start listening.
    annyang.start();
    console.log('Annyang started');
>>>>>>> 7f8ab2e138c634ee6b4559c1348df3aa4cc17e5f
}


recognition.onend = function() {
  if (finalTranscript !== '') {
  	const splittedTranscript = finalTranscript.split(' ').map(val => val.toLowerCase());
  	// const action = splittedTranscript.slice(0).join(' ');
  	// const value = splittedTranscript.slice(1).join(' ');

    if (splittedTranscript[0] === 'pullover'){
      console.log('Pullover');
      auswahl('pullover');
    }
    if (splittedTranscript[0] === 'shirt'){
      auswahl('thsirt');
    }
    if (splittedTranscript[0] === 'schlafshirt'){
      auswahl('schlafshirt');
    }
    if (splittedTranscript[0] === 'poloshirt'){
      auswahl('poloshirt');
    }
    if (splittedTranscript[0] === 'anzug'){
      auswahl('anzug');
    }
    if (splittedTranscript[0] === 'jacken'){
      auswahl('jacken');
    }
    if (splittedTranscript[0] === 'polo'){
      auswahl('polo');
    }
    if (splittedTranscript[0] === 'sweatshirt'){
      auswahl('sweatshirt');
    }
    if (splittedTranscript[0] === 'sakko'){
       auswahl('sakko');
    }
    if (splittedTranscript[0] === 'weiter'){
      weiter();
    }
  }

  finalTranscript = '';
  interimTranscript = '';

  //loop:
  recognition.start();
};


recognition.onresult = function(event) {
  let interimTranscript = '';
  for (let i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      finalTranscript += event.results[i][0].transcript;
      recognition.stop();
    } else {
      interimTranscript += event.results[i][0].transcript;
    }
  }
  console.log(finalTranscript);
};

//initial
recognition.start();
