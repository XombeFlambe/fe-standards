/* Accordion Module ***************************************************************************/
$(document).ready(Accordion = function() {
	var accordion = '.js-accordion';
	var item = '.js-accordion-item';
	var trigger = '.js-accordion-trigger';
	var content = '.js-accordion-content';
	var contentActive = '.js-accordion-content.isActive';
	var icon = 'i';
	var duration = 300;

	// Styles accordion item if you choose to start with an open accordion on load //
	$(accordion).find('.isActive').parent(item).find('i').addClass('isActive');
	$(accordion).find('.isActive').css("display", "block");

	// Click function logic //
	$(accordion).find(item).find(trigger).click(function(event) {

		$(accordion).find(contentActive).slideUp(duration);
		$(accordion).find(icon).removeClass('isActive');

		if ($(this).next(content).hasClass('isActive')) {
            $(content).removeClass('isActive');
            $(this).find(icon).removeClass('isActive');
        } else {
			$(content).removeClass('isActive');
			$(this).next(content).slideDown(duration);
			$(this).next(content).addClass('isActive');
			$(this).find(icon).addClass('isActive');
		}

	});
});

module.exports = Accordion;
