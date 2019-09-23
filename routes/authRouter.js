const Router = require('express').Router;
const authValidators = require('../validators/authValidators');

const authRouter = Router();

authRouter.post(
  '/login',
  authValidators.login,
  (req, res, next) => {
    const { email, password } = req.body;

    if (
      email === 'optimus.prime@autobots.com' &&
      password === 'validPassword1234!'
    ) {
      return res.send({ token: 'xyz0987654321' });
    }

    return next({ message: 'Invalid username or password', status: 401 });
  }
);

module.exports = authRouter;
