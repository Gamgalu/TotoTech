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
    console.log(nummer)
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
