console.log("Jeff rocks!");


//Functions

function demoTab() {
	openTab("http://prefundia.com");
}

function openTab(tabUrl) {
	//Open a new tab: https://developer.chrome.com/extensions/tabs#method-create
	chrome.tabs.create({
		url: tabUrl
	});
}

function printBookmarks(bookmarksBar) {
	for (var i = 0; i < bookmarksBar.children.length; i++) {
		var child = bookmarksBar.children[i];

		var bookmarkParagraphNode = $("<p></p>");

		if (child.url) {
			//It's a bookmark!
			var bookmarkLinkNode = $("<a></a>")
				.attr("href", child.url)
				.text(child.title)
				.click(function (event) {
					event.preventDefault();
					openTab($(this).attr("href"));
				});
			bookmarkParagraphNode.append(bookmarkLinkNode);
			$("#bookmarks").append(bookmarkParagraphNode);
		} else {
			//It's a folder!
			bookmarkParagraphNode.text("Folder: " + child.title);
			$("#bookmarks").append(bookmarkParagraphNode);
		}
	}
}

//Initialize everything!

$(document).ready(function() {

	$("#demoTab").click(function() {
		demoTab();
	});

	chrome.bookmarks.getTree(function (allBookmarks) {

		var bookmarksBar = allBookmarks[0].children[0];
		console.log("Got bookmarks!", bookmarksBar);

		printBookmarks(bookmarksBar);
	});

});
