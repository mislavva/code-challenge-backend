import { expect } from 'chai';
import encoderService from './encoder.service';

describe('Encoder Component', () => {

  describe('Encode text', () => {
    it('When text is "XXXYYYYZZQXX", encoded text should be "X3Y4Z2Q1X2"', (done) => {
      const textToEncode = 'XXXYYYYZZQXX';

      const encodedText = encoderService.encode(textToEncode);

      expect(encodedText).to.equal('X3Y4Z2Q1X2');

      done();
    });

    it('When text is "", encoded text should be ""', (done) => {
      const textToEncode = '';

      const encodedText = encoderService.encode(textToEncode);

      expect(encodedText).to.equal('');

      done();
    });
  });
});
