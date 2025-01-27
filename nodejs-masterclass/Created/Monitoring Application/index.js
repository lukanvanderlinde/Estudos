/*
 *
 * Primary file for the API
 *
*/

// Dependencies
const url = require('url');
const http = require('http');
const config = require('./config');
const StringDecoder = require('string_decoder').StringDecoder;

// The server should respond to all requests with a string
const server = http.createServer((req, res) => {
  
  // Get the URL and parse it
  const parsedURL = url.parse(req.url, true);

  // Get the path
  const path = parsedURL.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // Get the query string as an object
  const queryStringObject = parsedURL.query;

  // Get the HTTP Method
  const method = req.method.toLowerCase();

  // Get the headers as an object
  const headers = req.headers;

  // Get the payload, if any
  const decoder = new StringDecoder('utf-8');
  let buffer = '';

  // When the request has data, call this listener
  req.on('data', (data) => {
    buffer += decoder.write(data);
  });

  // When the request is finished, call this listener
  req.on('end', () => {
    buffer += decoder.end();

    // Choose the handler this request should go to. If one is not found, use the notFound handler
    const chosenHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound;

    // Construct the data object to send to the handler
    const data = {
      'trimmedPath': trimmedPath,
      'queryStringObject': queryStringObject,
      'method': method,
      'headers': headers,
      'payload': buffer
    }

    // Route the request to the handler specified in the router
    chosenHandler(data, (statusCode, payload) => {
      // Use the status code called back by the handler, or default to 200
      statusCode = typeof(statusCode) == 'number' ? statusCode : 200;

      // Use the payload called back by the handler, or default to empty
      payload = typeof(payload) == 'object' ? payload : {};

      // Convert the payload to a string
      const payloadString = JSON.stringify(payload);

      // Return the response
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(statusCode);
      res.end(payloadString);

      // Log the request path
      console.log('Returning this response: ' + statusCode + ' ' + payloadString);

    });
  });
});

// Start the server
server.listen(config.port, () => {
  console.log(`The server is listening on port ${config.port} in ${config.envName} mode!`);
})

// Define the handlers
const handlers = {};

// Sample handler
handlers.sample = (data, callback) => {
  // Calback a HTTP status code, and a payload object
  callback(406, {'data': data });
};

//  Not found handler
handlers.notFound = (data, callback) => {
  callback(404);
};

// Define a request router
const router = {
  'sample': handlers.sample
};