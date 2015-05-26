$(document).ready(function () {
	"use strict";

	var backgrounds = [{
		logo: "../icons/pepsi-logo.png",
		brand: "Pepsi",
		link: "https://pepsi.com",
		filename: "../img/Pepsi1.jpg",
		question: "Do you participate in loyalty rewards programs?",

	}, {
		logo: "../icons/pepsi-logo.png",
		brand: "Pepsi",
		link: "https://pepsi.com",
		filename: "../img/Pepsi2.jpg",
		question: "Do you attend live events at least once a month?"
	}, {
		logo: "../icons/pepsi-logo.png",
		brand: "Pepsi",
		link: "https://pepsi.com",
		filename: "../img/Pepsi3.jpg",
		question: "Would you spend more than $200 for a concert ticket"
	}, {
		logo: "../icons/pepsi-logo.png",
		brand: "Pepsi",
		link: "https://pepsi.com",
		filename: "../img/Pepsi4.jpg",
		question: "Do you play in a band?"
	}, {
		logo: "../icons/pepsi-logo.png",
		brand: "Pepsi",
		link: "https://pepsi.com",
		filename: "../img/Pepsi6.jpg",
		question: "Do you pay for a streaming music subscription?"
	}, {
		logo: "../icons/pepsi-logo.png",
		brand: "Pepsi",
		link: "https://pepsi.com",
		filename: "../img/Pepsi7.jpg",
		question: "Do you listen to Indie Rock?"
	}, {
		logo: "../icons/pepsi-logo.png",
		brand: "Pepsi",
		link: "https://pepsi.com",
		filename: "../img/pepsi-instagram-3.jpg",
		question: "Do you listen to Indie Rock?"
	}, {
		logo: "../icons/pepsi-logo.png",
		brand: "Pepsi",
		link: "https://pepsi.com",
		filename: "../img/pepsi-instagram-2.jpg",
		question: "Do you drink pepsi every day?"
	}, {
		logo: "../icons/mk-logo.png",
		brand: "Michael Kors",
		link: "https://michaelkors.com",
		filename: "../img/michaelkors3.jpg",
		question: "Do you buy brand name clothes when they are not on sale?"
	}, {
		logo: "../icons/mk-logo.png",
		brand: "Michael Kors",
		link: "https://michaelkors.com",
		filename: "../img/michaelkors2.jpg",
		question: "Have you ever bought MIK resort wear?"
	}, {
		logo: "../icons/mk-logo.png",
		brand: "Michael Kors",
		link: "https://michaelkors.com",
		filename: "../img/michaelkors1.jpg",
		question: "Do you shop on your phone?"
	}, {
		logo: "../icons/mk-logo.png",
		brand: "Michael Kors",
		link: "https://michaelkors.com",
		filename: "../img/michaelkors7.jpg",
		question: "Would you like to own a Michael Kors watch?"
	}, {
		logo: "../icons/mk-logo.png",
		brand: "Michael Kors",
		link: "https://michaelkors.com",
		filename: "../img/michaelkors5.jpg",
		question: "Do you spend more than $200 a month on clothes?"
	}, {
		logo: "../icons/mk-logo.png",
		brand: "Michael Kors",
		link: "https://michaelkors.com",
		filename: "../img/michaelkors4.jpg",
		question: "Have you ever bought a michael kors purse"
	}, {
		logo: "../icons/mk-logo.png",
		brand: "Michael Kors",
		link: "https://michaelkors.com",
		filename: "../img/michaelkors6.jpg",
		question: "Do you buy new clothes before going on vacation?"
	}, {
		logo: "../icons/nyt-logo.png",
		brand: "NY Times",
		link: "https://nytimes.com",
		filename: "../img/nyt-fkatwigs.jpg",
		question: "Have you heard of FKA Twigs?"
	}, {
		logo: "../icons/nyt-logo.png",
		brand: "NY Times",
		link: "https://nytimes.com",
		filename: "../img/nyt-extremesports.jpg",
		question: "Would you let your child do extreme sports?"
	}, {
		logo: "../icons/nyt-logo.png",
		brand: "NY Times",
		link: "https://nytimes.com",
		filename: "../img/nyt-jebbush.jpg",
		question: "Are you voting in the republican primary?"
	}, {
		logo: "../icons/nyt-logo.png",
		brand: "NY Times",
		link: "https://nytimes.com",
		filename: "../img/nyt-loyaltyloans.jpg",
		question: "Would you commit up to $475/year to your favorite neighborhood coffee shop to guarantee it stays open?"
	}, {
		logo: "../icons/nyt-logo.png",
		brand: "NY Times",
		link: "https://nytimes.com",
		filename: "../img/nyt-fudgepops.jpg",
		question: "Have you ever made a recipe from the NYT site?"
	}, {
		logo: "../icons/vogue-logo.png",
		brand: "Vogue",
		link: "https://vogue.com",
		filename: "../img/vogue-image-10.jpg",
		question: "Would you wear these shoes?"
	}, {
		logo: "../icons/vogue-logo.png",
		brand: "Vogue",
		link: "https://vogue.com",
		filename: "../img/vogue-tumblr-9.jpg",
		question: "Are you rocking the flower crown trend this season?"
	}, {
		logo: "../icons/vogue-logo.png",
		brand: "Vogue",
		link: "https://vogue.com",
		filename: "../img/vogue-tumblr-14.jpg",
		question: "Do you think you have a carefree life?"
	}, {
		logo: "../icons/vogue-logo.png",
		brand: "Vogue",
		link: "https://vogue.com",
		filename: "../img/vogue-tumblr-13.jpg",
		question: "Are you a dog person?"
	}, {
		logo: "../icons/vogue-logo.png",
		brand: "Vogue",
		link: "https://vogue.com",
		filename: "../img/vogue-tumblr-11.jpg",
		question: "Do you ever go to work without makeup on?"
	}, {
		logo: "../icons/vogue-logo.png",
		brand: "Vogue",
		link: "https://vogue.com",
		filename: "../img/vogue-tumblr-12.jpg",
		question: "Are you rocking the statement socks & sandals trend this season?"
	}, {
		logo: "../icons/vogue-logo.png",
		brand: "Vogue",
		link: "https://vogue.com",
		filename: "../img/rihanna-dior5.jpg",
		question: "Is Rihanna a good spokesperson for Dior?"
	}, {
		logo: "../icons/vogue-logo.png",
		brand: "Vogue",
		link: "https://vogue.com",
		filename: "../img/rihanna-dior3.jpg",
		question: "Does Dior choosing Rihanna as their new cover girl make you like the brand more?"
	}, {
		logo: "../icons/vogue-logo.png",
		brand: "Vogue",
		link: "https://vogue.com",
		filename: "../img/rihanna-dior7.jpg",
		question: "Do you own anything from Christian Dior?"
	}];

	var clearBg = [];

	function getRandomBg(array) {
		var num = Math.floor(Math.random() * (array.length));
		return array[num];
	}

	function changeBg(bg_array) {

		var brand = getRandomBg(bg_array);
		var imgUrl = '"' + brand.filename + '"';
		var logoUrl = '"' + brand.logo + '"';
		var back = document.getElementById('bg');
		back.setAttribute('style', 'background:url(' + imgUrl +
			');background-repeat: no-repeat;background-size: cover; background-position: center;'
		);
		var logo = document.getElementById('brandLogo');
		logo.setAttribute('style', 'background:url(' + logoUrl +
			');background-color: rgba(255,255,255, 0.8);background-size: 100%; background-position: center;background-repeat: no-repeat;'
		);
		var brandLink = document.getElementById('brandLink');
		brandLink.href = brand.link;
		var questionHolder = document.getElementById('questionHolder');
		questionHolder.innerText = brand.question;
	}

	changeBg(backgrounds);

	function listenForAnswer() {
		var answerChoices = $('.btn-answers');
		var question = document.getElementById('questionHolder').innerText;

		answerChoices.unbind('click').bind('click', function () {
			var choice = this.innerText;
			recordAnswer(question, choice);
		});
	}

	listenForAnswer();

	var AnswerStorage = function (question, answer, userEmail) {
		this.user = userEmail;
		this.question = question;
		this.answer = answer;
	};

	function recordAnswer(ques, ans) {
		var userEmail = '';
		chrome.storage.sync.get('user_email', function (obj) {
			userEmail = obj.user_email;
			if (userEmail != '') {
				var store = new AnswerStorage(ques, ans, userEmail);
				sendAnswer(store);
				$('#question').remove();
			}
		});

	}

	function sendAnswer(storedAnswer) {
		$.post('http://localhost:3000/api/answer', storedAnswer);
	}

	function removeQuestion() {
		$('#question').remove();
	}

	// function getCookie(c_name) {
	// 	console.log('getting cookies');
	// 	console.log(c_name);
	// 	if (document.cookie.length > 0) {
	// 		c_start = document.cookie.indexOf(c_name + "=");
	// 		if (c_start != -1) {
	// 			c_start = c_start + c_name.length + 1;
	// 			c_end = document.cookie.indexOf(";", c_start);
	// 			if (c_end == -1) c_end = document.cookie.length;
	// 			return unescape(document.cookie.substring(c_start, c_end));
	// 		}
	// 	}
	// 	return "";
	// }

	function xhrWithAuth(method, url, callback) {
		var access_token;

		var retry = true;

		getToken();

		function getToken() {
			chrome.identity.getAuthToken({
				'interactive': true
			}, function (token) {
				if (chrome.runtime.lastError) {
					console.log(chrome.runtime.lastError);
					return;
				}
				access_token = token;
				requestStart();
			});
		}

		function requestStart() {
			var xhr = new XMLHttpRequest();
			xhr.open(method, url);
			xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
			xhr.onload = requestComplete;
			xhr.send();
		}

		function requestComplete() {
			if (this.status == 401 && retry) {
				retry = false;
				chrome.identity.removeCachedAuthToken({
						token: access_token
					},
					getToken);
			} else {
				callback(null, this.status, this.response);
			}
		}
	}

	listenForLogin();

	function listenForLogin() {
		$('#loginButton').unbind('click').bind('click', function () {
			console.log('click');
			getUserInfo();
		});
	}

	function getUserInfo() {
		xhrWithAuth('GET',
			'https://www.googleapis.com/plus/v1/people/me',
			onUserInfoFetched);
		chrome.identity.getProfileUserInfo(function (obj) {
			console.log(obj.email);
			$.post('http://localhost:3000/api/user', obj);
		});
	}

	function onUserInfoFetched(error, status, response) {
		console.log('fetched');
		if (error) {
			console.log(error);
		}
		if (!error && status == 200) {
			var userInfo = JSON.parse(response);
			console.log(userInfo);
			setUserInfoView(userInfo);
		}
	}

	function setUserInfoView(user_info) {
		var helloDiv = document.getElementById('hello-div');
		helloDiv.innerHTML = "Hello " + user_info.displayName;
		fetchImageBytes(user_info);
	}

	function fetchImageBytes(user_info) {
		if (!user_info || !user_info.image || !user_info.image.url) return;
		var xhr = new XMLHttpRequest();
		xhr.open('GET', user_info.image.url, true);
		xhr.responseType = 'blob';
		xhr.onload = onImageFetched;
		xhr.send();
	}

	function onImageFetched(e) {
		if (this.status != 200) return;
		var imgDiv = document.getElementById('image-div');
		var imgElem = document.createElement('img');
		var objUrl = window.URL.createObjectURL(this.response);
		imgElem.src = objUrl;
		imgElem.onload = function () {
				window.URL.revokeObjectURL(objUrl);
			}
			// user_info_div.insertAdjacentElement("afterbegin", imgElem);
		imgDiv.appendChild(imgElem);
	}

});

// function getCookies(domain, name, callback) {
// 		chrome.cookies.get({
// 			"url": domain,
// 			"name": name
// 		}, function (cookie) {
// 			if (callback) {
// 				callback(cookie.value);
// 			}
// 		});
// 	}
// getCookies("http://www.stackoverflow.com", "id", function (id) {
// 	alert(id);
// });

// function createBrandLink(name) {
// 	var div = document.querySelector('.brand-holder');
// 	var brandLink = document.createElement('a');
// 	brandLink.href = 'http://' + name + '.com';
// 	brandLink.innerText = name
// 	console.log(brandLink);
// 	div.appendChild(brandLink);
// }

// function createBrandLogo(name) {
// 	var div = document.querySelector('.brand-img-holder');
// 	var divBack = document.querySelector('.background-brand');
// 	var brandLogo = document.querySelector('.brand-logo');
// 	var imgLoc = 'images/' + name + '.png';
// 	brandLogo.src = imgLoc;
// 	// divBack.setAttribute("background-image", imgLoc);
// 	console.log(brandLogo);
// 	// div.appendChild(brandLogo)
// 	console.log(div);
// }
// 	createBrandLink(brandName);
// 	createBrandLogo(brandName);

// 	console.log(brandName);
// }
