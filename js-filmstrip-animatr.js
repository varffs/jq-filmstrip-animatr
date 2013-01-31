/* filmstrip-animatr 0.9 @author Patrick Best */
(function($) {
	var spinin;
	function animate(opts, t) {
		if (opts.bgpos === opts.width * opts.frames) {
			opts.bgpos = 0;
			t.css('background-position', opts.bgpos + 'px');
		} else {
			opts.bgpos = opts.bgpos + opts.width;
			t.css('background-position', opts.bgpos + 'px');
		}
	}
	$.fn.animatr = function(arg, options) {		
		if (arg == 'stop') {
			clearInterval(spinin);
			spinin = 0;
		} else if (arg == 'play' || arg === undefined) {
		var t = this;
		var opts = $.extend({}, $.fn.animatr.defaults, options);
		var frames = t.data('frames');
		var bgpos = parseInt(t.css('background-position'),10);
		opts = $.extend({
			'frames': frames,
			'bgpos': bgpos
		}, opts);
		spinin = window.setInterval(function() {animate(opts, t);}, 1000 / opts.fps);
		}
	};
	$.fn.animatr.defaults = {
		fps: 7,
		width: 290
	};
})(jQuery);