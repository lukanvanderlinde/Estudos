module.exports = (app) => ContatosRoutes(app);

function ContatosRoutes(app) {
  const autenticar = require('./../middlewares/autenticador');
  const ContatosController = app.controllers.ContatosController;
  
  app.get('/contatos', autenticar, ContatosController.index);
  app.get('/contato/:id', autenticar, ContatosController.show);
  app.get('/contato/:id/editar', autenticar, ContatosController.edit);

  app.post('/contato', autenticar, ContatosController.create);

  app.put('/contato/:id', autenticar, ContatosController.update);
  
  app.delete('/contato/:id', autenticar, ContatosController.destroy);
};