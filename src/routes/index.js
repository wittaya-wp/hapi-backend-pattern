const loginRoutes = require('../routes/auth.route');
const userRoutes = require('./user.routes');

module.exports = [
  ...loginRoutes,
  ...userRoutes,
];