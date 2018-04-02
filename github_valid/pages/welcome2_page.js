require('../pages/complete_page.js');

var welcome2_page = function(){
	
	this.clickSubmit = function(){
		element(by.buttonText("Submit")).click();
		return require('./complete_page.js');
	};
	
};
module.exports = new welcome2_page();

