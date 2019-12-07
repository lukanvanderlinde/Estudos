module.exports = (app) => {
  app.get('/pagamentos', (req, res) => {
    res.send('OK.');
  });

  app.post('/pagamentos/pagamento', (req, res) => {
    req.assert("forma_de_pagamento", 'forma de pagamento eh obrigatoria').notEmpty(); // Valida que o body precisa conter essa key
    
    const pagamento = req.body;


    pagamento.status = 'CRIADO';
    pagamento.data = new Date;

    var connection = app.persistencia.connectionFactory();
    var pagamentoDao = new app.persistencia.PagamentoDao(connection);

    pagamentoDao.salva(pagamento, function(erro, resultado) {
      res.json(pagamento);
    });

    res.send(pagamento);
  });
};