/*
 *
 * Create and export configuration variables
 *
*/

// Container for all the environments
const environments = {};

// Development (default) environment
environments.development = {
  'port': 3000,
  'envName': 'development'
};

// Production environment
// Heroku PaaS sets those variables
environments.production = {
  'port': process.env.PORT,
  'envName': process.env.NODE_ENV
};

// Determine which environment was passed as a command-line argument
const currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of the environments above, if not, default to development
const environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.development;

// Export the module
module.exports = environmentToExport;