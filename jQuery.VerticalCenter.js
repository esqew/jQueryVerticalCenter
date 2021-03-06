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
 *		1.0.1	- Removed extra code initially inserted by accident, added instructions for supporting dynamic window resizes
 * 
 * References:
 *		http://www.learningjquery.com/2007/10/a-plugin-development-pattern
 *		http://docs.jquery.com/Plugins/Authoring
 *
 * Usage:
 *		$("p").vAlign();
 *
 * Dynamic Resizing Usage (buggy, if you know how to fix please fork & request a pull):
 *		$(window).resize(function() {
 *			$("p").vAlign();
 * 		}
 * Demo:
 * 	http://www.esqew.com/seecrit
 *
 */
(function($) {

    $.fn.vAlign = function() {
		// iterate over matched elements
   		return this.each(function(i){
			var ah = $(this).height();
			var ph = $(this).parent().height();
			var mh = Math.ceil((ph-ah) / 2);
			$(this).css('margin-top', mh);
		});
    };

})(jQuery);