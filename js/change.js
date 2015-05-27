$(document).ready(function () {
	"use strict";
	var answerStore = {
		answers: []
	};
	chrome.storage.sync.get(['user_fullName', 'answerStore'], function (obj) {
		if (obj) {
			console.log(obj);
			displayStored(obj);
		} else {
			console.log('got nada');
		}
	});
	var backgrounds = [{
			logo: "../icons/pepsi-logo.png",
			brand: "Pepsi",
			link: "https://pepsi.com",
			filename: "../img/Pepsi1.jpg",
			question: "Do you participate in loyalty rewards programs?"
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
			question: "Would you spend more than $200 for a concert ticket?"
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
			question: "Do you carry a bottle of Pepsi with you during the day?"
		}, {
			logo: "../icons/pepsi-logo.png",
			brand: "Pepsi",
			link: "https://pepsi.com",
			filename: "../img/pepsi-instagram-2.jpg",
			question: "Do you drink Pepsi every day?"
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
			question: "Have you ever bought MK resort wear?"
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
			question: "Have you ever bought a Michael Kors purse?"
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
		},

		{
			logo: "../icons/haaretz-logo.png",
			brand: "Vogue",
			link: "http://www.haaretz.com/news/middle-east/1.627858",
			filename: "../img/haaretz1.jpg",
			question: "Are you aware of the city of Ramadi in Iraq falling to ISIS?"
		},

		{
			logo: "../icons/mw-logo.png",
			brand: "MarketWatch",
			link: "http://www.marketwatch.com/story/buffett-raising-minimum-wage-would-almost-certainly-reduce-employment-2015-05-25",
			filename: "../img/marketwatch1.jpg",
			question: "Do you agree with Warren Buffet that \"raising the minimum wage would reduce employment\"?"
		},

		{
			logo: "../icons/wp-logo.png",
			brand: "The Washington Post",
			link: "http://www.washingtonpost.com/politics/courts_law/supreme-court-to-hear-texas-redistricting-case/2015/05/26/ab0c9c80-03b4-11e5-8bda-c7b4e9a8f7ac_story.html",
			filename: "../img/wpost1.jpg",
			question: "Do you think the system of federal districting is fair and accurate?"
		},

		{
			logo: "../icons/vox-logo.png",
			brand: "Vox",
			link: "http://www.vox.com/2015/5/26/8602613/how-to-save-the-world",
			filename: "../img/vox1.jpg",
			question: "Do you think the U.S. should spend more on foreign aid?"
		},

		{
			logo: "../icons/atlantic-logo.png",
			brand: "The Atlantic",
			link: "http://www.theatlantic.com/politics/archive/2015/05/cleveland-consent-decree/394085/",
			filename: "../img/atlantic1.jpg",
			question: "Do you think a new consent decree in Cleveland by police to use less force will be effective?"
		},

	];

	var clearBg = [];

	function logAnswer(storedAnswer) {
		answerStore.answers.push(storedAnswer);
		chrome.storage.sync.set({
				user_answers: answerStore
			},
			function () {});
	}

	function getRandomBg(array) {
		var num = Math.floor(Math.random() * (array.length));
		return array[num];
	}

	changeBg(backgrounds);

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

	listenForAnswer();

	function listenForAnswer() {
		var answerChoices = $('.btn-answers');
		var question = document.getElementById('questionHolder').innerText;
		answerChoices.unbind('click').bind('click', function () {
			var choice = this.innerText;
			recordAnswer(question, choice);
		});
	}

	var AnswerStorage = function (question, answer, userEmail) {
		this.email = userEmail;
		this.question = question;
		this.answer = answer;
	};

	function recordAnswer(ques, ans) {
		chrome.storage.sync.get('user_email', function (obj) {
			if (obj.user_email !== undefined) {
				var store = new AnswerStorage(ques, ans, obj.user_email);
				sendAnswer(store);
				$('#question').remove();
			}
		});

	}

	function sendAnswer(storedAnswer) {
		console.log(storedAnswer);
		// $.post('http://localhost:3000/api/answer', storedAnswer)
		$.ajax({
				url: 'http://localhost:3000/api/user',
				type: 'POST',
				data: storedAnswer,
			})
			.done(function () {
				console.log("success");
			})
			.fail(function () {
				console.log("error");
				logAnswer(storedAnswer);
			})
			.always(function () {
				console.log("complete");
			});
	}

	function removeQuestion() {
		$('#question').remove();
	}

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

		if (!user_info || !user_info.name.givenName || !user_info.image.url)
			return;
		chrome.storage.sync.set({
			user_img: user_info.image.url,
			user_fullName: user_info.displayName,
			user_firstName: user_info.name.givenName
		});

	}

	function displayStored(obj) {
		var loggedInDiv = document.getElementById('logged-div');
		var hello = document.getElementById('hello-p');
		hello.innerText = obj.user_fullName;
		loggedInDiv.classList.remove('hidden');
	}

});

// function createImgElem(user_info) {
// var imgDiv = document.getElementById('image-div');
// var imgElem = document.createElement('img');
// imgDiv.setAttribute('style', 'background:url(' + user_info.image.url +
// 	');background-color: rgba(255,255,255, 0.8);background-size: 100%; background-position: center;background-repeat: no-repeat;'
// );
// imgElem.src = user_info.image.url;
// imgDiv.appendChild(imgElem);
// fetchImageBytes(user_info);
// }

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
