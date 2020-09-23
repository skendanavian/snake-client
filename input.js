// Stores the active TCP connection object.
let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => handleUserInput(key));
  return stdin;
};

const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    connection.write('Move: up');
  }
  if (key === "d") {
    connection.write('Move: right');
  }
  if (key === "s") {
    connection.write('Move: down');
  }
  if (key === "a") {
    connection.write('Move: left');
  }
  if (key === "z") {
    connection.write('Say: SsSsSsSsSsS');
  }
  if (key === "x") {
    connection.write('Say: Look out!');
  }
  if (key === "c") {
    connection.write('Say: Whatcha Doin?');
  }
};

module.exports = {setupInput}