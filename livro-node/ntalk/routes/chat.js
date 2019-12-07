module.exports = (app) => ChatRoutes(app);

function ChatRoutes(app) {
  const autenticar = require('./../middlewares/autenticador');
  const controller = app.controllers.ChatController;

  app.get('/chat', autenticar, controller.index);
}