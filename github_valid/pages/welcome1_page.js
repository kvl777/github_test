require('../pages/welcome2_page.js');

var welcome1_page = function(){
	
	this.clickContinue = function(){
		element(by.buttonText("Continue")).click();
		return require('./welcome2_page.js');
	};
	
};
module.exports = new welcome1_page();