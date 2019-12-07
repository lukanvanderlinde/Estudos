// Modulos necessarios
const express = require('express'); // Framework express
const load = require('express-load'); // Responsavel por mapear diretorios
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const methodOverride = require('method-override');
const error = require('./middlewares/error'); // Carrega a pasta com os meus middlewares

const KEY = 'ntalk.sid';
const SECRET = 'ntalk';

const app = express(); // Retorno que habilita todas as funcionalidades do express
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cookie = cookieParser(SECRET);
const store = new expressSession.MemoryStore();

// Carregamentos dos middlewares
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');

app.use(cookie);
app.use(expressSession({
  'secret': SECRET,
  'name': KEY,
  'resave': true,
  'saveUninitialized': true,
  'store': store
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': true }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public')); // Diz para a aplicação que os arquivos estativos estao na pasta publica

io.use(function(socket, next) {
  const data = socket.request;
  cookie(data, {}, function(err) {
    const sessionID = data.signedCookies[KEY];
    store.get(sessionID, function(err, session) {
      if(err || !session) {
        return next(new Error('acesso negado'));
      } else {
        socket.handshake.session = session;
        return next();
      }
    });
  });
});

// Express Load - Carrega modulos desenvolvidos dentro da aplicação
load('models') // Carrega a pasta models liberando acesso aos arquivos dentro: models.[file]
  .then('controllers') // Carrega a pasta controllers liberando acesso aos arquivos dentro: controllers.[file]
  .then('routes') // Carrega a pasta routes liberanto acesso aos arquivos dentro: routes.[file]
  .into(app); // Carrega os recursos em ordem, models primeiro pq o controllers precisa usar eles e por ultimo routes pq usa os controllers. A variavel app é enviada como paramentro nas funções definidas no module.export de cada arquivo

load('sockets').into(io);

// Middlewares de tratamento de erros, se o req e res não corresponderem em nenhum dos modulos ou das rotas que tem dentro dos modulos a ultima coisa a ser feita é checar se tem erro, caso tenha ele exibe um erro amigavel
app.use(error.notFound);
app.use(error.serverError);

// Inicia o servidor
server.listen(3000, () => {
  console.log('Ntalk no ar. UHUL');
});