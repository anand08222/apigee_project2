const assert = require('chai').aasert;

describe('Field test for killer robot', function(){
	
	let num = 6;
	let cum = 'dsjvhwshvehw';
	it('Check that num is numeric',function(){
		assert.isNumber(num);
	});
	it('check that cum is string',function(){
		assert.isString(cum);
	});
});
