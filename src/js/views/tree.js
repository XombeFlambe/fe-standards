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