// first we make sure annyang started succesfully
if (annyang) {
  console.log('Outside');

  var chooseItem = function() {
    // TODO: Add functionality for choosing an item for the matchbox and afterwards showing the next item here
    console.log('Choose Item');
    show_next_like();
  }

  var rejectItem = function() {
    // TODO: Add functionality for rejecting an item and showing the next item here
    console.log('Reject Item');
    show_next_dislike();
  }

  var pickNumber = function(nummer) {
    console.log('Output from API:' + nummer);
    var integerFromVoice = parseInt(nummer, 10);
    if(Number.isInteger(integerFromVoice)){
      //Number already detected
    }
    else {
      // In four fixed cases, the speech recognition does not detect a german number as an integer
      // Those cases are handeled manually
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

    if (Number.isInteger(integerFromVoice)) {
      console.log('Passed Output:' + integerFromVoice);

      show_pick_variante(integerFromVoice);
    }
    else {
      // Keine Zahl verstanden
      console.log('Passed Output: Die Zahl habe ich leider nicht verstanden')
    }

    // TODO: Instead of return, Add functionality for showing variant of item here
  }

  var goToMatchbox = function() {
    console.log('Go to matchbox');
  }

  // List of all Commands
  var commands = {
    // Variants of commands for choosing an item
    '(das) gefällt mir':            chooseItem,
    '(das) mag ich':                chooseItem,
    'geil':                         chooseItem,

    // Variants of commands for rejecting an item
    '(das) gefällt mir nicht':      rejectItem,
    '(das) mag ich nicht':          rejectItem,
    'nein':                         rejectItem,
    'furchtbar':                    rejectItem,

    // Variants of commands for picking a number
    'zeig mir (nummer) *nummer':       pickNumber,
    'Nummer *nummer':         pickNumber,

    // Variants of commands for finishing
    'ende':                   goToMatchbox,
    'fertig':                 goToMatchbox,
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Change language to german
  annyang.setLanguage('de-DE');

  // Start listening.
  annyang.start();
  console.log('Annyang started');
}
