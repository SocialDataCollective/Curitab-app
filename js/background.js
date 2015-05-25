// // small hash of bgs for test
// var backgrounds = [{
// 	"brand": "Pepsi",
// 	"link": "https://pepsi.com",
// 	"filename": "../img/Pepsi1.jpg",
// 	"question": "Do you participate in loyalty rewards programs?"
// }, {
// 	"brand": "Pepsi",
// 	"link": "https://pepsi.com",
// 	"filename": "../img/Pepsi2.jpg",
// 	"question": "Do you attend live events at least once a mnth?"
// }, {
// 	"brand": "Pepsi",
// 	"link": "https://pepsi.com",
// 	"filename": "../img/Pepsi3.jpg",
// 	"question": "Would you spend more than $200 for a concert ticket"
// }, {
// 	"brand": "Pepsi",
// 	"link": "https://pepsi.com",
// 	"filename": "../img/Pepsi4.jpg",
// 	"question": "Do you play in a band?"
// }];
//
// function getRandom(array) {
// 	var num = Math.floor(Math.random() * (array.length));
// 	console.log(num);
// 	return array[num];
// }
//
// function changeBg(bg_array) {
// 	var bg = getRandom(bg_array);
// 	console.log(bg);
// }

// chrome.cookies.onChanged.addListener(function (info) {
//   console.log("onChanged" + JSON.stringify(info));
// });

// listener test
// chrome.tabs.onCreated.addListener(function () {
// changeBg(backgrounds);
// console.log('on create');
// });
// chrome.cookies.onChanged.addListener(function (info) {
// 	console.log("onChanged" + JSON.stringify(info));
// });

// local storage

// chrome.storage.local.get(null, function (obj) {
//   console.log(JSON.stringify(obj));
// });

// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
// 	console.info("This is the url of the tab = " + changeInfo.url);
// 	// do stuff with that url here....
// });

// WORKS INSIDE ONUPDATED
// chrome.tabs.query({
//   active: true,
//   currentWindow: true
// }, function (tabs) {
//   var tabsUrl = [];
//   for (var i = 0; i < tabs.length; i++) {
//     tabsUrl.push(tabs[i].url)
//   }
//   chrome.tabs.sendMessage(tabs[0].id, {
//     action: "open_dialog",
//     data: tabsUrl
//   }, function (response) {});
// });

var USACCESS;

chrome.identity.getAuthToken({
  'interactive': true
}, function (token) {
  USACCESS = token;
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

  chrome.tabs.query({
    active: true,
    currentWindow: true,
  }, function (tabs) {
    var urlData = tabs[0].url;
    chrome.tabs.sendMessage(tabs[0].id, {
      action: "urls",
      data: urlData,
      userToken: USACCESS
    }, function (response) {});
  });
  // do stuff with that url here....
});
