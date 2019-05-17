
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

    for(i = 0; i < splittedTranscript.length; i++ ){

      if (splittedTranscript[i] === 'pullover'){
        console.log('Pullover');
        auswahl('pullover');
      }
      if (splittedTranscript[i] === 'shirt'){
        auswahl('shirt');
      }
      if (splittedTranscript[i] === 'schlafshirt'){
        auswahl('schlafshirt');
      }
      if (splittedTranscript[i] === 'poloshirt'){
        auswahl('poloshirt');
      }
      if (splittedTranscript[i] === 'anzug'){
        auswahl('anzug');
      }
      if (splittedTranscript[i] === 'jacken'){
        auswahl('jacken');
      }
      if (splittedTranscript[i] === 'polo'){
        auswahl('polo');
      }
      if (splittedTranscript[i] === 'sweatshirt'){
        auswahl('sweatshirt');
      }
      if (splittedTranscript[i] === 'sakko'){
         auswahl('sakko');
      }
      if (splittedTranscript[i] === 'weiter'){
        weiter();
      }

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
