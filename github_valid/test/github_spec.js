describe("To register successfully", function(){
	
	beforeEach(function(){
		browser.waitForAngularEnabled(false);
		browser.get("https://github.com/join");
	});
	
	var join_page = require ('../pages/join_page.js');
	
	var Chance = require('chance');
	var chance = new Chance();
	var random_user = chance.string({length: 6, pool: 'abcdefvwxyz0123456789'});
	var random_email = chance.email({domain: 'google.com'});
	var random_pass = chance.string({length: 10, pool: 'abcdefvwxyz0123456789'});
	
	it ("Should be able to register", function(){
		join_page.enterLoginValue(random_user);
		join_page.enterEmailValue(random_email);
		join_page.enterPassValue(random_pass);
		var welcome1_page = join_page.clickCreate();
		
		var free_plan = element(by.css('label.plan-choice:nth-child(1)'));
		browser.actions().mouseMove(free_plan).click().perform();
		expect(element(by.css('label.plan-choice:nth-child(1) > input:nth-child(1)')).isSelected()).toBeTruthy();
		var welcome2_page = welcome1_page.clickContinue();
		
		var click_dev = element(by.css('fieldset.question:nth-child(4) > div:nth-child(2) > div:nth-child(1) > label:nth-child(1)'));
		browser.actions().mouseMove(click_dev).click().perform();
		expect(element.all(by.css('#answers_99_choice_464')).isSelected()).toBeTruthy();
		
		var click_res = element(by.css('div.form-checkbox:nth-child(5) > label:nth-child(1)'));
		browser.actions().mouseMove(click_res).click().perform();
		expect(element.all(by.css('#answers_99_choice_467')).isSelected()).toBeTruthy();
		
		var complete_page = welcome2_page.clickSubmit();
		
		var getRegText = complete_page.getTitle();
		expect(getRegText).toBe('Learn Git and GitHub without any code!');
		
	});

});	
	
	
	
