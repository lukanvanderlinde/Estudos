module.exports = (app) => ContatosController(app);

function ContatosController() {
  return {
    'index': (req, res) => IndexFunc(req, res),
    'create': (req, res) => CreateFunc(req, res),
    'show': (req, res) => ShowFunc(req, res),
    'edit': (req, res) => EditFunc(req, res),
    'update': (req, res) => UpdateFunc(req, res),
    'destroy': (req, res) => DestroyFunc(req, res)
  };
}

function IndexFunc(req, res) {
  const usuario = req.session.usuario;
  const contatos = usuario.contatos;

  const params = {
    'usuario': usuario,
    'contatos': contatos
  };
  console.log("index");
  res.render('contatos/index', params);
}

function CreateFunc(req, res) {
  const contato = req.body.contato;
  const usuario = req.session.usuario;

  usuario.contatos.push(contato);
  res.redirect('/contatos');
}

function ShowFunc(req, res) {
  const id = req.params.id;
  const contato = req.session.usuario.contatos[id];
  const params = {
    'contato': contato,
    'id': id
  };
  console.log("show");
  res.render('contatos/show', params);
}

function EditFunc(req, res) {
  const id = req.params.id;
  const usuario = req.session.usuario;
  const contato = usuario.contatos[id];
  const params = {
    'usuario': usuario,
    'contato': contato,
    'id': id
  };

  res.render('contatos/edit', params);
}

function UpdateFunc(req, res) {
  const contato = req.body.contato;
  const usuario = req.session.usuario;

  usuario.contatos[req.params.id] = contato;
  res.redirect('/contatos');
}

function DestroyFunc(req, res) {
  const usuario = req.session.usuario;
  const id = req.params.id;

  usuario.contatos.splice(id, 1);
  res.redirect('/contatos');
}