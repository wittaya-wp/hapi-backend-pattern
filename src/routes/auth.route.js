const authController = require("../controllers/auth.controller");

module.exports = [
  {
    method: "POST",
    path: "/login",
    options: authController.login,
  },
];
