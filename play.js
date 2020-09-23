const {Server} = require('http');
//why do we use the object brakets?
const {connect} = require('./client')

console.log('Connecting ...')
connect();


/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin);
  return stdin;
}

const handleUserInput = function(stdin) {
  stdin.on("keypress", (str, key) => {
    if (key && key.ctrl && key.name === "c") {
      process.exit();
    });


}

setupInput();