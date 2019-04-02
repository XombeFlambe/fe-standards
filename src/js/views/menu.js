/* Menu Module ***************************************************************************/
$(document).ready(Menu = function() {
	var menu = '.js-mainNav';
	var trigger = '.js-mainNav-trigger';
	var content = '.js-mainNav-content';

	$(menu).find(trigger).click(function() {
		$(this).next(content).slideToggle(300);
	});
});

module.exports = Menu;