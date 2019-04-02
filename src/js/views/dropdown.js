/* Dropdown Module ***************************************************************************/
$(document).ready(Dropdown = function() {
	var dropdown = '.js-dropdown';
	var trigger = '.js-dropdown-trigger';
	var content = '.js-dropdown-content';

	if (document.documentElement.clientWidth < 768) {
		$(dropdown).find(trigger).click(function() {
			$(this).next(content).slideToggle(200);
			$(this).find('i').toggleClass('isActive');
		});
	}
});

module.exports = Dropdown;