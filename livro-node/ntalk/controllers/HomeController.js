module.exports = (app) => HomeController(app);

function HomeController(app) {
  return {
    'index': (req, res) => IndexFunc(req, res),
    'login': (req, res) => LoginFunc(req, res),
    'logout': (req, res) => LogoutFunc(req, res)
  };
}

function IndexFunc(req, res) {
  res.render('home/index');
}

function LoginFunc(req, res) {
  const email = req.body.usuario.email;
  const nome = req.body.usuario.nome;

  if(email && nome) {
    var usuario = req.body.usuario;

    usuario['contatos'] = [];
    req.session.usuario = usuario;
    res.redirect('/contatos');
  } else {
    res.redirect('/');
  }
}

function LogoutFunc(req, res) {
  req.session.destroy();
  res.redirect('/');
}