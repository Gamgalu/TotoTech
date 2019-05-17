
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
}

var weiter = function () {
    console.log("i was hessre");
    $("#weiterdiv").click();
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
