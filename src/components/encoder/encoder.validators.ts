import { ValidationChain, check } from 'express-validator';
import validationMiddleware from '../../middleware/validation.middleware';

const encodeValidatorChain: ValidationChain[] = [
  check('text')
    .exists().withMessage('Text is required.')
    .isAlpha().withMessage('Text can contain only alphabetic characters.'),
];

export default {
  encode: [...encodeValidatorChain, validationMiddleware],
};
