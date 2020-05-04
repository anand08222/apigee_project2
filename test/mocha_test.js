//const assert = require('chai').aasert;
var expect = chai.expect;

describe('Field test for killer robot', function(){
it('1 addition of 2 numbers', function() {
    expect(add(1, 1)).to.be.equal(2);
  });

  it('1 addition of 0 numbers', function() {
    expect(add(1, 0)).to.be.equal(1);
    expect(add(0, 0)).to.be.equal(0);
  });
});
