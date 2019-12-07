#Project
Build a RESTful API for an uptime monitoring application.

##Requirements
1. The API listens on a PORT and accepts incoming HTTP requests for POST, GET, PUT, DELETE and HEAD.
2. The API allows a client to connect, then create a new user, then edit and delete that user.
3. The API allows a user to "sign in" which gives them a token that they can use for subsequent authenticated requests.
4. The API allows the user to "sign out" which invalidates their token.
5. The API allows a signed-in user to use their token to create a new "check".
6. The API allows a signed-in user to edit or delete any of their checks.
7. In the background, workers perform all the "checks" at the appropriate times, and send alerts to the users when a check changes its state from "up" to "down, or visa versa.

##Anotações
- O arquivo config.js é responsável por criar e exportar algumas configurações de ambiente, para que a aplicação rode tanto em um ambiente local quanto em um servidor. Caso em algum momento seja preciso verificar coisas como porta ou ambiente, basta importar ele. Assim fica melhor de garantir funcionamento ao inves de ir direto nas variáveis process.PORT ou process.NODE_ENV. Isso evita por exemplo um problema que eu tive no projeto da Brognoli, onde a API do DialogFlow precisava de um token para funcionar e quando eu rodava no ambiente local essa variável não existia pois estava apenas salva no Heroku