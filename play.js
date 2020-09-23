const {Server} = require('http');
//why do we use the object brakets?
const {connect} = require('./client')

console.log('Connecting ...')
connect();