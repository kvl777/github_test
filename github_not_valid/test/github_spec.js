describe("No possibility to register with invalid data", function(){
	
	beforeEach(function(){
		browser.waitForAngularEnabled(false);
		browser.get("https://github.com/join");
	});
	
	var join_page = require ('../page/join_page.js');
	var colors = require('colors');
	
	it ("Error notifications 1", function(){
		join_page.enterLoginValue("");
		join_page.enterEmailValue("");
		join_page.enterPassValue("");
		join_page.clickCreate();
		
		element(by.css('div.flash:nth-child(4)')).getText().then(function(text){
			console.log(text.red);
		});
		element(by.css('dl.form-group:nth-child(5) > dd:nth-child(3)')).getText().then(function(text){
			console.log(text.red);
		});
		element(by.css('dl.form-group:nth-child(6) > dd:nth-child(3)')).getText().then(function(text){
			console.log(text.red);
		});
		element(by.css('dl.form-group:nth-child(7) > dd:nth-child(3)')).getText().then(function(text){
			console.log(text.red);
		});
	});
	
	it ("Error notifications 2", function(){
		join_page.enterLoginValue("me77777777");
		join_page.enterEmailValue("me77777777@gmail.com");
		join_page.enterPassValue("me77777777");
		join_page.clickCreate();
		
		element(by.css('div.flash:nth-child(4)')).getText().then(function(text){
			console.log(text.red);
		});
		element(by.css('.error')).getText().then(function(text){
			console.log(text.red);
		});
	});
	
	it ("Error notifications 3", function(){
		join_page.enterLoginValue("1");
		join_page.enterEmailValue("1");
		join_page.enterPassValue("1");
		join_page.clickCreate();
		
		element(by.css('div.flash:nth-child(4)')).getText().then(function(text){
			console.log(text.red);
		});
		element(by.css('dl.form-group:nth-child(5) > dd:nth-child(3)')).getText().then(function(text){
			console.log(text.red);
		});
		element(by.css('dl.form-group:nth-child(6) > dd:nth-child(3)')).getText().then(function(text){
			console.log(text.red);
		});
		element(by.css('dl.form-group:nth-child(7) > dd:nth-child(3)')).getText().then(function(text){
			console.log(text.red);
		});
	});
	
	it ("Error notifications 4", function(){
		join_page.enterLoginValue("11111111111111111111111111111111111111111");
		join_page.enterEmailValue("me77777777@gmail.com");
		join_page.enterPassValue("a");
		join_page.clickCreate();
		
		element(by.css('div.flash:nth-child(4)')).getText().then(function(text){
			console.log(text.red);
		});
		element(by.css('dl.form-group:nth-child(5) > dd:nth-child(3)')).getText().then(function(text){
			console.log(text.red);
		});
		element(by.css('dl.form-group:nth-child(7) > dd:nth-child(3)')).getText().then(function(text){
			console.log(text.red);
		});
	});
	
	it ("Error notifications 5", function(){
		join_page.enterLoginValue("me77777777");
		join_page.enterEmailValue("me77777777@gmail.com");
		join_page.enterPassValue("&");
		join_page.clickCreate();
		
		element(by.css('div.flash:nth-child(4)')).getText().then(function(text){
			console.log(text.red);
		});
		element(by.css('dl.form-group:nth-child(7) > dd:nth-child(3)')).getText().then(function(text){
			console.log(text.red);
		});
	});
	
	it ("Error notifications 6", function(){
		join_page.enterLoginValue("me77777777");
		join_page.enterEmailValue("me77777777@gmail.com");
		join_page.enterPassValue("11111111111111111111111111111111111111111111111111111111111111111111111111");
		join_page.clickCreate();
		
		element(by.css('div.flash:nth-child(4)')).getText().then(function(text){
			console.log(text.red);
		});
		element(by.css('dl.form-group:nth-child(7) > dd:nth-child(3)')).getText().then(function(text){
			console.log(text.red);
		});
	});
	
	it ("Error notifications 7", function(){
		join_page.enterLoginValue("me77777777");
		join_page.enterEmailValue("me77777777@gmail.com");
		join_page.enterPassValue("11111111");
		join_page.clickCreate();
		
		element(by.css('div.flash:nth-child(4)')).getText().then(function(text){
			console.log(text.red);
		});
		element(by.css('dl.form-group:nth-child(7) > dd:nth-child(3)')).getText().then(function(text){
			console.log(text.red);
		});
	});
	
	it ("Error notifications 8", function(){
		join_page.enterLoginValue("me77777777");
		join_page.enterEmailValue("me77777777@gmail.com");
		join_page.enterPassValue("aaaaaaa");
		join_page.clickCreate();
		
		element(by.css('div.flash:nth-child(4)')).getText().then(function(text){
			console.log(text.red);
		});
		element(by.css('dl.form-group:nth-child(7) > dd:nth-child(3)')).getText().then(function(text){
			console.log(text.red);
		});
	});
	it ("Error notifications 9", function(){
		join_page.enterLoginValue("me77777777");
		join_page.enterEmailValue("me77777777@gmail.com");
		join_page.enterPassValue("&&&&&&&&");
		join_page.clickCreate();
		
		element(by.css('div.flash:nth-child(4)')).getText().then(function(text){
			console.log(text.red);
		});
		element(by.css('dl.form-group:nth-child(7) > dd:nth-child(3)')).getText().then(function(text){
			console.log(text.red);
		});
	});

});	
	
	
	
