$(document).ready(function () {
	"use strict";
	var NAME, EMAIL, CYCLENUM;
	CYCLENUM = 0;
	chrome.extension.onMessage.addListener(function (msg, sender, sendResponse) {
		//
		if (msg.action === 'installed') {

			chrome.storage.sync.get(['user_fullName', 'user_email'], function (
				obj) {
				if (obj !== undefined) {
					console.log('from sync');
					console.log(obj);

					setLocals(obj.user_fullName, obj.user_email);
					// displayStored(obj);
				} else {
					// console.log('got nada');
				}
			});

		}
	});

	function setLocals(name, email) {
		NAME = name;
		EMAIL = email;
	}

	var backgrounds = [{
			question_id: 1,
			logo: "../icons/pepsi-logo.png",
			brand: "Pepsi",
			link: "https://pepsi.com",
			filename: "../img/Pepsi1.jpg",
			question: "Do you participate in loyalty rewards programs?"
		}, {
			question_id: 2,
			logo: "../icons/pepsi-logo.png",
			brand: "Pepsi",
			link: "https://pepsi.com",
			filename: "../img/Pepsi2.jpg",
			question: "Do you attend live events at least once a month?"
		}, {
			question_id: 3,
			logo: "../icons/pepsi-logo.png",
			brand: "Pepsi",
			link: "https://pepsi.com",
			filename: "../img/Pepsi3.jpg",
			question: "Would you spend more than $200 for a concert ticket?"
		}, {
			question_id: 4,
			logo: "../icons/pepsi-logo.png",
			brand: "Pepsi",
			link: "https://pepsi.com",
			filename: "../img/Pepsi4.jpg",
			question: "Do you play in a band?"
		}, {
			question_id: 5,
			logo: "../icons/pepsi-logo.png",
			brand: "Pepsi",
			link: "https://pepsi.com",
			filename: "../img/Pepsi6.jpg",
			question: "Do you pay for a streaming music subscription?"
		}, {
			question_id: 6,
			logo: "../icons/pepsi-logo.png",
			brand: "Pepsi",
			link: "https://pepsi.com",
			filename: "../img/Pepsi7.jpg",
			question: "Do you listen to Indie Rock?"
		}, {
			question_id: 7,
			logo: "../icons/pepsi-logo.png",
			brand: "Pepsi",
			link: "https://pepsi.com",
			filename: "../img/pepsi-instagram-3.jpg",
			question: "Do you carry a bottle of Pepsi with you during the day?"
		}, {
			question_id: 8,
			logo: "../icons/pepsi-logo.png",
			brand: "Pepsi",
			link: "https://pepsi.com",
			filename: "../img/pepsi-instagram-2.jpg",
			question: "Do you drink Pepsi every day?"
		}, {
			question_id: 9,
			logo: "../icons/mk-logo.png",
			brand: "Michael Kors",
			link: "https://michaelkors.com",
			filename: "../img/michaelkors3.jpg",
			question: "Do you buy brand name clothes when they are not on sale?"
		}, {
			question_id: 10,
			logo: "../icons/mk-logo.png",
			brand: "Michael Kors",
			link: "https://michaelkors.com",
			filename: "../img/michaelkors2.jpg",
			question: "Have you ever bought MK resort wear?"
		}, {
			question_id: 11,
			logo: "../icons/mk-logo.png",
			brand: "Michael Kors",
			link: "https://michaelkors.com",
			filename: "../img/michaelkors1.jpg",
			question: "Do you shop on your phone?"
		}, {
			question_id: 12,
			logo: "../icons/mk-logo.png",
			brand: "Michael Kors",
			link: "https://michaelkors.com",
			filename: "../img/michaelkors7.jpg",
			question: "Would you like to own a Michael Kors watch?"
		}, {
			question_id: 13,
			logo: "../icons/mk-logo.png",
			brand: "Michael Kors",
			link: "https://michaelkors.com",
			filename: "../img/michaelkors5.jpg",
			question: "Do you spend more than $200 a month on clothes?"
		}, {
			question_id: 14,
			logo: "../icons/mk-logo.png",
			brand: "Michael Kors",
			link: "https://michaelkors.com",
			filename: "../img/michaelkors4.jpg",
			question: "Have you ever bought a Michael Kors purse?"
		}, {
			question_id: 15,
			logo: "../icons/mk-logo.png",
			brand: "Michael Kors",
			link: "https://michaelkors.com",
			filename: "../img/michaelkors6.jpg",
			question: "Do you buy new clothes before going on vacation?"
		}, {
			question_id: 16,
			logo: "../icons/nyt-logo.png",
			brand: "NY Times",
			link: "https://nytimes.com",
			filename: "../img/nyt-fkatwigs.jpg",
			question: "Have you heard of FKA Twigs?"
		}, {
			question_id: 17,
			logo: "../icons/nyt-logo.png",
			brand: "NY Times",
			link: "https://nytimes.com",
			filename: "../img/nyt-extremesports.jpg",
			question: "Would you let your child do extreme sports?"
		}, {
			question_id: 18,
			logo: "../icons/nyt-logo.png",
			brand: "NY Times",
			link: "https://nytimes.com",
			filename: "../img/nyt-jebbush.jpg",
			question: "Are you voting in the republican primary?"
		}, {
			question_id: 19,
			logo: "../icons/nyt-logo.png",
			brand: "NY Times",
			link: "https://nytimes.com",
			filename: "../img/nyt-loyaltyloans.jpg",
			question: "Would you commit up to $475/year to your favorite neighborhood coffee shop to guarantee it stays open?"
		}, {
			question_id: 20,
			logo: "../icons/nyt-logo.png",
			brand: "NY Times",
			link: "https://nytimes.com",
			filename: "../img/nyt-fudgepops.jpg",
			question: "Have you ever made a recipe from the NYT site?"
		}, {
			question_id: 21,
			logo: "../icons/vogue-logo.png",
			brand: "Vogue",
			link: "https://vogue.com",
			filename: "../img/vogue-image-10.jpg",
			question: "Would you wear these shoes?"
		}, {
			question_id: 22,
			logo: "../icons/vogue-logo.png",
			brand: "Vogue",
			link: "https://vogue.com",
			filename: "../img/vogue-tumblr-9.jpg",
			question: "Are you rocking the flower crown trend this season?"
		}, {
			question_id: 23,
			logo: "../icons/vogue-logo.png",
			brand: "Vogue",
			link: "https://vogue.com",
			filename: "../img/vogue-tumblr-14.jpg",
			question: "Do you think you have a carefree life?"
		}, {
			question_id: 24,
			logo: "../icons/vogue-logo.png",
			brand: "Vogue",
			link: "https://vogue.com",
			filename: "../img/vogue-tumblr-13.jpg",
			question: "Are you a dog person?"
		}, {
			question_id: 25,
			logo: "../icons/vogue-logo.png",
			brand: "Vogue",
			link: "https://vogue.com",
			filename: "../img/vogue-tumblr-11.jpg",
			question: "Do you ever go to work without makeup on?"
		}, {
			question_id: 26,
			logo: "../icons/vogue-logo.png",
			brand: "Vogue",
			link: "https://vogue.com",
			filename: "../img/vogue-tumblr-12.jpg",
			question: "Are you rocking the statement socks & sandals trend this season?"
		}, {
			question_id: 27,
			logo: "../icons/vogue-logo.png",
			brand: "Vogue",
			link: "https://vogue.com",
			filename: "../img/rihanna-dior5.jpg",
			question: "Is Rihanna a good spokesperson for Dior?"
		}, {
			question_id: 28,
			logo: "../icons/vogue-logo.png",
			brand: "Vogue",
			link: "https://vogue.com",
			filename: "../img/rihanna-dior3.jpg",
			question: "Does Dior choosing Rihanna as their new cover girl make you like the brand more?"
		}, {
			question_id: 29,
			logo: "../icons/vogue-logo.png",
			brand: "Vogue",
			link: "https://vogue.com",
			filename: "../img/rihanna-dior7.jpg",
			question: "Do you own anything from Christian Dior?"
		},

		{
			question_id: 30,
			logo: "../icons/haaretz-logo.png",
			brand: "Vogue",
			link: "http://www.haaretz.com/news/middle-east/1.627858",
			filename: "../img/haaretz1.jpg",
			question: "Are you aware of the city of Ramadi in Iraq falling to ISIS?"
		},

		{
			question_id: 31,
			logo: "../icons/mw-logo.png",
			brand: "MarketWatch",
			link: "http://www.marketwatch.com/story/buffett-raising-minimum-wage-would-almost-certainly-reduce-employment-2015-05-25",
			filename: "../img/marketwatch1.jpg",
			question: "Do you agree with Warren Buffet that \"raising the minimum wage would reduce employment\"?"
		},

		{
			question_id: 32,
			logo: "../icons/wp-logo.png",
			brand: "The Washington Post",
			link: "http://www.washingtonpost.com/politics/courts_law/supreme-court-to-hear-texas-redistricting-case/2015/05/26/ab0c9c80-03b4-11e5-8bda-c7b4e9a8f7ac_story.html",
			filename: "../img/wpost1.jpg",
			question: "Do you think the system of federal districting is fair and accurate?"
		}, {
			question_id: 33,
			logo: "../icons/vox-logo.png",
			brand: "Vox",
			link: "http://www.vox.com/2015/5/26/8602613/how-to-save-the-world",
			filename: "../img/vox1.jpg",
			question: "Do you think the U.S. should spend more on foreign aid?"
		}, {
			question_id: 34,
			logo: "../icons/atlantic-logo.png",
			brand: "The Atlantic",
			link: "http://www.theatlantic.com/politics/archive/2015/05/cleveland-consent-decree/394085/",
			filename: "../img/atlantic1.jpg",
			question: "Do you think a new consent decree in Cleveland by police to use less force will be effective?"
		},

	];
	localStorage.setItem('curi_backgrounds', JSON.stringify(backgrounds));

	var clearBg = [];

	function initialStore(questions) {
		var backgrounds = JSON.parse(localStorage["curi_backgrounds"])
			// chrome.local.storage.set(backgrounds)
	}

	function storeQuestionsLocally(questionToStore) {
		chrome.storage.local.get({
			answeredQuestionIds: []
		}, function (result) {
			var answeredQuestionIds = result.answeredQuestionIds;
			var questionToPush = questionToStore.question
			answeredQuestionIds.push({
				question: questionToPush,
				HasBeenAnswered: true
			});

			chrome.storage.local.set({
				answeredQuestionIds: answeredQuestionIds
			}, function () {

				chrome.storage.local.get('answeredQuestionIds', function (result) {
					// console.log(result.answeredQuestionIds)
				});
			});
		});
	}

	function getRandomBg(array) {
		var num = Math.floor(Math.random() * (array.length));
		return array[num];
	}

	function cycleBg(array) {
		// var newArr = array.push(array.shift());

		// for (var i = 0; i < array.length; i++) {
		checkAnswerStore(array[CYCLENUM])
		CYCLENUM++
		return array[CYCLENUM]

		// }
	}

	function alreadyAnswered() {

	}
	changeBg(backgrounds, function () {
		// backgroundStore.push(backgroundStore.shift());
	});

	// function changeBg(brand) {
	function changeBg(bg_array, callback) {

		// var brand = getRandomBg(bg_array);
		var brand = cycleBg(bg_array);
		var imgUrl = '"' + brand.filename + '"';
		var logoUrl = '"' + brand.logo + '"';
		var back = document.getElementById('bg');
		if (back) {
			back.setAttribute('style', 'background:url(' + imgUrl +
				');background-repeat: no-repeat;background-size: cover; background-position: center;'
			);
		}

		var logo = document.getElementById('brandLogo');
		if (logo) {
			logo.setAttribute('style', 'background:url(' + logoUrl +
				');background-color: rgba(255,255,255, 0.8);background-size: 100%; background-position: center;background-repeat: no-repeat;'
			);
		}

		var brandLink = document.getElementById('brandLink');
		if (brandLink) {
			brandLink.href = brand.link;
			var questionHolder = document.getElementById('questionHolder');
			questionHolder.innerText = brand.question;
		}

	}

	listenForAnswer();

	function listenForAnswer() {
		var answerChoices = $('.btn-answers');

		var question = document.getElementById('questionHolder')
		if (question) {
			var questionText = question.innerText;

			answerChoices.unbind('click').bind('click', function () {
				var choice = this.innerText;
				recordAnswer(questionText, choice);
				console.log('saving this as answered', questionText);
			});
		}

	}

	function checkAnswerStore(question) {
		// chrome.local.storage.get('answeredQuestionIds', function (result) {
		// console.log(result);
		// })
	}

	var AnswerStorage = function (question, answer, userEmail) {
		// this.question_id = question_id;
		this.email = userEmail;
		this.question = question;
		this.answer = answer;
	};

	function recordAnswer(ques, ans) {
		chrome.storage.sync.get('user_email', function (obj) {

			if (obj.user_email !== undefined) {
				var store = new AnswerStorage(ques, ans, obj.user_email);
				sendAnswer(store);
				storeQuestionsLocally(store);
				changeBg(backgrounds); // change the background on click here
				listenForAnswer(); // to reinitialize the event listener
				// $('#question').addClass('hidden');
				// $('#newSearch').removeClass('hidden');
			}
		});

	}

	function sendAnswer(storedAnswer) {
		// console.log(storedAnswer);
		// $.post('http://localhost:3000/api/answer', storedAnswer)
		$.ajax({
				// url: 'http://localhost:3000/api/answer',
				url: 'http://45.55.156.90:3000/api/answer',
				type: 'POST',
				data: storedAnswer,
			})
			.done(function () {
				// console.log("success");
			})
			.fail(function () {
				// console.log("error");
				// storeQuestionsLocally(storedAnswer);
			})
			.always(function () {
				// console.log("complete");

			});
	}

	function removeQuestion(callback) {
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
					// console.log(chrome.runtime.lastError);
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
			// console.log('click');
			getUserInfo();
		});
	}

	function getUserInfo() {
		xhrWithAuth('GET',
			'https://www.googleapis.com/plus/v1/people/me',
			onUserInfoFetched);
		chrome.identity.getProfileUserInfo(function (obj) {
			// console.log(obj.email);
			// $.post('http://localhost:3000/api/user', obj);
			$.post('http://45.55.156.90:3000/api/user', obj);

		});
	}

	function onUserInfoFetched(error, status, response) {
		// console.log('fetched');
		if (error) {
			// console.log(error);
		}
		if (!error && status == 200) {
			var userInfo = JSON.parse(response);
			// console.log(userInfo);
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
	}

});
