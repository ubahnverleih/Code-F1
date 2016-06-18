chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		setInterval(function(){
			var xhr = new XMLHttpRequest();
			xhr.open('GET', window.location.href);
			xhr.send(null);
		}, 1000 * 60 * 5)
	}
	}, 10);
});