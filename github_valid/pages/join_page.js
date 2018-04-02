require('../pages/welcome1_page.js');

var join_page = function(){
	
	this.enterLoginValue = function(value){
		element(by.id("user_login")).sendKeys(value);
	};
	
	this.enterEmailValue = function(value){
		element(by.id('user_email')).sendKeys(value);
	};
	
	this.enterPassValue = function(value){
		element(by.id('user_password')).sendKeys(value);
	};
	
	this.clickCreate = function(){
		element(by.buttonText("Create an account")).click();
		return require('./welcome1_page.js');
	};
	
};
module.exports = new join_page();