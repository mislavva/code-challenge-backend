import { expect } from 'chai';
import authorizationService from './authorization.service';
describe('Authorization Component', () => {

  describe('LogIn', () => {
    it('When username is "mislav.svaljek@gmail.com" and password "123456", token should be ""', (done) => {
      const username = 'mislav.svaljek@gmail.com';
      const password = '123456';

      const token = authorizationService.logIn(username, password);

      expect(token).to.equal('');

      done();
    });

    it('When username is "optimus.prime@autobots.com" and password "validPassword1234!", token should be "xyz0987654321"', (done) => {
      const username = 'optimus.prime@autobots.com';
      const password = 'validPassword1234!';

      const token = authorizationService.logIn(username, password);

      expect(token).to.equal('xyz0987654321');

      done();
    });
  });
});
