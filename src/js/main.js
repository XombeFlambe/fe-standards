(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Drawer = require('./views/drawer.js');
var Menu = require('./views/menu.js');
var Modal = require('./views/modal.js');
var Accordion = require('./views/accordion.js');
var Dropdown = require('./views/dropdown.js');
var Tooltip = require('./views/tooltip.js');
var Topside = require('./views/topside.js');
var EaseScroll = require('./views/easeScroll.js');
var Tree = require('./views/tree.js');
},{"./views/accordion.js":2,"./views/drawer.js":3,"./views/dropdown.js":4,"./views/easeScroll.js":5,"./views/menu.js":6,"./views/modal.js":7,"./views/tooltip.js":8,"./views/topside.js":9,"./views/tree.js":10}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
/* Ease Scroll Function ***************************************************************************/
$(document).ready(EaseScroll = function() {
	$('a.js-nav').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
				}, 500);
				return false;
			}
		}
	});
});

module.exports = EaseScroll;
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
/* Back to Top Button ***************************************************************************/
$(document).ready( Topside = function() {
	var topside = '.js-topside';
    var offset = 250;
    var duration = 300;

    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $(topside).fadeIn(duration);
        } else {
            $(topside).fadeOut(duration);
        }
    });
 
    $(topside).click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
});

module.exports = Topside;
},{}],10:[function(require,module,exports){
/* Tree Module *****************************************************************************/
$(document).ready(Tree = function() {
	var tree = '.js-tree';
	var treeTrigger = '.tree-trigger';
	var treeContent = '.tree-content';
	var treeAction = '.tree-action';
	var treeList = '.tree-list';
	var treeFolder = '.tree-folder';
	var treeShowAll = '.tree-action-showAll';
	var treeHideAll = '.tree-action-hideAll';
	var duration = 200;

	$(tree).find(treeTrigger).click(function(){
		$(this).find('.fa-plus-square').toggleClass('fa-minus-square');
		$(this).find('.fa-folder').toggleClass('fa-folder-open');

		$(this).parent(treeFolder).next(treeContent).slideToggle(duration);
	});

	$(tree).find(treeShowAll).click(function(){
		$(this).parent(treeAction).parent(tree).find(treeContent).slideDown(duration);

		$(this).parent(treeAction).next(treeList).find('.fa-plus-square').addClass('fa-minus-square');
		$(this).parent(treeAction).next(treeList).find('.fa-folder').addClass('fa-folder-open');
	});

	$(tree).find(treeHideAll).click(function(){
		$(this).parent(treeAction).parent(tree).find(treeContent).slideUp(duration);

		$(this).parent(treeAction).next(treeList).find('.fa-plus-square').removeClass('fa-minus-square');
		$(this).parent(treeAction).next(treeList).find('.fa-folder').removeClass('fa-folder-open');
	});
});

module.exports = Tree;
},{}]},{},[1])