/* Drawer Module ***************************************************************************/
$(document).ready(Drawer = function() {
	var drawer = '.js-drawer';
	var trigger = '.js-drawer-trigger';
	var content = '.js-drawer-content';

	$(drawer).find(trigger).click(function() {
		$(this).next(content).slideToggle(200);
		$(this).find('i').toggleClass('isActive');
		return false;
	});
});

module.exports = Drawer;