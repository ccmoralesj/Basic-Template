/**
 * Created by ccmoralesj on 20/04/16.
 */

(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'slow');
        return this;
    }
})(jQuery);

function navGoTo(element){
    "use strict";
    $(element).goTo();
}