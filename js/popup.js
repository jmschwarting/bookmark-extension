console.log("Jeff rocks!");

$(document).ready(function() {

	$("#demoTab").click(function() {
		//Open a new tab: https://developer.chrome.com/extensions/tabs#method-create
		chrome.tabs.create({
			url: "http://prefundia.com"
		});
	});

});
