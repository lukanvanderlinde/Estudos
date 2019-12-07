module.exports = function(io) {
  const crypto = require('crypto');
  const sockets = io.sockets;

  sockets.on('connection', function(client) {
    const session = client.handshake.session;
    const usuario = session.usuario;

    client.on('join', function(sala) {
      if (!sala) {
        let timestamp = new Date().toString();
        let md5 = crypto.createHash('md5');

        sala = md5.update(timestamp).digest('hex');
      }
      session.sala = sala;
      client.join(sala);
    });

    client.on('disconnect', function() {
      client.leave(session.sala);
    });

    client.on('send-server', function(msg) {
      let sala = session.sala;
      let data = {
        'email': usuario.email,
        'sala': sala
      };
      msg = "<b>" + usuario.nome + ":</b>" + msg + "<br>";
      client.broadcast.emit('new-message', data);
      sockets.in(sala).emit('send-client', msg);
    });
  });
};