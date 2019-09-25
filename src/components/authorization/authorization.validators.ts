import { check, ValidationChain } from 'express-validator';
import validationMiddleware from '../../middleware/validation.middleware';

const loginValidatorChain: ValidationChain[] = [
  // Validate and normalize email
  check('email')
    .exists().withMessage('Email is required')
    .isEmail().withMessage('Invalid email')
    .normalizeEmail(),
  // Validate password
  check('password')
    .exists().withMessage('Password is required')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    .matches(/^(?=.+[0-9])(?=.+[a-zA-z])/)
    .withMessage('Password must contain at least one letter and a number'),
];

export default {
  login: [...loginValidatorChain, validationMiddleware],
};
