// jQuery(document).ready(function ($) {
// 	// $("[data-fancybox]").fancybox({
// 	// 	touch: false,
// 	// });

// 	$(".nice_Select").niceSelect();
// 	if ($(".blog-news .row, .reviews__row").length) {
// 		$(".blog-news .row, .reviews__row").masonry({
// 			itemSelector: ".blog-news .row .col, .reviews__col",
// 		});
// 	}

// 	$(window).scroll(function () {
// 		if ($(this).scrollTop() > 50) {
// 			$(".scrolltop:hidden").stop(true, true).fadeIn();
// 		} else {
// 			$(".scrolltop").stop(true, true).fadeOut();
// 		}
// 	});

// 	$(function () {
// 		$(".muve-top").click(function () {
// 			var top = $(".thetop").offset().top;
// 			$("html, body").animate(
// 				{
// 					scrollTop: top,
// 				},
// 				3000,
// 				"easeOutExpo",
// 			);
// 			return false;
// 		});
// 	});

// 	if ($(".post-item img").length || $(".seo-block img").length) {
// 		$(".post-item img, .seo-block img").each(function () {
// 			var imgThis = $(this);
// 			if (!imgThis.hasClass("nofancy")) {
// 				if (imgThis.closest("a")) {
// 					imgThis.closest("a").attr({
// 						"data-fancybox": "content-group",
// 						//'href': $(this).attr('src'),
// 					});
// 				}
// 			}
// 		});
// 	}

// 	if ($(".post-item iframe").length) {
// 		$(".post-item iframe").closest("p").addClass("iframe-box");
// 	}

// 	// var nav = $('.language-title');
// 	// var selection = $('.language-list');
// 	// var select = selection.find('li');

// 	// nav.click(function (event) {
// 	// 	if (nav.hasClass('active')) {
// 	// 		nav.removeClass('active');
// 	// 		selection.stop().slideUp(200);
// 	// 	} else {
// 	// 		nav.addClass('active');
// 	// 		selection.stop().slideDown(200);
// 	// 	}
// 	// 	event.preventDefault();
// 	// });

// 	// select.click(function (event) {
// 	// 	select.removeClass('active');
// 	// 	$(this).addClass('active');
// 	// 	var $lang = $(this).text();
// 	// 	nav.text($lang);
// 	// 	nav.trigger('click');
// 	// });

// 	$(".js-visual-slider").slick({
// 		prevArrow:
// 			'<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
// 		nextArrow:
// 			'<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
// 		dots: true,
// 	});

// 	$(".js-happy-slider").slick({
// 		slidesToShow: 3,
// 		prevArrow:
// 			'<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
// 		nextArrow:
// 			'<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
// 		dots: false,
// 		responsive: [
// 			{
// 				breakpoint: 1023,
// 				settings: {
// 					slidesToShow: 2,
// 					prevArrow:
// 						'<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
// 					nextArrow:
// 						'<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
// 					dots: true,
// 				},
// 			},
// 			{
// 				breakpoint: 560,
// 				settings: {
// 					slidesToShow: 1,
// 					prevArrow:
// 						'<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
// 					nextArrow:
// 						'<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
// 					dots: true,
// 				},
// 			},
// 		],
// 	});

// 	$(".js-advantages-slider").slick({
// 		slidesToShow: 4,
// 		prevArrow:
// 			'<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
// 		nextArrow:
// 			'<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
// 		dots: false,
// 		responsive: [
// 			{
// 				breakpoint: 1279,
// 				settings: {
// 					slidesToShow: 3,
// 					prevArrow:
// 						'<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
// 					nextArrow:
// 						'<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
// 					dots: false,
// 				},
// 			},
// 			{
// 				breakpoint: 1023,
// 				settings: {
// 					slidesToShow: 2,
// 					prevArrow:
// 						'<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
// 					nextArrow:
// 						'<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
// 					dots: false,
// 				},
// 			},
// 			{
// 				breakpoint: 560,
// 				settings: {
// 					slidesToShow: 1,
// 					prevArrow:
// 						'<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
// 					nextArrow:
// 						'<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
// 					dots: false,
// 				},
// 			},
// 		],
// 	});

// 	$(".js-team-slider").slick({
// 		slidesToShow: 3,
// 		prevArrow:
// 			'<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
// 		nextArrow:
// 			'<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
// 		dots: false,
// 		responsive: [
// 			{
// 				breakpoint: 1023,
// 				settings: {
// 					slidesToShow: 2,
// 					prevArrow:
// 						'<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
// 					nextArrow:
// 						'<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
// 					dots: false,
// 				},
// 			},
// 			{
// 				breakpoint: 768,
// 				settings: {
// 					slidesToShow: 1,
// 					prevArrow:
// 						'<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
// 					nextArrow:
// 						'<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
// 					dots: false,
// 				},
// 			},
// 		],
// 	});

// 	$(".js-news-slider").slick({
// 		slidesToShow: 1,
// 		prevArrow:
// 			'<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
// 		nextArrow:
// 			'<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
// 		vertical: true,
// 		verticalSwiping: true,
// 		dots: true,
// 	});

// 	let viewportWidth = $(window).width();

// 	if (viewportWidth < 767) {
// 		$(".js-news-slider").slick("unslick");
// 	}

// 	let swiper = new Swiper(".js-ladies-slider", {
// 		slidesPerView: "auto",
// 		spaceBetween: 0,
// 		centeredSlides: true,
// 		preventClicks: true,
// 		loop: true,
// 		navigation: {
// 			nextEl: ".swiper-button-next",
// 			prevEl: ".swiper-button-prev",
// 		},
// 		pagination: {
// 			el: ".swiper-pagination",
// 			type: "fraction",
// 		},
// 		on: {
// 			init: function () {
// 				$(".swiper-slide").addClass("changed");
// 			},
// 			slideChangeTransitionStart: function () {
// 				$(".swiper-slide").addClass("changing");
// 				$(".swiper-slide").removeClass("changed");
// 			},
// 			slideChangeTransitionEnd: function () {
// 				$(".swiper-slide").removeClass("changing");
// 				$(".swiper-slide").addClass("changed");
// 			},
// 		},
// 	});

// 	const currentTime = () => {
// 		const elements = document.querySelectorAll(".js-tracker");
// 		// console.log(el);
// 		let date = new Date();
// 		let hh = date.getHours();
// 		let mm = date.getMinutes();
// 		let ss = date.getSeconds();

// 		hh = hh < 10 ? `0${hh}` : hh;
// 		mm = mm < 10 ? `0${mm}` : mm;

// 		let time = `${hh}<span>:</span>${mm}<span class="blink">:</span>${ss}`;

// 		for (let elem of elements) {
// 			elem.innerHTML = time;
// 		}
// 	};

// 	const readMoreOpen = () => {
// 		$(".js-more-open").on("click", function () {
// 			// $(this).closest('.our-happy__blockquote').children('.text-holder').toggleClass( "open");
// 			// $(this).text('Read less');
// 			if (
// 				$(this)
// 					.closest(".our-happy__blockquote")
// 					.children(".text-holder")
// 					.hasClass("open")
// 			) {
// 				$(this)
// 					.closest(".our-happy__blockquote")
// 					.children(".text-holder")
// 					.removeClass("open");
// 				$(this).text("Read more");
// 			} else {
// 				$(this)
// 					.closest(".our-happy__blockquote")
// 					.children(".text-holder")
// 					.addClass("open");
// 				$(this).text("Less more");
// 			}
// 		});
// 	};

// 	const loginOpener = () => {
// 		$(".js-login-opener").on("click", function () {
// 			$(this).toggleClass("active");
// 			$(".js-user-info-list").toggleClass("active");
// 		});

// 		$(document).on("click", function (e) {
// 			const $target = $(e.target);
// 			if (
// 				!$target.closest(".js-login-opener").length &&
// 				!$target.closest(".js-user-info-list").length
// 			) {
// 				$(".js-login-opener").removeClass("active");
// 				$(".js-user-info-list").removeClass("active");
// 			}
// 		});
// 	};

// 	if ($("#copyBtn").length) {
// 		const copyBtn = document.getElementById("copyBtn");
// 		let tooltipTimeout;

// 		copyBtn.addEventListener("click", () => {
// 			const url = window.location.href;
// 			navigator.clipboard.writeText(url).then(() => {
// 				copyBtn.setAttribute("data-tooltip", "Copied to clipboard");
// 				clearTimeout(tooltipTimeout);
// 				tooltipTimeout = setTimeout(() => {
// 					copyBtn.removeAttribute("data-tooltip");
// 				}, 2000);
// 			});
// 		});
// 	}
// 	const datePicker = () => {
// 		$(".date-picker").datepicker({
// 			changeMonth: true,
// 			changeYear: true,
// 		});
// 	};

// 	const mask = () => {
// 		$(".phone").inputmask({ mask: "(999) 999-99-99" });
// 	};

// 	const customSelect = () => {
// 		$(".custom-select").selectmenu();
// 		$(".custom-select").on("selectmenuselect", function (event, ui) {
// 			if (ui.item.value == "answer") {
// 				$(".js-your-answer").addClass("active");
// 			}
// 		});
// 	};

// 	const selectGifts = () => {
// 		$(".js-ladies-select").selectmenu({
// 			change: function (event, ui) {
// 				$(this)
// 					.closest(".select-holder")
// 					.children(".btn")
// 					.removeAttr("disabled");
// 			},
// 		});
// 	};

// 	const quantity = () => {
// 		$(".plus").on("click", function () {
// 			let input = $(this).closest(".quantity-holder").children(".quantity");
// 			let price = $(this).closest("tr").children("td").children(".js-price");
// 			let priceAll = $(this)
// 				.closest("tr")
// 				.children("td")
// 				.children(".js-price-all");
// 			let priceNumb = parseInt(price.text());
// 			let priceAllNumb = parseInt(priceAll.text());
// 			let inputValue = input.val();
// 			let minValue = parseInt(input.attr("min"));
// 			let maxValue = parseInt(input.attr("max"));

// 			if (inputValue < maxValue) {
// 				input.val(parseInt(inputValue) + 1);
// 				console.log(1234);
// 				priceAll.text(priceAllNumb + priceNumb);
// 			}
// 		});

// 		$(".minus").on("click", function () {
// 			let input = $(this).closest(".quantity-holder").children(".quantity");
// 			let price = $(this).closest("tr").children("td").children(".js-price");
// 			let priceAll = $(this)
// 				.closest("tr")
// 				.children("td")
// 				.children(".js-price-all");
// 			let priceNumb = parseInt(price.text());
// 			let priceAllNumb = parseInt(priceAll.text());
// 			let inputValue = input.val();
// 			let minValue = parseInt(input.attr("min"));
// 			let maxValue = parseInt(input.attr("max"));

// 			if (inputValue >= minValue) {
// 				input.val(parseInt(inputValue) - 1);
// 				priceAll.text(priceAllNumb - priceNumb);
// 			}
// 		});
// 	};

// 	const ladiesFilter = () => {
// 		if ($(".js-filter-opener")) {
// 			$(".js-filter-opener").on("click", () => {
// 				if ($(".js-filter-opener").hasClass("active")) {
// 					$(".js-filter-opener").removeClass("active");
// 					$(".js-filter").slideUp();
// 				} else {
// 					$(".js-filter-opener").addClass("active");
// 					$(".js-filter").slideDown();
// 				}
// 			});
// 		}
// 	};

// 	const openSelect = () => {
// 		const selectOpeners = document.querySelectorAll(".filter-select-opener");
// 		const selectsFilter = document.querySelectorAll(".js-select-filter");
// 		const filterList = document.querySelector(".js-select-filters");
// 		const removeAll = document.querySelector(".js-remove-all");
// 		const addFavorites = document.querySelectorAll(".add-to-favorites");

// 		if (selectOpeners.length > 0) {
// 			for (let selectOpener of selectOpeners) {
// 				selectOpener.addEventListener("click", (e) => {
// 					const opener = e.target;
// 					const list = opener.nextElementSibling;
// 					list.classList.toggle("active");
// 					document.addEventListener("click", function (e) {
// 						const target = e.target;
// 						const listTarget = target == list || list.contains(target);

// 						if (!listTarget && target !== opener) {
// 							list.classList.remove("active");
// 						}
// 					});
// 				});
// 			}

// 			for (let selectFilter of selectsFilter) {
// 				selectFilter.addEventListener("click", (e) => {
// 					const selectText = e.target.innerText;
// 					const checkFilter = e.target.previousElementSibling;
// 					const filterTitle =
// 						e.target.closest(".input-holder").children[0].innerText;

// 					if (!checkFilter.checked) {
// 						filterList.insertAdjacentHTML(
// 							"afterbegin",
// 							`<li id="${checkFilter.id}-check" data-id="${checkFilter.id}" class="choise-item"><span>${filterTitle}:</span> <span>${selectText}</span><span class="remove-choise"></span></li>`,
// 						);

// 						const removeChoise = document.querySelectorAll(".remove-choise");

// 						if (removeChoise.length > 0) {
// 							removeAll.classList.add("active");

// 							for (let remove of removeChoise) {
// 								remove.addEventListener("click", (e) => {
// 									const item = e.target.closest(".choise-item");
// 									const checkbox = document.getElementById(
// 										item.getAttribute("data-id"),
// 									);

// 									checkbox.checked = false;
// 									item.remove();
// 									if (removeChoise.length <= 1) {
// 										removeAll.classList.remove("active");
// 									}
// 								});
// 							}
// 						}
// 					} else {
// 						document.querySelector(`#${checkFilter.id}-check`).remove();
// 					}
// 				});
// 			}

// 			removeAll.addEventListener("click", (e) => {
// 				const items = document.querySelectorAll(".choise-item");
// 				for (let item of items) {
// 					const checkbox = document.getElementById(
// 						item.getAttribute("data-id"),
// 					);

// 					checkbox.checked = false;
// 					item.remove();
// 					removeAll.classList.remove("active");
// 				}
// 			});

// 			for (let add of addFavorites) {
// 				add.addEventListener("click", (e) => {
// 					add.classList.toggle("active");
// 				});
// 			}
// 		}
// 	};

// 	// $("#first-step").validate();

// 	const steps = () => {
// 		const stepsBtn = document.querySelectorAll(".js-step-btn");
// 		const stepsModal = document.getElementById("js-modal-step");

// 		for (let stepBtn of stepsBtn) {
// 			stepBtn.addEventListener("click", (e) => {
// 				// let event = e;
// 				e.preventDefault();

// 				const stepBlock = e.target.closest(".js-steps-block");
// 				const nextStep = stepBlock.nextElementSibling;
// 				const validArr = [];
// 				let next = false;

// 				const stepsFormInputs = e.target
// 					.closest(".js-steps-form")
// 					.querySelectorAll(".input-required");

// 				for (let el of stepsFormInputs) {
// 					if (el.type == "text") {
// 						if (el.value.length == 0) {
// 							el.classList.add("error");
// 						} else {
// 							el.classList.remove("error");
// 							el.setAttribute("data-valid", "valid");
// 							validArr.push(el);
// 						}

// 						el.addEventListener("change", (e) => {
// 							if (e.target.value) {
// 								el.classList.remove("error");
// 								el.setAttribute("data-valid", "valid");
// 								validArr.push(el);
// 							}
// 						});
// 					}
// 				}

// 				if (stepsFormInputs.length === validArr.length) {
// 					stepsModal.classList.add("active");
// 					document
// 						.querySelector(".js-modal-yes")
// 						.addEventListener("click", () => {
// 							nextStep.querySelector(".js-step").classList.add("active");
// 							for (let el of stepsFormInputs) {
// 								el.classList.add("disabled");
// 							}
// 							stepsModal.classList.remove("active");
// 						});
// 					document
// 						.querySelector(".js-modal-no")
// 						.addEventListener("click", () => {
// 							stepsModal.classList.remove("active");
// 						});
// 				}
// 				if (next) {
// 				}
// 			});
// 		}
// 		// $('.js-step-btn').on('click', function () {
// 		// 	$("#first-step").validate();
// 		// })
// 		// $(".js-steps-form").validate();
// 	};

// 	const convertWeight = () => {
// 		// document.querySelector('.convert-weight').addEventListener('click', () => {
// 		// 	let results = document.querySelector(".results");
// 		// 	let weight = document.querySelector(".input-weight").value;
// 		// 	let option = document.querySelector(".weight-select").value;
// 		// 	let result;
// 		// 	let unit;
// 		//
// 		// 	if (option === "pounds"){
// 		// 		result = weight * 2.2;
// 		// 		unit = " kg";
// 		// 	} else if (option === "kg"){
// 		// 		result = weight / 2.2;
// 		// 		unit = " lbs";
// 		// 	}
// 		// 	console.log(weight);
// 		// 	results.style.display = "block";
// 		// 	results.innerHTML = result.toFixed(2) + unit;
// 		// 	// results.innerHTML = result;
// 		// });
// 	};

// 	const siblingsStatus = () => {
// 		const siblingYes = document.getElementById("siblings-yes");
// 		const siblingNo = document.getElementById("siblings-no");
// 		const siblingStatus = document.querySelector(".sibling-status");

// 		if (siblingYes) {
// 			siblingYes.addEventListener("click", () => {
// 				siblingStatus.classList.add("active");
// 			});

// 			siblingNo.addEventListener("click", () => {
// 				siblingStatus.classList.remove("active");
// 			});
// 		}
// 	};

// 	const choosePlan = () => {
// 		const chooseBtns = document.querySelectorAll(".js-choose-btn");
// 		const plansSilver = document.querySelectorAll(".silver");
// 		const plansGold = document.querySelectorAll(".gold");
// 		const plansPremium = document.querySelectorAll(".premium");
// 		const plansVip = document.querySelectorAll(".vip");
// 		const plansVipPlus = document.querySelectorAll(".vip-plus");
// 		const plansCountry = document.querySelectorAll(".country-of-man");

// 		for (let btn of chooseBtns) {
// 			if (btn.classList.contains("silver-btn")) {
// 				btn.addEventListener("mouseenter", () => {
// 					for (let plan of plansSilver) {
// 						plan.classList.add("hover");
// 					}
// 				});
// 				btn.addEventListener("mouseleave", () => {
// 					for (let plan of plansSilver) {
// 						plan.classList.remove("hover");
// 					}
// 				});
// 				btn.addEventListener("click", () => {
// 					btn.classList.toggle("active");
// 					for (let plan of plansSilver) {
// 						plan.classList.toggle("active");
// 					}
// 				});
// 			} else if (btn.classList.contains("gold-btn")) {
// 				btn.addEventListener("mouseenter", () => {
// 					for (let plan of plansGold) {
// 						plan.classList.add("hover");
// 					}
// 				});
// 				btn.addEventListener("mouseleave", () => {
// 					for (let plan of plansGold) {
// 						plan.classList.remove("hover");
// 					}
// 				});
// 				btn.addEventListener("click", () => {
// 					btn.classList.toggle("active");
// 					for (let plan of plansGold) {
// 						plan.classList.toggle("active");
// 					}
// 				});
// 			} else if (btn.classList.contains("premium-btn")) {
// 				btn.addEventListener("mouseenter", () => {
// 					for (let plan of plansPremium) {
// 						plan.classList.add("hover");
// 					}
// 				});
// 				btn.addEventListener("mouseleave", () => {
// 					for (let plan of plansPremium) {
// 						plan.classList.remove("hover");
// 					}
// 				});
// 				btn.addEventListener("click", () => {
// 					btn.classList.toggle("active");
// 					for (let plan of plansPremium) {
// 						plan.classList.toggle("active");
// 					}
// 				});
// 			} else if (btn.classList.contains("vip-btn")) {
// 				btn.addEventListener("mouseenter", () => {
// 					for (let plan of plansVip) {
// 						plan.classList.add("hover");
// 					}
// 				});
// 				btn.addEventListener("mouseleave", () => {
// 					for (let plan of plansVip) {
// 						plan.classList.remove("hover");
// 					}
// 				});
// 				btn.addEventListener("click", () => {
// 					btn.classList.toggle("active");
// 					for (let plan of plansVip) {
// 						plan.classList.toggle("active");
// 					}
// 				});
// 			} else if (btn.classList.contains("vip-plus-btn")) {
// 				btn.addEventListener("mouseenter", () => {
// 					for (let plan of plansVipPlus) {
// 						plan.classList.add("hover");
// 					}
// 				});
// 				btn.addEventListener("mouseleave", () => {
// 					for (let plan of plansVipPlus) {
// 						plan.classList.remove("hover");
// 					}
// 				});
// 				btn.addEventListener("click", () => {
// 					btn.classList.toggle("active");
// 					for (let plan of plansVipPlus) {
// 						plan.classList.toggle("active");
// 					}
// 				});
// 			} else if (btn.classList.contains("country-btn")) {
// 				btn.addEventListener("mouseenter", () => {
// 					for (let plan of plansCountry) {
// 						plan.classList.add("hover");
// 					}
// 				});
// 				btn.addEventListener("mouseleave", () => {
// 					for (let plan of plansCountry) {
// 						plan.classList.remove("hover");
// 					}
// 				});
// 				btn.addEventListener("click", () => {
// 					btn.classList.toggle("active");
// 					for (let plan of plansCountry) {
// 						plan.classList.toggle("active");
// 					}
// 				});
// 			}
// 		}
// 	};

// 	const videoText = () => {};

// 	videoText();
// 	siblingsStatus();
// 	readMoreOpen();
// 	currentTime();
// 	setInterval(currentTime, 1000);
// 	loginOpener();
// 	datePicker();
// 	mask();
// 	customSelect();
// 	// addChildren();
// 	selectGifts();
// 	quantity();
// 	ladiesFilter();
// 	openSelect();
// 	steps();
// 	convertWeight();
// 	choosePlan();

// 	AOS.init({
// 		duration: 1000,
// 	});

// 	document.addEventListener("aos:in", ({ detail }) => {
// 		console.log("animated in", detail);
// 	});

// 	document.addEventListener("aos:out", ({ detail }) => {
// 		console.log("animated out", detail);
// 	});

// 	function parallaxScroll() {
// 		if ($(window).width() >= 1024) {
// 			const parallaxElements = document.querySelectorAll(".parallax");
// 			parallaxElements.forEach((element) => {
// 				const elementPosition = element.getBoundingClientRect();
// 				if (
// 					elementPosition.top < window.innerHeight &&
// 					elementPosition.bottom >= 0
// 				) {
// 					const speed = element.getAttribute("data-speed");
// 					const yPos =
// 						(elementPosition.top - window.innerHeight) / speed + "px";
// 					element.style.backgroundPosition = `center ${yPos}`;
// 				}
// 			});
// 		}
// 	}

// 	window.addEventListener("scroll", parallaxScroll);
// });

const dropdowns = [];

function closeAllDropdowns(except) {
	dropdowns.forEach(function (dd) {
		if (dd.nav === except) return;
		if (dd.nav.classList.contains("active")) {
			dd.nav.classList.remove("active");
			slideUp(dd.selection, 200);
		}
	});
}

function initLanguageBar() {
	const BREAKPOINT = 1320;
	const nav = document.querySelector(".language-title");
	const selection = document.querySelector(".language-list");
	const items = selection.querySelectorAll("li");

	dropdowns.push({ nav, selection });

	nav.addEventListener("click", function (event) {
		event.preventDefault();

		if (window.innerWidth >= BREAKPOINT) {
			closeAllDropdowns(nav);

			if (nav.classList.contains("active")) {
				nav.classList.remove("active");
				slideUp(selection, 200);
			} else {
				nav.classList.add("active");
				slideDown(selection, 200);
			}
		}
	});

	items.forEach(function (item) {
		item.addEventListener("click", function () {
			items.forEach((i) => i.classList.remove("active"));
			this.classList.add("active");

			const langText = this.querySelector("a").textContent.trim();
			const flagClone = this.querySelector(".flag-icon").cloneNode(true);

			nav.querySelector(".flag-icon").replaceWith(flagClone);
			nav.childNodes[nav.childNodes.length - 1].textContent = " " + langText;

			if (window.innerWidth >= BREAKPOINT) {
				nav.click();
			}
		});
	});
}

function initCityBar() {
	const nav = document.querySelector(".city-title");
	const selection = document.querySelector(".city-list");
	const items = selection.querySelectorAll("li");
	const header = document.querySelector(".header");

	dropdowns.push({ nav, selection });

	nav.addEventListener("click", function (event) {
		event.preventDefault();
		closeAllDropdowns(nav);

		// Закрываем мобильное меню если оно открыто
		if (header && header.classList.contains("active")) {
			header.classList.remove("active");
		}

		if (nav.classList.contains("active")) {
			nav.classList.remove("active");
			slideUp(selection, 200);
		} else {
			nav.classList.add("active");
			slideDown(selection, 200);
		}
	});

	items.forEach(function (item) {
		item.addEventListener("click", function () {
			items.forEach((i) => i.classList.remove("active"));
			this.classList.add("active");
			nav.textContent = this.textContent.trim();
			nav.click();
		});
	});
}

function contactBar() {
	const nav = document.querySelector(".contacts-title");
	const selection = document.querySelector(".contacts-list");

	dropdowns.push({ nav, selection });

	nav.addEventListener("click", function (event) {
		event.preventDefault();
		closeAllDropdowns(nav);

		if (nav.classList.contains("active")) {
			nav.classList.remove("active");
			slideUp(selection, 200);
		} else {
			nav.classList.add("active");
			slideDownFlex(selection, 200);
		}
	});
}

document.addEventListener("click", function (event) {
	const isInsideAny = dropdowns.some(function (dd) {
		return dd.nav.closest(".language-bar, .city-bar, .contacts-bar")
			? event.target.closest(".language-bar, .contacts-bar, .city-bar")
			: false;
	});

	if (!isInsideAny) {
		closeAllDropdowns(null);
	}
});

function slideDownFlex(element, duration) {
	element.style.display = "flex";
	const height = element.scrollHeight;
	element.style.overflow = "hidden";
	element.style.height = "0";
	element.style.transition = `height ${duration}ms ease`;

	requestAnimationFrame(() => {
		element.style.height = height + "px";
	});

	setTimeout(() => {
		element.style.height = "";
		element.style.overflow = "";
		element.style.transition = "";
	}, duration);
}

function slideDown(element, duration) {
	element.style.display = "block";
	const height = element.scrollHeight;
	element.style.overflow = "hidden";
	element.style.height = "0";
	element.style.transition = `height ${duration}ms ease`;

	requestAnimationFrame(() => {
		element.style.height = height + "px";
	});

	setTimeout(() => {
		element.style.height = "";
		element.style.overflow = "";
		element.style.transition = "";
	}, duration);
}

function slideUp(element, duration) {
	element.style.height = element.scrollHeight + "px";
	element.style.overflow = "hidden";
	element.style.transition = `height ${duration}ms ease`;

	requestAnimationFrame(() => {
		element.style.height = "0";
	});

	setTimeout(() => {
		element.style.display = "none";
		element.style.height = "";
		element.style.overflow = "";
		element.style.transition = "";
	}, duration);
}

function initMobileSubMenu() {
	const BREAKPOINT = 1320;
	const items = document.querySelectorAll(".menu-item-has-children");

	items.forEach(function (item) {
		const link = item.querySelector(":scope > a");
		const subMenu = item.querySelector(":scope > .sub-menu");

		if (!link || !subMenu) return;

		link.addEventListener("click", function (event) {
			if (window.innerWidth >= BREAKPOINT) return;

			event.preventDefault();

			if (item.classList.contains("active")) {
				item.classList.remove("active");
				slideUp(subMenu, 300);
			} else {
				// Закрываем другие открытые субменю того же уровня
				const siblings = item.parentElement.querySelectorAll(
					":scope > .menu-item-has-children.active",
				);
				siblings.forEach(function (sibling) {
					sibling.classList.remove("active");
					slideUp(sibling.querySelector(":scope > .sub-menu"), 300);
				});

				item.classList.add("active");
				slideDown(subMenu, 300);
			}
		});
	});
}

function openMobileNav() {
	let navOpener = document.querySelector(".js-nav-opener");
	let header = document.querySelector(".header");

	navOpener.addEventListener("click", () => {
		header.classList.toggle("active");
	});
}

// contact map block
function contactMapTabsAccordeon() {
	// Ищем target по ID напрямую → идём вверх до .map-panel
	// Работает независимо от того, где в DOM находится .map-panel
	function showMap(mapId) {
		const target = document.getElementById("fake-" + mapId);
		if (!target) return;
		const mapPanel = target.closest(".map-panel");
		if (!mapPanel) return;
		mapPanel
			.querySelectorAll(".map-fake")
			.forEach((f) => f.classList.remove("visible"));
		target.classList.add("visible");
	}

	// ACCORDION
	document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
		trigger.addEventListener("click", () => {
			const item = trigger.closest(".accordion-item");
			const panel = trigger.closest(".tab-panel");
			const body = item.querySelector(".accordion-body");
			const isOpen = trigger.classList.contains("active");

			if (isOpen) {
				// Закрыть активный — карту не трогаем
				trigger.classList.remove("active");
				body.classList.remove("open");
				return;
			}

			// Закрыть все в панели
			panel
				.querySelectorAll(".accordion-trigger")
				.forEach((t) => t.classList.remove("active"));
			panel
				.querySelectorAll(".accordion-body")
				.forEach((b) => b.classList.remove("open"));

			// Открыть кликнутый
			trigger.classList.add("active");
			body.classList.add("open");

			showMap(trigger.dataset.map);
		});
	});

	// TABS
	document.querySelectorAll(".tab-btn").forEach((btn) => {
		btn.addEventListener("click", () => {
			const target = btn.dataset.tab;

			document
				.querySelectorAll(".tab-btn")
				.forEach((b) => b.classList.remove("active"));
			document
				.querySelectorAll(".tab-panel")
				.forEach((p) => p.classList.remove("active"));

			btn.classList.add("active");
			const panel = document.getElementById("panel-" + target);
			panel.classList.add("active");

			// Есть активный триггер — восстановить его карту
			// Нет — открыть и показать первый
			const activeTrigger = panel.querySelector(".accordion-trigger.active");
			if (activeTrigger) {
				showMap(activeTrigger.dataset.map);
			} else {
				const firstTrigger = panel.querySelector(".accordion-trigger");
				if (firstTrigger) firstTrigger.click();
			}
		});
	});
}

function svgTabs() {
	const tabs = document.querySelectorAll(".tab-item");
	const dotsContainer = document.getElementById("content-dots");
	const inner = document.getElementById("content-inner");

	// Изначально активный индекс (Безпека - 6-й элемент, индекс 5)
	let current = 5;

	// Создаем точки один раз
	tabs.forEach((_, i) => {
		const dot = document.createElement("div");
		dot.className = "dot" + (i === current ? " active" : "");
		dot.addEventListener("click", () => activate(i));
		dotsContainer.appendChild(dot);
	});

	function activate(id) {
		if (id === current || !inner) return;

		// 1. Запускаем анимацию исчезновения
		inner.classList.add("out");

		// 2. Красим круги в SVG (если они есть)
		document.querySelectorAll(".hit").forEach((g) => {
			const idx = parseInt(g.dataset.idx);
			const bg = g.querySelector("circle.bg");
			if (bg) {
				bg.style.fill = idx === id ? "#ECF1F8" : "white";
			}
		});

		// 3. Обновляем активную точку
		document.querySelectorAll(".dot").forEach((d, i) => {
			d.classList.toggle("active", i === id);
		});

		// 4. Ждем завершения анимации "выхода"
		setTimeout(() => {
			// Убираем active у старого, даем новому
			tabs[current].classList.remove("active");
			tabs[id].classList.add("active");

			// Запускаем анимацию "входа"
			inner.classList.remove("out");

			current = id;
		}, 200); // Это время должно совпадать с transition в CSS
	}

	// Привязка к кликам по самой SVG схеме
	document.querySelectorAll(".hit").forEach((g) => {
		g.addEventListener("click", () => {
			const idx = parseInt(g.dataset.idx);
			if (!isNaN(idx)) activate(idx);
		});
	});
}


function smoothScrollTo(targetSelector, duration = 3000) {
    const trigger = document.querySelector('.muve-top');
    const target = document.querySelector(targetSelector);

    if (!trigger || !target) return;

    trigger.addEventListener('click', (e) => {
        e.preventDefault();

        const startPosition = window.pageYOffset;
        const targetPosition = target.getBoundingClientRect().top + startPosition;
        const distance = targetPosition - startPosition;
        let startTime = null;

        // Функция плавности (аналог easeOutExpo)
        function easeOutExpo(t, b, c, d) {
            return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        }

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeOutExpo(timeElapsed, startPosition, distance, duration);
            
            window.scrollTo(0, run);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    });
}

function initAccordeonMenu() {
    const menuItems = document.querySelectorAll('.has-sub-menu');
    const animationDuration = 300; // Длительность анимации в мс

    menuItems.forEach(item => {
        const trigger = item.querySelector('span') || item.querySelector('a');
        const subMenu = item.querySelector('.sidebar-sub-menu');

        if (trigger && subMenu) {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();

                const isActive = item.classList.contains('active');

                // 1. Закрываем все другие открытые меню (Аккордеон)
                menuItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        const otherSubMenu = otherItem.querySelector('.sidebar-sub-menu');
                        otherItem.classList.remove('active');
                        if (otherSubMenu) slideUp(otherSubMenu, animationDuration);
                    }
                });

                // 2. Переключаем текущее меню
                if (isActive) {
                    // Если нажали на уже открытое — закрываем
                    item.classList.remove('active');
                    slideUp(subMenu, animationDuration);
                } else {
                    // Если нажали на закрытое — открываем
                    item.classList.add('active');
                    slideDown(subMenu, animationDuration);
                }
            });
        }
    });
}

function initCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;

    // Показываем только если еще не отвечали
    if (!localStorage.getItem('cookie_choice')) {
        banner.classList.add('is-visible');
    }

    banner.addEventListener('click', (e) => {
        if (e.target.id === 'cookie-accept-all' || e.target.id === 'cookie-reject-all') {
            const choice = e.target.id === 'cookie-accept-all' ? 'accepted' : 'rejected';
            localStorage.setItem('cookie_choice', choice);
            banner.classList.remove('is-visible');
            
            // Здесь можно вызвать инициализацию Google Analytics, если приняли
            if (choice === 'accepted') {
                console.log('Запуск метрик...');
            }
        }
    });
}




function init() {
	if (document.querySelector(".language-title")?._initialized) return;
	document.querySelector(".language-title")._initialized = true;

	dropdowns.length = 0; // Очищаем на случай повторного запуска
	initLanguageBar();
	initCityBar();
	contactBar();
	initMobileSubMenu();
	openMobileNav();
	contactMapTabsAccordeon();
	svgTabs();
	smoothScrollTo('.thetop', 3000);
	initAccordeonMenu();

	initCookieBanner();

	// hero slider
	new Swiper(".hero-slider", {
		loop: true,
		speed: 600,
		// autoplay: {
		// 	delay: 5000,
		// 	disableOnInteraction: false,
		// },
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		effect: "slide",
	});

	// services slider

	new Swiper(".services-slider", {
		slidesPerView: 1.2,
		spaceBetween: 10,
		loop: false,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 2.5,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
	});

	// review slider

	new Swiper(".reviews-slider", {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: false,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
		},
	});

	// news slider
	new Swiper(".news-slider", {
		slidesPerView: 1,
		spaceBetween: 20,
		grabCursor: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			// Планшеты
			768: {
				slidesPerView: 2,
				spaceBetween: 24,
			},
			// Десктоп
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
	});
}

// Set initial open item height
document.querySelectorAll(".faq-item.is-open .faq-body").forEach((body) => {
	body.style.maxHeight = body.scrollHeight + "px";
});

document.querySelectorAll(".faq-trigger").forEach((trigger) => {
	trigger.addEventListener("click", () => {
		const item = trigger.closest(".faq-item");
		const body = item.querySelector(".faq-body");
		const isOpen = item.classList.contains("is-open");

		// Close all
		document.querySelectorAll(".faq-item.is-open").forEach((openItem) => {
			openItem.classList.remove("is-open");
			openItem.querySelector(".faq-body").style.maxHeight = "0";
			openItem
				.querySelector(".faq-trigger")
				.setAttribute("aria-expanded", "false");
		});

		// Open clicked (if it was closed)
		if (!isOpen) {
			item.classList.add("is-open");
			body.style.maxHeight = body.scrollHeight + "px";
			trigger.setAttribute("aria-expanded", "true");
		}
	});
});


Fancybox.bind('[data-fancybox]', {
	mainClass: "custom-gallery",
    // Отключаем стандартную панель инструментов (кнопки сверху)
    Toolbar: false,
    
    // Отключаем инфо-бар (счетчик картинок 1/5)
    Infobar: false,
    
    // Отключаем клик по картинке для зума, если нужно просто модальное окно
    Image: {
        click: false,
        wheel: false,
    },

    // Настройки анимации (уже обсуждали ранее)
    showClass: "f-fadeIn",
    hideClass: "f-fadeOut",
});


// Общий конфиг — используется и для bind, и для show
const fancyboxConfig = {
    autoFocus: false,
    trapFocus: true,
    dragToClose: false,
    showClass: "f-fadeIn",
    hideClass: "f-fadeOut",
	groupAll: false, 
    groupAttr: false,
	
    on: {
        reveal: (fancybox, slide) => {
            const modalRoot = slide.el;

            // Инициализация конвертера
            if (modalRoot.querySelector('#from-cur')) {
                initStaticCustomSelects(modalRoot);
                window.currencyWidget = new CurrencyWidget({ root: modalRoot });
            }

            // Кнопки открытия вложенных модалок — биндим только один раз
            modalRoot.querySelectorAll('[data-fancybox][data-src]:not([data-fb-bound])').forEach(btn => {
                btn.setAttribute('data-fb-bound', '1');
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    Fancybox.show([{ 
                        src: btn.getAttribute('data-src'), 
                        type: 'inline' 
                    }], fancyboxConfig); // ← передаём тот же конфиг
                });
            });
        },
    },
};

Fancybox.bind('[data-fancybox="modal"]', fancyboxConfig);


if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", init);
} else {
	init();
}

window.addEventListener('scroll', function() {
    const scrollTopBtn = document.querySelector('.scrolltop');
    
    if (scrollTopBtn) {
        if (window.scrollY > 50) {
            scrollTopBtn.classList.add('is-visible');
        } else {
            scrollTopBtn.classList.remove('is-visible');
        }
    }
});

/* validation */
document.addEventListener('submit', function (e) {
    const form = e.target.closest('.modal-form');
    if (!form) return;

    e.preventDefault();
    e.stopImmediatePropagation();

    let isValid = true;
    const inputs = form.querySelectorAll('input[data-error], textarea[data-error]');

    inputs.forEach(input => {
        const parent = input.closest('.input-cell') || input.closest('.input-group');
        const errorDiv = parent.querySelector('.error-message');
        
        parent.classList.remove('has-error');
        if (errorDiv) errorDiv.textContent = '';

        if (!input.value.trim()) {
            isValid = false;
            parent.classList.add('has-error');
            if (errorDiv) errorDiv.textContent = input.getAttribute('data-error');
        } else if (input.type === 'email') {
            const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailReg.test(input.value.toLowerCase())) {
                isValid = false;
                parent.classList.add('has-error');
                if (errorDiv) errorDiv.textContent = input.getAttribute('data-error-email');
            }
        }
    });

    if (isValid) {
        // --- ВОТ ТУТ ГЛАВНОЕ ИЗМЕНЕНИЕ ---
        
        // Получаем ID попапа успеха из атрибута формы. 
        // Если атрибут не задан, используем '#success-modal' по умолчанию
        const successModalId = form.getAttribute('data-success') || '#success-modal';

        Fancybox.close();
        form.reset();

        setTimeout(() => {
            Fancybox.show([{ 
                src: successModalId, // Используем динамический ID
                type: "inline" 
            }], {
                autoFocus: false,
                dragToClose: false,
                // Добавляем класс для стилизации, если нужно
                mainClass: "fancybox-success-window"
            });
        }, 100);
    }
}, true);

document.addEventListener('input', function (e) {
    if (e.target.classList.contains('phone-input')) {
        let input = e.target;
        let value = input.value;

        // 1. Разрешаем '+' только в самом начале
        // 2. Убираем всё, кроме цифр
        // Результат: если плюс есть в начале, он остается, все остальное чистится от не-цифр
        if (value.startsWith('+')) {
            input.value = '+' + value.slice(1).replace(/\D/g, '');
        } else {
            input.value = value.replace(/\D/g, '');
        }
    }
});


function initCityPopup() {
    // === СТРОКА ДЛЯ ИЗМЕНЕНИЯ ВРЕМЕНИ (в миллисекундах) ===
    const popupDelay = 3000; 

    const cityModal = document.getElementById('city-prompt');

    if (cityModal) {
        setTimeout(() => {
            // Если вдруг какой-то Fancybox уже открыт, закрываем его перед показом нашего важного окна
            if (Fancybox.getInstance()) {
                Fancybox.close();
            }

            Fancybox.show([{ 
                src: "#city-prompt", 
                type: "inline" 
            }], {
                autoFocus: false,
                dragToClose: false,
                showClass: "f-fadeIn", // Используем стандартную быструю анимацию
                hideClass: "f-fadeOut",
                // Чтобы попап не "ломался" при закрытии и открытии снова
                placeHolder: false 
            });
        }, popupDelay);
    }
}

// Запуск (безопасный метод для любых браузеров)
if (document.readyState === 'complete') {
    initCityPopup();
} else {
    window.addEventListener('load', initCityPopup);
}