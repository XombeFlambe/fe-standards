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