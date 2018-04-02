var complete_page = function(){
	
	this.getTitle = function(){
		return element(by.css('h2')).getText();
	};
	
};
module.exports = new complete_page();