// first we make sure annyang started succesfully
if (annyang) {
  console.log('Outside');


  var hallo = function() {
    alert('Hallo Welt!');
    console.log('Hallo Welt!');
  };
  var pullover = function() {
    alert('Pullover!');
    console.log('Pullover!');
  };

  var zeigMir = function(nummer) {
    console.log('Output from API:' + nummer);
    var integerFromVoice = parseInt(nummer, 10);
    if(Number.isInteger(integerFromVoice)){
      //Number already detected
    }
    else {
      // In four fixed cases, the speech recognition does not detect a nu
      switch(nummer){
        case 'eins':
          integerFromVoice = 1;
          break;
        case 'drei':
          integerFromVoice = 3;
          break;
        case 'vier':
          integerFromVoice = 4;
          break;
        case 'fünf':
          integerFromVoice = 5;
          break;
      }
    }
    console.log('Passed Output:' + integerFromVoice);
    return integerFromVoice;
  }

  // List of all Commands
  var commands = {
    'hallo':                  hallo,
    'pullover':               pullover,
    'zeig mir *nummer':       zeigMir,
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Change language to german
  annyang.setLanguage('de-DE');

  // Start listening.
  annyang.start();
  console.log('Annyang started');
}
