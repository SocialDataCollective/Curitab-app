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

var USEREMAIL;

function saveUserEmail(email) {
  USEREMAIL = email;
  if (!USEREMAIL) {
    return;
  }
  chrome.storage.sync.set({
    user_fullName: '',
    user_email: USEREMAIL
  }, function () {
    message('email saved');
  });
}

// var setLocalVars = function () {
//   chrome.storage.sync.set({
//     user_email: null,
//     user_fullName: null
//   }, function () {})
// };
// var getLocalVars = function () {
//   chrome.storage.sync.get({
//     user_email: null,
//     user_fullName: null
//   }, function () {})
// };

chrome.runtime.onInstalled.addListener(function () {
  chrome.identity.getAuthToken({
    'interactive': true
  }, function (token) {
    chrome.identity.getProfileUserInfo(function (obj) {

      USEREMAIL = obj.email;
      saveUserEmail(USEREMAIL);

    });
    chrome.tabs.query({
      active: true,
      currentWindow: true,
    }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "installed"
      });

    });
    $.post('http://45.55.156.90:3000/api/user', obj);
  });
});

chrome.runtime.onConnect.addListener(function () {
  chrome.storage.sync.get('user_email', function (obj) {
    if (obj !== undefined) {
      var userEmail = obj.email;
      USEREMAIL = userEmail;
    }
  })
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  chrome.tabs.query({
    active: true,
    currentWindow: true,
  }, function (tabs) {
    var urlData = tabs[0].url;
    $.post('http://45.55.156.90:3000/api/url', {
      email: USEREMAIL,
      url: urlData
    });
  });
});
