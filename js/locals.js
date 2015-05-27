// var USEREMAIL;
chrome.extension.onMessage.addListener(function (msg, sender, sendResponse) {
  //
  if (msg.action === 'urls') {
    chrome.storage.sync.get('user_email', function (obj) {
      console.log('from sync');
      console.log(obj);
    });
  }

  // 	if (msg.action == 'urls') {
  // 		// console.log("Message recieved!");
  // 		// console.log(msg);
  // 		USEREMAIL = msg.email;
  // 	}
  //
  // 	if (msg.action == 'email saved') {
  // 		chrome.storage.sync.get('user_email', function (obj) {
  // 			USEREMAIL = obj.email;
  // 			// console.log('from sync');
  // 			// console.log(obj);
  // 		})
  // 	}
})

// // CONTEXT MENUS
// chrome.runtime.onInstalled.addListener(function () {
//
// 	chrome.contextMenus.create({
// 		"id": "",
// 		"type": "",
// 		"contexts": ["selection"]
// 	});
//
// });
