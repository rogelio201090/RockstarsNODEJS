module.exports = function (io) {
    var users = {};
    var messages = [];
    io.on('connection', function(socket){
      // Create User
      if (!users.hasOwnProperty(socket.id)) {
        users[socket.id] = {};
      }
      socket.emit('new-connection', {
        id: socket.id,
        messages: messages
      });
      socket.on('start-writing', function(user){
        io.emit('start-writing', user);
      });
  
      socket.on('stop-writing', function(user){
        io.emit('stop-writing', user);
      });
  
      socket.on('chat-message', function(message){
        console.log('message recieved on backend:', message);
        messages.push(message);
        io.emit('chat-message', message);
      });
    });
  }
  