/*
 * jQuery.VerticalCenter.js
 * jQuery Vertical Centering Plugin
 * Basically used as personal reference
 * 
 * Author: Sean Quinn (esqew)
 * Website: http://www.esqew.com
 *
 * Based off of code originally posted by Zack Katz at http://www.seodenver.com/
 * Original blog post: http://www.seodenver.com/simple-vertical-align-plugin-for-jquery/
 *
 * Revisions:
 *		1.0		- Initial commit
 * 
 * References:
 *		http://www.learningjquery.com/2007/10/a-plugin-development-pattern
 *		http://docs.jquery.com/Plugins/Authoring
 *
 * Usage:
 *		$("p").vAlign();
 *
 */
(function($) {

    $.fn.vAlign = function() {
		// iterate over matched elements
        return this.each(function() {
       		return this.each(function(i){
				var ah = $(this).height();
				var ph = $(this).parent().height();
				var mh = Math.ceil((ph-ah) / 2);
				$(this).css('margin-top', mh);
			});
        });
    };

})(jQuery);