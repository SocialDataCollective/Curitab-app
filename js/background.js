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
    user_email: USEREMAIL
  }, function () {
    message('email saved');
  });
}

chrome.runtime.onInstalled.addListener(function () {
  // chrome.identity.getAuthToken({
  // 'interactive': true
  // }, function (token) {
  chrome.identity.getProfileUserInfo(function (obj) {
    USEREMAIL = obj.email;
    saveUserEmail(USEREMAIL);
    $.post('http://localhost:3000/api/user', obj);
  });

  // });

});

chrome.runtime.onConnect.addListener(function () {

  chrome.storage.sync.get('user_email', function (obj) {
    console.log('from sync');
    console.log(obj);
    var userEmail = obj.email;
    USEREMAIL = userEmail;
  });

  // chrome.identity.getProfileUserInfo(function (obj) {
  //   USEREMAIL = obj.email;
  //   saveUserEmail(USEREMAIL);
  //   $.post('http://localhost:3000/api/user', obj);
  // });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

  chrome.tabs.query({
    active: true,
    currentWindow: true,
  }, function (tabs) {
    var urlData = tabs[0].url;
    $.post('http://localhost:3000/api/url', {
      email: USEREMAIL,
      url: urlData
    });

    chrome.tabs.sendMessage(tabs[0].id, {
      action: "urls",
      data: urlData,
      email: USEREMAIL
    }, function (response) {});
  });
});
