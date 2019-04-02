/* Tooltip Module ***************************************************************************/
$(document).ready(Tooltip = function() {
	var bubble = '.js-bubble';
	var trigger = '.js-bubble-trigger';
	var content = '.js-bubble-content';

	$(bubble).find(trigger).click(function() {
		$(this).next(content).fadeToggle(200);
	});
	$(bubble).find(content).click(function() {
		$(this).fadeToggle(200);
	});
});

module.exports = Tooltip;