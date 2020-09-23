const {IP, PORT} = require('./constants');
const net = require('net');
const {stdout} = require('process');

//Establish connection with game server

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');
  conn.on('data', (data) => console.log("message from server: " + data));
  conn.on('connect', () => {
    process.stdout.write(`Successfully connected to game server \n`);
  })
  conn.write("Name: SKN");
  return conn;
}



module.exports = {connect};
