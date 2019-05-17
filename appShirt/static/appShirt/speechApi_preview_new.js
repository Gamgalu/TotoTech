const recognition = new webkitSpeechRecognition();

let finalTranscript = '';

recognition.lang = 'de-DE';
recognition.continuous = true;


recognition.onend = function() {
  if (finalTranscript !== '') {
  	const splittedTranscript = finalTranscript.split(' ').map(val => val.toLowerCase());
  	// const action = splittedTranscript.slice(0).join(' ');
  	// const value = splittedTranscript.slice(1).join(' ');

    //chooseItem
  	if (splittedTranscript[0] === 'geil' ||
      (splittedTranscript[0] === 'gefällt' && splittedTranscript[1] === 'mir' && splittedTranscript.length == 2) ||
      (splittedTranscript[0] === 'mag' && splittedTranscript[1] === 'ich'&& splittedTranscript.length == 2)  )
    {
  		console.log('Like Item');
      show_next_like();
  	}

    //rejectItem
    if (splittedTranscript[0] === 'weg' ||
        splittedTranscript[0] === 'nein' ||
        (splittedTranscript[0] === 'gefällt' && splittedTranscript[1] === 'mir' && splittedTranscript[2] === 'nicht') ||
        (splittedTranscript[0] === 'mag' && splittedTranscript[1] === 'ich' && splittedTranscript[2] === 'nicht')
      ){
        console.log('Reject Item');
        show_next_dislike();
      }

    //andere Farbe
    if (splittedTranscript[0] === 'andere' && splittedTranscript[1] === 'farbe'){
      console.log('Change color');
      show_next_variante();
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
