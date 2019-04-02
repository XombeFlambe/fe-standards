/* Modal Module ***************************************************************************/
$(document).ready(Modal = function() {
	var modalArc = '.js-modalArc';
	var trigger = '.js-modalTrigger';
	var modal = '.js-modal';
	var content = '.js-modal-content';
	var close = '.js-modal-close';
	var maskClose = '.js-modal-mask_close';
	var duration = 300;

	$(modalArc).find(trigger).click(function() {
		$(this).parents(modalArc).find(modal).fadeIn(duration);
	});
	$(modal).find(close).click(function() {
		$(this).parent(content).parent(modal).fadeOut(duration);
	});
	$(maskClose).click(function() {
		$(this).parent(modal).fadeOut(duration);
	});
});

module.exports = Modal;