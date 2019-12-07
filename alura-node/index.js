const express = require('express');
const expressValidator = require('express-validator');
const consign = require('consign');
const bodyParser = require('body-parser');

const app = express();

// Midlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());

consign()
  .include('controllers')
  .include('persistencia')
  .into(app);

// Sets server port and logs message on sucesss
const port = process.env.PORT || 1337;
app.listen(port, () => console.log(`Payfast is running with environment ${process.env.NODE_ENV} on port ${port || 3000}`));