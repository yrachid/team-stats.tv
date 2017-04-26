const socket = require('socket.io-client');

module.exports = configuration => {

  if (configuration.remoteAddress) {

    const socketClient = socket(configuration.remoteAddress);

    socketClient.on('connect', console.log.bind(console, 'connected'));

    socketClient.on('yo', console.log.bind(console));

    socketClient.on('disconnect', console.log.bind(console, 'disconnected'));
  }

};
