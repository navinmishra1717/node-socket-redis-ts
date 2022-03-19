import chai, { expect } from 'chai';
import chaiPromise from 'chai-as-promised';
import chaiHttp from 'chai-http';
import App from '@app/app';
import { Application } from 'express';

chai.use(chaiPromise); // chai-as-promised must be used in any test that returns a promise
chai.use(chaiHttp); // chai-http must be used in any test that uses http requests

describe('User', () => {
  let server: Application;

  before(async () => {
    server = await App();
  });

  after(async () => {});

  describe('Logister', () => {
    it('should logister', (done) => {
      chai
        .request(server)
        .post('/logister')
        .set('Content-Type', 'application/json')
        .send({
          username: 'test',
          password: 'test',
        })
        .end((err, res) => {
          try {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('username');
            expect(res.body).to.have.property('password');
            done();
          } catch (e) {
            done(e);
          }
        });
    });
  });
});
