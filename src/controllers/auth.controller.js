const bcrypt = require('bcrypt');
const { signToken } = require('../utils/jwt');
const userService = require('../services/user.service'); // Import the user service
// Dummy user data
const mockUsers = [
  { id: 1, email: 'test@example.com', passwordHash: bcrypt.hashSync('password123', 10) }
];

// Authorize user
const login = {
  description: 'authorize user',
  tags: ['api', 'user'],
  auth: false,
  handler: async (request, h) => {
    const { email, password } = request.payload;

    // todo: create func for userService to get by email 
    const user = userService.getAllUsers().find(user => user.email === email);
    if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
      return h.response({ message: 'Invalid credentials' }).code(401);
    } 

    const token = signToken({ id: user.id, email: user.email });
    return { token };
  }
};

module.exports = {
  login
};
