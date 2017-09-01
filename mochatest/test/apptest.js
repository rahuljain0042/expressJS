const assert = require('chai').assert;
const hey = require('../app').hey;
const addNumbers = require('../app').addNumbers

describe('App',function(){
	it('app should return hello',function(){
		let hi = hey();
		assert.equal(hi,'hello');
	});
	// describe('App',function(){
	// 	it('app should return a string type',function(){
	// 		assert.typeOf(app(),'string')
	// 	});
	// });

		it('addNumbers should be above five',function(){
			let result = addNumbers(5,5);
			assert.isAbove(result,5);
		});
	});
