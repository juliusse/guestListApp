module.exports = function(app) {
  app.use('/api/guests', require('./guests'));
};