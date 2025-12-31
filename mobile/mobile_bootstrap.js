// Configure RequireJS to load core modules from the parent directory
require.config({
  baseUrl: '..',
  urlArgs: 'bust=' + Date.now()
});
// Load the original bootstrap to initialize the game
require(['src/bootstrap']);
