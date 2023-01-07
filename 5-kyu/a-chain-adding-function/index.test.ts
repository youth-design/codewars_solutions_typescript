import add from './index';

describe('add', () => {
  it('should work when called once', (done) => {
    // eslint-disable-next-line eqeqeq
    if (add(1) == 1) {
      done();
    } else {
      done.fail('error');
    }
  });

  it('should work when called twice', (done) => {
    // eslint-disable-next-line eqeqeq
    if (add(1)(2) == 3) {
      done();
    } else {
      done.fail('error');
    }
  });

  it('should work when called 5 times', (done) => {
    // eslint-disable-next-line eqeqeq
    if (add(1)(2)(3)(4)(5) == 15) {
      done();
    } else {
      done.fail('error');
    }
  });
});
