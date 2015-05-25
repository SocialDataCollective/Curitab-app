chrome.extension.onMessage.addListener(function (msg, sender, sendResponse) {

	if (msg.action == 'urls') {
		console.log("Message recieved!");
		console.log(msg);
	}

});

// chrome.runtime.onInstalled.addListener(function () {
//
// 	chrome.contextMenus.create({
// 		"id": "",
// 		"type": "",
// 		"contexts": ["selection"]
// 	});
//
// });
