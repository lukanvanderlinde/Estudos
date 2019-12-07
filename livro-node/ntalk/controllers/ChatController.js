module.exports = (app) => ChatController(app);

function ChatController(app) {
  return {
    'index': (req, res) => IndexFunc(req, res),
  };
}

function IndexFunc(req, res) {
  let params = {
    'sala': req.query.sala
  };
  res.render('chat/index', params);
}