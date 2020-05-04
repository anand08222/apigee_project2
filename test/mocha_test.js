var app = require('./app.js');
var assert = require('chai').assert

describe('Field test for killer robot', function(){
    let num = 6;
	let cum = 'dsjvhwshvehw';
	it('Check that num is numeric',function(){
		assert.isNumber(num,'IT IS NUMBER');
	});
	it('check that cum is string',function(){
		assert.isString(cum, 'IT IS STRING');
	});
	it('app should return hello',function(){
		assert.equal(app(),'hello');
	});
});
