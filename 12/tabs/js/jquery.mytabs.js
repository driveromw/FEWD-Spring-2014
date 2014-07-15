;(function ($, window) {
	// public methods
	var pub = {
		activate: function() {
			var $target = $(this); // all instances

			$target.each(function(){
				// apply to specific instace
				var $this = $(this);
				var data = $this.data("my-tabs");

				data.$links.removeClass("active").eq(index).addClass("active");
				data.$content.removeClass("active").eq(index).addClass("active");

			});
		}
	};

	//initinalization
	function _init() {
		var $target = $(this);

		$target.each(function() {
			var $this = $(this);
		
		
		var data = {
			$links: $this.find(".tab-nav .tab"),
			$content: $this.find(".tab-content .tab")
		};

			$this.on("click", ".tab-nav .tab", data, onTabClick).data("my_tabs", data);

		});
	}
	//handle tab clicks
	function onTabClick(event) {

		event.preventDefault();

		var data = event.data;
		var $target = $(event.target);
		var index = data.$links.index($target);

		data.$links.removeClass("active").eq(index).addClass("active");
		data.$content.removeClass("active").eq(index).addClass("active");

	}

	$.fn.myTabs = function(method) {
		if (pub[method]) {
			return pub[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {

			return _init.apply(this, arguments);
		}	
		return this;

	};
})(jQuery, this);

