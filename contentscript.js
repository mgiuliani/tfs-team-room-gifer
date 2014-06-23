if (window.location.href.indexOf('_rooms') > -1) {
	var processLink = function (link) {
		var url = $(link).attr('href');
		if (url.match(/\.(gif)$/) != null) {
			var original = $(link).clone().click(function (e) {
				processLink($(this)); // revert
				e.preventDefault();
			});
			
			$(link).replaceWith($('<div class="gifer-container"><img class="gifer-gif" src="' + url + '" /></div>')
				.click(function () {
					$(this).replaceWith(original);
				}));
		}
	};

	chrome.extension.sendRequest({method: "getInterval"}, function(response) {
	  var interval = response.interval;
	  setInterval(function () {
			$.each($(".message-content:not('.gifer-processed')", '.chat-box'), function (idx, element) {
				var urls = $('a', element);
				if (urls.length > 0) {
					// process images
					$.each(urls, function (idx, item) {
						processLink(item);
					});
				};
				$(element).addClass('gifer-processed');
			});
		}, interval);
	});
}