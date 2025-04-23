const userController = require('../controllers/user.controller');

module.exports = [
  {
    method: 'POST',
    path: '/users',
    options: userController.createUser
  },
  {
    method: 'GET',
    path: '/users/{id}',
    options: userController.getUserById
  },
  {
    method: 'PUT',
    path: '/users/{id}',
    options: userController.updateUser
  },
  {
    method: 'DELETE',
    path: '/users/{id}',
    options: userController.deleteUser
  },
  {
    method: 'GET',
    path: '/users',
    options: userController.getAllUsers
  }
];
