module.exports = (app) => HomeRoutes(app);

function HomeRoutes(app) {
  const controller = app.controllers.HomeController;

  app.get('/', controller.index);
  app.get('/sair', controller.logout);

  app.post('/entrar', controller.login);
}