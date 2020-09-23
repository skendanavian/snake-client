const net = require('net');
const {stdout} = require('process');

//Establish connection with game server

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.setEncoding('utf8');
  conn.on('data', (data) => console.log("message from server: " + data));
  conn.on('connect', () => {
    process.stdout.write(`Successfully connected to game server \n`);
  })
  conn.write("Name: SKN");
  // conn.write("Move: up") - moves the snake. 
  return conn;
}

console.log('Connecting ...')
connect();

module.exports = {connect};
